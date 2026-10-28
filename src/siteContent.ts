export interface SockItem {
  id: string
  title: string
  note: string
  colors: string[]
  sockImageUrl: string
  artPrintUrl: string
}

export interface SocialComment {
  id: string
  platform: 'tiktok' | 'instagram'
  username: string
  handle: string
  avatarUrl: string
  text: string
  likes: string
}

export interface FAQItem {
  question: string
  answer: string
}

export const siteContent = {
  brand: {
    name: "Mew Mew's",
    tagline: 'Art & Apparel',
    handle: '@mewmewmakes',
    socialUrl: 'https://tiktok.com',
  },
  hero: {
    eyebrow: 'Batch 01 VIP Waitlist',
    headlineMain: 'Your Ankle Space Is Asking for an Upgrade.',
    headlineSub: 'Limited-edition, ridiculously cute statement socks featuring cosmic critters, bold pattern play, and vibrant colorway drops.',
    primaryCTA: 'Get Early Access & 20% Off Launch Price',
    heroSockImageUrl: 'https://via.placeholder.com/400x500/141a39/d8ff44?text=Cosmic+Cat+Sock',
    heroArtPrintUrl: 'https://via.placeholder.com/400x500/ff7a2e/ffffff?text=Cosmic+Cat+Art+Print',
    badgeText: 'BATCH 01 CONCEPT',
    initialSockTitle: 'Cosmic Blackhole',
  },
  painAgitation: {
    title: 'If any of this sounds like you, your feet are ready for an upgrade:',
    points: [
      {
        icon: '🎨',
        boldText: 'Outfit Ruined by Boring Socks:',
        text: 'You spent 20 minutes putting together a great outfit, only for plain white or dull black socks to ruin the vibe.',
      },
      {
        icon: '🌧️',
        boldText: 'Low Quality & Faded Colors:',
        text: 'You love wearing fun, colorful designs, but most "patterned" socks feel paper-thin, slide down your heels, or fade after two washes.',
      },
      {
        icon: '✨',
        boldText: 'Lacking Effortless Style:',
        text: 'You want a subtle, effortless way to add personality, color, and playful energy to your daily style without overthinking it.',
      },
    ],
  },
  method: {
    eyebrow: 'Why Our Way Works',
    title: 'Wearable Art Built for All-Day Wear',
    features: [
      {
        title: 'Original Artwork',
        desc: '100% original designs—from space foxes to pastel explosions—knitted directly into the fabric.',
      },
      {
        title: '200-Needle Knit',
        desc: 'Ultra-fine density knitting that preserves high-detail line art and bold color saturation.',
      },
      {
        title: 'Stay-Up Fit',
        desc: 'Non-slip ribbing and smooth toe seams so your socks look incredible without scrunching up.',
      },
    ],
  },
  collectorBundle: {
    eyebrow: "What's Included",
    title: 'Batch 01 Collector’s Box Set',
    targetPrice: '$20 – $30 Target Price',
    items: [
      { title: '3 Limited-Edition Pairs', note: 'Pick your trio from Space, Animal, or Pattern series', imageUrl: 'https://via.placeholder.com/300x200/2788d8/ffffff?text=3+Pair+Bundle' },
      { title: 'Illustrated Display Box', note: 'Custom packaging built to keep or display', imageUrl: 'https://via.placeholder.com/300x200/ffe06c/141a39?text=Collector+Box' },
      { title: 'Matching Vinyl Stickers', note: 'High-gloss waterproof stickers of each artwork', imageUrl: 'https://via.placeholder.com/300x200/ff91ad/ffffff?text=Sticker+Pack' },
    ],
  },
  socialProof: {
    eyebrow: 'Loved on TikTok & IG',
    title: 'What the VIP Beta Testers are Saying',
    comments: [
      {
        id: '1',
        platform: 'tiktok',
        username: 'Maya T.',
        handle: '@mayastyles',
        avatarUrl: 'https://via.placeholder.com/50x50/ff7198/ffffff?text=MT',
        text: 'I tested sample pair #2 with my favorite platform sneakers and got three compliments before lunch! The space dog pattern is unreal 🚀✨',
        likes: '1.2k',
      },
      {
        id: '2',
        platform: 'instagram',
        username: 'Sam K.',
        handle: '@sam_fits',
        avatarUrl: 'https://via.placeholder.com/50x50/59bde9/ffffff?text=SK',
        text: 'Usually detailed pattern socks turn see-through or faded when you put them on, but these hold their vibrant color completely!!',
        likes: '840',
      },
      {
        id: '3',
        platform: 'tiktok',
        username: 'Chloe V.',
        handle: '@chloevibes',
        avatarUrl: 'https://via.placeholder.com/50x50/ccf44b/141a39?text=CV',
        text: 'The stay-up ribbing is the real hero here. Zero slouching in my boots all day long 🧦💜',
        likes: '2.4k',
      },
    ] as SocialComment[],
  },
  socksCatalog: [
    {
      id: 'cosmic',
      title: 'Cosmic Blackhole',
      note: 'Made for night explorers',
      colors: ['#101732', '#ff7a2e', '#d7ff43'],
      sockImageUrl: 'https://via.placeholder.com/300x380/101732/d7ff43?text=Cosmic+Blackhole',
      artPrintUrl: 'https://via.placeholder.com/300x380/ff7a2e/101732?text=Cosmic+Art+Print',
    },
    {
      id: 'sky',
      title: 'Airplane Sky',
      note: 'Cruise above the clouds',
      colors: ['#52b8ed', '#fff7dc', '#ff765f'],
      sockImageUrl: 'https://via.placeholder.com/300x380/52b8ed/fff7dc?text=Airplane+Sky',
      artPrintUrl: 'https://via.placeholder.com/300x380/ff765f/ffffff?text=Sky+Art+Print',
    },
    {
      id: 'lime',
      title: 'Electric Meadow',
      note: 'Wildly bright botanicals',
      colors: ['#c8f53e', '#258acf', '#fc79aa'],
      sockImageUrl: 'https://via.placeholder.com/300x380/c8f53e/258acf?text=Electric+Meadow',
      artPrintUrl: 'https://via.placeholder.com/300x380/fc79aa/ffffff?text=Meadow+Art+Print',
    },
    {
      id: 'pink',
      title: 'Strawberry Orbit',
      note: 'Sweet, not subtle',
      colors: ['#ff91ad', '#f9dd61', '#4d9bd5'],
      sockImageUrl: 'https://via.placeholder.com/300x380/ff91ad/f9dd61?text=Strawberry+Orbit',
      artPrintUrl: 'https://via.placeholder.com/300x380/4d9bd5/ffffff?text=Strawberry+Art+Print',
    },
  ] as SockItem[],
  faqs: [
    {
      question: 'When do these drop?',
      answer: 'We’re finalizing the first production run right now! Waitlist members will get an exact date announcement via email first.',
    },
    {
      question: 'Will these fit my shoe size?',
      answer: 'Our initial run uses a super-flexible 4-way stretch blend designed to comfortably fit US Unisex sizes 6–12.',
    },
    {
      question: 'Are these limited edition?',
      answer: 'Yes. Once a featured artwork series sells out, we rotate in brand-new designs for the next batch.',
    },
  ] as FAQItem[],
}