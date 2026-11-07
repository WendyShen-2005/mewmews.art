import { useState, useRef, useEffect } from 'react'
import { siteContent, type SockItem } from '../siteContent'
import ImagePlaceholder from './ImagePlaceholder'
import { Grid, ChevronLeft, ChevronRight } from 'lucide-react'

export default function SockGalaxyCatalog() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    if (!containerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setCanScrollLeft(scrollLeft > 5)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5)
  }

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [])

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!containerRef.current) return
    const scrollDistance = containerRef.current.clientWidth * 0.75
    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    })
  }

  return (
    <section className="cosmic-work" id="cosmic-work">
      <div className="cosmic-section-head">
        <div>
          <p>Selected work / Batch 01</p>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Grid className="section-icon" /> THE SOCK GALAXY
          </h2>
        </div>
        <p>Original concepts built from hand-drawn worlds, candy-bright color, and a happy little bit of chaos.</p>
      </div>

      <div className="gallery-carousel-wrapper">
        {canScrollLeft && (
          <button
            className="carousel-arrow arrow-left"
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {canScrollRight && (
          <button
            className="carousel-arrow arrow-right"
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        )}

        <div
          ref={containerRef}
          onScroll={updateScrollState}
          className="tab-scroll-container cosmic-products"
        >
          {siteContent.socksCatalog.map((sock: SockItem, i: number) => (
            <article key={sock.id} className="tab-card-item">
              <div className="cosmic-product-art">
                <span>{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
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
      </div>
    </section>
  )
}