import React, { useState, useEffect, type FormEvent } from 'react'
import { siteContent, type SockItem } from './siteContent'

function ImagePlaceholder({
  src,
  alt,
  caption,
  className = '',
  style,
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <figure className={`img-placeholder-wrapper ${className}`} style={style}>
      <img src={src} alt={alt} className="placeholder-img" loading="lazy" />
      {caption && <figcaption className="img-caption">{caption}</figcaption>}
    </figure>
  )
}

function EmailWaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <form className={`email-signup waitlist-form ${compact ? 'compact' : ''}`} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={`waitlist-email-${compact ? 'compact' : 'full'}`}>
        Email address
      </label>
      <input
        id={`waitlist-email-${compact ? 'compact' : 'full'}`}
        type="email"
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">
        {submitted ? '✓ Reserved!' : siteContent.hero.primaryCTA}
      </button>
    </form>
  )
}

function MiniLogo() {
  return (
    <a className="mini-logo" href="#top" aria-label="Mew Mew's Art and Apparel home">
      <b>MM</b>
      <span>
        {siteContent.brand.name}
        <br />
        {siteContent.brand.tagline}
      </span>
    </a>
  )
}

function InteractiveHeroSockCard() {
  const [viewState, setViewState] = useState<'sock' | 'art'>('sock')
  const [rotX, setRotX] = useState(0)
  const [rotY, setRotY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setRotX(-y * 0.05)
    setRotY(x * 0.05)
  }

  const handleMouseLeave = () => {
    setRotX(0)
    setRotY(0)
  }

  return (
    <div
      className="cosmic-card interactive-hero-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotate(3deg)`,
      }}
    >
      <span className="card-label">{siteContent.hero.badgeText}</span>

      <div className="media-container" style={{ margin: '20px 0 10px' }}>
        {viewState === 'sock' ? (
          <ImagePlaceholder
            src={siteContent.hero.heroSockImageUrl}
            alt="Cosmic Cat Sock Sample"
            caption="Knit Sample View"
          />
        ) : (
          <ImagePlaceholder
            src={siteContent.hero.heroArtPrintUrl}
            alt="Cosmic Cat Original Art Print"
            caption="Original Illustration View"
          />
        )}
      </div>

      <div className="card-footer-action" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
        <div>
          <b>{siteContent.hero.initialSockTitle}</b>
          <span style={{ display: 'block', fontSize: '10px', color: '#82758f' }}>
            {viewState === 'sock' ? '200-Needle Knit' : 'Matching Art Print'}
          </span>
        </div>
        <button
          className="toggle-view-btn"
          onClick={() => setViewState(viewState === 'sock' ? 'art' : 'sock')}
          aria-label="Toggle Sock and Art Print view"
          style={{
            padding: '6px 12px',
            background: '#8457b0',
            color: '#fff',
            border: 0,
            borderRadius: '999px',
            fontSize: '10px',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          {viewState === 'sock' ? 'See Art Print ↗' : 'See Sock Knit ↗'}
        </button>
      </div>
    </div>
  )
}

function SocialProofCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const comments = siteContent.socialProof.comments

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % comments.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [comments.length])

  const current = comments[activeIndex]

  return (
    <div className="social-proof-container" style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid #cbb9df', borderRadius: '18px', padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <div className="comment-card">
        <div className="comment-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <ImagePlaceholder src={current.avatarUrl} alt={current.username} className="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }} />
          <div className="user-info" style={{ flex: 1 }}>
            <b style={{ display: 'block', fontSize: '14px' }}>{current.username}</b>
            <span style={{ fontSize: '11px', color: '#877895' }}>{current.handle}</span>
          </div>
          <span className={`platform-badge ${current.platform}`} style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', padding: '4px 10px', borderRadius: '999px', background: current.platform === 'tiktok' ? '#ff7a2e' : '#7ed6f8', color: '#fff' }}>
            {current.platform}
          </span>
        </div>
        <p className="comment-body" style={{ fontStyle: 'italic', fontSize: '14px', lineHeight: 1.5, margin: '0 0 14px' }}>"{current.text}"</p>
        <div className="comment-footer" style={{ fontSize: '11px', color: '#877895' }}>
          <span>❤️ {current.likes} likes</span>
        </div>
      </div>

      <div className="carousel-dots" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
        {comments.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to comment ${i + 1}`}
            style={{
              width: i === activeIndex ? '20px' : '8px',
              height: '8px',
              borderRadius: '999px',
              border: 0,
              background: i === activeIndex ? '#8457b0' : '#cbb9df',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState<'socks' | 'art'>('socks')

  return (
    <main className="v2" id="top">
      {/* Top Banner */}
      <div className="discount-strip">
        <span>VIP WAITLIST NOW OPEN</span>
        <b>Get 20% Off Launch Pricing + Free Bonus Holo-Sticker Set.</b>
        <a href="#waitlist-signup">Reserve Spot →</a>
      </div>

      {/* Header Nav */}
      <header className="v2-nav">
        <MiniLogo />
        <nav>
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

          <div id="waitlist-signup" className="cosmic-signup">
            <p>
              <b>Lock in your VIP discount</b>
              <span>$0 to join • 24-hour head start on Batch 01.</span>
            </p>
            <EmailWaitlistForm compact />
          </div>
        </div>

        <div className="cosmic-stage">
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
      <section className="cosmic-work" id="pain-points" style={{ background: '#f3edff', borderBottom: '1px solid #d4c6e3' }}>
        <div className="cosmic-section-head">
          <div>
            <p className="eyebrow">{siteContent.painAgitation.title}</p>
            <h2>READY FOR AN UPGRADE?</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {siteContent.painAgitation.points.map((pt, i) => (
            <div key={i} style={{ background: '#fff', padding: '24px', borderRadius: '14px', border: '1px solid #cbb8dd' }}>
              <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>{pt.icon}</span>
              <h3 style={{ margin: '0 0 8px', fontSize: '16px' }}>{pt.boldText}</h3>
              <p style={{ margin: 0, color: '#766883', fontSize: '13px', lineHeight: 1.6 }}>{pt.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Method / Features */}
      <section className="cosmic-work">
        <div className="cosmic-section-head">
          <div>
            <p>{siteContent.method.eyebrow}</p>
            <h2>{siteContent.method.title}</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {siteContent.method.features.map((f, i) => (
            <div key={i} style={{ background: 'linear-gradient(145deg, #e9ddfa, #d7eaff)', padding: '24px', borderRadius: '12px', border: '1px solid #c2acd9' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#8457b0' }}>0{i + 1}</span>
              <h3 style={{ margin: '8px 0', fontSize: '18px' }}>{f.title}</h3>
              <p style={{ margin: 0, color: '#766883', fontSize: '13px' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog Preview */}
      <section className="cosmic-work" id="cosmic-work">
        <div className="cosmic-section-head">
          <div>
            <p>Selected work / Batch 01</p>
            <h2>THE SOCK GALAXY</h2>
          </div>
          <p>Original concepts built from hand-drawn worlds, candy-bright color, and a happy little bit of chaos.</p>
        </div>
        <div className="cosmic-products">
          {siteContent.socksCatalog.map((sock: SockItem, i: number) => (
            <article key={sock.id}>
              <div className="cosmic-product-art">
                <span>0{i + 1}</span>
                <ImagePlaceholder src={sock.sockImageUrl} alt={sock.title} />
              </div>
              <h3>{sock.title}</h3>
              <p>{sock.note}</p>
              <div className="swatches">
                {sock.colors.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="cosmic-tabs">
        <div className="tab-buttons">
          <button className={tab === 'socks' ? 'active' : ''} onClick={() => setTab('socks')}>
            Sock Designs <span>04</span>
          </button>
          <button className={tab === 'art' ? 'active' : ''} onClick={() => setTab('art')}>
            Art & Prints <span>04</span>
          </button>
        </div>
        <div className="tab-content" key={tab}>
          {tab === 'socks'
            ? siteContent.socksCatalog.map((s) => (
                <div className="tab-sock" key={s.id}>
                  <ImagePlaceholder src={s.sockImageUrl} alt={s.title} />
                  <span>{s.title}</span>
                </div>
              ))
            : siteContent.socksCatalog.map((s) => (
                <div className="tab-sock" key={s.id}>
                  <ImagePlaceholder src={s.artPrintUrl} alt={s.title} />
                  <span>{s.title} Print</span>
                </div>
              ))}
        </div>
      </section>

      {/* What's Included / Collector Set */}
      <section className="cosmic-work" style={{ background: '#f8f4ff' }}>
        <div className="cosmic-section-head">
          <div>
            <p>{siteContent.collectorBundle.eyebrow}</p>
            <h2>{siteContent.collectorBundle.title}</h2>
          </div>
          <p style={{ fontWeight: 800, color: '#8457b0' }}>{siteContent.collectorBundle.targetPrice}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {siteContent.collectorBundle.items.map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '14px', border: '1px solid #cbb8dd', overflow: 'hidden', padding: '16px' }}>
              <ImagePlaceholder src={item.imageUrl} alt={item.title} />
              <h4 style={{ margin: '14px 0 4px', fontSize: '16px' }}>{item.title}</h4>
              <p style={{ margin: 0, color: '#766883', fontSize: '12px' }}>{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="cosmic-work" style={{ background: '#f3edff' }}>
        <div className="cosmic-section-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <p>{siteContent.socialProof.eyebrow}</p>
            <h2>{siteContent.socialProof.title}</h2>
          </div>
        </div>
        <SocialProofCarousel />
      </section>

      {/* FAQ */}
      <section className="cosmic-work" id="faq" style={{ background: '#f8f4ff' }}>
        <div className="cosmic-section-head">
          <div>
            <p>Got Questions?</p>
            <h2>FREQUENTLY ASKED</h2>
          </div>
        </div>
        <div style={{ maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {siteContent.faqs.map((faq, i) => (
            <details key={i} style={{ background: '#fff', padding: '18px 24px', borderRadius: '12px', border: '1px solid #cbb8dd', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 700, fontSize: '15px', outline: 'none' }}>{faq.question}</summary>
              <p style={{ marginTop: '12px', marginBottom: 0, color: '#766883', fontSize: '13px', lineHeight: 1.6 }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="cosmic-contact" id="cosmic-contact">
        <div>
          <p className="eyebrow">Don't Miss Batch 01</p>
          <h2>
            RESERVE YOUR<br />
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