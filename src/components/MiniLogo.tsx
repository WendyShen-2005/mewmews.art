import { siteContent } from "../siteContent";

export default function MiniLogo() {
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