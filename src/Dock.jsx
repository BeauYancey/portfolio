import { useEffect, useState } from 'react';

function Dock({ refs }) {

  const [active, setActive] = useState('about')
  let githubLogo
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    githubLogo = '/github-white.png'
  } else {
    githubLogo = '/github.png'
  }

  useEffect(() => {
    const handleScroll = () => {
      refs.forEach(obj => {
        if (obj.ref.current) {
          const rect = obj.ref.current.getBoundingClientRect();
          const isVisible = (
            rect.bottom >= (.25 * window.innerHeight || .25 * document.documentElement.clientHeight) &&
            rect.top <= (.25 * window.innerHeight || .25 * document.documentElement.clientHeight)

          )
          if (isVisible) {
            setActive(obj.name)
          }

        }
      })
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <nav className='dock'>
      <h1><a href='#'>Beau Yancey</a></h1>
      <h3>Fullstack Developer</h3>
      <img className='headshot' alt='Beau' src='/headshot.png' />
      <p>I make things.</p>
      <ul className='nav-list'>
        <li>
          <a className={'nav-link' + (active === 'about' ? ' active':'')} href='#about'>
            <span className='nav-indicator'></span>
            <span className='nav-text'>About Me</span>
          </a>
        </li>
        <li>
          <a className={'nav-link' + (active === 'experience' ? ' active':'')} href='#experience'>
            <span className='nav-indicator'></span>
            <span className='nav-text'>Experience</span>
          </a>
        </li>
        <li>
          <a className={'nav-link' + (active === 'projects' ? ' active':'')} href='#projects'>
            <span className='nav-indicator'></span>
            <span className='nav-text'>Projects</span>
          </a>
        </li>
        <li>
          <a className={'nav-link' + (active === 'contact' ? ' active':'')} href='#contact'>
            <span className='nav-indicator'></span>
            <span className='nav-text'>Contact Me</span>
          </a>
        </li>
      </ul>
      <ul className='social-links'>
        <li><a href='https://github.com/BeauYancey' target='_blank'><img className='social' src={githubLogo}/></a></li>
        <li><a href='https://www.instagram.com/beaujyancey/' target='_blank'><img className='social' src='/insta.png'/></a></li>
        <li><a href='https://www.linkedin.com/in/beau-yancey/' target='_blank'><img className='social' src='/linkedin.png'/></a></li>
      </ul>
    </nav>
  )
}

export default Dock;