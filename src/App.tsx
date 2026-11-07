import { useState } from 'react'
import { siteContent, type SockItem } from './siteContent'
import MiniLogo from './components/MiniLogo'
import EmailWaitlistForm from './components/EmailWaitlistForm'
import InteractiveHeroSockCard from './components/InteractiveHeroSockCard'
import ImagePlaceholder from './components/ImagePlaceholder'
import SocialProofCarousel from './components/SocialProofCarousel'
import { Sparkles, Zap, CheckCircle2, Grid, HelpCircle, Mail, Flame } from 'lucide-react'
import TabbedGallery from './components/TabbedGallery';
import SockGalaxyCatalog from './components/SockGalaxyCatalog'

export default function App() {
  const [tab, setTab] = useState<'socks' | 'art'>('socks')

  return (
    <main className="v2" id="top">
      {/* Top Banner */}
      <div className="discount-strip">
        <span>VIP WAITLIST NOW OPEN</span>
        <b className="desktop-only">Get 20% Off Launch Pricing + Free Bonus Holo-Sticker Set.</b>
        <a href="#waitlist-signup">Reserve Spot →</a>
      </div>

      {/* Header Nav */}
      <header className="v2-nav">
        <MiniLogo />
        <nav className="desktop-only">
          <a href="#pain-points">Why Us</a>
          <a href="#cosmic-work">Catalog</a>
          <a href="#faq">FAQ</a>
        </nav>
        <span className="availability">
          <i /> Batch 01 Opening Soon
        </span>
      </header>

      {/* Hero Section */}
      <section className="cosmic-hero">
        <div className="cosmic-copy">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1>
            Your Ankle Space<br />
            <span>Is Asking for an Upgrade.</span>
          </h1>
          <p className="lede">{siteContent.hero.headlineSub}</p>

          {/* SINGLE SIGNUP FORM: Rendered once, directly below headline & before mobile stage */}
          <div id="waitlist-signup" className="cosmic-signup">
            <p>
              <b>Lock in your VIP discount</b>
              <span>$0 to join • 24-hour head start on Batch 01.</span>
            </p>
            <EmailWaitlistForm compact />
          </div>

          {/* MOBILE STAGE */}
          <div className="cosmic-stage mobile-stage">
            <span className="space-spark spark-one" aria-hidden="true">✦</span>
            <span className="space-spark spark-two" aria-hidden="true">✦</span>
            <span className="space-spark spark-three" aria-hidden="true">✦</span>
            <span className="cute-planet planet-one" aria-hidden="true"><i /></span>
            <span className="cute-planet planet-two" aria-hidden="true"><i /></span>
            <div className="orbit-ring" />
            <InteractiveHeroSockCard />
            <span className="floating-note note-one">Limited first run</span>
            <span className="floating-note note-two">Made to shine</span>
          </div>
        </div>

        {/* DESKTOP STAGE */}
        <div className="cosmic-stage desktop-stage">
          <span className="space-spark spark-one" aria-hidden="true">✦</span>
          <span className="space-spark spark-two" aria-hidden="true">✦</span>
          <span className="space-spark spark-three" aria-hidden="true">✦</span>
          <span className="cute-planet planet-one" aria-hidden="true"><i /></span>
          <span className="cute-planet planet-two" aria-hidden="true"><i /></span>
          <div className="orbit-ring" />
          <InteractiveHeroSockCard />
          <span className="floating-note note-one">Limited first run</span>
          <span className="floating-note note-two">Made to shine</span>
        </div>
      </section>

      {/* Section 2: Pain Agitation */}
      <section className="cosmic-work pain-section" id="pain-points">
        <div className="cosmic-section-head">
          <div>
            <p className="eyebrow">{siteContent.painAgitation.title}</p>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flame className="section-icon" /> READY FOR AN UPGRADE?
            </h2>
          </div>
        </div>
        <div className="card-grid">
          {siteContent.painAgitation.points.map((pt, i) => (
            <div key={i} className="content-card">
              <h3>{pt.boldText}</h3>
              <p>{pt.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Method / Features */}
      <section className="cosmic-work method-section">
        <div className="cosmic-section-head">
          <div>
            <p>{siteContent.method.eyebrow}</p>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap className="section-icon" /> {siteContent.method.title}
            </h2>
          </div>
        </div>
        <div className="card-grid">
          {siteContent.method.features.map((f, i) => (
            <div key={i} className="method-card">
              <span className="step-badge">0{i + 1}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog Preview */}
      <SockGalaxyCatalog />

      {/* Interactive Tabs (Persistent Scroll Horizontal 1-Row Galleries) */}
      <TabbedGallery />

      {/* What's Included / Collector Set */}
      <section className="cosmic-work bundle-section">
        <div className="cosmic-section-head">
          <div>
            <p>{siteContent.collectorBundle.eyebrow}</p>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles className="section-icon" /> {siteContent.collectorBundle.title}
            </h2>
          </div>
          <p className="target-price">{siteContent.collectorBundle.targetPrice}</p>
        </div>
        <div className="card-grid">
          {siteContent.collectorBundle.items.map((item, i) => (
            <div key={i} className="bundle-card">
              <ImagePlaceholder src={item.imageUrl} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="cosmic-work social-section">
        <div className="cosmic-section-head centered">
          <div>
            <p>{siteContent.socialProof.eyebrow}</p>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 className="section-icon" /> {siteContent.socialProof.title}
            </h2>
          </div>
        </div>
        <SocialProofCarousel />
      </section>

      {/* FAQ */}
      <section className="cosmic-work faq-section" id="faq">
        <div className="cosmic-section-head">
          <div>
            <p>Got Questions?</p>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle className="section-icon" /> FREQUENTLY ASKED
            </h2>
          </div>
        </div>
        <div className="faq-container">
          {siteContent.faqs.map((faq, i) => (
            <details key={i} className="faq-card">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="cosmic-contact" id="cosmic-contact">
        <div>
          <p className="eyebrow">Don't Miss Batch 01</p>
          <h2 style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail className="section-icon" /> RESERVE YOUR
            </span>
            <span>SPOT NOW.</span>
          </h2>
          <p>We’re capping the initial drop to keep quality ultra-high. Enter your email now to secure early access before we open to the public.</p>
        </div>
        <div>
          <EmailWaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="cosmic-footer">
        <MiniLogo />
        <span>© {new Date().getFullYear()} / ALL RIGHTS RESERVED</span>
        <span>BRIGHT ART FROM A TINY GALAXY.</span>
      </footer>
    </main>
  )
}