import Image from 'next/image';
import { ImageComparison } from '@/components/ImageComparison';
import { comparisons } from '@/lib/cases';
import { assetPath } from '@/lib/assetPath';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-black">
      <header className="grid border-b border-black/15 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="border-b border-black/15 p-5 lg:border-b-0 lg:border-r lg:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-black/45">Éclore Aesthetics</p>
          <h1 className="mt-8 max-w-5xl text-6xl font-normal leading-[0.82] tracking-[-0.085em] md:text-8xl lg:text-9xl">
            Premises transformation study.
          </h1>
        </div>
        <div className="grid content-between gap-10 p-5 lg:p-8">
          <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.2em] text-black/50 md:grid-cols-4">
            <span>12825 SW 1st St</span>
            <span>1,800 SF</span>
            <span>9 comparisons</span>
            <span>Swiss grid / B&W</span>
          </div>
          <p className="max-w-3xl text-2xl leading-tight tracking-[-0.055em] text-black/70 md:text-4xl">
            A black-and-white before/after presentation for partner review: original walkthrough photos compared with Éclore concept renders.
          </p>
        </div>
      </header>

      <section className="grid border-b border-black/15 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="border-b border-black/15 p-5 lg:border-b-0 lg:border-r lg:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-black/45">Floor plan context</p>
          <h2 className="mt-8 text-4xl leading-none tracking-[-0.07em] md:text-6xl">Room sequence and intended use.</h2>
        </div>
        <div className="p-5 lg:p-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-black/20 bg-white p-2">
            <Image src={assetPath("images/floor-plan.jpg")} alt="Éclore floor plan" fill sizes="100vw" className="object-contain p-4" priority />
          </div>
          <div className="mt-4 grid gap-px overflow-hidden border border-black/15 bg-white/15 text-xs uppercase tracking-[0.18em] text-white/70 md:grid-cols-3">
            {comparisons.map((item) => (
              <a key={item.slug} href={`#${item.slug}`} className="bg-[#f7f7f2] p-4 transition-colors hover:bg-black hover:text-white">
                <span className="mr-3 text-black/35">{item.number}</span>{item.eyebrow}
              </a>
            ))}
          </div>
        </div>
      </section>

      {comparisons.map((item) => (
        <div id={item.slug} key={item.slug}>
          <ImageComparison item={item} />
        </div>
      ))}

      <footer className="grid border-t border-black/15 p-5 text-xs uppercase tracking-[0.22em] text-black/45 lg:grid-cols-[0.72fr_1.28fr] lg:p-8">
        <span>Éclore Aesthetics</span>
        <span className="mt-4 lg:mt-0">Concept renders are directional presentation assets, not construction documents.</span>
      </footer>
    </main>
  );
}
