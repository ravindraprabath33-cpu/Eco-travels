import React, { useState } from 'react';
import { Destination, DestinationCategory } from '../types';
import { DESTINATIONS } from '../data/travelData';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
  onExploreDestinationTours?: (destId: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
}) => {
  const [filter, setFilter] = useState<DestinationCategory>('all');

  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (filter === 'all') return true;
    return d.category === filter;
  });

  return (
    <section className="w-full py-24 bg-surface-container-low" id="destinations">
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-8">
        {/* Section Header with Dynamic Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Island Iconography
            </span>
            <h2 className="font-display-md text-primary font-medium">
              Places That Stay With You
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              From mist-crowned tea stations and UNESCO citadel rocks to wild game reserves and secluded southern coastlines.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-surface-container p-1.5 rounded-full border border-[#002014]/5">
            {[
              { id: 'all', label: 'All' },
              { id: 'highlands', label: 'Highlands' },
              { id: 'coast', label: 'Coast & Marine' },
              { id: 'ancient', label: 'Ancient Cities' },
              { id: 'wildlife', label: 'Wildlife' },
            ].map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id as DestinationCategory)}
                  className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-primary text-on-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-white/40'
                  }`}
                  type="button"
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Grid of Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {filteredDestinations.map((dest) => {
            const isFeatured = dest.colSpan?.includes('col-span-2');
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className={`${
                  isFeatured ? 'lg:col-span-2 h-[420px]' : 'h-[340px]'
                } group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#002014]/5`}
              >
                <img
                  alt={dest.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={dest.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />

                <div className="absolute top-5 left-5 bg-surface-container-lowest/20 backdrop-blur-md px-3.5 py-1.5 rounded-full font-label-sm text-label-sm text-on-primary font-medium">
                  {dest.region}
                </div>

                <div className="absolute top-5 right-5 bg-surface-container-lowest/80 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-variant">
                    sunny
                  </span>{' '}
                  Best: {dest.bestMonths}
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-on-primary">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
                    {dest.tagline}
                  </span>
                  <h3
                    className={`${
                      isFeatured ? 'font-headline-lg text-headline-lg' : 'font-headline-md text-headline-md'
                    } font-medium`}
                  >
                    {dest.name}
                  </h3>
                  <p className="font-body-md text-body-md text-surface-variant line-clamp-2">
                    {dest.shortDescription}
                  </p>
                  <div className="pt-2 flex items-center gap-2 font-label-md text-label-md text-secondary-fixed group-hover:text-surface transition-colors">
                    <span>Discover Destination Itineraries</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
