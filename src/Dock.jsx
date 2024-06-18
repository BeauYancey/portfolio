import { useEffect, useState } from 'react';

function Dock({ refs }) {

  const [active, setActive] = useState('about')

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
      <img className='headshot' alt='Beau' src='/headshot.png' style={{width: '8em', height: '8em', borderRadius: '4em', backgroundColor: '#8DA0D1A0'}}/>
      <p>I make things.</p>
      <ul>
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
          <a className={'nav-link' + (active === 'contact' ? ' active':'')} href='#contact'>
            <span className='nav-indicator'></span>
            <span className='nav-text'>Contact Me</span>
          </a>
        </li>
      </ul>
      <ul style={{display: 'flex', flexDirection: 'row', gap: '1em'}}>
        <li><a href='https://github.com/BeauYancey' target='_blank'><img id='github-logo' className='social' src='/github.png'/></a></li>
        <li><a href='https://www.instagram.com/beaujyancey/' target='_blank'><img className='social' src='/insta.png'/></a></li>
        <li><a href='https://www.linkedin.com/in/beau-yancey/' target='_blank'><img className='social' src='/linkedin.png'/></a></li>
      </ul>
    </nav>
  )
}

export default Dock;