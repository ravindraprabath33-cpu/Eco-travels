import React from 'react';

export const WhyEcoTravelsSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-surface-container-low" id="about-us">
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Our Sustainability Compact
          </span>
          <h2 className="font-display-md text-primary font-medium">
            Travel With Purpose
          </h2>
          <p className="font-headline-sm text-headline-sm italic text-secondary pt-2">
            “We believe the best journeys leave beautiful memories — not a footprint.”
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col gap-4 shadow-sm hover:shadow-md transition-all border border-[#002014]/5">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">solar_power</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">Sustainable Travel</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              100% solar-supported safari camps, rigorous zero-plastic hydration programs, and a native tree planted for every traveler in the Knuckles biosphere.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col gap-4 shadow-sm hover:shadow-md transition-all border border-[#002014]/5">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">handshake</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">Local Empowerment</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Over 85% of your trip investment remains directly within rural host communities, supporting organic farmers, artisans, and village wildlife patrols.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col gap-4 shadow-sm hover:shadow-md transition-all border border-[#002014]/5">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">Small Group Intimacy</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              All scheduled journeys are strictly capped at 8 travelers. Private bespoke departures ensure unhurried pacing and peaceful nature encounters.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col gap-4 shadow-sm hover:shadow-md transition-all border border-[#002014]/5">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container/50 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">pets</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">Ethical Wildlife</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Zero animal exploitation. Strict viewing distance guidelines, engine shutdowns during mammal observations, and no wildlife feeding or baiting.
            </p>
          </div>
        </div>

        {/* Trust Badges Banner */}
        <div className="p-6 rounded-2xl bg-surface-container flex flex-wrap items-center justify-around gap-6 text-on-surface-variant border border-[#002014]/5">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
            <span className="font-label-md text-label-md font-semibold text-primary">
              GSTC Recognized Partner
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-2xl">co2</span>
            <span className="font-label-md text-label-md font-semibold text-primary">
              Certified Climate Neutral
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-2xl">shield</span>
            <span className="font-label-md text-label-md font-semibold text-primary">
              Dept. of Wildlife Conservation Partner
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-2xl">hotel_class</span>
            <span className="font-label-md text-label-md font-semibold text-primary">
              SLTDA Diamond Licensed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
