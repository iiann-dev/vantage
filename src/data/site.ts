// ============================================================
// VANTAGE — single source of truth for the whole site.
// Rebrand by editing ONLY this file. All copy + assets live here.
// ============================================================

export const brand = {
  name: 'Vantage',
  shortName: 'Vantage',
  tagline: 'Where the mountains wake the sun.',
  description:
    "Small-group journeys through East Java's volcano country. Sunrise over the Bromo caldera, the blue fire of Ijen, and the hidden canyons in between. Guided by locals, limited to twelve travelers, engineered for once-in-a-lifetime.",
  location: 'East Java, Indonesia',
  priceRange: '$160 to $1,480',
  email: 'hello@vantage.travel',
  phone: '+62 812 3456 7890',
  base: 'Surabaya · Malang · Banyuwangi',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
  ],
}

export const navLinks = [
  { label: 'Moments', href: '#moments' },
  { label: 'Tours', href: '#tours' },
  { label: 'Stories', href: '#stories' },
  { label: 'Expedition', href: '#expedition' },
  { label: 'Plan', href: '#plan' },
  { label: 'FAQ', href: '#faq' },
]

// ---------- HERO ----------
export const hero = {
  label: 'Volcano Country · East Java, Indonesia',
  ctaPrimary: 'Reserve your dawn',
  ctaSecondary: 'Explore the tours',
  proof: {
    stat: '12,400+ travelers since 2019',
    rating: '4.97 average · 2,300 reviews',
    message: 'Small groups, local guides, zero logistics stress.',
    cta: 'Read their stories',
    avatars: [
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/women/68.jpg',
      'https://randomuser.me/api/portraits/men/75.jpg',
      'https://randomuser.me/api/portraits/women/12.jpg',
    ],
  },
}

// Tour slides drive the hero background-as-carousel.
export const tours = [
  {
    id: 'bromo',
    name: 'Bromo Sunrise Safari',
    tag: '3 days · 2 nights',
    desc: 'Jeep through the Sea of Sand to a front-row seat at dawn.',
    headline: 'Chase the sun above the sea of clouds.',
    sub: 'Private sunrise safaris through the caldera of Mount Bromo. The dawn you will measure every other dawn against.',
    image:
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2560&q=90',
  },
  {
    id: 'ijen',
    name: 'Ijen Blue Flame Trek',
    tag: '2 days · 1 night',
    desc: 'Descend by night to where the mountain burns electric blue.',
    headline: 'Stand where the earth burns blue.',
    sub: 'A night hike to the most surreal fire on Earth: liquid sulfur glowing at the crater floor of Kawah Ijen.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Blue_fire_of_Ijen%2C_Kawah_Ijen%2C_Java%2C_Indonesia%2C_20220821_0432_9580.jpg/1920px-Blue_fire_of_Ijen%2C_Kawah_Ijen%2C_Java%2C_Indonesia%2C_20220821_0432_9580.jpg',
  },
  {
    id: 'tumpak',
    name: 'Tumpak Sewu Canyon',
    tag: '1 day · from Surabaya',
    desc: 'A thousand waterfalls inside a secret river gorge.',
    headline: 'Find the thousand falls hidden in the mist.',
    sub: 'A curtain of water a kilometer wide, canyon trails, and volcanic hot springs to end the day.',
    image:
      'https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?auto=format&fit=crop&w=2560&q=90',
  },
]

// ---------- FEATURED MOMENTS ----------
export const moments = {
  label: 'Field notes',
  title: 'Moments you will retell for years.',
  intro:
    'Every itinerary is built around the hours the light turns unbelievably wrong: pre-dawn, blue hour, first light on the crater rim.',
  items: [
    {
      title: 'The caldera at first light',
      caption: 'Mount Bromo & Semeru, 5:42 am',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Gunung_Bromo_sunrise_-_Indonesia.jpg/1920px-Gunung_Bromo_sunrise_-_Indonesia.jpg',
    },
    {
      title: 'Blue fire, Kawah Ijen',
      caption: 'Electric sulfur at 2,400 meters',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/The_blue_fire_of_Kawah_Ijen_2.jpg/1920px-The_blue_fire_of_Kawah_Ijen_2.jpg',
    },
    {
      title: 'Sulfur fields at dawn',
      caption: 'The miners of Ijen, 3:10 am',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kawah-Ijen_Indonesia_Ijen-Sulfur-Miner-01.jpg/1920px-Kawah-Ijen_Indonesia_Ijen-Sulfur-Miner-01.jpg',
    },
    {
      title: 'Inside the crater',
      caption: 'The acid lake of Kawah Ijen',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Interior_of_Kawah_Ijen_volcano_crater%2C_20220821_0547_9699.jpg/1920px-Interior_of_Kawah_Ijen_volcano_crater%2C_20220821_0547_9699.jpg',
    },
    {
      title: 'Thousand Falls',
      caption: 'Tumpak Sewu, Lumajang',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tumpak_sewu_waterfall.jpg/1920px-Tumpak_sewu_waterfall.jpg',
    },
    {
      title: 'Batok in the morning glow',
      caption: 'Viewed from the Bromo rim',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Batok%2C_view_from_Bromo_volcano%2C_Java%2C_Indonesia%2C_20220820_0539_9409.jpg/1920px-Batok%2C_view_from_Bromo_volcano%2C_Java%2C_Indonesia%2C_20220820_0539_9409.jpg',
    },
  ],
}

// ---------- TOUR PACKAGES ----------
// Each package now carries full day-by-day metadata, difficulty, elevation,
// and a "highlights" array — used by the ItineraryModal.
export const packages = {
  label: 'The journeys',
  title: 'Choose your arc across the mountains.',
  intro:
    "Small groups of twelve. Local guides who grew up on these slopes. Every departure tuned to the season's light.",
  featured: {
    id: 'grand',
    name: 'The Grand Volcano Tour',
    tag: '7 days · 6 nights',
    desc: 'Bromo, Ijen and Tumpak Sewu in one arc: sunrise calderas, blue fire by night, canyon trails, and two nights in a village homestay above the clouds.',
    price: 'from $1,480',
    badge: 'Most loved',
    cta: 'Reserve this arc',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Gunung_Bromo_sunrise_-_Indonesia.jpg/1920px-Gunung_Bromo_sunrise_-_Indonesia.jpg',
    difficulty: 'Moderate',
    duration: '7 days · 6 nights',
    groupSize: 'Max 12 travelers',
    elevation: '2,400 – 3,676 m',
    startCity: 'Surabaya',
    endCity: 'Banyuwangi',
    rating: '4.97 / 5',
    reviews: '1,240 reviews',
    bestSeason: 'May – September',
    includes: [
      'All permits & park fees',
      'Local guide + driver',
      'Homestay & boutique stays',
      'Jeep safaris & transfers',
      'Gas mask & head torch at Ijen',
      'Daily breakfast & 4 dinners',
      'Carbon-offset transport',
    ],
    highlights: [
      'Sunrise at King Kong Hill, Bromo',
      'Crater rim walk, Mt Bromo (2,329 m)',
      'Blue fire descent, Kawah Ijen',
      'Midnight stargazing at Cemoro Lawang',
      'Tumpak Sewu thousand falls',
      'Village homestay above the clouds',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Surabaya',
        detail: 'Airport pickup at Juanda, transfer to a boutique hotel in the old town. Welcome dinner with the guides and a soft briefing on the week ahead.',
      },
      {
        day: 'Day 2',
        title: 'Drive to Bromo · Cemoro Lawang',
        detail: 'A scenic 4-hour drive into the Tengger massif. Acclimatize at a village homestay at 2,200 m. Optional sunset walk to the rim viewpoint.',
      },
      {
        day: 'Day 3',
        title: 'Bromo sunrise · Sea of Sand',
        detail: '3:30 am departure in 4x4 jeeps across the Sea of Sand. Sunrise at King Kong Hill, then a climb to the crater rim of Mt Bromo itself.',
      },
      {
        day: 'Day 4',
        title: 'Tumpak Sewu Canyon',
        detail: 'Drive west to Lumajang. Descend into the amphitheater of a thousand falls, a 1 km curtain of water. Optional cliff-side trek and a volcanic hot spring soak.',
      },
      {
        day: 'Day 5',
        title: 'Transfer to Ijen · Bondowoso',
        detail: 'A slow morning then a 5-hour drive east through clove and coffee country to a highland lodge near the Ijen plateau.',
      },
      {
        day: 'Day 6',
        title: 'Kawah Ijen blue fire',
        detail: 'Midnight departure. 2-hour ascent to the crater rim. Descend (with gas masks) to the blue fire, then climb back up for the turquoise acid lake at dawn.',
      },
      {
        day: 'Day 7',
        title: 'Banyuwangi · departure',
        detail: 'Sleep in. Brunch at the lodge. Transfer to Banyuwangi station or airport for your onward journey. Farewells.',
      },
    ],
  },
  items: [
    {
      id: 'bromo-pkg',
      name: 'Bromo Sunrise Safari',
      tag: '3 days · 2 nights',
      desc: 'Two dawns above the clouds, a jeep crossing of the Sea of Sand, and a slow climb to the crater rim.',
      price: 'from $420',
      cta: 'Reserve',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mount_Bromo_Sunrise_Right.jpg/1920px-Mount_Bromo_Sunrise_Right.jpg',
      difficulty: 'Easy',
      duration: '3 days · 2 nights',
      groupSize: 'Max 12 travelers',
      elevation: '2,200 – 2,329 m',
      startCity: 'Surabaya / Malang',
      endCity: 'Surabaya / Malang',
      rating: '4.96 / 5',
      reviews: '980 reviews',
      bestSeason: 'May – September',
      includes: [
        'All permits & park fees',
        'Local guide + driver',
        '2 nights boutique stay',
        'Jeep safari & crater climb',
        'Daily breakfast',
      ],
      highlights: [
        'Sunrise at King Kong Hill',
        'Sea of Sand jeep crossing',
        'Crater rim of Mt Bromo',
        'Optional Whispering Sands walk',
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Surabaya → Cemoro Lawang',
          detail: 'Pickup at 11am. Drive 4 hours into the Tengger massif. Arrive at the village homestay for sunset tea and briefing.',
        },
        {
          day: 'Day 2',
          title: 'Sunrise jeep safari',
          detail: '3:30 am departure in 4x4 jeeps. Sunrise at King Kong Hill, walk to the crater rim of Mt Bromo, descend to the Sea of Sand. Return for a long breakfast. Optional afternoon hike to Batok peak.',
        },
        {
          day: 'Day 3',
          title: 'Reverse sunrise · return',
          detail: 'A lazy dawn on the village terrace. Brunch at the homestay. Drive back to Surabaya or Malang, arriving mid-afternoon.',
        },
      ],
    },
    {
      id: 'ijen-pkg',
      name: 'Ijen Blue Fire Trek',
      tag: '2 days · 1 night',
      desc: 'The blue fire of Ijen: a night ascent, electric flames, and the largest acid lake on Earth before the tourists wake.',
      price: 'from $380',
      cta: 'Reserve',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Blue_fire_of_Ijen%2C_Kawah_Ijen%2C_Java%2C_Indonesia%2C_20220821_0432_9580.jpg/1920px-Blue_fire_of_Ijen%2C_Kawah_Ijen%2C_Java%2C_Indonesia%2C_20220821_0432_9580.jpg',
      difficulty: 'Moderate',
      duration: '2 days · 1 night',
      groupSize: 'Max 8 travelers',
      elevation: '2,400 – 2,799 m',
      startCity: 'Banyuwangi / Bondowoso',
      endCity: 'Banyuwangi',
      rating: '4.95 / 5',
      reviews: '620 reviews',
      bestSeason: 'May – October',
      includes: [
        'All permits & park fees',
        'Local guide + driver',
        '1 night highland lodge',
        'Gas mask & head torch',
        'Dinner & breakfast',
      ],
      highlights: [
        'Blue flame descent at 2 am',
        'Turquoise acid lake at sunrise',
        'Sulfur miner porters in action',
        'Coffee plantation breakfast',
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Banyuwangi → Bondowoso',
          detail: 'Pickup at 1pm. Drive 3 hours up into the highlands. Coffee plantation walk. Early dinner by 7pm.',
        },
        {
          day: 'Day 2',
          title: 'Blue fire ascent',
          detail: 'Midnight departure. 2-hour ascent to the crater rim. Gear up with a gas mask and descend to the blue flame. Climb back up for the turquoise acid lake at sunrise. Transfer back to Banyuwangi by 11am.',
        },
      ],
    },
    {
      id: 'tumpak-pkg',
      name: 'Tumpak Sewu Canyon Day',
      tag: '1 day · from Surabaya',
      desc: 'The amphitheater of a thousand falls, a river gorge trail, and volcanic hot springs to finish.',
      price: 'from $160',
      cta: 'Reserve',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Air_Terjun_Tumpak_Sewu.jpg/1920px-Air_Terjun_Tumpak_Sewu.jpg',
      difficulty: 'Easy – Moderate',
      duration: '1 day',
      groupSize: 'Max 10 travelers',
      elevation: '500 – 900 m',
      startCity: 'Surabaya / Malang',
      endCity: 'Surabaya / Malang',
      rating: '4.92 / 5',
      reviews: '410 reviews',
      bestSeason: 'April – November',
      includes: [
        'All permits & park fees',
        'Local guide',
        'Lunch in the canyon',
        'Air-conditioned transport',
      ],
      highlights: [
        '1 km curtain of water',
        'Canyon-floor trail',
        'Volcanic hot spring soak',
        'Drone-friendly viewpoints',
      ],
      itinerary: [
        {
          day: 'Day 1',
          title: 'Tumpak Sewu day trip',
          detail: 'Pickup at 2am (yes, really) for the sunrise viewpoint. Descend through bamboo ladders to the canyon floor. Walk along the river. Lunch by the falls. Optional hot spring soak. Return by 8pm.',
        },
      ],
    },
  ],
}

// ---------- TESTIMONIALS ----------
export const testimonials = {
  label: 'Stories',
  title: 'Travelers who came home changed.',
  intro: 'Unedited words from the twelve-seat journeys.',
  items: [
    {
      quote:
        "I've stood in front of a lot of sunrises. Bromo ended the contest. The whole trip ran like a watch. Zero logistics stress, all wonder.",
      name: 'Amara Osei',
      origin: 'London',
      stars: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      quote:
        'The blue fire looked photoshopped. It was not. Our guide carried hot tea to the crater floor at 4 am, like nothing at all.',
      name: 'Daniel Reyes',
      origin: 'Mexico City',
      stars: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      quote:
        'Twelve strangers, one dawn, zero phones out. That is the kind of trip this is, and I did not expect it to be.',
      name: 'Hana Yoshida',
      origin: 'Tokyo',
      stars: 5,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      quote:
        'Every detail felt considered: the right shoes, the right hour, the right silence at the crater rim. Rare craft.',
      name: 'Marcus Feld',
      origin: 'Berlin',
      stars: 5,
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
      quote:
        'Booked the Grand Tour on a whim. It rearranged something in me. I have already sent three friends.',
      name: 'Priya Nair',
      origin: 'Singapore',
      stars: 5,
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
  ],
}

// ---------- EXPEDITION GUIDE (gear, altitude, seasons) ----------
export const expedition = {
  label: 'Expedition guide',
  title: 'Know the mountain before you meet it.',
  intro:
    'Three small things decide whether a volcano trip becomes a story you retell — or a story you survive. Here is exactly what we prepare, and what we provide.',
  altitude: {
    title: 'Altitude & temperature',
    intro:
      'Bromo and Ijen sit higher than most travelers expect. Temperatures swing 20°C between coast and rim. We plan every departure around the morning low.',
    stats: [
      { label: 'Sunrise at Bromo', value: '2 – 7 °C', note: 'June – September' },
      { label: 'Trailhead (Bromo)', value: '2,200 m', note: 'Acclimatized first night' },
      { label: 'Crater rim', value: '2,329 m', note: 'Moderate 30 min climb' },
      { label: 'Ijen summit', value: '2,799 m', note: '2 hours from the gate' },
    ],
  },
  gear: {
    title: 'What we provide · what you bring',
    intro:
      'Every traveler is kitted with field-grade equipment on the mountain. Pack light for the rest; we handle the rest.',
    provided: [
      { name: 'Gas mask & filter', detail: '3M-compatible respirator for the Ijen crater floor.' },
      { name: 'Head torch', detail: 'Petzl-grade LED, 200+ lumens, fresh batteries nightly.' },
      { name: 'Thermal blanket', detail: 'Emergency bivvy, hand-warmer pack at the rim.' },
      { name: '4x4 jeep & driver', detail: 'Sea of Sand crossings, all fuel and permits included.' },
      { name: 'Mountain guide', detail: 'Local, English-speaking, first-aid certified.' },
      { name: 'Pre-trip briefing', detail: 'WhatsApp group with weather, gear, and photos from your guide.' },
    ],
    bring: [
      { name: 'Layered clothing', detail: 'Thermal base, fleece mid, windproof shell. Temperatures vary 20°C in a day.' },
      { name: 'Sturdy hiking boots', detail: 'Ankle support, broken in. Trail grip matters more than looks.' },
      { name: 'Gloves & beanie', detail: 'Pre-dawn at 2,300 m is genuinely cold, even in the dry season.' },
      { name: 'Sun protection', detail: 'SPF 50, UV sunglasses, lip balm. UV at altitude is 30%+ stronger.' },
      { name: 'Reusable water bottle', detail: 'We refill with boiled mountain water at every stop.' },
      { name: 'Camera', detail: 'Wide-angle for calderas, fast lens for blue fire. Spare batteries — cold drains them.' },
    ],
  },
  seasons: [
    { month: 'Jan', temp: '24° / 14°', rain: 'High', rating: 3, note: 'Wet, but waterfalls are at peak flow.' },
    { month: 'Feb', temp: '24° / 14°', rain: 'High', rating: 3, note: 'Lush green, occasional cloud at summit.' },
    { month: 'Mar', temp: '25° / 14°', rain: 'Medium', rating: 4, note: 'Transitional, fewer crowds.' },
    { month: 'Apr', temp: '25° / 13°', rain: 'Medium', rating: 4, note: 'Light crowds, occasional rain.' },
    { month: 'May', temp: '25° / 12°', rain: 'Low', rating: 5, note: 'First clear window begins.' },
    { month: 'Jun', temp: '25° / 10°', rain: 'Very low', rating: 5, note: 'Peak dry season, clearest sunrises.' },
    { month: 'Jul', temp: '25° / 9°', rain: 'Very low', rating: 5, note: 'Coldest at sunrise, crisp skies.' },
    { month: 'Aug', temp: '26° / 10°', rain: 'Very low', rating: 5, note: 'Reliable dry, book early.' },
    { month: 'Sep', temp: '26° / 11°', rain: 'Low', rating: 5, note: 'Last clear window, warm.' },
    { month: 'Oct', temp: '27° / 13°', rain: 'Medium', rating: 4, note: 'Transitional, fewer travelers.' },
    { month: 'Nov', temp: '27° / 14°', rain: 'High', rating: 3, note: 'Wet starts, moody skies.' },
    { month: 'Dec', temp: '26° / 14°', rain: 'High', rating: 3, note: 'Holiday crowds, misty peaks.' },
  ],
}

// ---------- HOW IT WORKS ----------
export const howItWorks = {
  label: 'How it works',
  title: 'From the first message to the rim of a volcano.',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mount_Bromo_Sunrise_Right.jpg/1920px-Mount_Bromo_Sunrise_Right.jpg',
  imageCaption: 'The Sea of Sand, Bromo, crossed before dawn',
  steps: [
    {
      n: '01',
      name: 'Tell us your window',
      line: 'Pick your dates and how bold you are feeling. We reply within a day with a draft arc.',
    },
    {
      n: '02',
      name: 'We craft your arc',
      line: "A day-by-day journey tuned to the light, your pace, and the season's moods on the mountain.",
    },
    {
      n: '03',
      name: 'Meet at the gate',
      line: 'Guides, jeeps, permits, beds: all arranged. You simply arrive in Surabaya and we take it from there.',
    },
    {
      n: '04',
      name: 'Stand where the earth breathes',
      line: 'Sunrise at the caldera, blue fire by night, with a local guide who grew up on the slope.',
    },
  ],
}

// ---------- FAQ ----------
export const faq = {
  label: 'Field letters',
  title: 'Questions every traveler asks.',
  intro: 'If yours is not here, message us on WhatsApp. We reply within an hour, Surabaya time.',
  items: [
    {
      q: 'Where do tours start and end?',
      a: 'Every tour begins in East Java. Most start at Juanda International Airport (Surabaya) or on request from Malang or Banyuwangi. We pick you up at the gate, with a sign, and we bring you back to a station or airport that matches your onward plans.',
    },
    {
      q: 'How fit do I need to be?',
      a: 'Bromo is easy: a short 30-minute walk on a paved path to the crater rim. Ijen is moderate: a 2-hour ascent on a well-marked trail, then a steeper descent into the crater. Tumpak Sewu is easy to moderate: bamboo ladders and a river-gorge walk. Most travelers aged 8 to 70 are comfortable on all three. Tell us about joint issues or breathing conditions and we will tune the route.',
    },
    {
      q: 'Is the sulfur gas at Ijen really dangerous?',
      a: 'The gas is unpleasant and can aggravate asthma. We provide a 3M-compatible respirator at the crater rim and again at the descent. We do not go downwind of the fumaroles, and we never linger more than 15 minutes at the blue flame. Our guide carries a gas monitor. Travelers with severe respiratory conditions should chose the Bromo or Tumpak Sewu tours instead.',
    },
    {
      q: 'What is the group size?',
      a: 'Twelve is the cap on most departures, eight on the Ijen ascent. We never combine strangers into a 30-seat bus. Smaller groups mean quieter moments at the rim, and at sunrise that is the whole point.',
    },
    {
      q: 'When is the best time to go?',
      a: 'May through September is the dry window, with the clearest sunrises and the most reliable blue fire. We still run departures in the green season (Nov – Mar) — waterfalls are heavier, crowds are lighter, and the mountains are moodier. The month-by-month rating is in the Expedition guide above.',
    },
    {
      q: 'Can I customize a private departure?',
      a: 'Yes. Every itinerary on this site can be rebuilt around your dates, group size, and pace. Tell us what you would like to add, remove, or replace, and we will send a draft arc within a day. Private departures start from 2 travelers.',
    },
    {
      q: 'What is the cancellation policy?',
      a: 'Full refund up to 30 days before departure. 50% refund up to 14 days. Inside 14 days, we offer a free date change once. If the mountain closes for safety (rare), we refund in full or move you to the next confirmed departure.',
    },
    {
      q: 'Do you arrange airport transfers?',
      a: 'Yes. Every tour includes private transfers from Juanda (Surabaya), Abdulrachman Saleh (Malang), or Blimbingsari (Banyuwangi). Vehicles are air-conditioned, drivers are licensed, and the cars are new enough to have working seatbelts in the back.',
    },
  ],
}

// ---------- FINAL CTA ----------
export const finalCta = {
  label: 'Your turn',
  title: 'The best sunrise of your life is still out there.',
  line: 'Volcano country keeps a seat for you at dawn. Twelve travelers. One unforgettable week.',
  cta: 'Request this journey',
  secondary: 'Ask us anything',
  image:
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=75',
}

// ---------- FOOTER ----------
export const footer = {
  description:
    "Vantage runs small-group expeditions through East Java's volcano country: sunrise calderas, blue fire, and the people who call the mountains home.",
  newsletterTitle: 'Field letters',
  newsletterLine: 'One letter a month. New routes, the best light, nothing else.',
  newsletterPlaceholder: 'Your email',
  newsletterButton: 'Join',
  attribution: 'Photography by contributors on Wikimedia Commons & Unsplash.',
  legal: '© 2026 Vantage. Crafted in East Java.',
}

// ------------------------------------------------------------
// UTILITY — downsize any Wikimedia thumbnail on demand.
// Keeps the single-file rebrand intact: components pick the
// width that matches their display size, never 1920px @ everything.
// ------------------------------------------------------------
export const thumb = (url: string, px: number) =>
  url.includes('/1920px-') ? url.replace('/1920px-', `/${px}px-`) : url
