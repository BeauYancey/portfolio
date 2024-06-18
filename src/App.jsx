import { useRef } from 'react'
import Dock from './Dock'
import ExCard from './ExCard'
import ContactForm from './ContactForm';

function App() {

  const aboutRef = useRef(null);
  const xpRef = useRef(null);
  const contactRef = useRef(null);

  const refs = [
    {name: 'about', ref: aboutRef},
    {name: 'experience', ref: xpRef},
    {name: 'contact', ref: contactRef}
  ];

  const experience = [
    {
      dates: '2024 - PRESENT',
      role: 'Freelance Web Developer',
      co: 'Upwork',
      desc: 'Short-term work developing websites and software for small businesses. Varying amounts of design and development involved in each project.',
      skills: ['Astro', 'React', 'Client Communication']
    },
    {
      dates: '2022 - PRESENT', 
      role: 'Operations Analyst', 
      co: 'BYU Office of IT', 
      desc: 'Ensure production systems used by the Office of IT are reliable, performant, and secure. Work closely with developers and product managers to identify and resolve issues.',
      skills: ['REST APIs', 'Team Leadership', 'Customer Service', 'Troubleshooting']
    },
    {
      dates: 'JAN - APR 2023',
      role: 'Teaching Assistant',
      co: 'BYU Dept. of Computer Science',
      desc: 'Teach a class section twice a week. Aid students in completion of the labs ad projects. Teach them the basics of logical problem solving and computer programming in the context of Python.',
      skills: ['Python', 'Teaching', 'Problem Solving']
    },
    {
      dates: '2019 - 2025',
      role: 'Student',
      co: 'Brigham Young University',
      desc: 'BS in Computer Science with an emphasis in Software Engineering. Classes included such topics as Web Development, Software Construction, Systems Programming, Data Structures and Algorithms, and UX Design.',
      skills: ['HTML/CSS/JavaScript', 'Python', 'Java', 'C++', 'Node.js', 'React']
    },

  ]

  return (
    <div className='content' style={{display: 'flex'}}>
      <Dock refs={refs} />
      <main>
        <section ref={aboutRef} id='about'>
          <p>
            Hi, I’m glad you’re here! You’re more than welcome to skip to 
            the <a href='#experience'>experience</a> or <a href='#contact'>contact</a> sections 
            but I’d love to tell you a bit about myself first :)
          </p>
          <p>
            I’ve been coding since I was 12. I didn’t love it at first though, so I took a break from it and only 
            picked it up again when I was a freshman at Brigham Young University. I plan to graduate in December 
            of 2025 with a degree in computer science and an emphasis in software engineering. I love building 
            practical and elegant products, be it a website or software.
          </p>
          <p>
            When I’m not at my computer, I’m usually playing board games, reading a book, baking with my <span className='hover-info'>sourdough 
            starter<span className='hidden-info'>His name is Andre</span></span>, or spending quality time with my beautiful wife. Shoutout to my beloved Hayley for the artwork 
            on this page.
          </p>
          <div style={{display: 'flex', gap: '5vw'}}>
            <img src='/baking.png' alt='baking' style={{width: '25vw', objectFit: 'cover'}} />
            <img src='/Heau.png' alt='Beau and Hayley' style={{width: '25vw', objectFit: 'cover'}}/>
          </div>
        </section>

        <section ref={xpRef} id='experience' style={{display: 'flex', flexDirection: 'column', gap: '2em'}}>
          {experience.map(ex => (
            <ExCard key={ex.role + ex.co} ex={ex} />
          ))}
        </section>

        <section ref={contactRef} id='contact'>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
            <img src='/Beau.png' style={{height: "65vh", objectFit: 'cover'}} />
            <div>
              <p>
                I am always looking for opportunities to bring your dreams to life. If you are looking to hire a developer 
                with a commitment to excellence and an enthusiasm for learning new technologies, please don't hesitate to
                reach out to me. Fill out this form and I'll get back to you as soon as I can :)
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
