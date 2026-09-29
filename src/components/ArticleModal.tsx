import React from 'react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onPlanTripFromArticle: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onPlanTripFromArticle,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-surface rounded-3xl shadow-2xl overflow-hidden my-8 border border-[#002014]/10 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="relative h-64 md:h-72 w-full shrink-0 overflow-hidden">
          <img
            src={article.image}
            alt={article.altText}
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

          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-on-primary">
            <div className="flex items-center gap-2">
              <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">
                {article.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full font-label-sm text-label-sm">
                {article.readTime}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full font-label-sm text-label-sm">
                {article.publishedDate}
              </span>
            </div>
            <h2 className="font-headline-lg text-white font-medium text-2xl md:text-3xl leading-snug">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low border border-[#002014]/5">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center font-headline-sm">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-label-lg font-bold text-primary">{article.author}</p>
              <p className="font-label-sm text-on-surface-variant">{article.authorRole}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 font-body-lg text-on-surface leading-relaxed text-base md:text-lg">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-primary">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-6 border-t border-[#002014]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
              Eco Travels Sri Lanka Research Journal
            </span>
            <button
              onClick={() => {
                onClose();
                onPlanTripFromArticle();
              }}
              className="px-6 py-2.5 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-md text-label-md transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>Craft an Expedition Around This</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
