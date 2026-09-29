import React from 'react';
import { Tour, CurrencyCode } from '../types';
import { TOURS, CURRENCIES } from '../data/travelData';

interface ToursSectionProps {
  onSelectTour: (tour: Tour) => void;
  currency: CurrencyCode;
}

export const ToursSection: React.FC<ToursSectionProps> = ({ onSelectTour, currency }) => {
  const formatPrice = (usd: number) => {
    const cur = CURRENCIES[currency];
    const converted = Math.round(usd * cur.rate);
    return `${cur.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section className="w-full py-24 bg-surface" id="tours">
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Handcrafted Itineraries
            </span>
            <h2 className="font-display-md text-primary font-medium">
              Our Signature Journeys
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Slow-travel itineraries guided by master local naturalists, balancing deep wilderness immersion with uncompromising eco-luxury.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-surface-container text-primary font-label-md text-label-md flex items-center gap-1.5 border border-[#002014]/5">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
              <span>100% Tailored Private Departures</span>
            </span>
          </div>
        </div>

        {/* Tours Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour) => {
            const isGrandTour = tour.id === 'complete-sri-lanka';

            if (isGrandTour) {
              return (
                <div
                  key={tour.id}
                  className="lg:col-span-2 rounded-3xl bg-surface-container-lowest overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-xl transition-all duration-500 group border border-[#002014]/5"
                >
                  <div className="relative lg:w-1/2 h-72 lg:h-auto overflow-hidden">
                    <img
                      alt={tour.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={tour.image}
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase px-3 py-1 rounded-full font-semibold">
                      {tour.duration}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
                      <span>Island Grand Tour</span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col gap-4 lg:w-1/2 justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                        <span>Grand Odyssey: {tour.route}</span>
                        <span className="flex items-center gap-1 text-tertiary-fixed-variant font-semibold">
                          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>{' '}
                          {tour.rating.toFixed(1)}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">
                        {tour.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {tour.overview}
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {tour.tags.map((tag, i) => (
                          <span key={i} className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface">
                            <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
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
                        className="px-6 py-2.5 rounded-full bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                        type="button"
                      >
                        <span>View Full Itinerary</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
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
                        {tour.rating}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      {tour.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                      {tour.overview}
                    </p>

                    {/* Highlights Pills */}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
