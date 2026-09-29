import { Tour, Destination, Experience, Article, Testimonial, NaturalistGuide, CurrencyConfig } from '../types';

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.78, label: 'GBP (£)' },
  LKR: { code: 'LKR', symbol: 'Rs ', rate: 305.0, label: 'LKR (Rs)' },
};

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1VA6UWVci0k-sNr833954WKLLJFH4CzM2gxViW--UZW-qs0bGLbTZKHfsR26eO0qkMFJ2nwy3tyUEyIbFfu-XDx3HN-G7ds3QqMUe5JQDCXi9NyhytCxdKmSsnFwxPQ6ZCqSMWRivtJ1Jo1xxg4WKZH4Hb1KkX9IeDO3iWf4kk4Oqjb6NqkUReBS1QSO9SS46fKxVfY-zHmq4gHND2CT7RSAwZYP4fokUVL06wTrkECxhzz-RJxbxdx6jVn";

export const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8uvEnURveEd0EbCgjKrcVb2bpkivV7jI2huQuUfU6Rd281IwUxoTxlNMVhNTBiFm2pmn4oUOYtP9r5EAe3Ss6xfyChnHe9T1N5-Q5DByyYUVxVJfWXCxLduzKQVUikJ1q-ud4HXq3oGC5KFTlrAIfwXCIRN00TS9MzYimShUZA3i658OMdosNKtj9B_awylgZ_bwgAsdRrCz9Li1NBp5F4shaoaLa4B4ZF8aLbNu4vj76j9P6s3araA",
  elephant: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpoefjIPLDRXelNQrFdDjBMH_SnAaRcVfi3gsednhezdoXr6aPVh7kZKxM2qteqyA_XAaX_HBDd3rq_JSR6r6e6UL-9KJBV1Kv6zhrzN7u1WDhFtae9sHANVSEBLDrHN3pPRFpWCP39SLM21RUSI140QXwc-gsP9xXg9m5W0FQwY0rokCPmTbKxCplCsJv760FaoRyqJfEKz9BCKOVjURXcrCHBxxRxySV7vAOJVQMzOTI8QSL26KV0Q",
  beach: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvlkkqb6jRLT4jMj7W4Bam23CZ8rbQV6G1P94lSlgRphLaYuXfeiWxhmoGeNa0RQU0jsSKrY-PCz1RrB8Fofz-ZbVjuF7Xv8aJtcziwqSDCTiE4iZ0GdDd9z8qzc5B4FMOjE_m8DmRl9FcokrOyW4FykIzcW48oklCUnBsUlAt12lmqaC4N4ANQy78aF-F16by4ao6uMGiT9RZ3emU_Tu3DXT63BkbYAomCZP58S4AGMvVjiiG5caJ6g",
  sigiriya: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3DcDc-NotJ-gXssgzRoXM67aIO1FJ8-72z8lmg5OLn0gFBp8rFT-v4LXdgDA-dhBx86sIhvuEBydb2VGSWhPbiTf1uRXcdTaaL24k0Uc10EEHJY6NZQIeXJnHaWYHKg6POoNAzUgsTL7veTXDX_Ea9kDmyGhUW8w_FaFHtwqjCOk6gy-u6NvnPteuaUJqLILEWOiPPd7LV8AZjRoJQgFjWM0o1fIjqr5dycWuetViS_F7zyLzgMlGCg",
  knuckles: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxSCty7k3MRmg1dI-KxsNoAlHm5UoMF1apaGgMyU4dh4HfOUAtph06Hn9mPTObrI170cLJ0F3TnBrJjxY6N1l3PVKEPrxfnjNLD0ZN1ROLFiF3kV5d8ixhdEVzh5KFhoVZ-sXhopdP092Qb_mNVRIctqAUXD_qbT_3Hb9PwmEJGBsnizW_CAi6wGJsdF7WHT0f8Fm8KnXcuWTRWsGTi4szGoueS49bb2ZfBePbbkh9QG1F5kKcHi9mNA",
  planting: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNy82KaTimaM_82gyDZCSUzU2crEd79R7UGNLX29d-C4Z7oR7W4gQ4SLJurkqVhXAHWSDTqVr0bN4CyRVc2jUY_7_GX2ibu7-RDLACvt7BkiPFhVTKqfqGVrRqyfDxGbhxlTT8AE8uEU7XJ23CCYgsTPv1v2PlEJXM1ULv4dVyB3wpkXtN-9PUKaoVzauT0sAe7q4tTyR18UU58BcdYQqFnbhXQbpPRg7KxqPSNPLBoZPn4Gb4g17Ycw",
  galle: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBke-HnXnMprmxHe4biUKq5axh-2fnU2qQS5_PHO5q9WCfNtA0vnXUoVSNkyOPMN0nbbERzpUJW_MaICVv6enY69p8KQamLrs6tj6HpuL4zPnsWLKOeRlcLc5L8OYu_qde8DcKggWnzFbXYmZbwWyv5oKTtwuSE23-5NIQJ27uYLbZ0U_wOpg6cUDP9RTdeJ9tWd_o3opuKPMgu6fc_YV26gK2H7xCWqXdhNYLi5fqGSUmLUeI9pr3Wg",
  kandy: "https://lh3.googleusercontent.com/aida-public/AB6AXuAje9ev7QLPV7hu6o9F-llXHfkNm3F5ZvgpV5VhSKOWJWshkXYpsrd3WdWYVYFZs_Bt8kkWgoHRZGmHoTly5Bjf-DvjJoZDhlLl3RnCSkKYXfT6Eg26ytv3ce3mr7JkE57YK0wLbrZH9Kw6FM6PyDMkUkybR3mo8WRbIt660kgocPwNvGWgmjagNXi72Du0-4oHVYY69N25NhIdfbEAdwsC7skxlwqhhIMuLHzlR53iMbSuiaijhKYWqw",
  mirissa: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Jo0ZZW2e6sm3eyNMTREd4FBel6succcyJK-J8O0lc3BFymsEwJVth0nPvojE5SAkSVm4zTd-k50bpVC3FAeyNugNqDXCGt9kmPG4A4G7FMzEJrVZ0suQ_xouQ8cdMCKszMfg5jQG-rrIolchDp4zkF-m7uv4DyqoCw5oiOoD-d7TIW5C8FJ5incHT8EGSJTG4m0R_798hfEgNvVi93SGfnsxIXqbTOV8BN9GT06SqOwxwr8o_R4_xw",
  whale: "https://lh3.googleusercontent.com/aida-public/AB6AXuAakuCRjr6Gnf41rSIwx1jRRFT9_ElmXiD5BnSQHMWjOf4eK3XlGA_iavl-C1ldrejxotj5bFu4o9-I9Eitdb2c-IuUYA_pRmmYtUIAYGirYbq-EdQW8MKFhRbFgvO5kMyi2zQOieBqLE7HG-6W0NMnF3MGVfeALixkD5Pnni11v9_Os3QSN4edbI0VhUk8C4B9uPN6eXYOzA6a320LEaBYkmR_i0jcEl9QoonoHCJkP6jrkoJztFA3nA",
  monsoon: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Sh26ZW052nAtukqZpTZQiC4VQPdKW5L4rc4SXOjZ0AOzoLG5VDuczRCU2TiEQqYy31e2k-0UtDI5oZ2FhDSc5jiAKMhvFMksIIbnpfRzgFjgLn4tDOYZjd6IlUTCDZjXkbsFvkxBWSEh8Xb0y1yntziWqrPvKnlBRNcjKTacTNpkJVjgJIgTf-UjrgqAa1he_NvIXqAIPLrHuUHx3OwIsnV2il9bpOINyNZw3iATq03svc2NPCDndg",
  food: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1WYe6Xz3j1p1dykkm5IuAs1W2jF1bMugWC7h_JxEt_DBrCs96LHyIyTU9JDdGo2fDShDbledzmBVoJZ1iv2mXC0QLJ2dYT29usy2oVo-iKePgdauPc4zguGtfYpMvgPvYWoKV3dLlQA6G82t0hDuuFauLugCz9XaOTSzZSt10O55pPfGXYsH-Bibx32rfrWFhr7syOQFrOsHKh7vdVhwnO868-ysJUOK5pV_U3rFtLMuZisJCfUEY-w",
  valley: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvonJWHK8meNT7bD1nvcFlOqZZip98o11O1cRmECCuGiKZQyg94-eTPauIxkEcSbpf1oDXqruXQvrlNd61b82LHrLO4IONSUw7uIHKVwQyILUx-Sdwqzg7wY_7iQE16EGU7EqOjl1wRT70LcwVukcMGL53vO2FcmlYdr93wV5FUzLmT-lnzabsqPQcJ-QV26UtBNtVpvcxO65YUPfK2mJv12ixYgF1MK5O3BJcP4Mqwtmc-izLEwiNUA",
};

export const TOURS: Tour[] = [
  {
    id: 'wild-sri-lanka',
    title: 'Wild Sri Lanka Adventure',
    subtitle: 'Track elusive leopards and giants of the grassland with master naturalists',
    duration: '8 Days / 7 Nights',
    daysCount: 8,
    route: 'Yala • Wilpattu • Minneriya',
    basePriceUSD: 2450,
    rating: 4.99,
    reviewCount: 142,
    image: IMAGES.elephant,
    altText: 'Majestic wild tusker elephant in Sri Lankan national park near calm lake at sunset',
    carbonOffsetPercent: 100,
    maxGuests: 8,
    style: 'Wildlife',
    tags: ['Leopard Tracking', 'Luxury Tents', 'Max 8 Guests'],
    overview: 'An uncompromising expedition through Sri Lanka’s premier biodiversity sanctuaries. Sleep in solar-powered luxury tented lodges bordering deep jungle reserves, venture on dawn and dusk 4x4 safaris with dedicated wildlife researchers, and witness the awe-inspiring congregation of wild elephants at Minneriya tank.',
    inclusions: [
      'All luxury tented lodge accommodations with private en-suite amenities',
      'Exclusive-use 4x4 safari vehicles with certified Dept. of Wildlife naturalists',
      'All national park entry permits, conservation fees, and community levies',
      'Full-board farm-to-table organic dining with complimentary Ceylon tea & artisanal snacks',
      'Binocular kits, spotlight night walks, and carbon-neutral private airport transfers'
    ],
    exclusions: [
      'International flights to Colombo (CMB)',
      'Travel insurance (mandatory)',
      'Discretionary guide gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Negombo & Wildlife Orientation',
        location: 'Negombo Coastal Sanctuary',
        description: 'Arrive at Bandaranaike International Airport. Private transfer to a serene lagoon-side eco lodge. Evening welcome briefing and briefing on ethical wildlife viewing protocols with Lead Naturalist Chaminda Senanayake.',
        highlights: ['Private check-in', 'Lagoon sunset boat trail', 'Expedition orientation dinner'],
        stay: 'Water Garden Lagoon Eco-Retreat'
      },
      {
        day: 2,
        title: 'Journey to Wilpattu National Park',
        location: 'Wilpattu Biosphere',
        description: 'Scenic drive northward toward Sri Lanka’s oldest and largest national park, famed for natural sand-rimmed water basins (villus). Check into our secluded luxury bush camp beneath ancient palu trees.',
        highlights: ['Scenic country transit', 'First villu birding walk', 'Starlight bonfire dining'],
        stay: 'Wilpattu Wilderness Safari Camp'
      },
      {
        day: 3,
        title: 'Dawn Tracking of the Sri Lankan Leopard',
        location: 'Wilpattu Deep Forest',
        description: 'Pre-dawn coffee before entering the park at opening gates. Track panthera pardus kotiya along sand rim villus. Midday rest during the jungle heat, followed by an afternoon game drive seeking sloth bears and barking deer.',
        highlights: ['Leopard tracking in prime habitat', 'Picnic brunch in shaded grove', 'Nocturnal amphibian trail'],
        stay: 'Wilpattu Wilderness Safari Camp'
      },
      {
        day: 4,
        title: 'The Great Minneriya Elephant Gathering',
        location: 'Minneriya Ancient Reservoir',
        description: 'Cross into the dry zone toward Minneriya. Here, in the bed of an ancient 3rd-century reservoir, up to 300 wild elephants gather to socialize, graze on sweet grasses, and bathe in golden twilight.',
        highlights: ['The largest elephant gathering in Asia', 'Elephant family behavioral observation', 'Sunset over Minneriya lake'],
        stay: 'Cinnamon Nature Sanctuary Lodge'
      },
      {
        day: 5,
        title: 'Southward Traverse to Yala Scrublands',
        location: 'Southern Wilderness Corridor',
        description: 'Descend south through scenic rubber and coconut country toward Yala National Park. Arrive at our premier low-impact solar safari lodge tucked amidst coastal dunes and scrub forest.',
        highlights: ['Scenic southern drive', 'Afternoon coastal dune walk', 'Conservation talk on human-elephant harmony'],
        stay: 'Yala Dunes Eco Tented Camp'
      },
      {
        day: 6,
        title: 'Full Day Safari: Yala Block 1 & Quiet Corridors',
        location: 'Yala National Park',
        description: 'Enter Yala before visitor rush. Our seasoned trackers utilize quiet peripheral tracks to search for apex leopards sunbathing on granite monoliths, spotted deer herds, and marsh crocodiles.',
        highlights: ['Granite boulder leopard sightings', 'Sri Lanka junglefowl and hornbills', 'Bush dinner beneath the Milky Way'],
        stay: 'Yala Dunes Eco Tented Camp'
      },
      {
        day: 7,
        title: 'Bundala Wetland Ramble & Coastal Serenity',
        location: 'Bundala UNESCO Biosphere',
        description: 'Morning excursion to Bundala, an internationally celebrated Ramsar wetland hosting thousands of migratory flamingos, spoonbills, and sea turtles. Afternoon at leisure overlooking the Indian Ocean.',
        highlights: ['400+ avian species in salt pans', 'Rare grey langur troop watching', 'Farewell beach bonfire'],
        stay: 'Yala Dunes Eco Tented Camp'
      },
      {
        day: 8,
        title: 'Return to Colombo & Homeward Departure',
        location: 'Southern Expressway to Colombo',
        description: 'Comfortable transfer via the southern expressway to Colombo or airport. Commemorative Knuckles reforestation certificate presented with GPS coordinates of your planted tree.',
        highlights: ['Souvenir spice gift box', 'Direct airport departure transfer'],
        stay: 'Departure'
      }
    ],
    featured: true
  },
  {
    id: 'tea-trails-mountains',
    title: 'Tea Trails & Mountain Escapes',
    subtitle: 'First-class heritage railway, restored colonial planter bungalows, and cloud forest waterfalls',
    duration: '6 Days / 5 Nights',
    daysCount: 6,
    route: 'Ella • Nuwara Eliya • Hatton',
    basePriceUSD: 1890,
    rating: 4.97,
    reviewCount: 98,
    image: IMAGES.hero,
    altText: 'Nine arch bridge in Ella with blue train crossing high arched bridge through green tea fields',
    carbonOffsetPercent: 100,
    maxGuests: 6,
    style: 'Highlands & Tea',
    tags: ['First Class Train', 'Tea Sommelier', 'Waterfall Treks'],
    overview: 'Slow travel at its finest. Board the historic blue highland train as it snakes along steep misty ravines and waterfalls. Unpack in romantic stone planters’ bungalows, sip rare hand-plucked white silver tips with certified tea masters, and hike to cascading falls through ancient mountain passes.',
    inclusions: [
      '5 nights luxury accommodation in historic Ceylon tea planter bungalows',
      'Reserved first-class observation car train tickets through highland passes',
      'Private masterclass with artisanal tea maker & private factory access',
      'Daily guided walks, sunrise Little Adam’s Peak trek, and waterfall picnics',
      'Chauffeured climate-controlled Mercedes hybrid with English naturalist guide'
    ],
    exclusions: [
      'International flights',
      'Discretionary gratuities',
      'Personal boutique purchases'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ascent into the Misty Highlands',
        location: 'Kandy to Hatton',
        description: 'Leave the tropical lowlands behind and ascend into the cool, emerald slopes of Hatton. Check into a restored 19th-century planter estate surrounded by manicured rose gardens and tea bushes.',
        highlights: ['Dramatic altitude rise', 'High tea on private estate lawn', 'Fireside gourmet Ceylon dinner'],
        stay: 'Ceylon Tea Trails Heritage Estate'
      },
      {
        day: 2,
        title: 'The Art of Artisan Single-Estate Tea',
        location: 'Bogawantalawa Golden Valley',
        description: 'Join estate pluckers at dawn to learn the two-leaves-and-a-bud technique. Tour an active heritage orthodox factory dating to 1890. Conclude with an expert sommelier comparative cupping of golden orange pekoes and rare silver tips.',
        highlights: ['Hands-on tea plucking', 'Orthodox drying & rolling masterclass', 'Private 8-flight tea cupping session'],
        stay: 'Ceylon Tea Trails Heritage Estate'
      },
      {
        day: 3,
        title: 'The Iconic Highland Railway to Ella',
        location: 'Hatton to Ella Station',
        description: 'Board the world-famous highland train from Hatton to Ella. Sit back as panoramic windows frame tumbling cascading waterfalls, misty ravines, and waving village children beside railway stations.',
        highlights: ['World’s most scenic railway journey', 'Spectacular bridge crossings', 'Arrival in bohemian mountain haven Ella'],
        stay: '98 Acres Luxury Mountain Chalets'
      },
      {
        day: 4,
        title: 'Nine Arch Bridge Dawn Walk & Little Adam’s Peak',
        location: 'Ella Valley',
        description: 'Walk through dewy tea paths to witness the steam and diesel train pass over the 1921 British Nine Arch Viaduct without a single piece of steel. Afternoon hike to Little Adam’s Peak for 360-degree vistas across Ella Gap.',
        highlights: ['Nine Arch Viaduct photograph at golden hour', 'Ella Gap dramatic panorama', 'Evening organic herb cocktails'],
        stay: '98 Acres Luxury Mountain Chalets'
      },
      {
        day: 5,
        title: 'Secret Ravana Falls & Organic Highland Farming',
        location: 'Ella Southern Ridge',
        description: 'Hike to secluded natural swimming pools above the roar of Ravana Falls. Enjoy a farm-to-table lunch at an organic heirloom spice and vegetable smallholding supported by Eco Travels.',
        highlights: ['Wild mountain freshwater swim', 'Village cooking masterclass with village matriarch', 'Stargazing at 1,500m elevation'],
        stay: '98 Acres Luxury Mountain Chalets'
      },
      {
        day: 6,
        title: 'Descent to Colombo or Coastal Extension',
        location: 'Southern Descent',
        description: 'Savor a leisurely breakfast on the terrace. Private transfer down the mountain passes to Colombo airport or onward to your southern beach villa.',
        highlights: ['Scenic descent passing rubber and spice estates', 'Gift box of single-estate Pekoe'],
        stay: 'Departure / Extension'
      }
    ]
  },
  {
    id: 'cultural-heritage-journey',
    title: 'Cultural Heritage Journey',
    subtitle: 'Ascend Sigiriya citadel at dawn, private temple relic blessings, and 3,000 years of living history',
    duration: '7 Days / 6 Nights',
    daysCount: 7,
    route: 'Sigiriya • Polonnaruwa • Kandy',
    basePriceUSD: 1980,
    rating: 4.98,
    reviewCount: 116,
    image: IMAGES.sigiriya,
    altText: 'Sigiriya ancient sky citadel illuminated in golden early morning light with lush surrounding forest canopy',
    carbonOffsetPercent: 100,
    maxGuests: 8,
    style: 'Culture & Heritage',
    tags: ['Private Sunrise Entry', 'Temple Blessings', 'Rural Artisans'],
    overview: 'Unearth the sacred soul of ancient Lanka. Ascend King Kashyapa’s 5th-century sky citadel at Sigiriya ahead of the crowds, pedal through the palace ruins of Polonnaruwa with licensed archaeological historians, and partake in an exclusive private blessing at the Temple of the Sacred Tooth Relic in Kandy.',
    inclusions: [
      '6 nights boutique luxury eco-heritage stays',
      'VIP early-access admissions and permits to UNESCO Cultural Triangle monuments',
      'Accompaniment by university archaeological lecturers and licensed guides',
      'Private Buddhist monastic blessing and lotus flower offering ceremony',
      'Bespoke culinary journeys and all ground transportation'
    ],
    exclusions: [
      'International airfare',
      'Visa fees for Sri Lanka (ETA)',
      'Personal incidental expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transit to Cultural Triangle',
        location: 'Dambulla / Sigiriya Foothills',
        description: 'Arrive in Sri Lanka and journey into the heart of the Cultural Triangle. Check into an eco-resort designed by Geoffrey Bawa’s architectural disciples, built harmoniously into granite boulders and rice paddies.',
        highlights: ['Geoffrey Bawa architectural check-in', 'Welcome King Coconut beverage', 'Evening flute concert over lotus lake'],
        stay: 'Heritance Kandalama'
      },
      {
        day: 2,
        title: 'Dawn Ascent of Sigiriya Rock Citadel',
        location: 'Sigiriya UNESCO World Heritage',
        description: 'Pass the gates before dawn to climb the 1,200 steps to the summit. Marvel at the 1,500-year-old painted celestial maidens (Frescoes) and the lion’s paw gateway, standing atop the King’s palace platform as the jungle mist parts below.',
        highlights: ['Sunrise atop the 5th-century rock palace', 'Ancient hydraulic water gardens', 'Exclusive lecture on ancient Lankan hydraulics'],
        stay: 'Heritance Kandalama'
      },
      {
        day: 3,
        title: 'Cycling Through Ancient Polonnaruwa',
        location: 'Polonnaruwa Medieval Capital',
        description: 'Explore on vintage cruiser bicycles the medieval royal city of Polonnaruwa. Stand before the Gal Vihara—colossal Buddha statues carved with astonishing emotional subtlety from a single granite wall.',
        highlights: ['Bicycle tour among ancient stupas & palaces', 'Gal Vihara monolithic rock carvings', 'Traditional clay pot lunch with farmer family'],
        stay: 'Heritance Kandalama'
      },
      {
        day: 4,
        title: 'Sacred Dambulla Cave Monasteries & Spice Trails',
        location: 'Dambulla to Matale',
        description: 'Climb to the five golden cave temples of Dambulla, adorned with over 150 Buddha statues and vibrant ceiling murals. Continue through Matale spice gardens where true Ceylon cinnamon is peeled by hand.',
        highlights: ['UNESCO Dambulla painted cave ceilings', 'True cinnamon peeling & wild cardamoms', 'Arrival in royal mountain capital Kandy'],
        stay: 'The Kandy House Boutique Sanctuary'
      },
      {
        day: 5,
        title: 'Royal Kandy & The Temple of the Sacred Tooth',
        location: 'Kandy Royal City',
        description: 'Morning walk around Kandy Lake and visit to the Peradeniya Royal Botanical Gardens. In the evening, attend the private inner-chamber Thevava ceremony at Sri Dalada Maligawa to witness drumming and sacred offerings.',
        highlights: ['Royal Botanical Orchid House', 'Private Thevava ceremony viewing', 'Traditional Kandyan drummers & fire dancers'],
        stay: 'The Kandy House Boutique Sanctuary'
      },
      {
        day: 6,
        title: 'Highland Artisan Crafts & Indigenous Pottery',
        location: 'Knuckles Foothills',
        description: 'Visit hereditary woodcarvers, brass metalworkers, and natural vegetable-dye batik weavers keeping ancient Lankan crafts alive. A percentage of your tour directly funds their apprentice workshops.',
        highlights: ['Meet master artisan generational families', 'Create your own traditional woodblock print', 'Festive banquet dinner'],
        stay: 'The Kandy House Boutique Sanctuary'
      },
      {
        day: 7,
        title: 'Return to Coastal Capital & Departure',
        location: 'Colombo / Airport',
        description: 'Descend to Colombo for a curated heritage walk through the historic Colombo Fort and cinnamon warehouses, followed by transfer to the airport.',
        highlights: ['Colombo Dutch hospital courtyard stroll', 'Airport farewell'],
        stay: 'Departure'
      }
    ]
  },
  {
    id: 'southern-coast-whale',
    title: 'Southern Coast & Whale Sanctuary',
    subtitle: 'Private luxury catamaran whale watching, turtle rehabilitation project release, and barefoot eco-villas',
    duration: '5 Days / 4 Nights',
    daysCount: 5,
    route: 'Galle Fort • Weligama • Tangalle',
    basePriceUSD: 1550,
    rating: 4.96,
    reviewCount: 88,
    image: IMAGES.whale,
    altText: 'Blue whale tail fluke slapping calm turquoise ocean off southern Sri Lanka with coastline palms in soft distant haze',
    carbonOffsetPercent: 100,
    maxGuests: 6,
    style: 'Coastal & Marine',
    tags: ['Private Catamaran', 'Marine Biologist', 'Coastal Eco-Resort'],
    overview: 'Sail the deep oceanic trenches of the southern continental shelf in search of the largest animal on earth: the Blue Whale. Guided by marine biologists adhering to strict ethical distance codes, and complemented by the cobbled charm of UNESCO Galle Fort.',
    inclusions: [
      '4 nights in secluded oceanfront eco-villas',
      'Private charter on a 48ft eco-catamaran with marine biologist onboard',
      'Guided historical architecture amble through 17th-century Galle Fort',
      'VIP visit and hatchling release at an ethical sea turtle rehabilitation hatchery',
      'Gourmet fresh ocean catch & tropical vegetarian dining'
    ],
    exclusions: ['International flights', 'Alcoholic beverages beyond welcome tastings', 'Gratuities'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Colonial Galle Fort',
        location: 'Galle Fort UNESCO Citadel',
        description: 'Arrive at the cobblestone ramparts of 17th-century Dutch Galle Fort. Check into a restored colonial townhouse. Evening sunset cocktail stroll along the lighthouse ramparts overlooking the Indian Ocean.',
        highlights: ['Colonial rampart sunset walk', 'Dutch merchant architecture', 'Fresh seafood dinner on pedestrian cobblestone lane'],
        stay: 'Fort Bazaar Heritage Hotel'
      },
      {
        day: 2,
        title: 'Blue Whale Expedition on the Oceanic Trench',
        location: 'Mirissa Marine Canyon',
        description: 'Board our private 48-foot sailing catamaran at dawn. Cruise 8 nautical miles out to the deep underwater shelf where blue whales, sperm whales, and spinner dolphins feed. Our onboard marine biologist provides hydrophone acoustic listening.',
        highlights: ['Blue whale observation from ethical distance', 'Acoustic hydrophone listening', 'Gourmet brunch served on deck'],
        stay: 'Fort Bazaar Heritage Hotel'
      },
      {
        day: 3,
        title: 'Turtle Conservation & Secluded Tangalle Sands',
        location: 'Rekawa & Tangalle',
        description: 'Head east along the curve of palm bays to Tangalle. Visit a community-run night turtle sanctuary at Rekawa beach, where green turtles, loggerheads, and giant leatherbacks lay eggs under the moonlight.',
        highlights: ['Quiet deserted crescent beaches', 'Night turtle observation with red-light torches', 'Oceanfront open-air massage'],
        stay: 'Amanwella Secluded Palm Sanctuary'
      },
      {
        day: 4,
        title: 'Mangrove Lagoon Kayak & Stilt Fishermen Heritage',
        location: 'Koggala & Ahangama',
        description: 'Paddle silently through the mangrove canals of Koggala Lake, visiting small cinnamon islands. In the late afternoon, observe the age-old tradition of stilt fishermen balancing above the breaking ocean swells.',
        highlights: ['Silent lagoon kayak birding', 'Authentic stilt fishing observation', 'Private beach bonfire dinner'],
        stay: 'Amanwella Secluded Palm Sanctuary'
      },
      {
        day: 5,
        title: 'Coastal Farewell & Airport Transfer',
        location: 'Southern Expressway to Colombo',
        description: 'Morning ocean swim and tropical breakfast beneath coconut palms. Smooth private transfer up the southern coastal expressway directly to Bandaranaike International Airport.',
        highlights: ['Morning surf or ocean dip', 'Direct airport drop-off'],
        stay: 'Departure'
      }
    ]
  },
  {
    id: 'complete-sri-lanka',
    title: 'The Complete Sri Lanka Experience',
    subtitle: 'The definitive slow grand tour: UNESCO citadels, misty tea passes, wild safaris, and secret beaches',
    duration: '12 Days / 11 Nights',
    daysCount: 12,
    route: 'Sigiriya • Kandy • Ella • Yala • Galle',
    basePriceUSD: 3850,
    rating: 5.0,
    reviewCount: 215,
    image: IMAGES.hero,
    altText: 'Lush green panoramic Sri Lankan tea landscape with morning clouds and dramatic hill range',
    carbonOffsetPercent: 100,
    maxGuests: 8,
    style: 'Grand Odyssey',
    tags: ['Private Chauffeur & Guide', '5-Star Boutique Stays', '100% Carbon Balanced', 'All Park Permits & Meals'],
    overview: 'The masterpiece journey. Conceived for the discerning traveler who wishes to experience the full spectrum of Ceylon: ancient sky palaces, sacred Buddhist relics, cloud forest hiking, high tea in historic colonial estates, apex predator tracking in Yala, and the barefoot serenity of southern coastlines.',
    inclusions: [
      '11 nights in Sri Lanka’s most celebrated boutique eco-luxury sanctuaries',
      'Private dedicated naturalist chauffeur-guide and luxury electric/hybrid vehicle',
      'All VIP entries, permits, and private boat / catamaran excursions',
      'Full board with all meals, culinary masterclasses, and curated dinners',
      'Full carbon offset certificate & 10 native trees planted in Knuckles reserve'
    ],
    exclusions: ['International flights', 'Entry visas', 'Personal insurance'],
    itinerary: [
      { day: 1, title: 'Arrival in Colombo & Negombo Lagoon Sanctuary', location: 'Negombo', description: 'VIP airport meet-and-greet and transfer to water retreat. Rest and recover from your flight.', highlights: ['Private check-in', 'Lagoon boat cruise'], stay: 'The Wallawwa Heritage Manor' },
      { day: 2, title: 'The Ancient Sky Palace of Sigiriya', location: 'Sigiriya', description: 'Drive to the Cultural Triangle. Afternoon ascent of the iconic Sigiriya Rock fortress.', highlights: ['Sigiriya frescoes', 'Sunset over royal reservoir'], stay: 'Water Garden Sigiriya' },
      { day: 3, title: 'Polonnaruwa Ruin Cycling & Minneriya Gathering', location: 'Polonnaruwa', description: 'Cycle through the medieval palace ruins, followed by an afternoon safari among wild elephants.', highlights: ['Gal Vihara statues', 'Minneriya elephant herd'], stay: 'Water Garden Sigiriya' },
      { day: 4, title: 'Cave Temples of Dambulla & Spice Hills', location: 'Dambulla to Kandy', description: 'Explore ancient painted caves of Dambulla and drive into the royal hill city of Kandy.', highlights: ['Dambulla golden caves', 'Organic spice estate'], stay: 'The Kandy House' },
      { day: 5, title: 'Kandy Lake & Sacred Tooth Relic Temple', location: 'Kandy', description: 'Morning botanic garden stroll and evening participation in the venerated temple blessing ceremony.', highlights: ['Peradeniya orchids', 'Temple of Tooth private blessing'], stay: 'The Kandy House' },
      { day: 6, title: 'Highland Heritage Train to Ella & Nuwara Eliya', location: 'Central Highlands', description: 'Board the iconic blue train through dramatic mountain ridges and verdant tea estates.', highlights: ['World-renowned train ride', 'Nuwara Eliya colonial high tea'], stay: 'Tea Trails Ceylon Estate' },
      { day: 7, title: 'Tea Masterclass & Nine Arch Viaduct Walk', location: 'Ella', description: 'Pick single-estate tea with masters and walk the historic Nine Arch stone railway bridge.', highlights: ['Single-estate tea cupping', 'Nine Arch Bridge golden hour'], stay: '98 Acres Luxury Chalets' },
      { day: 8, title: 'Descent to the Deep South & Yala Tented Camp', location: 'Yala National Park', description: 'Descend to the dry southern wilderness. Check into solar-supported luxury safari tents.', highlights: ['Scenic waterfall descent', 'Campfire dinner under the stars'], stay: 'Wild Coast Tented Lodge' },
      { day: 9, title: 'Dawn & Dusk Big Cat Tracking in Yala', location: 'Yala National Park', description: 'Search for leopards, sloth bears, and saltwater crocodiles with our senior naturalist.', highlights: ['Leopard tracking', 'Ocean sand dune sunset'], stay: 'Wild Coast Tented Lodge' },
      { day: 10, title: 'Coastal Drive to Dutch Galle Fort Citadel', location: 'Galle Fort', description: 'Drive along the southern coast to Galle Fort, wandering colonial bastions and boutique lanes.', highlights: ['Galle Fort ramparts', 'Artisan jewelry and antique studios'], stay: 'Amangalla Heritage Hotel' },
      { day: 11, title: 'Private Catamaran Whale Watching & Beach Dining', location: 'Mirissa / Weligama', description: 'Morning cruise on the blue whale trench and farewell dinner barefoot on the beach.', highlights: ['Blue whale sighting', 'Private beach seafood feast'], stay: 'Amangalla Heritage Hotel' },
      { day: 12, title: 'Colombo Heritage Amble & Departure', location: 'Colombo Airport', description: 'Private transfer along the expressway to Colombo. Departure flight home with lifelong memories.', highlights: ['Final spice market stop', 'VIP airport lounge access'], stay: 'Departure' }
    ],
    featured: true
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'ella',
    name: 'Ella',
    tagline: 'Cloud Forest Gateway',
    region: 'Central Highlands',
    category: 'highlands',
    bestMonths: 'Jan – May',
    elevation: '1,041m',
    image: IMAGES.hero,
    altText: 'Panoramic aerial view of Nine Arch Bridge Ella surrounded by lush dense green tea plantations and morning sun rays',
    shortDescription: 'Historic colonial railway viaducts, misty morning valley trails, and verdant organic tea estates tucked in emerald ridges.',
    fullDescription: 'Perched in the southern edge of the central highlands, Ella is a high-altitude sanctuary framed by the dramatic Ella Gap. Famous for the soaring British stone Nine Arch Bridge where blue passenger trains snake over emerald ravines, Ella combines cool alpine air with lush tea gardens, cascading waterfalls, and world-class trail running.',
    highlights: ['Nine Arch Stone Bridge', 'Little Adam’s Peak Dawn Climb', 'Ravana Falls Natural Pools', 'Organic High-Elevation Tea Estates'],
    recommendedStay: '98 Acres Luxury Chalets & Ceylon Tea Trails',
    keyWildlife: ['Toque Macaque', 'Giant Flying Squirrel', 'Highland Hornbill'],
    colSpan: 'lg:col-span-2'
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    tagline: '5th Century Sky Palace',
    region: 'Cultural Triangle',
    category: 'ancient',
    bestMonths: 'Year-Round',
    elevation: '349m',
    image: IMAGES.sigiriya,
    altText: 'Majestic Sigiriya Lion Rock ancient palace citadel rising tall amid verdant tropical jungle at sunrise',
    shortDescription: 'King Kashyapa’s architectural marvel with hydraulic water gardens, ancient mirror walls, and sacred cliffside frescoes.',
    fullDescription: 'Rising 200 meters vertically out of the dry zone jungle canopy, Sigiriya is an audacious 5th-century rock fortress designed by King Kashyapa. Revered as the eighth wonder of the world, it boasts symmetrical landscaped water gardens with active ancient fountains, the celebrated mirror wall with ancient Sinhala graffiti, and jewel-like frescoes of celestial apsaras.',
    highlights: ['Climb the 1,200 Steps through Lion’s Paws', 'Ancient Mirror Wall Inscriptions', 'World’s Oldest Hydraulic Water Gardens', 'Sunrise view from adjacent Pidurangala Rock'],
    recommendedStay: 'Water Garden Sigiriya & Heritance Kandalama',
    keyWildlife: ['Grey Slender Loris', 'Crested Serpent Eagle', 'Chameleon'],
    colSpan: 'lg:col-span-2'
  },
  {
    id: 'yala',
    name: 'Yala',
    tagline: 'Leopard Heartland',
    region: 'Southern Wildlife Reserve',
    category: 'wildlife',
    bestMonths: 'Feb – Jul',
    elevation: 'Sea level to 30m',
    image: IMAGES.elephant,
    altText: 'Wild elephant grazing peacefully in Yala national park near waterhole during warm sunset',
    shortDescription: 'Thorny scrubland and ocean-facing dunes hosting the planet’s densest leopard population.',
    fullDescription: 'Spanning over 979 square kilometers between thorn forests and the Indian Ocean, Yala National Park features the highest density of leopards in the world. Alongside panthera pardus kotiya, Yala is home to thriving herds of Asian elephants, elusive sloth bears, mugger crocodiles, and over 215 bird species.',
    highlights: ['High-density leopard tracking', 'Tented bush luxury camps', 'Ocean-front coastal dunes', 'Nocturnal wildlife spotlight drives'],
    recommendedStay: 'Wild Coast Tented Lodge & Yala Dunes Camp',
    keyWildlife: ['Sri Lankan Leopard', 'Sloth Bear', 'Asian Tusker Elephant', 'Mugger Crocodile']
  },
  {
    id: 'galle',
    name: 'Galle Fort',
    tagline: 'Colonial Citadel',
    region: 'South Coast',
    category: 'coast',
    bestMonths: 'Nov – Apr',
    elevation: 'Sea level',
    image: IMAGES.galle,
    altText: 'Dutch colonial fort ramparts of Galle Sri Lanka with historic white lighthouse overlooking crashing turquoise Indian Ocean waves at dusk',
    shortDescription: 'Cobblestone alleyways, Dutch bastions, boutique spice merchants, and seaside dining.',
    fullDescription: 'Founded by the Portuguese in 1588 and fortified by the Dutch in the 17th century, Galle Fort is the best-preserved European sea fort in South Asia. Within its sturdy coral-and-granite ramparts lies an enchanting pedestrian village of Dutch-colonial villas, artisan jewelry workshops, gelato parlors, and ocean-facing bastions where waves crash against centuries-old stone.',
    highlights: ['Lighthouse Rampart Sunset Walk', 'Dutch Reformed Church & Maritime Museum', 'Antique and Natural Gem Merchants', 'Bespoke Galle Literary Festival Venues'],
    recommendedStay: 'Amangalla & Fort Bazaar',
    keyWildlife: ['Fruit Bats', 'Green Sea Turtles in coastal shallows']
  },
  {
    id: 'kandy',
    name: 'Kandy',
    tagline: 'Royal Sanctuary',
    region: 'Central Province',
    category: 'ancient',
    bestMonths: 'Dec – Apr',
    elevation: '500m',
    image: IMAGES.kandy,
    altText: 'Sacred Golden Temple of the Tooth Relic in Kandy reflected on the tranquil royal lake at twilight with surrounding forested hills',
    shortDescription: 'Venerated Temple of the Tooth Relic, serene lakeside ambles, and botanical wonderlands.',
    fullDescription: 'The last royal capital of ancient Sri Lanka before British colonization in 1815, Kandy is nestled in a lush valley encircled by mist-veiled peaks. At its spiritual heart lies the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), resting peacefully on the edge of a serene ornamental lake.',
    highlights: ['Temple of the Sacred Tooth (Thevava ritual)', 'Royal Botanical Gardens of Peradeniya', 'Traditional Kandyan Fire Dancing and Drumming', 'Scenic Lake Promenade Walk'],
    recommendedStay: 'The Kandy House & Mountbatten Bungalow',
    keyWildlife: ['Giant Flying Foxes', 'Endemic Ceylon Hanging Parrot']
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    tagline: 'Southern Marine Haven',
    region: 'South Coast',
    category: 'coast',
    bestMonths: 'Nov – Apr',
    elevation: 'Sea level',
    image: IMAGES.mirissa,
    altText: 'Iconic Coconut Tree Hill in Mirissa Sri Lanka overlooking deep blue ocean with golden sandy bay and curved palm trees at sunset',
    shortDescription: 'Blue whale ocean expeditions, secluded coconut bluffs, and laid-back coastal eco-villas.',
    fullDescription: 'A postcard-perfect crescent bay fringed by leaning coconut palms, Mirissa is world-renowned as the premier launchpad for ethical blue whale watching in the Indian Ocean. Its shallow reefs, surf breaks, and iconic Coconut Tree Hill make it a quintessential tropical sanctuary.',
    highlights: ['Deep sea ethical whale watching', 'Sunset at Coconut Tree Hill', 'Secret Beach snorkeling', 'Reef-safe eco catamaran sailing'],
    recommendedStay: 'Cape Weligama & Mirissa Ocean Eco-Villas',
    keyWildlife: ['Blue Whale', 'Spinner Dolphin', 'Olive Ridley Turtle']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'wildlife-safaris',
    title: 'Wildlife Safaris',
    badge: 'Big Five Safari',
    duration: 'Half to Multi-Day',
    image: IMAGES.elephant,
    altText: 'Majestic wild Sri Lankan elephant walking calmly through golden sunlit grassland at twilight near a calm lake',
    description: 'Tracking elusive leopards and wild elephant gatherings in undisturbed national parks alongside conservationist trackers.',
    fullDetails: 'Led by certified naturalists trained in ethical non-intrusive wildlife observation. We use silent electric and low-emission 4x4 vehicles equipped with bean-bag camera mounts and premium Swarovski binoculars. We enforce strict speed limits, engine shut-offs, and zero-chase protocols.',
    credentialTag: 'Ethical No-Chase Protocol',
    credentialIcon: 'eco',
    idealFor: 'Wildlife enthusiasts, photographers, families',
    difficulty: 'Gentle'
  },
  {
    id: 'tea-country',
    title: 'Tea Country Trails',
    badge: 'Highland Heritage',
    duration: '2 - 4 Days',
    image: IMAGES.hero,
    altText: 'Misty rolling emerald green tea hills of Nuwara Eliya with historic colonial estate in soft morning mist',
    description: 'Stay in restored colonial planter bungalows, hand-pick artisan silver tips, and sample rare single-estate Ceylon vintages.',
    fullDetails: 'Experience the romantic history of Ceylon tea. Walk along the historic Pekoe Trail through high-altitude misty valleys, learn the chemistry of rolling and fermentation with veteran tea makers, and savor bespoke high teas on estate verandas overlooking emerald hills.',
    credentialTag: 'Fair Trade Certified',
    credentialIcon: 'local_cafe',
    idealFor: 'Couples, slow travelers, culinary explorers',
    difficulty: 'Moderate'
  },
  {
    id: 'beaches-whales',
    title: 'Beaches & Whale Sanctuaries',
    badge: 'Coast & Ocean',
    duration: '3 - 6 Days',
    image: IMAGES.beach,
    altText: 'Pristine golden sand beach in southern Sri Lanka with turquoise waves, swaying palm trees, and an eco catamaran anchored at sunset under soft rose skies',
    description: 'Quiet southern coves, private eco-catamarans for blue whale observation, and secluded beachfront eco-lodges.',
    fullDetails: 'Sail private 48-foot catamarans into the deep marine canyons off Mirissa and Trincomalee. Guided by resident marine biologists, listen to whale songs via acoustic hydrophones and swim alongside green sea turtles in protected coves.',
    credentialTag: 'Marine Stewardship Partner',
    credentialIcon: 'phishing',
    idealFor: 'Ocean lovers, marine wildlife seekers',
    difficulty: 'Gentle'
  },
  {
    id: 'cultural-heritage',
    title: 'Cultural Heritage',
    badge: 'UNESCO Sanctum',
    duration: '3 - 5 Days',
    image: IMAGES.sigiriya,
    altText: 'Sigiriya rock fortress monolithic ancient citadel rising above lush tropical green forest at golden hour mist',
    description: 'Sunrise ascent up Sigiriya fortress, sacred Buddhist relic blessings in Kandy, and ancient ruined monastic reservoirs.',
    fullDetails: 'Uncover over three millennia of preserved Lankan history. With university archaeologists as your private guides, walk through silent monastic ruins, decipher 1,500-year-old rock inscriptions, and witness sacred evening drum liturgies.',
    credentialTag: 'Licensed Archaeologist Guides',
    credentialIcon: 'museum',
    idealFor: 'History and architectural connoisseurs',
    difficulty: 'Moderate'
  },
  {
    id: 'highland-adventure',
    title: 'Highland Adventure',
    badge: 'Trekking & Peaks',
    duration: '2 - 4 Days',
    image: IMAGES.knuckles,
    altText: 'Hiker standing on a dramatic cliff overlooking mist covered valleys and emerald mountain peaks in Knuckles mountain range Sri Lanka with soft morning sunlight',
    description: 'Traverse the UNESCO Knuckles Cloud Forest, scale Little Adam’s Peak at dawn, and bathe beneath secret cascading waterfalls.',
    fullDetails: 'Venture into the raw, mist-cloaked Knuckles Massif. Trek through pygmy cloud forests, bathe in pristine mountain streams, and sleep in eco-lodges that generate their own micro-hydro power.',
    credentialTag: 'Leave No Trace Verified',
    credentialIcon: 'hiking',
    idealFor: 'Active adventurers, trekkers, nature lovers',
    difficulty: 'Active'
  },
  {
    id: 'eco-sanctuaries',
    title: 'Eco Sanctuaries & Living',
    badge: 'Regenerative Travel',
    duration: '1 - 3 Days',
    image: IMAGES.planting,
    altText: 'Conscious traveler planting native saplings in a lush tropical Sri Lankan rainforest reserve with smiling local forest ranger in earth tone attire',
    description: 'Active native rainforest reforestation, night turtle patrol nesting sanctuaries, and organic heirloom paddy cultivation.',
    fullDetails: 'Directly participate in the regeneration of Sri Lanka’s endemic ecosystems. Plant native dipterocarp saplings in the Knuckles conservation corridor, join night turtle patrols protecting nesting loggerheads, and harvest heirloom rice with village elders.',
    credentialTag: '100% Community Fund Direct',
    credentialIcon: 'volunteer_activism',
    idealFor: 'Conscious travelers, conservation champions',
    difficulty: 'Gentle'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'best-places-2026',
    title: 'Best Places to Visit in Sri Lanka in 2026',
    category: 'Expedition Trends',
    readTime: '6 min read',
    publishedDate: 'March 2026',
    image: IMAGES.hero,
    altText: 'Misty hills in Sri Lanka with train bridge in Ella',
    excerpt: 'Highland cloud forest treks, secret southern surfing bays, and newly opened heritage sanctuaries across the island.',
    author: 'Kavinda Rathnayake',
    authorRole: 'Head of Expedition Planning',
    content: [
      'As travel shifts toward deeper, slower immersion, Sri Lanka in 2026 stands out as the world’s most dynamic yet intimate island sanctuary. From newly mapped stages of the Pekoe Trail to community-protected wildlife buffer zones, conscious exploration has reached a new zenith.',
      'The Knuckles Mountain Range has emerged as the premier alternative to crowded alpine circuits, offering cloud forests untouched by mass tourism. Meanwhile, the southern coast between Tangalle and Dikwella provides secluded private villas powered entirely by renewable solar microgrids.',
      'For cultural connoisseurs, the ancient monastic city of Ritigala and the northern Jaffna peninsula offer unhurried encounters with millennia of living heritage away from standard tourist tracks.'
    ]
  },
  {
    id: 'definitive-guide',
    title: 'The Definitive Sri Lanka Travel Guide',
    category: 'Travel Masterclass',
    readTime: '9 min read',
    publishedDate: 'February 2026',
    image: IMAGES.sigiriya,
    altText: 'Sigiriya rock fortress ancient ruins and dramatic landscape',
    excerpt: 'Visa logistics, respectful temple etiquette, internal transport, and ethical shopping recommendations.',
    author: 'Dilani Wickramasinghe',
    authorRole: 'Senior Cultural Historian',
    content: [
      'Planning a journey through Sri Lanka requires understanding the island’s gentle rhythm. While compact, the island’s mountainous spine creates distinct microclimates, meaning sunshine and gentle seas can always be found on one coast.',
      'When visiting sacred Buddhist and Hindu shrines, dress with reverence: cover shoulders and knees in light white linen, remove shoes and headwear at temple entryways, and refrain from turning your back to Buddha statues for photographs.',
      'Opt for the scenic railway through the highlands for an unforgettable sensory journey, and hire certified local naturalist guides who understand wildlife conservation regulations.'
    ]
  },
  {
    id: 'dual-monsoons',
    title: 'Navigating the Dual Monsoons',
    category: 'Seasons & Weather',
    readTime: '5 min read',
    publishedDate: 'January 2026',
    image: IMAGES.monsoon,
    altText: 'Dramatic monsoon clouds over tropical palm forest in Sri Lanka with sun rays breaking through blue skies',
    excerpt: 'Why there is always sunshine on one coast of Sri Lanka: a month-by-month guide to optimal climates.',
    author: 'Dr. Anura Jayawardena',
    authorRole: 'Lead Expedition Botanist',
    content: [
      'Sri Lanka is blessed with a unique dual monsoon weather system, ensuring that at any point during the calendar year, one coast is bathed in tranquil sunshine and gentle turquoise waters.',
      'From November to April, the South and West coasts (Galle, Mirissa, Bentota, Colombo) and the Central Highlands experience their sunniest, driest weather. The sea is flat as glass, ideal for blue whale expeditions and coral reef snorkeling.',
      'From May to October, the monsoon reverses, transforming the East Coast (Trincomalee, Passikudah, Arugam Bay) into a sun-drenched paradise of world-class surf breaks and calm marine lagoons.'
    ]
  },
  {
    id: 'big-five-fieldwork',
    title: 'Tracking the Island’s Elusive Big Five',
    category: 'Wildlife Fieldwork',
    readTime: '8 min read',
    publishedDate: 'January 2026',
    image: IMAGES.elephant,
    altText: 'Wild elephant in Yala national park Sri Lanka walking across golden savanna field',
    excerpt: 'Essential binoculars, camera lenses, and naturalist etiquette for ethical safari game drives.',
    author: 'Chaminda Senanayake',
    authorRole: 'Master Big Cat Tracker',
    content: [
      'Few places on Earth pack as much wildlife density as Sri Lanka. The Big Five—the Asian Elephant, the Sri Lankan Leopard, the Sloth Bear, the Blue Whale, and the Sperm Whale—can be encountered in an eight-day itinerary.',
      'Ethical observation is paramount. In Yala and Wilpattu, our trackers maintain minimum 30-meter distances from big cats, kill engines when mammals approach, and never block game trail corridors.',
      'A 100-400mm or 70-200mm telephoto lens with image stabilization is ideal for open savannah and canopy birding, while 8x42 or 10x42 binoculars reveal the subtle expressions of wild elephant matriarchs.'
    ]
  },
  {
    id: 'culinary-traditions',
    title: 'Sri Lankan Food: Beyond Kottu and Hoppers',
    category: 'Culinary Traditions',
    readTime: '7 min read',
    publishedDate: 'December 2025',
    image: IMAGES.food,
    altText: 'Traditional Sri Lankan rice and curry spread in clay pots with aromatic coconut sambol, fish curry, jackfruit, and fresh banana leaves on wooden table',
    excerpt: 'Discover black pork curry, sour fish ambul thiyal, fiery lunu miris, and the secrets of clay pot simmering.',
    author: 'Menaka Fernando',
    authorRole: 'Culinary Anthropologist',
    content: [
      'Sri Lankan gastronomy is an ancient alchemical blend of wild coastal spices, freshly pressed coconut milk, aromatic curry leaves, and Ayurvedic healing herbs.',
      'Dishes like Ambul Thiyal (sour dry-cured fish with goraka fruit) in the south, roasted Jaffna crab curry in the north, and young tender Polos (green jackfruit curry) simmering in unglazed earthenware clay pots provide flavors found nowhere else in Asia.',
      'Every village visit on an Eco Travels itinerary includes meals prepared over wood-fired hearths using organic heirloom produce harvested directly from surrounding forest gardens.'
    ]
  },
  {
    id: 'hidden-gems',
    title: 'Hidden Gems: Knuckles, Jaffna & Beyond',
    category: 'Hidden Trails',
    readTime: '6 min read',
    publishedDate: 'November 2025',
    image: IMAGES.valley,
    altText: 'Hidden mountain valley in Knuckles range Sri Lanka with terraced paddy fields, mist, and pristine jungle river',
    excerpt: 'Step off the standard circuit into untouched northern islands, remote tea valleys, and isolated Buddhist rock hermitages.',
    author: 'Kavinda Rathnayake',
    authorRole: 'Head of Expedition Planning',
    content: [
      'While Sigiriya and Ella capture headlines, Sri Lanka’s quietest secrets reward the curious slow traveler.',
      'In the remote valleys of the Knuckles Range, century-old walking tracks link terraced paddy villages where buffalo still thresh harvest sheaves. In the northern peninsula of Jaffna, palmyrah groves lead to solitary coral islands and temple bells resonant with ancient Dravidian liturgy.',
      'By prioritizing these remote outposts, our guests experience raw hospitality while distributing travel revenues into communities that need it most.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    names: 'Elena Rostova & Mark Davis',
    location: 'Zurich, Switzerland',
    tourName: 'Wild Sri Lanka Adventure',
    quote: 'The Sigiriya sunrise followed by the private tented safari in Yala was pure magic. Our guide, Chaminda, possessed encyclopedic knowledge and deep, infectious respect for the wildlife.',
    rating: 5,
    avatarInitials: 'ER',
    avatarColor: 'bg-[#002014]'
  },
  {
    id: 'test-2',
    names: 'David & Sarah Jenkins',
    location: 'London, United Kingdom',
    tourName: 'Tea Trails & Mountain Escapes',
    quote: 'The most thoughtful, seamless, and ethical holiday we have ever taken. Riding the heritage train through Ella while knowing our trip funded community schools was unforgettable.',
    rating: 5,
    avatarInitials: 'DJ',
    avatarColor: 'bg-[#006a61]'
  },
  {
    id: 'test-3',
    names: 'Marcus Lindqvist',
    location: 'Stockholm, Sweden',
    tourName: 'The Complete Sri Lanka Experience',
    quote: 'Outstanding attention to detail. Eco Travels proved that luxury and true sustainability can blend effortlessly. We are already planning our return to the Knuckles Range.',
    rating: 5,
    avatarInitials: 'ML',
    avatarColor: 'bg-[#143628]'
  }
];

export const NATURALIST_GUIDES: NaturalistGuide[] = [
  {
    id: 'anura',
    name: 'Dr. Anura Jayawardena',
    role: 'Lead Expedition Botanist',
    specialty: 'Highland Flora & Rainforest Ecology',
    experienceYears: 24,
    bio: 'Former senior researcher at Peradeniya Royal Botanic Gardens, Dr. Jayawardena has published 14 papers on endemic orchid conservation in the Sinharaja World Heritage Biosphere.',
    image: IMAGES.planting
  },
  {
    id: 'chaminda',
    name: 'Chaminda Senanayake',
    role: 'Master Wildlife Tracker',
    specialty: 'Apex Leopard & Asian Elephant Behavior',
    experienceYears: 19,
    bio: 'Recognized by the Department of Wildlife Conservation for pioneering non-intrusive safari methods in Yala and Wilpattu, Chaminda can distinguish individual big cats by rosette patterns.',
    image: IMAGES.elephant
  },
  {
    id: 'dilani',
    name: 'Dilani Wickramasinghe',
    role: 'Senior Archaeological Historian',
    specialty: 'Ancient Hydraulic Engineering & Sigiriya Epigraphy',
    experienceYears: 16,
    bio: 'A graduate of the University of Peradeniya, Dilani brings ancient stones to life, decoding Sanskrit and early Sinhala rock inscriptions with infectious enthusiasm.',
    image: IMAGES.sigiriya
  },
  {
    id: 'malith',
    name: 'Malith Perera',
    role: 'Resident Marine Biologist',
    specialty: 'Cetacean Acoustic Tracking & Coral Ecology',
    experienceYears: 12,
    bio: 'Malith leads our offshore hydrophone expeditions in Mirissa and Trincomalee, working closely with international marine trusts to protect blue whale migratory corridors.',
    image: IMAGES.whale
  }
];
