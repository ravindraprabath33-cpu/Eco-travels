import React, { useState } from 'react';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../data/travelData';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  onSubmitPlan: (summary: string) => void;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  currency,
  onSubmitPlan,
}) => {
  const [step, setStep] = useState(1);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([
    'Ella & Highlands',
    'Sigiriya Citadel',
  ]);
  const [duration, setDuration] = useState('8-11 Days');
  const [travelMonth, setTravelMonth] = useState('December 2026');
  const [style, setStyle] = useState('Eco-Luxury & Wildlife Safari');
  const [travelers, setTravelers] = useState(2);
  const [accommodation, setAccommodation] = useState('Luxury Eco-Lodge & Tented Camps');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const destinationsList = [
    'Ella & Highlands',
    'Sigiriya Citadel',
    'Yala National Park',
    'Galle Fort & South Coast',
    'Kandy Sacred City',
    'Mirissa Marine Sanctuary',
    'Knuckles Cloud Forest',
    'Sinharaja Primeval Rainforest',
  ];

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== dest));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  // Estimate calculation: base price per day per traveler
  const cur = CURRENCIES[currency];
  const daysEstimate = duration === '5-7 Days' ? 6 : duration === '8-11 Days' ? 10 : duration === '12-14 Days' ? 13 : 16;
  const dailyRateUSD = accommodation.includes('Ultra-Luxury') ? 380 : accommodation.includes('Luxury Eco-Lodge') ? 290 : 220;
  const estimatedTotalUSD = daysEstimate * dailyRateUSD * travelers;
  const formattedEstimate = `${cur.symbol}${Math.round(estimatedTotalUSD * cur.rate).toLocaleString()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const summary = `${fullName} (${travelers} travelers) planned ${duration} (${travelMonth}) visiting ${selectedDestinations.join(
      ', '
    )} in style: ${style}.`;
    onSubmitPlan(summary);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-surface rounded-3xl shadow-2xl overflow-hidden my-8 border border-[#002014]/10 max-h-[92vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="p-6 md:p-8 bg-primary text-on-primary border-b border-white/10 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
              Tailor-Made Expedition Builder
            </span>
            <h3 className="font-headline-md text-white font-medium text-2xl">
              Design Your Sri Lankan Journey
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Progress Step Bar */}
        <div className="bg-surface-container-low px-8 py-3 flex items-center justify-between border-b border-[#002014]/5 text-xs font-label-md">
          {[
            { num: 1, label: 'Destinations' },
            { num: 2, label: 'Duration & Window' },
            { num: 3, label: 'Travel Style' },
            { num: 4, label: 'Proposal & Estimate' },
          ].map((s) => (
            <div
              key={s.num}
              className={`flex items-center gap-2 ${
                step >= s.num ? 'text-primary font-bold' : 'text-on-surface-variant/60'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                  step === s.num
                    ? 'bg-secondary text-white'
                    : step > s.num
                    ? 'bg-primary text-white'
                    : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                {step > s.num ? '✓' : s.num}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <h4 className="font-display-md text-primary font-medium">
                Expedition Proposal Requested!
              </h4>
              <p className="font-body-lg text-on-surface-variant max-w-md">
                Our Senior Naturalist Expedition Team has received your itinerary preferences. You will receive a personalized day-by-day plan with direct pricing in {currency} within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Step 1: Destination Selection */}
              {step === 1 && (
                <div className="flex flex-col gap-4 animate-in fade-in duration-200">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-headline-sm text-primary">
                      1. Select Your Must-See Regions
                    </h4>
                    <p className="font-body-md text-on-surface-variant text-sm">
                      Choose two or more sanctuaries you wish to weave into your private route.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {destinationsList.map((d) => {
                      const isSelected = selectedDestinations.includes(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleDestination(d)}
                          className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-primary-container text-on-primary border-primary shadow-sm'
                              : 'bg-surface-container-lowest text-on-surface border-neutral-200 hover:bg-surface-container-low'
                          }`}
                        >
                          <span className="font-label-lg text-sm">{d}</span>
                          <span className="material-symbols-outlined text-[20px]">
                            {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Duration & Dates */}
              {step === 2 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-headline-sm text-primary">
                      2. Travel Duration &amp; Window
                    </h4>
                    <p className="font-body-md text-on-surface-variant text-sm">
                      How long would you like to immerse in Sri Lanka?
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Expedition Length
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['5-7 Days', '8-11 Days', '12-14 Days', '15+ Days'].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDuration(d)}
                          className={`p-3 rounded-xl border text-center font-label-md text-label-md cursor-pointer transition-colors ${
                            duration === d
                              ? 'bg-primary text-on-primary border-primary font-bold'
                              : 'bg-surface-container-lowest text-on-surface border-neutral-200 hover:bg-surface-container-low'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Preferred Travel Month
                    </label>
                    <select
                      value={travelMonth}
                      onChange={(e) => setTravelMonth(e.target.value)}
                      className="p-3 rounded-xl bg-surface-container-lowest border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary cursor-pointer"
                    >
                      <option value="November 2026">November 2026 (Monsoon transition)</option>
                      <option value="December 2026">December 2026 (Peak sunny south/west)</option>
                      <option value="January 2027">January 2027 (Ideal highland weather)</option>
                      <option value="February 2027">February 2027 (Wildlife peak &amp; whales)</option>
                      <option value="March 2027">March 2027 (Calm seas &amp; leopards)</option>
                      <option value="April 2027">April 2027 (Sinhala &amp; Tamil New Year)</option>
                      <option value="Summer 2027 (Jul-Aug)">Summer 2027 (The Minneriya Gathering)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Travel Style & Guests */}
              {step === 3 && (
                <div className="flex flex-col gap-5 animate-in fade-in duration-200">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-headline-sm text-primary">
                      3. Travel Style &amp; Party Size
                    </h4>
                    <p className="font-body-md text-on-surface-variant text-sm">
                      Tailor the expedition pacing and guest configuration.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Travel Style
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Eco-Luxury & Wildlife Safari',
                        'Private Heritage & Ancient Wonders',
                        'Ayurveda, Wellness & High Tea',
                        'Coastal & Blue Whale Sanctuary',
                      ].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setStyle(s)}
                          className={`p-3.5 rounded-xl border text-left font-label-md text-label-md cursor-pointer transition-colors flex items-center justify-between ${
                            style === s
                              ? 'bg-primary text-on-primary border-primary font-bold'
                              : 'bg-surface-container-lowest text-on-surface border-neutral-200 hover:bg-surface-container-low'
                          }`}
                        >
                          <span>{s}</span>
                          {style === s && (
                            <span className="material-symbols-outlined text-[18px]">check</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        Number of Travelers
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={16}
                        value={travelers}
                        onChange={(e) => setTravelers(Math.max(1, Number(e.target.value)))}
                        className="p-3 rounded-xl bg-surface-container-lowest border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        Preferred Accommodations
                      </label>
                      <select
                        value={accommodation}
                        onChange={(e) => setAccommodation(e.target.value)}
                        className="p-3 rounded-xl bg-surface-container-lowest border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary cursor-pointer"
                      >
                        <option value="Luxury Eco-Lodge & Tented Camps">
                          Luxury Eco-Lodges &amp; Solar Camps
                        </option>
                        <option value="Colonial Heritage Tea Bungalows">
                          Colonial Planter Tea Bungalows
                        </option>
                        <option value="Ultra-Luxury Boutique Sanctuaries">
                          Ultra-Luxury Boutique Sanctuaries
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Custom Estimate */}
              {step === 4 && (
                <div className="flex flex-col gap-6 animate-in fade-in duration-200">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-headline-sm text-primary">
                      4. Your Bespoke Estimate &amp; Details
                    </h4>
                    <p className="font-body-md text-on-surface-variant text-sm">
                      Review your tailored parameters and enter your contact details.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-2xl bg-surface-container-low border border-[#002014]/5 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center justify-between border-b border-[#002014]/5 pb-3">
                      <div>
                        <span className="font-label-sm text-secondary uppercase font-bold block">
                          Estimated Route &amp; Style
                        </span>
                        <p className="font-label-lg text-primary font-bold">
                          {selectedDestinations.join(' • ')}
                        </p>
                        <p className="font-body-md text-xs text-on-surface-variant">
                          {duration} • {travelMonth} • {travelers} Travelers
                        </p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        <span className="font-label-sm text-on-surface-variant uppercase font-medium block">
                          Estimated Total ({currency})
                        </span>
                        <span className="font-headline-md text-primary font-bold">
                          {formattedEstimate}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-secondary font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">eco</span>
                      <span>Includes 100% carbon-offset verification, private naturalist chauffeur &amp; park permits.</span>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Thorne"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="p-3 rounded-xl bg-surface-container-lowest border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. marcus@adventure.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 rounded-xl bg-surface-container-lowest border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary"
                      />
                    </div>

                    <div className="sm:col-span-2 flex flex-col gap-1.5">
                      <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                        Special Inquiries or Celebrations (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Honeymoon, dietary preferences, specific photography requests..."
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        className="p-3 rounded-xl bg-surface-container-lowest border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-[#002014]/10 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2.5 rounded-full border border-neutral-300 font-label-md text-label-md text-on-surface hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-7 py-2.5 rounded-full bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Continue</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-lg text-label-lg transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Request Custom Itinerary</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
