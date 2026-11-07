export default function ImagePlaceholder({
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