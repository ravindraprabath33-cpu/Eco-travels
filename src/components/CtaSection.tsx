import React from 'react';
import { IMAGES } from '../data/travelData';

interface CtaSectionProps {
  onPlanJourney: () => void;
  onContactExpert: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onPlanJourney, onContactExpert }) => {
  return (
    <section className="w-full py-28 bg-primary relative overflow-hidden" id="plan-trip">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <img
          alt="Nine Arch Bridge Ella Sri Lanka tea country golden light"
          className="w-full h-full object-cover"
          src={IMAGES.hero}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-12 text-center flex flex-col items-center gap-7">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-secondary-fixed border border-white/10">
          <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
            Start Your Journey Today
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-display-lg text-on-primary font-medium">
            Your Sri Lankan Story Starts Here.
          </h2>
          <p className="font-body-xl text-surface-variant max-w-2xl mx-auto text-base md:text-xl">
            Tell us what inspires you — ancient monoliths, deep wilderness safaris, or slow hill-country retreats — and we’ll craft an extraordinary expedition around it.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onPlanJourney}
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-lg text-label-lg px-9 py-4 rounded-full transition-all shadow-xl shadow-secondary/20 cursor-pointer"
          >
            <span>Plan My Journey</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
          <button
            onClick={onContactExpert}
            className="inline-flex items-center gap-2.5 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 backdrop-blur-md text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full transition-all shadow-md border border-white/15 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Talk to a Travel Expert</span>
          </button>
        </div>

        {/* Reassurance Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-surface-variant font-label-md text-label-md bg-primary-container/40 p-6 rounded-3xl w-full border border-white/10">
          <div className="flex items-center justify-center gap-2.5">
            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">timer</span>
            <span>Bespoke Proposal in 24 Hours</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">support_agent</span>
            <span>No-Obligation Consultation</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">tune</span>
            <span>100% Tailored to You</span>
          </div>
        </div>
      </div>
    </section>
  );
};
