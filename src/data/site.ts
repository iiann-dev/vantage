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
  { label: 'Plan', href: '#plan' },
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mount_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg/1920px-Mount_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Air_Terjun_Tumpak_Sewu.jpg/1920px-Air_Terjun_Tumpak_Sewu.jpg',
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
    includes: ['All permits & park fees', 'Local guide + driver', 'Homestay & boutique stays', 'Jeep safaris & transfers'],
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