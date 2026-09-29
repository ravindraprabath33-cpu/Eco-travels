import React from 'react';
import { TESTIMONIALS } from '../data/travelData';

export const TravelerStoriesSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-surface" id="testimonials">
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Voices of Our Guests
            </span>
            <h2 className="font-display-md text-primary font-medium">
              Stories From Our Travelers
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Read genuine reflections from explorers who experienced the true soul of Sri Lanka with our naturalist team.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-[#002014]/5">
            <span className="material-symbols-outlined text-secondary text-[20px]">grade</span>
            <span className="font-label-md text-label-md font-bold text-primary">
              Rated 4.98/5 on Trustpilot &amp; Tripadvisor
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-surface-container-lowest flex flex-col justify-between gap-6 shadow-sm hover:shadow-xl transition-all border border-[#002014]/5"
            >
              <div className="flex flex-col gap-4">
                <div className="flex text-tertiary-fixed-dim">
                  {[...Array(t.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
                  “{t.quote}”
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 bg-surface-container-low p-3 rounded-2xl">
                <div
                  className={`w-11 h-11 rounded-full ${t.avatarColor} text-on-primary flex items-center justify-center font-bold font-headline-sm shrink-0`}
                >
                  {t.avatarInitials}
                </div>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg font-bold text-primary">
                    {t.names}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {t.location} • {t.tourName}
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
