/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewTab, CurrencyCode, Tour, Destination, Experience, Article } from './types';
import { TOURS, DESTINATIONS } from './data/travelData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { ToursSection } from './components/ToursSection';
import { WhyEcoTravelsSection } from './components/WhyEcoTravelsSection';
import { SriLankaStorySection } from './components/SriLankaStorySection';
import { WildlifeSafariSection } from './components/WildlifeSafariSection';
import { TravelerStoriesSection } from './components/TravelerStoriesSection';
import { JournalSection } from './components/JournalSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

// Views
import { ToursView } from './views/ToursView';
import { DestinationsView } from './views/DestinationsView';
import { ExperiencesView } from './views/ExperiencesView';
import { AboutUsView } from './views/AboutUsView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';

// Modals
import { TourDetailModal } from './components/TourDetailModal';
import { DestinationModal } from './components/DestinationModal';
import { ExperienceModal } from './components/ExperienceModal';
import { ArticleModal } from './components/ArticleModal';
import { TripPlannerModal } from './components/TripPlannerModal';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('home');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  // Modal States
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4500);
  };

  const handleCurrencyChange = (newCur: CurrencyCode) => {
    setCurrency(newCur);
    showToast(`Currency switched to ${newCur}`);
  };

  const handleBookingInquiry = (tourTitle: string, name: string, guests: number, date: string) => {
    showToast(`Inquiry sent for ${tourTitle} (${guests} guests on ${date}). We will contact ${name} shortly!`);
  };

  const handlePlanSubmit = (summary: string) => {
    showToast(`Custom expedition request submitted! Our concierge will craft your itinerary.`);
  };

  const handleNewsletterSubscribe = (email: string) => {
    showToast(`Subscribed! 1 native tree sponsored in Knuckles reserve for ${email}.`);
  };

  const handleHeroFilterJourneys = (dest: string, style: string) => {
    if (dest !== 'all' || style !== 'all') {
      setCurrentTab('tours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(`Showing handcrafted expeditions matching your criteria.`);
    } else {
      const el = document.getElementById('tours');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTourById = (tourId: string) => {
    const found = TOURS.find((t) => t.id === tourId);
    if (found) {
      setSelectedTour(found);
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col selection:bg-secondary selection:text-on-secondary">
      {/* Global Fixed Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        currency={currency}
        onCurrencyChange={handleCurrencyChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPlanner={() => setIsPlannerOpen(true)}
      />

      {/* Main View Router */}
      <main className="w-full pt-20 bg-surface flex-1">
        {currentTab === 'home' && (
          <div className="flex flex-col w-full">
            {/* 1. Hero Section */}
            <HeroSection
              onExploreTours={() => {
                const el = document.getElementById('tours');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenPlanner={() => setIsPlannerOpen(true)}
              onFilterJourneys={handleHeroFilterJourneys}
            />

            {/* 2. Featured Experiences Section */}
            <ExperiencesSection
              onSelectExperience={(exp) => setSelectedExperience(exp)}
              onViewAllExperiences={() => {
                setCurrentTab('experiences');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 3. Popular Destinations Section */}
            <DestinationsSection
              onSelectDestination={(dest) => setSelectedDestination(dest)}
            />

            {/* 4. Signature Tours Section */}
            <ToursSection
              currency={currency}
              onSelectTour={(tour) => setSelectedTour(tour)}
            />

            {/* 5. Why Eco Travels Sri Lanka */}
            <WhyEcoTravelsSection />

            {/* 6. Sri Lanka Story (Split-Screen Editorial) */}
            <SriLankaStorySection
              onReadManifesto={() => {
                setCurrentTab('about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 7. Wildlife Safari Feature Section */}
            <WildlifeSafariSection
              onExploreWildlifeTours={() => {
                setCurrentTab('tours');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 8. Traveler Stories */}
            <TravelerStoriesSection />

            {/* 9. Travel Inspiration & Editorial Journal */}
            <JournalSection
              onSelectArticle={(art) => setSelectedArticle(art)}
              onViewAllArticles={() => {
                setCurrentTab('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 10. Call To Action Section */}
            <CtaSection
              onPlanJourney={() => setIsPlannerOpen(true)}
              onContactExpert={() => {
                setCurrentTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {currentTab === 'tours' && (
          <ToursView
            currency={currency}
            onSelectTour={(tour) => setSelectedTour(tour)}
            onOpenPlanner={() => setIsPlannerOpen(true)}
          />
        )}

        {currentTab === 'destinations' && (
          <DestinationsView
            onSelectDestination={(dest) => setSelectedDestination(dest)}
          />
        )}

        {currentTab === 'experiences' && (
          <ExperiencesView
            onSelectExperience={(exp) => setSelectedExperience(exp)}
            onOpenPlanner={() => setIsPlannerOpen(true)}
          />
        )}

        {currentTab === 'about-us' && <AboutUsView />}

        {currentTab === 'blog' && (
          <BlogView onSelectArticle={(art) => setSelectedArticle(art)} />
        )}

        {currentTab === 'contact' && (
          <ContactView
            onSubmitInquiry={(msg) => {
              showToast('Thank you! Your inquiry has been sent to our Lead Naturalist Concierge.');
            }}
          />
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSubscribeNewsletter={handleNewsletterSubscribe}
      />

      {/* Interactive Modals */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        currency={currency}
        onBookInquiry={handleBookingInquiry}
      />

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onSelectTourFromDestination={handleSelectTourById}
      />

      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onPlanExperience={(title) => {
          setIsPlannerOpen(true);
          showToast(`Added "${title}" to expedition preferences`);
        }}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onPlanTripFromArticle={() => {
          setIsPlannerOpen(true);
        }}
      />

      <TripPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        currency={currency}
        onSubmitPlan={handlePlanSubmit}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTour={(t) => setSelectedTour(t)}
        onSelectDestination={(d) => setSelectedDestination(d)}
        onSelectExperience={(e) => setSelectedExperience(e)}
        onSelectArticle={(a) => setSelectedArticle(a)}
      />

      {/* Action Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
