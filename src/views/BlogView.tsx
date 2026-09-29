import React, { useState } from 'react';
import { Article } from '../types';
import { ARTICLES, IMAGES } from '../data/travelData';

interface BlogViewProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Dispatches' },
    { id: 'Expedition Trends', label: 'Expedition Trends' },
    { id: 'Travel Masterclass', label: 'Travel Masterclass' },
    { id: 'Seasons & Weather', label: 'Seasons & Weather' },
    { id: 'Wildlife Fieldwork', label: 'Wildlife Fieldwork' },
    { id: 'Culinary Traditions', label: 'Culinary Traditions' },
    { id: 'Hidden Trails', label: 'Hidden Trails' },
  ];

  const filtered = ARTICLES.filter((a) => {
    if (selectedCategory === 'all') return true;
    return a.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="w-full flex flex-col animate-in fade-in duration-300">
      {/* Banner */}
      <section className="relative w-full -mt-20 py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={IMAGES.monsoon}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 pt-12 flex flex-col gap-4">
          <span className="font-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            Fieldwork &amp; Island Wisdom
          </span>
          <h1 className="font-display-lg text-white font-medium text-4xl md:text-5xl">
            The Eco Travels Journal
          </h1>
          <p className="font-body-xl text-surface-variant max-w-2xl text-base md:text-xl">
            Insider chronicles, monsoon navigational tips, culinary secrets, and wildlife research notes published directly by our resident naturalist and botanical team.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="w-full bg-surface-container-low py-6 border-b border-[#002014]/5 sticky top-20 z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full font-label-md text-xs md:text-sm transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-on-primary font-bold shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group rounded-3xl bg-surface-container-lowest overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all cursor-pointer border border-[#002014]/5"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={article.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={article.image}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm font-medium">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm">
                      <span>{article.publishedDate}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#002014]/5 flex items-center justify-between">
                    <span className="font-label-md text-label-md text-secondary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Guide</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      By {article.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
