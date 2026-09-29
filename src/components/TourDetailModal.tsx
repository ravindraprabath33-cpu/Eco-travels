import React, { useState } from 'react';
import { Tour, CurrencyCode } from '../types';
import { CURRENCIES } from '../data/travelData';

interface TourDetailModalProps {
  tour: Tour | null;
  onClose: () => void;
  currency: CurrencyCode;
  onBookInquiry: (tourTitle: string, name: string, guests: number, date: string) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  onClose,
  currency,
  onBookInquiry,
}) => {
  const [activeDay, setActiveDay] = useState<number | null>(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [travelDate, setTravelDate] = useState('2026-11-15');
  const [guests, setGuests] = useState(2);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!tour) return null;

  const cur = CURRENCIES[currency];
  const pricePerPerson = Math.round(tour.basePriceUSD * cur.rate);
  const totalPrice = pricePerPerson * guests;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    onBookInquiry(tour.title, name, guests, travelDate);
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-surface rounded-3xl shadow-2xl overflow-hidden my-8 border border-[#002014]/10 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="relative h-64 md:h-80 w-full shrink-0 overflow-hidden">
          <img
            src={tour.image}
            alt={tour.altText}
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
            <div className="flex flex-wrap items-center gap-2 font-label-sm text-label-sm">
              <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full font-bold">
                {tour.duration}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full">
                Route: {tour.route}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">eco</span>
                100% Carbon Neutral
              </span>
            </div>
            <h2 className="font-headline-lg text-white font-medium text-2xl md:text-3xl">
              {tour.title}
            </h2>
            <p className="font-body-md text-surface-variant text-sm md:text-base line-clamp-1">
              {tour.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-8">
          {/* Overview Section */}
          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-primary">Expedition Overview</h3>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              {tour.overview}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {tour.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-semibold"
                >
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>

          {/* Day by Day Itinerary */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-primary">Day-by-Day Journey</h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {tour.itinerary.length} Days Planned
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {tour.itinerary.map((item) => {
                const isOpen = activeDay === item.day;
                return (
                  <div
                    key={item.day}
                    className="border border-[#002014]/10 rounded-2xl overflow-hidden bg-surface-container-lowest"
                  >
                    <button
                      onClick={() => setActiveDay(isOpen ? null : item.day)}
                      className="w-full text-left p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center font-label-md text-xs">
                          {item.day}
                        </span>
                        <div>
                          <p className="font-label-lg font-semibold text-primary">
                            {item.title}
                          </p>
                          <p className="font-label-sm text-secondary">
                            {item.location}
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        {isOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="p-4 pt-1 border-t border-[#002014]/5 bg-surface-container-lowest flex flex-col gap-3 animate-in fade-in duration-150">
                        <p className="font-body-md text-on-surface-variant">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface flex items-center gap-1 font-medium"
                            >
                              <span className="material-symbols-outlined text-[14px] text-secondary">
                                stars
                              </span>
                              {h}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-on-surface-variant flex items-center gap-1 pt-1">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            night_shelter
                          </span>
                          <span>Overnight stay: <strong className="text-primary">{item.stay}</strong></span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low p-6 rounded-3xl border border-[#002014]/5">
            <div className="flex flex-col gap-3">
              <h4 className="font-label-lg uppercase tracking-wider text-primary font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                Included with Eco Travels
              </h4>
              <ul className="flex flex-col gap-2 font-body-md text-xs md:text-sm text-on-surface-variant">
                {tour.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-label-lg uppercase tracking-wider text-primary font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-[20px]">cancel</span>
                Not Included
              </h4>
              <ul className="flex flex-col gap-2 font-body-md text-xs md:text-sm text-on-surface-variant">
                {tour.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-outline mt-0.5">•</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reservation / Inquiry Form */}
          <div className="bg-primary text-on-primary p-6 md:p-8 rounded-3xl flex flex-col gap-6 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-label-sm uppercase tracking-widest text-secondary-fixed block font-bold">
                  Custom Private Departure
                </span>
                <h4 className="font-headline-md text-white font-medium">
                  Reserve Your Dates
                </h4>
              </div>
              <div className="text-right">
                <span className="font-label-sm uppercase tracking-wider text-surface-variant block">
                  Per Person Rate
                </span>
                <span className="font-headline-md text-secondary-fixed font-bold">
                  {cur.symbol}{pricePerPerson.toLocaleString()}
                </span>
              </div>
            </div>

            {bookingSuccess ? (
              <div className="p-6 rounded-2xl bg-secondary/30 border border-secondary text-center flex flex-col items-center gap-2 animate-in zoom-in-95 duration-200">
                <span className="material-symbols-outlined text-4xl text-secondary-fixed">
                  verified
                </span>
                <h5 className="font-headline-sm text-white">Inquiry Received!</h5>
                <p className="font-body-md text-surface-variant max-w-md">
                  Our Lead Naturalist Concierge will prepare your customized {tour.title} proposal and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm uppercase tracking-wider text-surface-variant font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary font-body-md"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm uppercase tracking-wider text-surface-variant font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@traveler.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary font-body-md"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm uppercase tracking-wider text-surface-variant font-semibold">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-secondary font-body-md"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm uppercase tracking-wider text-surface-variant font-semibold">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="p-3 rounded-xl bg-[#002014] border border-white/20 text-white focus:outline-none focus:border-secondary font-body-md cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest (Solo)' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="font-label-sm text-surface-variant block">Estimated Total ({guests} guests)</span>
                    <span className="font-headline-sm text-white font-bold">
                      {cur.symbol}{totalPrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-lg text-label-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Bespoke Proposal</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
