import { useEffect, useState } from 'react'
import type { SectionRef } from './App'

interface DockProps {
  refs: SectionRef[]
}

function Dock({ refs }: DockProps) {
  const [active, setActive] = useState<SectionRef['name']>('about')

  const githubLogo = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? '/github-white.png'
    : '/github.png'

  useEffect(() => {
    const handleScroll = () => {
      refs.forEach((obj) => {
        if (obj.ref.current) {
          const rect = obj.ref.current.getBoundingClientRect()
          const threshold = 0.25 * (window.innerHeight || document.documentElement.clientHeight)
          const isVisible = rect.bottom >= threshold && rect.top <= threshold

          if (isVisible) {
            setActive(obj.name)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [refs])

  return (
    <nav className="dock">
      <h1><a href="#">Beau Yancey</a></h1>
      <h3>Software Engineer</h3>
      <img className="headshot" alt="Beau" src="/headshot.png" />
      <ul className="nav-list">
        <li>
          <a className={'nav-link' + (active === 'about' ? ' active' : '')} href="#about">
            <span className="nav-indicator" />
            <span className="nav-text">About Me</span>
          </a>
        </li>
        <li>
          <a className={'nav-link' + (active === 'experience' ? ' active' : '')} href="#experience">
            <span className="nav-indicator" />
            <span className="nav-text">Experience</span>
          </a>
        </li>
        <li>
          <a className={'nav-link' + (active === 'projects' ? ' active' : '')} href="#projects">
            <span className="nav-indicator" />
            <span className="nav-text">Projects</span>
          </a>
        </li>
        <li>
          <a className={'nav-link' + (active === 'contact' ? ' active' : '')} href="#contact">
            <span className="nav-indicator" />
            <span className="nav-text">Contact Me</span>
          </a>
        </li>
      </ul>
      <ul className="social-links">
        <li><a href="https://github.com/BeauYancey" target="_blank" rel="noreferrer"><img className="social" src={githubLogo} alt="GitHub" /></a></li>
        <li><a href="https://www.instagram.com/beaujyancey/" target="_blank" rel="noreferrer"><img className="social" src="/insta.png" alt="Instagram" /></a></li>
        <li><a href="https://www.linkedin.com/in/beau-yancey/" target="_blank" rel="noreferrer"><img className="social" src="/linkedin.png" alt="LinkedIn" /></a></li>
      </ul>
    </nav>
  )
}

export default Dock
