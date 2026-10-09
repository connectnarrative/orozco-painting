import type {MetadataRoute} from 'next';
import {business,services} from '@/lib/business';
export default function sitemap():MetadataRoute.Sitemap{return ['/','/projects','/projects/front-entry','/about','/quote','/contact','/privacy',...services.map(s=>'/'+s.slug)].map(path=>({url:business.origin+(path==='/'?'':path),changeFrequency:'monthly',priority:path==='/'?1:path==='/quote'?.9:.8}));}
