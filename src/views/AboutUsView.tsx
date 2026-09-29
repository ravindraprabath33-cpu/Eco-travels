import React from 'react';
import { NATURALIST_GUIDES, IMAGES } from '../data/travelData';

export const AboutUsView: React.FC = () => {
  return (
    <div className="w-full flex flex-col animate-in fade-in duration-300">
      {/* Banner */}
      <section className="relative w-full -mt-20 py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={IMAGES.planting}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 pt-12 flex flex-col gap-4">
          <span className="font-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            Our Purpose &amp; Guardianship
          </span>
          <h1 className="font-display-lg text-white font-medium text-4xl md:text-5xl">
            Guardians of the Sacred Isle
          </h1>
          <p className="font-body-xl text-surface-variant max-w-2xl text-base md:text-xl">
            We are a collective of Sri Lankan botanists, wildlife researchers, archaeologists, and local communities dedicated to protecting our island’s irreplaceable natural and cultural heritage.
          </p>
        </div>
      </section>

      {/* The Conservation Manifesto */}
      <section className="w-full py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-5 md:px-12 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-label-sm uppercase tracking-widest text-secondary font-bold">
              Our Founding Creed
            </span>
            <h2 className="font-display-md text-primary font-medium">
              The Eco Travels Sri Lanka Manifesto
            </h2>
          </div>

          <div className="font-body-xl text-on-surface leading-relaxed flex flex-col gap-6 text-lg">
            <p>
              Sri Lanka is not merely a vacation destination—it is a sacred repository of 3,000 years of hydraulic civilization, endemic flora found nowhere else on planet Earth, and sanctuary for magnificent cetaceans and Asian elephants.
            </p>
            <p>
              Traditional tourism often extracts value without leaving renewal. At Eco Travels, every expedition is designed from first principles to be <strong>regenerative</strong>. That means:
            </p>

            <ul className="flex flex-col gap-4 font-body-md text-base text-on-surface-variant pl-4 border-l-2 border-secondary">
              <li>
                <strong className="text-primary">100% Carbon Balanced:</strong> We calculate total ground and accommodation carbon emissions for every traveler and balance them through certified regional micro-hydro and Knuckles forest restoration projects.
              </li>
              <li>
                <strong className="text-primary">Community Wealth Retention:</strong> 85% of your trip investment stays directly in rural host communities—compensating organic farmers, licensed boatmen, hereditary artisans, and local temple preservation trusts.
              </li>
              <li>
                <strong className="text-primary">Zero Animal Exploitation:</strong> We strictly prohibit elephant riding, captive animal interactions, or intrusive wildlife pursuit. We view nature with quiet reverence.
              </li>
              <li>
                <strong className="text-primary">Leave No Plastic Behind:</strong> We provide travelers with custom stainless-steel insulated bottles and filtered mountain water stations throughout all transit vehicles.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meet Our Naturalists */}
      <section className="w-full py-20 bg-surface-container-low border-y border-[#002014]/5">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-sm uppercase tracking-widest text-secondary font-bold">
              Field Specialists
            </span>
            <h2 className="font-display-md text-primary font-medium">
              Meet Our Lead Naturalists
            </h2>
            <p className="font-body-lg text-on-surface-variant">
              Your journeys are guided by university lecturers, published researchers, and veteran trackers who have spent lifetimes studying Sri Lanka's flora and fauna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NATURALIST_GUIDES.map((guide) => (
              <div
                key={guide.id}
                className="p-6 rounded-3xl bg-surface-container-lowest border border-[#002014]/5 shadow-sm flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-3">
                  <div className="h-44 rounded-2xl overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-primary text-lg font-bold">
                      {guide.name}
                    </h3>
                    <p className="font-label-sm text-secondary font-semibold">
                      {guide.role}
                    </p>
                  </div>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                    {guide.bio}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#002014]/5 flex items-center justify-between text-xs font-label-sm text-on-surface-variant">
                  <span>{guide.experienceYears} Years Field Exp.</span>
                  <span className="text-secondary font-bold">Verified Naturalist</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-5 md:px-12 flex flex-col items-center text-center gap-6">
          <span className="font-label-sm uppercase tracking-widest text-secondary font-bold">
            Official Accreditations
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-4">
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-secondary">verified</span>
              <span className="font-label-sm font-bold text-primary">GSTC Recognized</span>
              <span className="text-xs text-on-surface-variant">Global Sustainable Tourism</span>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-secondary">hotel_class</span>
              <span className="font-label-sm font-bold text-primary">SLTDA Diamond</span>
              <span className="text-xs text-on-surface-variant">Tourism Development Authority</span>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-secondary">co2</span>
              <span className="font-label-sm font-bold text-primary">Climate Neutral</span>
              <span className="text-xs text-on-surface-variant">Third-Party Audited</span>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-secondary">eco</span>
              <span className="font-label-sm font-bold text-primary">1% For The Planet</span>
              <span className="text-xs text-on-surface-variant">Knuckles Reforestation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
