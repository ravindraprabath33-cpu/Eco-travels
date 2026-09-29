import React from 'react';
import { Destination } from '../types';
import { TOURS } from '../data/travelData';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onSelectTourFromDestination: (tourId: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onSelectTourFromDestination,
}) => {
  if (!destination) return null;

  // Find tours that feature this destination
  const matchedTours = TOURS.filter(
    (t) =>
      t.route.toLowerCase().includes(destination.name.toLowerCase()) ||
      t.overview.toLowerCase().includes(destination.name.toLowerCase()) ||
      t.title.toLowerCase().includes(destination.name.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-surface rounded-3xl shadow-2xl overflow-hidden my-8 border border-[#002014]/10 max-h-[90vh] flex flex-col">
        {/* Header Image */}
        <div className="relative h-64 md:h-72 w-full shrink-0 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.altText}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1 text-on-primary">
            <div className="flex items-center gap-2">
              <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-bold">
                {destination.region}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">sunny</span>
                Best: {destination.bestMonths}
              </span>
              {destination.elevation && (
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full font-label-sm text-label-sm">
                  {destination.elevation}
                </span>
              )}
            </div>
            <h2 className="font-headline-lg text-white font-medium text-3xl">
              {destination.name}
            </h2>
            <p className="font-body-md text-secondary-fixed font-semibold">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-primary">About {destination.name}</h3>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              {destination.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-lg uppercase tracking-wider text-primary font-bold">
              Must-Experience Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-sm"
                >
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eco Stays & Key Wildlife */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface-container p-5 rounded-2xl border border-[#002014]/5">
            <div>
              <span className="font-label-sm uppercase tracking-wider text-on-surface-variant block font-bold mb-1">
                Recommended Low-Impact Stays
              </span>
              <p className="font-body-md text-primary font-semibold text-sm">
                {destination.recommendedStay}
              </p>
            </div>
            {destination.keyWildlife && (
              <div>
                <span className="font-label-sm uppercase tracking-wider text-on-surface-variant block font-bold mb-1">
                  Notable Wildlife Sightings
                </span>
                <p className="font-body-md text-primary font-semibold text-sm">
                  {destination.keyWildlife.join(', ')}
                </p>
              </div>
            )}
          </div>

          {/* Matched Itineraries */}
          {matchedTours.length > 0 && (
            <div className="flex flex-col gap-3 pt-2">
              <h4 className="font-label-lg uppercase tracking-wider text-primary font-bold">
                Itineraries Featuring {destination.name}
              </h4>
              <div className="flex flex-col gap-2">
                {matchedTours.map((t) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container flex items-center justify-between transition-colors border border-[#002014]/5"
                  >
                    <div>
                      <p className="font-headline-sm text-primary text-base font-semibold">
                        {t.title}
                      </p>
                      <p className="font-label-sm text-on-surface-variant">
                        {t.duration} • {t.route}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectTourFromDestination(t.id);
                      }}
                      className="px-4 py-2 rounded-full bg-primary text-on-primary font-label-sm text-label-sm hover:bg-secondary transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <span>View Tour</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
