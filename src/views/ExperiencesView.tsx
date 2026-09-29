import React from 'react';
import { Experience } from '../types';
import { EXPERIENCES, IMAGES } from '../data/travelData';

interface ExperiencesViewProps {
  onSelectExperience: (exp: Experience) => void;
  onOpenPlanner: () => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({
  onSelectExperience,
  onOpenPlanner,
}) => {
  return (
    <div className="w-full flex flex-col animate-in fade-in duration-300">
      {/* Banner */}
      <section className="relative w-full -mt-20 py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={IMAGES.knuckles}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 pt-12 flex flex-col gap-4">
          <span className="font-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            Curated Expeditions • Authentic Living
          </span>
          <h1 className="font-display-lg text-white font-medium text-4xl md:text-5xl">
            Sri Lankan Experiences
          </h1>
          <p className="font-body-xl text-surface-variant max-w-2xl text-base md:text-xl">
            From the whisper of wind across ancient high tea terraces to tracking apex leopards and acoustic listening to blue whales. Every encounter is crafted with ecological integrity.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="font-body-lg text-on-surface-variant max-w-xl">
              All experiences are led by certified specialists: Dept. of Wildlife certified trackers, licensed archaeological historians, and resident marine biologists.
            </p>
            <button
              onClick={onOpenPlanner}
              className="px-6 py-3 rounded-full bg-secondary text-on-secondary font-label-md text-sm hover:bg-on-secondary-fixed transition-colors cursor-pointer self-start md:self-auto shadow-sm"
            >
              Combine Experiences in Custom Plan
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                onClick={() => onSelectExperience(exp)}
                className="group relative rounded-3xl overflow-hidden bg-surface-container-lowest flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#002014]/5"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    alt={exp.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={exp.image}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    {exp.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full font-label-md text-label-md text-primary flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {exp.description}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between bg-surface-container-low p-3 rounded-2xl">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">{exp.credentialIcon}</span>
                      {exp.credentialTag}
                    </span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[20px]">
                      north_east
                    </span>
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
