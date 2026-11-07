import { useState, useRef, useEffect } from 'react'
import { siteContent } from '../siteContent'
import ImagePlaceholder from './ImagePlaceholder'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TabbedGallery() {
  const [tab, setTab] = useState<'socks' | 'art'>('socks')

  // Refs for persistent scroll position
  const socksRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLDivElement>(null)

  // Navigation arrow visibility state
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Check scroll position for current active tab container
  const updateScrollState = () => {
    const activeRef = tab === 'socks' ? socksRef.current : artRef.current
    if (!activeRef) return

    const { scrollLeft, scrollWidth, clientWidth } = activeRef
    setCanScrollLeft(scrollLeft > 5)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5)
  }

  // Update arrow visibility when switching tabs or scrolling
  useEffect(() => {
    updateScrollState()
  }, [tab])

  const handleScroll = () => {
    updateScrollState()
  }

  // Smooth scroll helper for arrows
  const scrollByAmount = (direction: 'left' | 'right') => {
    const activeRef = tab === 'socks' ? socksRef.current : artRef.current
    if (!activeRef) return

    const scrollDistance = activeRef.clientWidth * 0.75
    activeRef.scrollBy({
      left: direction === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    })
  }

  return (
    <section className="cosmic-tabs">
      {/* Tab Header Buttons */}
      <div className="tab-buttons">
        <button
          className={tab === 'socks' ? 'active' : ''}
          onClick={() => setTab('socks')}
        >
          Sock Designs <span>{siteContent.socksCatalog.length.toString().padStart(2, '0')}</span>
        </button>
        <button
          className={tab === 'art' ? 'active' : ''}
          onClick={() => setTab('art')}
        >
          Art & Prints <span>{siteContent.socksCatalog.length.toString().padStart(2, '0')}</span>
        </button>
      </div>

      {/* Gallery Wrapper with Scroll Arrows */}
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

        {/* Sock Designs Gallery (Stay mounted in DOM to keep scroll position) */}
        <div
          ref={socksRef}
          onScroll={handleScroll}
          className={`tab-scroll-container ${tab === 'socks' ? 'is-visible' : 'is-hidden'}`}
        >
          {siteContent.socksCatalog.map((s) => (
            <div className="tab-sock tab-card-item" key={s.id}>
              <ImagePlaceholder src={s.sockImageUrl} alt={s.title} />
              <span>{s.title}</span>
            </div>
          ))}
        </div>

        {/* Art & Prints Gallery */}
        <div
          ref={artRef}
          onScroll={handleScroll}
          className={`tab-scroll-container ${tab === 'art' ? 'is-visible' : 'is-hidden'}`}
        >
          {siteContent.socksCatalog.map((s) => (
            <div className="tab-sock tab-card-item" key={s.id}>
              <ImagePlaceholder src={s.artPrintUrl} alt={s.title} />
              <span>{s.title} Print</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}