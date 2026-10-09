import {QuoteForm} from '@/components/quote-form';
import {pageMeta} from '@/lib/metadata';
export const metadata=pageMeta('Get a quote','Request a painting quote from Orozco Painting. Share your surfaces, Toronto or GTA location and project photos.','/quote');
export default async function Quote({searchParams}:{searchParams:Promise<{service?:string}>}){const {service}=await searchParams;return <main id="main" className="quote-layout"><div className="quote-heading"><h1>LET’S GET<br/>PAINTING.</h1><p>A few details. A few photos.<br/>A quote based on your actual project.</p></div><QuoteForm initialService={service}/></main>}
