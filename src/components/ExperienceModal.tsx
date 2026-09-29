import React from 'react';
import { Experience } from '../types';

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
  onPlanExperience: (title: string) => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  onClose,
  onPlanExperience,
}) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-surface rounded-3xl shadow-2xl overflow-hidden my-8 border border-[#002014]/10 max-h-[90vh] flex flex-col">
        <div className="relative h-60 w-full shrink-0 overflow-hidden">
          <img
            src={experience.image}
            alt={experience.altText}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1 text-on-primary">
            <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-sm text-label-sm w-fit font-bold">
              {experience.badge}
            </span>
            <h2 className="font-headline-lg text-white font-medium text-2xl md:text-3xl">
              {experience.title}
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">{experience.credentialIcon}</span>
              {experience.credentialTag}
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              Duration: {experience.duration}
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">speed</span>
              Intensity: {experience.difficulty}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-primary">Experience Narrative</h3>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              {experience.fullDetails}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-[#002014]/5">
            <span className="font-label-sm uppercase tracking-wider text-secondary font-bold block mb-1">
              Ideal Explorer Profile
            </span>
            <p className="font-body-md text-primary font-medium text-sm">
              {experience.idealFor}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-[#002014]/10">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-neutral-300 font-label-md text-label-md text-on-surface hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onPlanExperience(experience.title);
              }}
              className="px-6 py-2.5 rounded-full bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Add to Expedition Plan</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
