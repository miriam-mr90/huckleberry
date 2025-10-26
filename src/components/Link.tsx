import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface LinkProps {
  to: string
  children: ReactNode
  ariaLabel?: string
}

export const Link = ({ to, children, ariaLabel }: LinkProps) => {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault()

    // Detect hash for same-page sections
    const hash = to.split('#')[1]

    navigate(to)

    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    // Scroll to top for normal navigation
    window.scrollTo(0, 0)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(e)
    }
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={typeof children === 'string' ? undefined : 'link'}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {children}
    </a>
  )
}
