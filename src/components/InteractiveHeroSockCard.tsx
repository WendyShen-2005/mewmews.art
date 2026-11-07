import { useState } from "react"
import { siteContent } from "../siteContent"
import ImagePlaceholder from "./ImagePlaceholder"

export default function InteractiveHeroSockCard() {
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