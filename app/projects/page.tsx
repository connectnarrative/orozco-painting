import Link from 'next/link';
import {Comparison} from '@/components/comparison';
import {pageMeta} from '@/lib/metadata';
export const metadata=pageMeta('Projects','Real Orozco Painting work. Explore a front entry exterior repaint with before and after photography.','/projects');
export default function Projects(){return <main id="main"><section className="page-intro"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / Work</nav><h1>PROJECTS.</h1><p>Real surfaces. Real work.</p></section><section className="project-page"><Comparison/><div className="project-caption"><h2>Front entry</h2><p>Exterior repaint</p><Link className="text-link" href="/projects/front-entry">View project</Link></div><div className="project-link"><a className="text-link" href="https://www.instagram.com/orozco.painting/" target="_blank" rel="noreferrer">More work on Instagram</a></div></section></main>}
