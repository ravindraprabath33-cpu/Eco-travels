import React, { useState } from 'react';
import { ViewTab, CurrencyCode } from '../types';
import { LOGO_URL, CURRENCIES } from '../data/travelData';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  currency: CurrencyCode;
  onCurrencyChange: (c: CurrencyCode) => void;
  onOpenSearch: () => void;
  onOpenPlanner: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  currency,
  onCurrencyChange,
  onOpenSearch,
  onOpenPlanner,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; tab: ViewTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'Tours', tab: 'tours' },
    { label: 'Destinations', tab: 'destinations' },
    { label: 'Experiences', tab: 'experiences' },
    { label: 'About Us', tab: 'about-us' },
    { label: 'Blog', tab: 'blog' },
    { label: 'Contact', tab: 'contact' },
  ];

  const handleNavClick = (tab: ViewTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f2fcf5]/85 backdrop-blur-xl transition-all duration-300 shadow-[0_16px_36px_-12px_rgba(15,41,30,0.08),0_4px_12px_-2px_rgba(15,41,30,0.03)] border-b border-[#002014]/5">
        <div className="h-20 max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <img
                src={LOGO_URL}
                alt="Eco Travels Sri Lanka Logo"
                className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-none group-hover:text-secondary transition-colors">
                  Eco Travels
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  Sri Lanka
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#ecf6ef]/80 p-1.5 rounded-full border border-[#002014]/5">
            {navItems.map((item) => {
              const isActive = currentTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`px-4 py-1.5 rounded-full font-label-md text-label-md transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-[#ffffff]/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls: Currency, Search, Plan Journey CTA */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Currency Selector */}
            <div className="relative inline-block">
              <label className="sr-only" htmlFor="currency-select">
                Currency
              </label>
              <select
                id="currency-select"
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                className="appearance-none bg-[#ecf6ef] hover:bg-[#e6f0ea] text-on-surface font-label-md text-label-md pl-3 pr-7 py-2 rounded-full focus:outline-none cursor-pointer transition-colors border border-transparent focus:border-secondary"
              >
                {Object.values(CURRENCIES).map((cur) => (
                  <option key={cur.code} value={cur.code}>
                    {cur.label}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
                expand_more
              </span>
            </div>

            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search expeditions"
              className="w-10 h-10 rounded-full bg-[#ecf6ef] hover:bg-[#e6f0ea] flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              title="Search expeditions & guides"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* Plan Your Journey CTA Button */}
            <button
              onClick={onOpenPlanner}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg px-5 py-2.5 rounded-full hover:to-secondary transition-all transform hover:-translate-y-0.5 shadow-[0_12px_24px_-8px_rgba(20,54,40,0.35)] cursor-pointer whitespace-nowrap"
            >
              <span>Plan Your Journey</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            {/* Contact / Concierge Profile Button */}
            <button
              onClick={() => handleNavClick('contact')}
              aria-label="Concierge Contact Desk"
              title="24/7 Concierge Desk"
              className="w-8 h-8 rounded-full bg-primary hover:bg-secondary flex items-center justify-center shrink-0 transition-colors cursor-pointer text-on-primary"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="xl:hidden w-10 h-10 rounded-full bg-[#ecf6ef] flex items-center justify-center text-on-surface hover:text-primary cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-low border-b border-[#002014]/10 px-6 py-4 flex flex-col gap-2 shadow-lg animate-in fade-in duration-200">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`text-left px-4 py-2.5 rounded-xl font-label-lg text-label-lg transition-colors cursor-pointer flex items-center justify-between ${
                  currentTab === item.tab
                    ? 'bg-primary text-on-primary font-semibold'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            ))}
            <div className="pt-2 border-t border-[#002014]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full bg-secondary text-on-secondary font-label-lg py-3 rounded-full flex items-center justify-center gap-2"
              >
                <span>Plan Your Journey</span>
                <span className="material-symbols-outlined text-[18px]">explore</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
