import { useRef } from 'react'
import type { RefObject } from 'react'
import ContactForm from './ContactForm'
import Dock from './Dock'
import ExCard from './ExCard'
import ProjectCard from './ProjectCard'

type SectionName = 'about' | 'experience' | 'projects' | 'contact'

export interface SectionRef {
  name: SectionName
  ref: RefObject<HTMLElement>
}

export interface Experience {
  dates: string
  role: string
  co: string
  desc: string
  skills: string[]
}

export interface Project {
  name: string
  link: string
  tech: string[]
  desc: string
  img: string
}

function App() {
  const aboutRef = useRef<HTMLElement>(null)
  const xpRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)

  const refs: SectionRef[] = [
    { name: 'about', ref: aboutRef },
    { name: 'experience', ref: xpRef },
    { name: 'contact', ref: contactRef },
    { name: 'projects', ref: projectsRef },
  ]

  const experience: Experience[] = [
    {
      dates: 'MAY 2025 - PRESENT',
      role: 'Frontend Developer',
      co: 'Etogy',
      desc: 'Design, build, and maintain internal and external web applications. Design and implement REST APIs to interface between frontend code and the database.',
      skills: ['C#', '.NET', 'TypeScript', 'React', 'MSSQL', 'Observability', 'System Design', 'Secure Coding']
    },
    {
      dates: 'SEP 2022 - APR 2025',
      role: 'Operations Analyst',
      co: 'BYU Office of IT',
      desc: 'Ensure production systems used by the Office of IT are reliable, performant, and secure. Work closely with developers and product managers to identify and resolve issues.',
      skills: ['REST APIs', 'Team Leadership', 'Customer Service', 'Troubleshooting', 'Quality Assurance', 'DevOps', 'Self Leadership'],
    },
    {
      dates: 'JUL - AUG 2024',
      role: 'Software Engineer Intern',
      co: 'SILAC Insurance',
      desc: 'Contribute to projects focusing on reducing technical debt, enhancing the unit testing framework, and bolstering security across a suite of applications',
      skills: ['Cross-Functional Collaboration', 'Django', 'Unit Testing', 'Scrum', 'Agile Methodologies'],
    },
    {
      dates: '2019 - 2025',
      role: 'Student',
      co: 'Brigham Young University',
      desc: 'BS in Computer Science with an emphasis in Software Engineering. Classes included such topics as Web Development, Software Construction, Systems Programming, Data Structures and Algorithms, and UX Design.',
      skills: ['HTML/CSS/JavaScript', 'Python', 'Java', 'C/C++', 'Node.js', 'React', 'MySQL', 'MongoDB', "AWS"],
    },
  ]

  const projects: Project[] = [
    {
      name: 'Spiritual Gifts Quiz',
      link: 'https://beauyancey.github.io/spiritual-gifts/',
      tech: ['Vite', 'React', 'TypeScript'],
      desc: 'Web quiz to help users identify, cultivate, and share their spiritual gifts.',
      img: ''
    },
    {
      name: 'Unofficial Alexa Skill for YNAB',
      link: 'https://github.com/BeauYancey/AlexaYNAB',
      tech: ['JavaScript', 'AWS SDK', 'YNAB API', 'Beta Testing'],
      desc: 'Alexa skill that integrates with the YNAB API to retrieve a user\'s budget information.',
      img: ''
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
      tech: ['NextJS', 'ASP .NET', 'React Native', 'Swift', 'Microservices'],
      desc: "I'm always working on more projects. Come back soon to see my new stuff. Reach out to me if you have a project you need built",
      img: '',
    },
  ]

  return (
    <div className="content">
      <Dock refs={refs} />
      <main>
        <section ref={aboutRef} id="about">
          <h2 className="sticky-header">About</h2>
          <p>
            Hi, I'm glad you're here! You're more than welcome to skip to
            the <a href="#experience">experience</a> or <a href="#contact">contact</a> sections
            but I'd love to tell you a bit about myself first :)
          </p>
          <p>
            I've been coding since I was 12. I didn't love it at first though, so I took a break from it and only
            picked it up again when I was a freshman at Brigham Young University. I graduated in December
            of 2025 with a degree in computer science and an emphasis in software engineering. I love building
            practical and elegant products, be it a website or software.
          </p>
          <p>
            When I'm not at my computer, I'm usually playing board games, baking with my <a className="hover-info">sourdough
            starter<span className="hidden-info">His name is Lars</span></a>, at the gym, or spending quality time with my 
            beautiful wife. Shoutout to my beloved <a href="https://hayleynickels.framer.website/" target='_blank' rel="noreferrer">Hayley</a> for the 
            artwork on this page.
          </p>
          <div className="inline-imgs">
            <img src="/baking.png" alt="baking" />
            <img src="/Heau.png" alt="Beau and Hayley" />
          </div>
        </section>

        <section ref={xpRef} id="experience">
          <h2 className="sticky-header" style={{ marginBottom: '1em' }}>Experience</h2>
          <div>
            {experience.map((ex) => (
              <ExCard key={ex.role + ex.co} ex={ex} />
            ))}
          </div>
        </section>

        <section ref={projectsRef} id="projects">
          <h2 className="sticky-header" style={{ marginBottom: '1em' }}>Projects</h2>
          <div className="projects-grid">
            {projects.map((prj) => (
              <ProjectCard key={prj.name} project={prj} />
            ))}
          </div>
        </section>

        <section ref={contactRef} id="contact">
          <h2 className="sticky-header">Contact</h2>
          <div>
            <img src="/Beau.png" alt="Beau" />
            <img src="/Heau.png" alt="Hayley and Beau" />
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
