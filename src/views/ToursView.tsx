import React, { useState, useMemo } from 'react';
import { Tour, CurrencyCode } from '../types';
import { TOURS, CURRENCIES, IMAGES } from '../data/travelData';

interface ToursViewProps {
  currency: CurrencyCode;
  onSelectTour: (tour: Tour) => void;
  onOpenPlanner: () => void;
}

export const ToursView: React.FC<ToursViewProps> = ({
  currency,
  onSelectTour,
  onOpenPlanner,
}) => {
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const cur = CURRENCIES[currency];

  const filteredTours = useMemo(() => {
    let list = [...TOURS];

    if (selectedStyle !== 'all') {
      list = list.filter((t) => t.style.toLowerCase().includes(selectedStyle.toLowerCase()));
    }

    if (selectedDuration === 'short') {
      list = list.filter((t) => t.daysCount <= 6);
    } else if (selectedDuration === 'medium') {
      list = list.filter((t) => t.daysCount >= 7 && t.daysCount <= 9);
    } else if (selectedDuration === 'long') {
      list = list.filter((t) => t.daysCount >= 10);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.basePriceUSD - b.basePriceUSD);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.basePriceUSD - a.basePriceUSD);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedStyle, selectedDuration, sortBy]);

  const formatPrice = (usd: number) => {
    const val = Math.round(usd * cur.rate);
    return `${cur.symbol}${val.toLocaleString()}`;
  };

  return (
    <div className="w-full flex flex-col animate-in fade-in duration-300">
      {/* Banner */}
      <section className="relative w-full -mt-20 py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={IMAGES.elephant}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 pt-12 flex flex-col gap-4">
          <span className="font-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            Curated Expeditions • 100% Carbon Neutral
          </span>
          <h1 className="font-display-lg text-white font-medium text-4xl md:text-5xl">
            Signature Sri Lankan Journeys
          </h1>
          <p className="font-body-xl text-surface-variant max-w-2xl text-base md:text-xl">
            Explore slow-paced itineraries crafted by master Sri Lankan naturalists. Private chauffeur-driven hybrid travel, boutique colonial estates, and unhurried wildlife observations.
          </p>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section className="w-full bg-surface-container-low py-6 border-b border-[#002014]/5 sticky top-20 z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Style Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Itineraries' },
              { id: 'wildlife', label: 'Wildlife & Safari' },
              { id: 'tea', label: 'Highlands & Tea' },
              { id: 'culture', label: 'Heritage & UNESCO' },
              { id: 'coastal', label: 'Coastal & Whales' },
              { id: 'grand', label: 'Grand Odyssey' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedStyle(f.id)}
                className={`px-3.5 py-1.5 rounded-full font-label-md text-xs md:text-sm transition-all cursor-pointer ${
                  selectedStyle === f.id
                    ? 'bg-primary text-on-primary font-bold shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Duration & Sort Controls */}
          <div className="flex items-center gap-3">
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-surface-container text-on-surface font-label-md text-xs cursor-pointer focus:outline-none border border-neutral-300"
            >
              <option value="all">Any Duration</option>
              <option value="short">Short (5-6 Days)</option>
              <option value="medium">Medium (7-9 Days)</option>
              <option value="long">Grand (10+ Days)</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl bg-surface-container text-on-surface font-label-md text-xs cursor-pointer focus:outline-none border border-neutral-300"
            >
              <option value="featured">Featured Pacing</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated (4.9+)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-10">
          <div className="flex items-center justify-between text-on-surface-variant font-label-md text-sm">
            <span>Showing {filteredTours.length} handcrafted expeditions</span>
            <button
              onClick={onOpenPlanner}
              className="text-secondary font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Need a custom itinerary? Use Expedition Builder</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="rounded-3xl bg-surface-container-lowest overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 group border border-[#002014]/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={tour.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={tour.image}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-3 py-1 rounded-full font-semibold">
                    {tour.duration}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">eco</span>
                    <span>100% Carbon Offset</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span className="truncate pr-2">{tour.route}</span>
                      <span className="flex items-center gap-1 text-tertiary-fixed-variant font-semibold shrink-0">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>{' '}
                        {tour.rating} ({tour.reviewCount})
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      {tour.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                      {tour.overview}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {tour.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between bg-surface-container-low p-4 rounded-2xl">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block font-medium">
                        From
                      </span>
                      <span className="font-headline-sm text-headline-sm font-semibold text-primary">
                        {formatPrice(tour.basePriceUSD)}{' '}
                        <span className="font-body-md text-body-md font-normal text-on-surface-variant">
                          / person
                        </span>
                      </span>
                    </div>
                    <button
                      onClick={() => onSelectTour(tour)}
                      className="px-5 py-2.5 rounded-full bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                      type="button"
                    >
                      <span>View Journey</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
