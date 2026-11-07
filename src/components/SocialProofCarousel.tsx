import { useEffect, useState } from "react"
import { siteContent } from "../siteContent"
import ImagePlaceholder from "./ImagePlaceholder"

export default function SocialProofCarousel() {
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