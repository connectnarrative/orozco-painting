import type {Metadata} from 'next';
import {business} from './business';
export function pageMeta(title:string,description:string,path:string):Metadata{return {title,description,alternates:{canonical:business.origin+path},openGraph:{title:title+' | Orozco Painting',description,url:business.origin+path},twitter:{title:title+' | Orozco Painting',description}};}
