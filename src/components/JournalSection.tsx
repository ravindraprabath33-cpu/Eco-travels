import React from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/travelData';

interface JournalSectionProps {
  onSelectArticle: (article: Article) => void;
  onViewAllArticles: () => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  onSelectArticle,
  onViewAllArticles,
}) => {
  return (
    <section className="w-full py-24 bg-surface-container-low" id="blog">
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              From Our Journal
            </span>
            <h2 className="font-display-md text-primary font-medium">
              Travel Inspiration
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Insider guides, packing wisdom, seasonal monsoon maps, and culinary dispatches from our resident island experts.
            </p>
          </div>
          <button
            onClick={onViewAllArticles}
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group cursor-pointer"
          >
            <span>Read All Journal Entries</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* 6 Editorial Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
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
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="font-label-md text-label-md text-secondary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    By {article.author.split(' ')[0]}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
