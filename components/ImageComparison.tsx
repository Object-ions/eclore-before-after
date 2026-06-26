'use client';

import Image from 'next/image';
import { GripVertical } from 'lucide-react';
import { useCallback, useState } from 'react';
import type { ComparisonCase } from '@/lib/cases';

interface ImageComparisonProps {
  readonly item: ComparisonCase;
}

export function ImageComparison({ item }: ImageComparisonProps) {
  const [inset, setInset] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateInset = useCallback((clientX: number, rect: DOMRect) => {
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setInset((x / rect.width) * 100);
  }, []);

  const onMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if ('touches' in event) {
      if (event.touches[0]) updateInset(event.touches[0].clientX, rect);
    } else {
      updateInset(event.clientX, rect);
    }
  };

  const onStart = (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    setDragging(true);
    const container = event.currentTarget.closest('[data-comparison]');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    if ('touches' in event) {
      if (event.touches[0]) updateInset(event.touches[0].clientX, rect);
    } else {
      updateInset(event.clientX, rect);
    }
  };

  return (
    <section className="grid min-h-[72vh] border-t border-white/15 lg:grid-cols-[0.72fr_1.28fr]">
      <div className="flex flex-col justify-between border-b border-white/15 p-5 lg:border-b-0 lg:border-r lg:p-8">
        <div className="grid grid-cols-4 gap-4 text-[10px] uppercase tracking-[0.24em] text-white/45">
          <span>{item.number}</span>
          <span className="col-span-3">{item.eyebrow}</span>
        </div>
        <div className="pt-20 lg:pt-0">
          <div className="mb-6 inline-flex border border-white bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-black">
            Before / After
          </div>
          <h2 className="max-w-xl text-5xl font-normal leading-[0.9] tracking-[-0.075em] md:text-7xl">
            {item.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed tracking-[-0.03em] text-white/55 md:text-lg">
            {item.description}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 border-t border-white/15 pt-4 text-xs uppercase tracking-[0.18em] text-white/50">
          <span>Original photo</span>
          <span className="text-right">Éclore concept</span>
        </div>
      </div>

      <div className="p-3 md:p-6 lg:p-8">
        <div
          data-comparison
          className="relative h-[64vh] min-h-[460px] w-full cursor-ew-resize overflow-hidden border border-white/20 bg-white select-none"
          onMouseMove={onMove}
          onMouseLeave={() => setDragging(false)}
          onMouseUp={() => setDragging(false)}
          onTouchMove={onMove}
          onTouchEnd={() => setDragging(false)}
        >
          <Image
            src={item.after}
            alt={`${item.eyebrow} rendered concept`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="object-cover grayscale"
            draggable={false}
          />
          <Image
            src={item.before}
            alt={`${item.eyebrow} original site photo`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="z-10 object-cover grayscale"
            style={{ clipPath: `inset(0 ${100 - inset}% 0 0)` }}
            draggable={false}
          />
          <div className="absolute inset-y-0 z-20 w-px bg-white" style={{ left: `${inset}%` }} />
          <button
            aria-label="Drag comparison handle"
            className="absolute top-1/2 z-30 flex h-16 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center border border-white bg-black text-white shadow-[0_0_0_3px_#000] transition-transform hover:scale-105"
            style={{ left: `${inset}%` }}
            onMouseDown={onStart}
            onMouseUp={() => setDragging(false)}
            onTouchStart={onStart}
            onTouchEnd={() => setDragging(false)}
          >
            <GripVertical className="h-6 w-6" />
          </button>
          <div className="absolute left-4 top-4 z-30 border border-white/70 bg-black px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
            Before
          </div>
          <div className="absolute right-4 top-4 z-30 border border-black/70 bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-black">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
