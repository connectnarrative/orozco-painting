import Link from 'next/link';
import {Comparison} from '@/components/comparison';
import {EventView} from '@/components/site-shell';
import {pageMeta} from '@/lib/metadata';
export const metadata=pageMeta('Front entry repaint','See the front entry before and after Orozco Painting’s exterior repaint. Real project photography.','/projects/front-entry');
export default function Project(){return <main id="main"><EventView name="project_view" parameters={{project:'front-entry'}}/><section className="page-intro"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/projects">Work</Link> / Front entry</nav><h1>THE SAME ENTRY.<br/>A NEW FINISH.</h1><p>Exterior repaint. Door, sidelights and decorative trim.</p></section><section className="project-page"><Comparison/><div className="project-caption"><p>The existing entry, repainted in white.<br/>Compare the original surface with the finished work.</p><Link className="text-link" href="/exterior-painting-toronto">Exterior painting</Link></div><Link className="button" href="/quote?service=Exterior">Get a quote</Link></section></main>}
