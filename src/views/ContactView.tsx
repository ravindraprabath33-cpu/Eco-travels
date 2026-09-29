import React, { useState } from 'react';
import { IMAGES } from '../data/travelData';

interface ContactViewProps {
  onSubmitInquiry: (msg: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onSubmitInquiry }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dates, setDates] = useState('Nov 2026 – Apr 2027');
  const [guests, setGuests] = useState('2 Guests');
  const [interests, setInterests] = useState('Wildlife & High Tea');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    onSubmitInquiry(`Inquiry from ${name} (${email}): ${interests} for ${guests}, window: ${dates}`);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="w-full flex flex-col animate-in fade-in duration-300">
      {/* Banner */}
      <section className="relative w-full -mt-20 py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={IMAGES.hero}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 pt-12 flex flex-col gap-4">
          <span className="font-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            24/7 Island Concierge &amp; Planning
          </span>
          <h1 className="font-display-lg text-white font-medium text-4xl md:text-5xl">
            Connect With Our Expedition Team
          </h1>
          <p className="font-body-xl text-surface-variant max-w-2xl text-base md:text-xl">
            Whether you are dreaming of tracking leopards in Yala, chartering a private blue whale catamaran, or enjoying a slow high-tea retreat in Ella, our resident naturalists are here to craft your bespoke journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm uppercase tracking-widest text-secondary font-bold">
                Direct Channels
              </span>
              <h2 className="font-headline-md text-primary font-medium text-3xl">
                Always Accessible
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Reach out to our English, German, and French speaking concierge team. We reply to all inquiries with bespoke proposals within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="p-6 rounded-2xl bg-surface-container-low flex items-start gap-4 border border-[#002014]/5">
                <span className="material-symbols-outlined text-secondary text-3xl shrink-0 mt-0.5">
                  support_agent
                </span>
                <div>
                  <h4 className="font-label-lg text-primary font-bold">24/7 Concierge Hotline</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mt-0.5">+94 11 234 5678</p>
                  <p className="text-xs text-on-surface-variant/70 mt-1">Available for urgent traveller support islandwide</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low flex items-start gap-4 border border-[#002014]/5">
                <span className="material-symbols-outlined text-secondary text-3xl shrink-0 mt-0.5">
                  mail
                </span>
                <div>
                  <h4 className="font-label-lg text-primary font-bold">Expedition Planning Desk</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mt-0.5">info@ecotravelssrilanka.com</p>
                  <p className="text-xs text-on-surface-variant/70 mt-1">For bespoke itineraries, private charters &amp; media</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low flex items-start gap-4 border border-[#002014]/5">
                <span className="material-symbols-outlined text-secondary text-3xl shrink-0 mt-0.5">
                  location_on
                </span>
                <div>
                  <h4 className="font-label-lg text-primary font-bold">Island Headquarters &amp; Salons</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mt-0.5">
                    Colombo: 42 Independence Avenue, Colombo 07
                  </p>
                  <p className="font-body-md text-sm text-on-surface-variant mt-1">
                    Highlands: The Hill Club Sanctuary, Kandy
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/94112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-secondary hover:bg-on-secondary-fixed text-on-secondary font-label-lg transition-colors shadow-lg cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Instant WhatsApp with Head Naturalist</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-surface-container-lowest border border-[#002014]/10 shadow-xl flex flex-col gap-6">
              <div className="flex flex-col gap-1 border-b border-[#002014]/5 pb-4">
                <span className="font-label-sm uppercase tracking-wider text-secondary font-bold">
                  Bespoke Trip Consultation
                </span>
                <h3 className="font-headline-md text-primary font-medium">
                  Request an Itinerary Proposal
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Tell us your dreams, and our curators will craft a tailored proposal.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl">verified</span>
                  </div>
                  <h4 className="font-display-md text-primary font-medium">
                    Inquiry Received!
                  </h4>
                  <p className="font-body-lg text-on-surface-variant max-w-md">
                    Thank you, {name}. Our Senior Naturalist Concierge will review your travel window and interests to assemble a private proposal within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Julian Croft"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="p-3.5 rounded-xl bg-surface-container-low border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. julian@croft.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-3.5 rounded-xl bg-surface-container-low border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +44 7911 123456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="p-3.5 rounded-xl bg-surface-container-low border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Target Travel Window
                    </label>
                    <input
                      type="text"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      className="p-3.5 rounded-xl bg-surface-container-low border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Party Size
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="p-3.5 rounded-xl bg-surface-container-low border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary cursor-pointer"
                    >
                      <option value="1 Guest (Solo Traveler)">1 Guest (Solo Traveler)</option>
                      <option value="2 Guests (Couple / Pair)">2 Guests (Couple / Pair)</option>
                      <option value="3-4 Guests (Small Family)">3-4 Guests (Small Family)</option>
                      <option value="5-8 Guests (Private Group)">5-8 Guests (Private Group)</option>
                      <option value="9+ Guests (Large Gathering)">9+ Guests (Large Gathering)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Primary Island Focus
                    </label>
                    <select
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                      className="p-3.5 rounded-xl bg-surface-container-low border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary cursor-pointer"
                    >
                      <option value="Wildlife Safari & Big Cats">Wildlife Safari &amp; Big Cats</option>
                      <option value="Ceylon Tea Country & Peaks">Ceylon Tea Country &amp; Peaks</option>
                      <option value="Ancient UNESCO Heritage">Ancient UNESCO Heritage</option>
                      <option value="Blue Whales & Secluded Beaches">Blue Whales &amp; Secluded Beaches</option>
                      <option value="Grand Island Expedition (All-Encompassing)">Grand Island Expedition</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-1.5">
                    <label className="font-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      Tell Us What Inspires You
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share any special milestones, pacing desires, dietary requirements, or specific national parks you wish to explore..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="p-3.5 rounded-xl bg-surface-container-low border border-neutral-300 text-on-surface font-body-md focus:outline-none focus:border-secondary"
                    />
                  </div>

                  <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
                      <span>No obligation. 100% confidential.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-secondary text-on-primary font-label-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Consultation Request</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
