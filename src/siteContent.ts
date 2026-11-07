// Import all sock images from src/assets/socks/
import sockBlackhole from './assets/socks/Blackhole.png'
import sockCosmicCollection from './assets/socks/CosmicCollection.png'
import sockGalaxyCat from './assets/socks/GalaxyCat.png'
import sockLostInTheSauce from './assets/socks/LostInTheSauce.png'
import sockNeonWay from './assets/socks/NeonWay.png'
import sockPinkDreams from './assets/socks/PinkDreams.png'
import sockSkiesBlue from './assets/socks/skies blue.png'
import sockSock2 from './assets/socks/sock 2.png'
import sockSock4 from './assets/socks/sock 4.png'
import sockSweetDreams from './assets/socks/SweetDreams.png'
import sockWingsCloud from './assets/socks/wings cloud.png'

// Import all art prints from src/assets/generalArt/
import artCyrenes from './assets/generalArt/cyrenes.png'
import artFriren from './assets/generalArt/friren.png'
import artFruit from './assets/generalArt/fruit.png'
import artFluttershy from './assets/generalArt/g6Fluttershy.png'
import artPinkiePie from './assets/generalArt/g6PinkiePie.png'
import artRainbowDash from './assets/generalArt/g6RainbowDash.png'
import artTwilight from './assets/generalArt/g6Twilight.png'
import artInfectedTwilight from './assets/generalArt/me when im twilight and infected.png'
import artPinkCloudWing from './assets/generalArt/pink cloud wing socks.png'
import artRalseiHoyo from './assets/generalArt/ralsei hoyo.png'
import artTwilightSingle from './assets/generalArt/twilight.png'

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
    heroSockImageUrl: sockBlackhole,
    heroArtPrintUrl: artCyrenes,
    badgeText: 'BATCH 01 CONCEPT',
    initialSockTitle: 'Cosmic Blackhole',
  },
  painAgitation: {
    title: 'If any of this sounds like you, your feet are ready for an upgrade:',
    points: [
      {
        boldText: 'Outfit Ruined by Boring Socks:',
        text: 'You spent 20 minutes putting together a great outfit, only for plain white or dull black socks to ruin the vibe.',
      },
      {
        boldText: 'Low Quality & Faded Colors:',
        text: 'You love wearing fun, colorful designs, but most "patterned" socks feel paper-thin, slide down your heels, or fade after two washes.',
      },
      {
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
      { title: '3 Limited-Edition Pairs', note: 'Pick your trio from Space, Animal, or Pattern series', imageUrl: sockCosmicCollection },
      { title: 'Illustrated Display Box', note: 'Custom packaging built to keep or display', imageUrl: artFruit },
      { title: 'Matching Vinyl Stickers', note: 'High-gloss waterproof stickers of each artwork', imageUrl: artPinkiePie },
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
        avatarUrl: artFluttershy,
        text: 'I tested sample pair #2 with my favorite platform sneakers and got three compliments before lunch! The space dog pattern is unreal 🚀✨',
        likes: '1.2k',
      },
      {
        id: '2',
        platform: 'instagram',
        username: 'Sam K.',
        handle: '@sam_fits',
        avatarUrl: artRainbowDash,
        text: 'Usually detailed pattern socks turn see-through or faded when you put them on, but these hold their vibrant color completely!!',
        likes: '840',
      },
      {
        id: '3',
        platform: 'tiktok',
        username: 'Chloe V.',
        handle: '@chloevibes',
        avatarUrl: artTwilight,
        text: 'The stay-up ribbing is the real hero here. Zero slouching in my boots all day long 🧦💜',
        likes: '2.4k',
      },
    ] as SocialComment[],
  },
  socksCatalog: [
    {
      id: 'blackhole',
      title: 'Cosmic Blackhole',
      note: 'Made for night explorers',
      colors: ['#101732', '#ff7a2e', '#d7ff43'],
      sockImageUrl: sockBlackhole,
      artPrintUrl: artCyrenes,
    },
    {
      id: 'galaxy-cat',
      title: 'Galaxy Cat',
      note: 'Purr-fect star sailor',
      colors: ['#1c173b', '#9b51e0', '#56ccf2'],
      sockImageUrl: sockGalaxyCat,
      artPrintUrl: artFriren,
    },
    {
      id: 'lost-sauce',
      title: 'Lost In The Sauce',
      note: 'Flavor overflow',
      colors: ['#ff4b4b', '#ffb800', '#27ae60'],
      sockImageUrl: sockLostInTheSauce,
      artPrintUrl: artFruit,
    },
    {
      id: 'neon-way',
      title: 'Neon Way',
      note: 'Wildly bright botanicals',
      colors: ['#c8f53e', '#258acf', '#fc79aa'],
      sockImageUrl: sockNeonWay,
      artPrintUrl: artRalseiHoyo,
    },
    {
      id: 'pink-dreams',
      title: 'Pink Dreams',
      note: 'Sweet, pastel sky',
      colors: ['#ff91ad', '#f9dd61', '#4d9bd5'],
      sockImageUrl: sockPinkDreams,
      artPrintUrl: artPinkCloudWing,
    },
    {
      id: 'skies-blue',
      title: 'Skies Blue',
      note: 'Cruise above the clouds',
      colors: ['#52b8ed', '#fff7dc', '#ff765f'],
      sockImageUrl: sockSkiesBlue,
      artPrintUrl: artTwilightSingle,
    },
    {
      id: 'sweet-dreams',
      title: 'Sweet Dreams',
      note: 'Soft bedtime vibes',
      colors: ['#a29bfe', '#ffeaa7', '#74b9ff'],
      sockImageUrl: sockSweetDreams,
      artPrintUrl: artInfectedTwilight,
    },
    {
      id: 'wings-cloud',
      title: 'Wings Cloud',
      note: 'Soar through bright skies',
      colors: ['#81ecec', '#fab1a0', '#ff7675'],
      sockImageUrl: sockWingsCloud,
      artPrintUrl: artFluttershy,
    },
    {
      id: 'sock-2',
      title: 'Pattern V2',
      note: 'Experimental batch drop',
      colors: ['#fdcb6e', '#e17055', '#d63031'],
      sockImageUrl: sockSock2,
      artPrintUrl: artRainbowDash,
    },
    {
      id: 'sock-4',
      title: 'Pattern V4',
      note: 'High-contrast line art',
      colors: ['#6c5ce7', '#00cec9', '#ffeaa7'],
      sockImageUrl: sockSock4,
      artPrintUrl: artPinkiePie,
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