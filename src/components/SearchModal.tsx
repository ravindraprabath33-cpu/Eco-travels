import React, { useState, useMemo } from 'react';
import { Tour, Destination, Experience, Article } from '../types';
import { TOURS, DESTINATIONS, EXPERIENCES, ARTICLES } from '../data/travelData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTour: (tour: Tour) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectExperience: (exp: Experience) => void;
  onSelectArticle: (art: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTour,
  onSelectDestination,
  onSelectExperience,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { tours: [], destinations: [], experiences: [], articles: [] };

    return {
      tours: TOURS.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.route.toLowerCase().includes(q) ||
          t.style.toLowerCase().includes(q)
      ),
      destinations: DESTINATIONS.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.region.toLowerCase().includes(q) ||
          d.tagline.toLowerCase().includes(q)
      ),
      experiences: EXPERIENCES.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.badge.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q)
      ),
      articles: ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q)
      ),
    };
  }, [query]);

  if (!isOpen) return null;

  const totalResults =
    results.tours.length +
    results.destinations.length +
    results.experiences.length +
    results.articles.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-primary/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-surface rounded-3xl shadow-2xl overflow-hidden border border-[#002014]/10 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#002014]/10 flex items-center gap-3 bg-surface-container-lowest">
          <span className="material-symbols-outlined text-secondary text-[24px]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tours, leopards, Sigiriya, tea, whale watching..."
            className="flex-1 bg-transparent text-primary font-body-lg text-lg focus:outline-none placeholder:text-on-surface-variant/50"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-on-surface-variant hover:text-primary p-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">clear</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Results Area */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
          {!query ? (
            <div className="flex flex-col gap-4">
              <span className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                Popular Island Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Sigiriya Dawn Ascent', 'Yala Leopard Safari', 'Ella Nine Arch', 'Blue Whale Watching', 'Ceylon High Tea', 'Knuckles Trekking'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3.5 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center flex flex-col items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl text-outline-variant">
                travel_explore
              </span>
              <p className="font-headline-sm text-primary">No exact matches found</p>
              <p className="font-body-md text-sm">
                Try searching for "Ella", "Safari", "Tea", "Leopard", or "Heritage".
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Matched Tours */}
              {results.tours.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm uppercase tracking-wider text-secondary font-bold">
                    Tours &amp; Expeditions ({results.tours.length})
                  </span>
                  {results.tours.map((tour) => (
                    <div
                      key={tour.id}
                      onClick={() => {
                        onClose();
                        onSelectTour(tour);
                      }}
                      className="p-3 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center justify-between cursor-pointer border border-[#002014]/5"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={tour.image}
                          alt=""
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div>
                          <p className="font-label-lg font-bold text-primary">{tour.title}</p>
                          <p className="text-xs text-on-surface-variant">{tour.duration} • {tour.route}</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        arrow_forward
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Matched Destinations */}
              {results.destinations.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm uppercase tracking-wider text-secondary font-bold">
                    Destinations ({results.destinations.length})
                  </span>
                  {results.destinations.map((dest) => (
                    <div
                      key={dest.id}
                      onClick={() => {
                        onClose();
                        onSelectDestination(dest);
                      }}
                      className="p-3 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center justify-between cursor-pointer border border-[#002014]/5"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={dest.image}
                          alt=""
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div>
                          <p className="font-label-lg font-bold text-primary">{dest.name}</p>
                          <p className="text-xs text-on-surface-variant">{dest.region} • {dest.tagline}</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        arrow_forward
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Matched Experiences */}
              {results.experiences.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm uppercase tracking-wider text-secondary font-bold">
                    Curated Experiences ({results.experiences.length})
                  </span>
                  {results.experiences.map((exp) => (
                    <div
                      key={exp.id}
                      onClick={() => {
                        onClose();
                        onSelectExperience(exp);
                      }}
                      className="p-3 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center justify-between cursor-pointer border border-[#002014]/5"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={exp.image}
                          alt=""
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div>
                          <p className="font-label-lg font-bold text-primary">{exp.title}</p>
                          <p className="text-xs text-on-surface-variant">{exp.badge} • {exp.duration}</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        arrow_forward
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Matched Articles */}
              {results.articles.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm uppercase tracking-wider text-secondary font-bold">
                    Journal Guides ({results.articles.length})
                  </span>
                  {results.articles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        onClose();
                        onSelectArticle(art);
                      }}
                      className="p-3 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center justify-between cursor-pointer border border-[#002014]/5"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={art.image}
                          alt=""
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div>
                          <p className="font-label-lg font-bold text-primary">{art.title}</p>
                          <p className="text-xs text-on-surface-variant">{art.category} • {art.readTime}</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        arrow_forward
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
