import {z} from 'zod';
export const quoteServices=['Interior','Exterior','Cabinets','Commercial','Deck / Exterior Wood','Other'] as const;
export const quoteSchema=z.object({id:z.string().uuid(),service:z.enum(quoteServices),details:z.string().trim().min(1,'Tell us a little about the project.').max(2000),city:z.string().trim().min(2).max(100),postalCode:z.string().trim().regex(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i,'Enter a valid Canadian postal code.'),name:z.string().trim().min(2).max(100),phone:z.string().trim().min(10).max(30).refine(x=>x.replace(/\D/g,'').length>=10,'Enter a valid phone number.'),email:z.string().trim().email().max(200),preferred:z.enum(['Call','Text','Email']),message:z.string().trim().max(3000),website:z.string().max(0)});
export type QuoteInput=z.infer<typeof quoteSchema>;
export const MAX_FILES=5,MAX_FILE_BYTES=4*1024*1024;
