import React from 'react';
import { Experience } from '../types';
import { EXPERIENCES } from '../data/travelData';

interface ExperiencesSectionProps {
  onSelectExperience: (exp: Experience) => void;
  onViewAllExperiences: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  onSelectExperience,
  onViewAllExperiences,
}) => {
  return (
    <section className="w-full pt-32 pb-24 bg-surface" id="experiences">
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Curated Island Adventures
            </span>
            <h2 className="font-display-md text-primary font-medium">
              Travel Beyond the Ordinary
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Experience Sri Lanka through raw nature, ancient living wisdom, gentle ocean waters, and deeply authentic local moments.
            </p>
          </div>
          <button
            onClick={onViewAllExperiences}
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group cursor-pointer"
          >
            <span>Explore All Experiences</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* 6 Interactive Editorial Experience Cards in 3-column Grid */}
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
                <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full font-label-md text-label-md text-primary flex items-center gap-1">
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
  );
};
