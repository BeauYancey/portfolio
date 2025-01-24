import { useRef } from 'react'
import Dock from './Dock'
import ExCard from './ExCard'
import ContactForm from './ContactForm';
import ProjectCard from './ProjectCard';

function App() {

  const aboutRef = useRef(null);
  const xpRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null)

  const refs = [
    {name: 'about', ref: aboutRef},
    {name: 'experience', ref: xpRef},
    {name: 'contact', ref: contactRef},
    {name: 'projects', ref: projectsRef}
  ];

  const experience = [
    {
      dates: 'JUL - AUG 2024',
      role: 'Software Engineer Intern',
      co: 'SILAC Insurance',
      desc: 'Contribute to projects focusing on reducing technical debt, enhancing the unit testing framework, and bolstering security across a suite of applications',
      skills: ['Cross-Functional Collaboration', 'Django', 'SQL', 'Unit Testing', 'Scrum', 'Agile Methodologies']
    },
    {
      dates: '2022 - PRESENT', 
      role: 'Operations Analyst', 
      co: 'BYU Office of IT', 
      desc: 'Ensure production systems used by the Office of IT are reliable, performant, and secure. Work closely with developers and product managers to identify and resolve issues.',
      skills: ['REST APIs', 'Team Leadership', 'Customer Service', 'Troubleshooting', 'Quality Assurance', 'DevOps', 'Self Leadership']
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
      skills: ['HTML/CSS/JavaScript', 'Python', 'Java', 'C/C++', 'Node.js', 'React', 'Databases', 'Data Structures']
    }
  ]

  const projects = [
    {
      name: 'The Deck Board Game Cafe',
      link: 'https://github.com/BeauYancey/the-deck',
      tech: ['NodeJS', 'Express Server', 'MongoDB', 'ReactJS'],
      desc: 'Site for a board game cafe startup with client facing information and an admin login.',
      img: '',
    },
    {
      name: 'Kanban Board',
      link: 'https://github.com/BeauYancey/kanban',
      tech: ['NodeJS', 'Express Server', 'MySQL', 'ReactJS'],
      desc: 'Work management website designed to resemble a kanban board. Includes login and collaboration features',
      img: '',
    },
    {
      name: 'Chess Server',
      link: 'https://github.com/BeauYancey/chess',
      tech: ['Java', 'Maven', 'Spark Server', 'JUnit Jupiter'],
      desc: 'Online multiplayer chess server and a command line client built for a class. This service is not currently running.',
      img: '',
    },
    {
      name: 'Coming Soon',
      link: '',
      tech: ['NextJS', 'Tailwind CSS', 'Winston Logger', 'Websocket'],
      desc: 'I\'m always working on more projects. Come back soon to see my new stuff. Reach out to me if you have a project you need built',
      img: '',
    }
  ]

  return (
    <div className='content'>
      <Dock refs={refs} />
      <main>
        <section ref={aboutRef} id='about'>
          <h2 className='sticky-header'>About</h2>
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
            When I’m not at my computer, I’m usually playing board games, baking with my <a className='hover-info'>sourdough 
            starter<span className='hidden-info'>His name is Andre</span></a>, reading a book, or spending quality time with my beautiful wife. Shoutout to my beloved Hayley for the artwork 
            on this page.
          </p>
          <div className='inline-imgs'>
            <img src='/baking.png' alt='baking' />
            <img src='/Heau.png' alt='Beau and Hayley' />
          </div>
        </section>

        <section ref={xpRef} id='experience'>
        <h2 className='sticky-header' style={{marginBottom: '1em'}}>Experience</h2>
        <div>
            {experience.map(ex => (
              <ExCard key={ex.role + ex.co} ex={ex} />
            ))}
        </div>
        </section>

        <section ref={projectsRef} id='projects'>
          <h2 className='sticky-header' style={{marginBottom: '1em'}}>Projects</h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1em'}}>
            {projects.map(prj => (
              <ProjectCard key={prj.name} project={prj} />
            ))}
          </div>
        </section>

        <section ref={contactRef} id='contact'>
        <h2 className='sticky-header'>Contact</h2>
          <div>
            <img src='/Beau.png' alt='Beau'/>
            <img src='/Heau.png' alt='Hayley and Beau'/>
            <div>
              <p>
                I am always looking for opportunities to bring your dreams to life. If you are looking to hire a developer 
                with a commitment to excellence and an enthusiasm for learning new technologies, reach out to me today. Fill 
                out this form and I'll get back to you quickly :)
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
