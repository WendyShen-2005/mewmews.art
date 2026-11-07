import { useState, type FormEvent } from "react"
import { siteContent } from "../siteContent"

export default function EmailWaitlistForm({ compact = false }: { compact?: boolean }) {
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