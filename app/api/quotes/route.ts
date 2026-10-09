import { MAX_FILES, MAX_FILE_BYTES, quoteSchema } from "@/lib/quote";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json(
      { error: "Quote delivery is not configured yet. Please contact Orozco on Instagram." },
      { status: 503 },
    );
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.startsWith("multipart/form-data")) {
    return Response.json({ error: "Send the request through the quote form." }, { status: 415 });
  }
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Please submit from this website." }, { status: 403 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "We could not read the request. Try again." }, { status: 400 });
  }
  const parsed = quoteSchema.safeParse(
    Object.fromEntries([...form.entries()].filter(([key]) => key !== "photos")),
  );
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message || "Check the project details." },
      { status: 400 },
    );
  }

  const files = form
    .getAll("photos")
    .filter((value): value is File => typeof value !== "string" && value.size > 0);
  if (
    files.length > MAX_FILES ||
    files.some(
      (file) =>
        file.size > MAX_FILE_BYTES ||
        !["image/jpeg", "image/png", "image/webp"].includes(file.type),
    )
  ) {
    return Response.json(
      { error: "Use up to five JPG, PNG or WebP photos, 4 MB each." },
      { status: 400 },
    );
  }
  for (const file of files) {
    const bytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());
    const valid =
      (file.type === "image/jpeg" && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) ||
      (file.type === "image/png" && bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71) ||
      (file.type === "image/webp" &&
        String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" &&
        String.fromCharCode(...bytes.slice(8, 12)) === "WEBP");
    if (!valid) {
      return Response.json(
        { error: "One photo could not be read. Use JPG, PNG or WebP." },
        { status: 400 },
      );
    }
  }

  const headers = new Headers({ "x-orozco-quote-id": parsed.data.id });
  if (process.env.QUOTE_WEBHOOK_SECRET) {
    headers.set("authorization", `Bearer ${process.env.QUOTE_WEBHOOK_SECRET}`);
  }
  try {
    const response = await fetch(webhookUrl, { method: "POST", headers, body: form });
    if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
    return Response.json({ id: parsed.data.id, status: "received" }, { status: 201 });
  } catch (error) {
    console.error("Quote delivery failed", { id: parsed.data.id, error: String(error) });
    return Response.json(
      { error: "The request could not be sent. Your details are still here. Please try again." },
      { status: 503 },
    );
  }
}
