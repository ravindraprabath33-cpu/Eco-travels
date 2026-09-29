import React from 'react';
import { IMAGES } from '../data/travelData';

interface SriLankaStorySectionProps {
  onReadManifesto: () => void;
}

export const SriLankaStorySection: React.FC<SriLankaStorySectionProps> = ({ onReadManifesto }) => {
  return (
    <section className="w-full py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Immersive Imagery Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="Sigiriya rock monolith in morning mist Sri Lanka"
                className="w-full h-[540px] object-cover object-center"
                src={IMAGES.sigiriya}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

              {/* Quote Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md shadow-lg border border-white/40">
                <p className="font-headline-sm text-headline-sm italic text-primary">
                  “Sri Lanka leaves an imprint upon your spirit that lingers long after you have crossed the ocean home.”
                </p>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mt-2 block font-semibold">
                  — Dr. Anura Jayawardena, Lead Expedition Botanist
                </span>
              </div>
            </div>

            {/* Decorative Floating Counter */}
            <div className="absolute -top-6 -right-6 hidden sm:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-secondary text-on-secondary shadow-xl border-4 border-surface">
              <span className="font-headline-md text-headline-md font-bold leading-none">3,000</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[9px] text-center mt-1 font-semibold">
                Years of History
              </span>
            </div>
          </div>

          {/* Right Side: Evocative Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-6">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Deep Heritage &amp; Raw Beauty
              </span>
              <h2 className="font-display-md text-primary font-medium">
                Sri Lanka, Naturally Extraordinary
              </h2>
            </div>
            <p className="font-body-xl text-body-xl text-on-surface leading-relaxed text-lg md:text-xl">
              A tear-shaped emerald in the Indian Ocean where ancient kings carved sky palaces into sheer monoliths, mist-shrouded mountain passes echo with morning birdcalls, and wild elephants wander freely through twilight grasslands.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              From the aroma of freshly hand-roasted cinnamon and single-origin Ceylon tea to the genuine, heartfelt smiles of village elders welcoming you into their homes, every moment in Sri Lanka is saturated with wonder. We build bridges of respectful travel that honor this ancient sanctuary.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1 border border-[#002014]/5">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">8</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  UNESCO Sites
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1 border border-[#002014]/5">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">26</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  National Parks
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1 border border-[#002014]/5">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">#1</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Biodiversity Density
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onReadManifesto}
                className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group cursor-pointer"
              >
                <span>Read Our Conservation Manifesto</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
