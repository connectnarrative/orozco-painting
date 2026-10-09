import type {MetadataRoute} from 'next';
import {business} from '@/lib/business';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/',disallow:['/api/']},sitemap:[business.origin+'/sitemap.xml',business.origin+'/image-sitemap.xml']};}
