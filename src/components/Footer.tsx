import React, { useState } from 'react';
import { ViewTab } from '../types';
import { LOGO_URL } from '../data/travelData';

interface FooterProps {
  onSelectTab: (tab: ViewTab) => void;
  onSubscribeNewsletter: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onSubscribeNewsletter }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    onSubscribeNewsletter(email);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="w-full bg-primary text-surface-variant border-t border-[#143628]">
      <div className="max-w-7xl mx-auto px-5 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Eco Travels Sri Lanka Logo"
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-on-primary leading-none">
                  Eco Travels
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed font-bold">
                  Sri Lanka
                </span>
              </div>
            </div>

            <p className="font-headline-sm text-headline-sm italic text-surface-variant max-w-sm">
              Explore responsibly. Travel deeply. Love Sri Lanka.
            </p>

            <p className="font-body-md text-body-md text-on-primary-container max-w-md">
              Pioneering regenerative luxury expeditions, private wildlife safaris, and low-impact sanctuary stays across the Pearl of the Indian Ocean.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container font-label-sm text-label-sm text-primary-fixed border border-white/5">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                GSTC Recognized
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container font-label-sm text-label-sm text-primary-fixed border border-white/5">
                <span className="material-symbols-outlined text-[14px]">hotel_class</span>
                SLTDA Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container font-label-sm text-label-sm text-primary-fixed border border-white/5">
                <span className="material-symbols-outlined text-[14px]">eco</span>
                1% For The Planet
              </span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            <div className="p-8 rounded-3xl bg-primary-container border border-white/10 shadow-lg">
              <div className="max-w-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed block mb-1 font-bold">
                  Pledge For The Earth
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-2">
                  Get Sri Lanka travel inspiration
                </h3>
                <p className="font-body-md text-body-md text-on-primary-container mb-6">
                  Receive intimate seasonal guides, conservation dispatches, and priority access to limited boutique expeditions.
                </p>

                {subscribed ? (
                  <div className="p-4 rounded-2xl bg-secondary/20 border border-secondary text-secondary-fixed flex items-center gap-3">
                    <span className="material-symbols-outlined text-2xl">eco</span>
                    <div>
                      <p className="font-label-lg font-bold text-on-primary">
                        Thank you for subscribing!
                      </p>
                      <p className="text-xs text-primary-fixed">
                        1 native sapling has been sponsored in your honor for the Knuckles Rainforest reserve.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      className="flex-1 bg-surface-container-lowest text-on-surface font-body-md text-body-md px-5 py-3 rounded-full focus:outline-none placeholder:text-on-surface-variant/60"
                      placeholder="Enter your personal email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      className="bg-secondary text-on-secondary hover:bg-on-secondary-fixed font-label-lg text-label-lg px-8 py-3 rounded-full transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md"
                      type="submit"
                    >
                      <span>Subscribe</span>
                      <span className="material-symbols-outlined text-[18px]">eco</span>
                    </button>
                  </form>
                )}

                <div className="flex items-center gap-2 mt-4 text-primary-fixed font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">nature</span>
                  <span>We plant an endemic rainforest tree in Knuckles Range for every subscriber.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-8 border-t border-[#143628]">
          <div className="flex flex-col gap-3">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-primary font-bold">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-surface-variant">
              <li onClick={() => onSelectTab('tours')} className="hover:text-on-primary transition-colors cursor-pointer">
                All Journeys
              </li>
              <li onClick={() => onSelectTab('tours')} className="hover:text-on-primary transition-colors cursor-pointer">
                Private Guided Tours
              </li>
              <li onClick={() => onSelectTab('tours')} className="hover:text-on-primary transition-colors cursor-pointer">
                Small Group Safaris
              </li>
              <li onClick={() => onSelectTab('tours')} className="hover:text-on-primary transition-colors cursor-pointer">
                Honeymoon &amp; Romance
              </li>
              <li onClick={() => onSelectTab('tours')} className="hover:text-on-primary transition-colors cursor-pointer">
                Custom Itineraries
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-primary font-bold">
              Destinations
            </h4>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-surface-variant">
              <li onClick={() => onSelectTab('destinations')} className="hover:text-on-primary transition-colors cursor-pointer">
                Ella &amp; Central Highlands
              </li>
              <li onClick={() => onSelectTab('destinations')} className="hover:text-on-primary transition-colors cursor-pointer">
                Sigiriya &amp; Cultural Triangle
              </li>
              <li onClick={() => onSelectTab('destinations')} className="hover:text-on-primary transition-colors cursor-pointer">
                Yala &amp; Southern Wildlife
              </li>
              <li onClick={() => onSelectTab('destinations')} className="hover:text-on-primary transition-colors cursor-pointer">
                Galle &amp; South Coast
              </li>
              <li onClick={() => onSelectTab('destinations')} className="hover:text-on-primary transition-colors cursor-pointer">
                Kandy &amp; Knuckles
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-primary font-bold">
              Experiences
            </h4>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-surface-variant">
              <li onClick={() => onSelectTab('experiences')} className="hover:text-on-primary transition-colors cursor-pointer">
                Wildlife Safaris
              </li>
              <li onClick={() => onSelectTab('experiences')} className="hover:text-on-primary transition-colors cursor-pointer">
                Organic Tea Estates
              </li>
              <li onClick={() => onSelectTab('experiences')} className="hover:text-on-primary transition-colors cursor-pointer">
                Ancient Heritage
              </li>
              <li onClick={() => onSelectTab('experiences')} className="hover:text-on-primary transition-colors cursor-pointer">
                Surfing &amp; Whale Watching
              </li>
              <li onClick={() => onSelectTab('experiences')} className="hover:text-on-primary transition-colors cursor-pointer">
                Ayurveda &amp; Wellness
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-primary font-bold">
              Company
            </h4>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-surface-variant">
              <li onClick={() => onSelectTab('about-us')} className="hover:text-on-primary transition-colors cursor-pointer">
                Our Story
              </li>
              <li onClick={() => onSelectTab('about-us')} className="hover:text-on-primary transition-colors cursor-pointer">
                Sustainability Pledge
              </li>
              <li onClick={() => onSelectTab('about-us')} className="hover:text-on-primary transition-colors cursor-pointer">
                Carbon Neutral Travel
              </li>
              <li onClick={() => onSelectTab('about-us')} className="hover:text-on-primary transition-colors cursor-pointer">
                Guide Team
              </li>
              <li onClick={() => onSelectTab('about-us')} className="hover:text-on-primary transition-colors cursor-pointer">
                Impact Reports
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-primary font-bold">
              Contact
            </h4>
            <div className="flex flex-col gap-3 font-body-md text-body-md">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary mt-1 shrink-0">
                  support_agent
                </span>
                <div>
                  <p className="font-label-md text-label-md text-on-primary">24/7 Concierge Hotline</p>
                  <p className="text-surface-variant">+94 11 234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary mt-1 shrink-0">
                  mail
                </span>
                <div>
                  <p className="font-label-md text-label-md text-on-primary">Email Desk</p>
                  <p className="text-surface-variant break-all">info@ecotravelssrilanka.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary mt-1 shrink-0">
                  location_on
                </span>
                <div>
                  <p className="font-label-md text-label-md text-on-primary">Offices</p>
                  <p className="text-surface-variant">Colombo 07 &amp; Kandy Hill Club</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/94112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-fixed transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-body-md text-body-md text-on-primary-container border-t border-[#143628]">
          <p>© 2026 Eco Travels Sri Lanka. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 font-label-md text-label-md">
            <span className="hover:text-on-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-on-primary transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-on-primary transition-colors cursor-pointer">Responsible Travel Charter</span>
          </div>
          <div className="flex items-center gap-3 text-surface-variant">
            <a
              href="https://wa.me/94112345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-primary-container hover:bg-secondary hover:text-on-secondary flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
            <span
              title="Instagram"
              className="w-9 h-9 rounded-full bg-primary-container hover:bg-secondary hover:text-on-secondary flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </span>
            <span
              title="Share"
              className="w-9 h-9 rounded-full bg-primary-container hover:bg-secondary hover:text-on-secondary flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
            </span>
            <span
              title="Video Documentaries"
              className="w-9 h-9 rounded-full bg-primary-container hover:bg-secondary hover:text-on-secondary flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">smart_display</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
