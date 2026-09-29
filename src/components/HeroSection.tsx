import React, { useState } from 'react';
import { IMAGES } from '../data/travelData';

interface HeroSectionProps {
  onExploreTours: () => void;
  onOpenPlanner: () => void;
  onFilterJourneys: (destination: string, style: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTours,
  onOpenPlanner,
  onFilterJourneys,
}) => {
  const [selectedDest, setSelectedDest] = useState('all');
  const [travelWindow, setTravelWindow] = useState('Nov 2026 – Apr 2027');
  const [selectedStyle, setSelectedStyle] = useState('eco-luxury');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterJourneys(selectedDest, selectedStyle);
  };

  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-primary text-surface min-h-[960px] flex flex-col justify-between">
      {/* Hero Background Image & Atmospheric Layers */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Nine Arch Bridge Ella misty green tea plantation hills at golden sunrise"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          id="hero-bg-img"
          src={IMAGES.hero}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/40" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 pt-44 pb-36 flex flex-col items-start gap-7 w-full">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-low shadow-sm border border-white/10">
          <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            SRI LANKA'S PREMIER SUSTAINABLE EXPEDITIONS • 100% CARBON NEUTRAL
          </span>
        </div>

        {/* Major Editorial Heading */}
        <div className="max-w-4xl flex flex-col gap-3">
          <h1 className="font-display-lg text-on-primary leading-tight font-medium drop-shadow-sm">
            Discover the Soul of <span className="italic font-normal text-secondary-fixed">Sri Lanka</span>
          </h1>
          <p className="font-body-xl text-surface-variant max-w-2xl leading-relaxed text-base md:text-xl">
            Authentic journeys. Wild landscapes. Unforgettable memories curated with deep reverence for our sacred island.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onExploreTours}
            className="inline-flex items-center gap-3 bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-lg text-label-lg px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 shadow-xl shadow-primary/40 cursor-pointer"
          >
            <span>Explore Tours</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
          <button
            onClick={onOpenPlanner}
            className="inline-flex items-center gap-2.5 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 backdrop-blur-md text-on-primary font-label-lg text-label-lg px-7 py-4 rounded-full transition-all shadow-md border border-white/15 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">explore</span>
            <span>Plan Your Trip</span>
          </button>
        </div>

        {/* Trust Metrics */}
        <div className="flex flex-wrap items-center gap-y-3 gap-x-8 pt-4 text-surface-variant/90 font-label-md text-label-md">
          <div className="flex items-center gap-2">
            <div className="flex text-tertiary-fixed-dim">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <span className="text-on-primary font-semibold">4.98/5</span>
            <span>(2,400+ Explorers)</span>
          </div>
          <div className="h-4 w-px bg-surface-variant/30 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed text-[18px]">person_check</span>
            <span>100% Local Naturalist Guides</span>
          </div>
          <div className="h-4 w-px bg-surface-variant/30 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed text-[18px]">nest_eco_leaf</span>
            <span>Zero-Single-Use-Plastic Guarantee</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 w-full flex justify-center pb-8">
        <a
          className="flex flex-col items-center gap-1.5 text-surface-variant/80 hover:text-on-primary transition-colors group cursor-pointer"
          href="#search-anchor"
        >
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[11px]">
            Scroll to explore
          </span>
          <span className="material-symbols-outlined text-2xl animate-bounce">expand_more</span>
        </a>
      </div>

      {/* FLOATING SEARCH & TRIP PLANNING CARD */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-12 -mb-16 w-full" id="search-anchor">
        <div className="bg-surface-container-lowest/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_24px_48px_-12px_rgba(15,41,30,0.15)] flex flex-col gap-6 border border-white/60">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold">
                Tailor-Made Expedition Builder
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
              <span className="material-symbols-outlined text-secondary text-[18px]">bolt</span>
              <span>Instant Availability &amp; Expert Concierge</span>
            </div>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Destination Field */}
            <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-surface-container-low transition-colors hover:bg-surface-container border border-neutral-200/50">
              <label
                className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 font-bold"
                htmlFor="search-dest"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">pin_drop</span>
                Destination
              </label>
              <select
                className="bg-transparent font-label-lg text-label-lg text-on-surface font-semibold focus:outline-none cursor-pointer"
                id="search-dest"
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
              >
                <option value="all">All Destinations (Islandwide)</option>
                <option value="ella">Ella &amp; Misty Highlands</option>
                <option value="sigiriya">Sigiriya &amp; Cultural Triangle</option>
                <option value="yala">Yala &amp; Southern Wildlife</option>
                <option value="galle">Galle &amp; Southern Coast</option>
                <option value="kandy">Kandy &amp; Knuckles Range</option>
              </select>
            </div>

            {/* Travel Dates Field */}
            <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-surface-container-low transition-colors hover:bg-surface-container border border-neutral-200/50">
              <label
                className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 font-bold"
                htmlFor="travel-date"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">calendar_month</span>
                Travel Window
              </label>
              <input
                className="bg-transparent font-label-lg text-label-lg text-on-surface font-semibold focus:outline-none cursor-pointer"
                id="travel-date"
                type="text"
                value={travelWindow}
                onChange={(e) => setTravelWindow(e.target.value)}
              />
            </div>

            {/* Travelers Style / Guests */}
            <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-surface-container-low transition-colors hover:bg-surface-container border border-neutral-200/50">
              <label
                className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 font-bold"
                htmlFor="search-style"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">nature_people</span>
                Travel Style
              </label>
              <select
                className="bg-transparent font-label-lg text-label-lg text-on-surface font-semibold focus:outline-none cursor-pointer"
                id="search-style"
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
              >
                <option value="all">All Travel Styles</option>
                <option value="eco-luxury">Eco-Luxury &amp; Safari (Small Group)</option>
                <option value="private-culture">Private Heritage &amp; Ancient Wonders</option>
                <option value="wellness-tea">Ayurveda, Wellness &amp; High Tea</option>
                <option value="coastal-marine">Blue Whale &amp; Coastal Sanctuary</option>
              </select>
            </div>

            {/* Search CTA Button */}
            <div className="h-full flex items-end">
              <button
                className="w-full h-[60px] bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 cursor-pointer"
                type="submit"
              >
                <span className="material-symbols-outlined text-[20px]">search</span>
                <span>Find Journeys</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
