import React, { useState } from 'react';
import { Destination, DestinationCategory } from '../types';
import { DESTINATIONS, IMAGES } from '../data/travelData';

interface DestinationsViewProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({ onSelectDestination }) => {
  const [filter, setFilter] = useState<DestinationCategory>('all');

  const filtered = DESTINATIONS.filter((d) => {
    if (filter === 'all') return true;
    return d.category === filter;
  });

  return (
    <div className="w-full flex flex-col animate-in fade-in duration-300">
      {/* Banner */}
      <section className="relative w-full -mt-20 py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={IMAGES.sigiriya}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 pt-12 flex flex-col gap-4">
          <span className="font-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            Sacred Geography &amp; Bio-Regions
          </span>
          <h1 className="font-display-lg text-white font-medium text-4xl md:text-5xl">
            Sri Lanka’s Iconic Destinations
          </h1>
          <p className="font-body-xl text-surface-variant max-w-2xl text-base md:text-xl">
            From the 5th-century rock citadel of Sigiriya to the cool misty high tea estates of Ella and the wild coastal dunes of Yala. Discover regions where nature and living culture endure.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full bg-surface-container-low py-6 border-b border-[#002014]/5 sticky top-20 z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Regions' },
              { id: 'highlands', label: 'Central Highlands' },
              { id: 'coast', label: 'Southern Coast' },
              { id: 'ancient', label: 'Cultural Triangle' },
              { id: 'wildlife', label: 'Wildlife Sanctuaries' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as DestinationCategory)}
                className={`px-4 py-2 rounded-full font-label-md text-xs md:text-sm transition-all cursor-pointer ${
                  filter === f.id
                    ? 'bg-primary text-on-primary font-bold shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Destinations */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-3xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col border border-[#002014]/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white font-label-sm text-xs px-3 py-1 rounded-full">
                    {dest.region}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-primary font-label-sm text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-variant">
                      sunny
                    </span>
                    Best: {dest.bestMonths}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-label-sm uppercase tracking-widest text-secondary-fixed block text-xs font-bold">
                      {dest.tagline}
                    </span>
                    <h3 className="font-headline-md text-white text-2xl font-medium">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                  <p className="font-body-md text-on-surface-variant line-clamp-3">
                    {dest.fullDescription}
                  </p>

                  <div className="pt-2 border-t border-[#002014]/5 flex items-center justify-between text-secondary font-label-md text-sm font-semibold">
                    <span>Explore Destination Dossier</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Climate Calendar Advisory */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-[#002014]/5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-label-sm uppercase tracking-widest text-secondary font-bold">
                Seasonal Microclimates
              </span>
              <h3 className="font-headline-sm text-primary">
                The Sun Always Shines on Sri Lanka
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Due to the island’s mountainous topography, Sri Lanka experiences two reciprocal monsoons. When the southwest experiences rainfall (May–Sep), the northeast coast enjoys glorious turquoise calm, and vice versa.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="p-4 rounded-2xl bg-surface-container-lowest text-center">
                <span className="font-label-sm text-secondary font-bold block">Nov – Apr</span>
                <span className="font-label-lg text-primary font-bold">South &amp; West</span>
                <span className="font-body-md text-xs text-on-surface-variant block mt-1">Galle, Mirissa, Yala</span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-lowest text-center">
                <span className="font-label-sm text-secondary font-bold block">May – Oct</span>
                <span className="font-label-lg text-primary font-bold">East &amp; North</span>
                <span className="font-body-md text-xs text-on-surface-variant block mt-1">Trincomalee, Minneriya</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
