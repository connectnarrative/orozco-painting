import type { Metadata } from "next";
import "./globals.css";
import {Header,Footer,PaintSystem} from '@/components/site-shell';
import {business} from '@/lib/business';

export const metadata: Metadata = {
  metadataBase:new URL(business.origin),
  title:{default:'Orozco Painting | Residential & Commercial Painters Toronto',template:'%s | Orozco Painting'},
  description:'Toronto painting company with 10+ years of experience in residential painting, commercial painting, cabinet spraying and deck staining. Insured. Serving Toronto and the GTA.',
  alternates:{canonical:business.origin},
  openGraph:{type:'website',siteName:'Orozco Painting',locale:'en_CA',title:'Orozco Painting. Paint done properly.',description:'Residential, commercial and cabinet spraying. Toronto + GTA.',images:[{url:'/images/orozco-front-entry-after.webp',width:696,height:980,alt:'Orozco Painting front entry repaint'}]},
  twitter:{card:'summary_large_image',title:'Orozco Painting',description:'Paint done properly. Toronto + GTA.',images:['/images/orozco-front-entry-after.webp']},
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple:'/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><head><link rel="preload" href="/fonts/display.woff" as="font" type="font/woff" crossOrigin="anonymous"/><link rel="preload" href="/fonts/sans.woff" as="font" type="font/woff" crossOrigin="anonymous"/></head>
      <body><Header/>{children}<Footer/><PaintSystem/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'HousePainter',name:business.name,url:business.origin,logo:business.origin+'/images/orozco-logo.png',image:business.origin+'/images/orozco-front-entry-after.webp',areaServed:business.areaServed,sameAs:[business.instagram],...(business.phone?{telephone:business.phone}:{}),...(business.email?{email:business.email}:{})}).replace(/</g,'\\u003c')}}/></body>
    </html>
  );
}
