import React from 'react';
import { IMAGES } from '../data/travelData';

interface WildlifeSafariSectionProps {
  onExploreWildlifeTours: () => void;
}

export const WildlifeSafariSection: React.FC<WildlifeSafariSectionProps> = ({
  onExploreWildlifeTours,
}) => {
  return (
    <section className="w-full py-28 bg-primary text-surface-variant relative overflow-hidden" id="wildlife-safari">
      {/* Star Speckles / Ambient Gradient in Night Canopy */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(134,242,228,0.12),rgba(255,255,255,0))] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
              The Big Five of Sri Lanka
            </span>
            <h2 className="font-display-md text-on-primary font-medium">
              Into the Wild
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container">
              Sri Lanka is one of the world’s top biodiversity hotspots, home to colossal marine giants and elusive jungle predators.
            </p>
          </div>
          <button
            onClick={onExploreWildlifeTours}
            className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-lg text-label-lg px-8 py-3.5 rounded-full transition-all shadow-lg cursor-pointer whitespace-nowrap"
          >
            <span>Explore Wildlife Tours</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* Cinematic Elephant Anchor Display */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img
            alt="Majestic wild Sri Lankan elephant walking calmly through golden sunlit grassland at twilight near a calm lake"
            className="w-full h-[460px] object-cover object-center"
            src={IMAGES.elephant}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl flex flex-col gap-2">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
                Iconic Resident
              </span>
              <h3 className="font-display-md text-headline-lg md:text-display-md text-on-primary font-medium">
                The Asian Elephant
              </h3>
              <p className="font-body-md text-body-md text-surface-variant">
                Witness 'The Gathering' at Minneriya, where hundreds of wild elephants assemble around ancient irrigation reservoirs in one of nature's greatest annual spectacles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-primary-container/80 backdrop-blur-md text-primary-fixed font-label-sm text-label-sm border border-white/10">
                Peak: July – October
              </span>
              <span className="px-4 py-2 rounded-full bg-primary-container/80 backdrop-blur-md text-primary-fixed font-label-sm text-label-sm border border-white/10">
                Minneriya &amp; Udawalawe
              </span>
            </div>
          </div>
        </div>

        {/* Wildlife Species Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Species 1: Leopard */}
          <div className="p-6 rounded-3xl bg-primary-container/70 backdrop-blur-md flex flex-col justify-between gap-4 hover:bg-primary-container transition-all border border-white/10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-secondary-fixed">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Apex Predator
                </span>
                <span className="material-symbols-outlined text-[20px]">visibility</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-primary">Sri Lankan Leopard</h4>
              <p className="font-body-md text-body-md text-on-primary-container text-sm">
                Panthera pardus kotiya, endemic to the island and flourishing in the granite boulders of Yala and Wilpattu.
              </p>
            </div>
            <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-1 font-medium">
              <span className="material-symbols-outlined text-[14px]">location_on</span> Yala &amp; Wilpattu
            </div>
          </div>

          {/* Species 2: Blue Whale */}
          <div className="p-6 rounded-3xl bg-primary-container/70 backdrop-blur-md flex flex-col justify-between gap-4 hover:bg-primary-container transition-all border border-white/10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-secondary-fixed">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Ocean Sovereign
                </span>
                <span className="material-symbols-outlined text-[20px]">waves</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-primary">Blue Whale</h4>
              <p className="font-body-md text-body-md text-on-primary-container text-sm">
                The planet's largest living creature migratory route runs mere nautical miles off Mirissa and Trincomalee trench.
              </p>
            </div>
            <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-1 font-medium">
              <span className="material-symbols-outlined text-[14px]">location_on</span> Mirissa &amp; Trincomalee
            </div>
          </div>

          {/* Species 3: Sloth Bear */}
          <div className="p-6 rounded-3xl bg-primary-container/70 backdrop-blur-md flex flex-col justify-between gap-4 hover:bg-primary-container transition-all border border-white/10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-secondary-fixed">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Forest Forager
                </span>
                <span className="material-symbols-outlined text-[20px]">forest</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-primary">Sloth Bear</h4>
              <p className="font-body-md text-body-md text-on-primary-container text-sm">
                Shy, nocturnal termite-hunters found roaming the dense palu forests during fruiting season in early summer.
              </p>
            </div>
            <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-1 font-medium">
              <span className="material-symbols-outlined text-[14px]">location_on</span> Wasgamuwa &amp; Wilpattu
            </div>
          </div>

          {/* Species 4: Rainforest Aviary */}
          <div className="p-6 rounded-3xl bg-primary-container/70 backdrop-blur-md flex flex-col justify-between gap-4 hover:bg-primary-container transition-all border border-white/10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-secondary-fixed">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Endemic Aviary
                </span>
                <span className="material-symbols-outlined text-[20px]">cruelty_free</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-primary">34 Endemic Birds</h4>
              <p className="font-body-md text-body-md text-on-primary-container text-sm">
                From the Ceylon Blue Magpie to the Sri Lanka Junglefowl in the primeval Sinharaja Rainforest Biosphere.
              </p>
            </div>
            <div className="font-label-sm text-label-sm text-primary-fixed flex items-center gap-1 font-medium">
              <span className="material-symbols-outlined text-[14px]">location_on</span> Sinharaja &amp; Knuckles
            </div>
          </div>
        </div>

        {/* Wildlife Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-primary-container/40 text-center border border-white/10">
          <div className="flex flex-col">
            <span className="font-display-md text-display-md text-on-primary font-bold">26</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-semibold">
              National Parks
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-md text-display-md text-on-primary font-bold">100+</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-semibold">
              Mammal Species
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-md text-display-md text-on-primary font-bold">400+</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-semibold">
              Avian Species
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-md text-display-md text-on-primary font-bold">100%</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-semibold">
              Ethical Wildlife Code
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
