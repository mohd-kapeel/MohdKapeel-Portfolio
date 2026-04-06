import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  ['Home', '#home'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Career Path', '#career'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

const rotatingRoles = [
  'Frontend Developer',
  'React Developer',
  'Next.js Learner',
  'UI Focused Builder',
]

const githubProfile = 'https://github.com/mohd-kapeel'
const skillRows = [
  [
    {
      title: 'Frontend',
      accent: 'blue',
      items: [
        { name: 'HTML', icon: 'html', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'css', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'javascript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React JS', icon: 'react', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next JS', icon: 'next', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Flutter', icon: 'flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      ],
    },
    {
      title: 'Programming',
      accent: 'green',
      items: [
        { name: 'C', icon: 'c', logo: '' },
        { name: 'C++', icon: 'cpp', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Java', icon: 'java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'SQL', icon: 'sql', logo: '' },
        { name: 'DBMS', icon: 'dbms', logo: '' },
        { name: 'OOPS', icon: 'oops', logo: '' },
      ],
    },
  ],
  [
    {
      title: 'Others',
      accent: 'pink',
      items: [
        { name: 'Git', icon: 'git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'github', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg' },
        { name: 'Android Studio', icon: 'androidstudio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
        { name: 'VS Code', icon: 'vscode', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      ],
    },
  ],
]

const educationItems = [
  {
    title: 'Bachelor of Engineering in Computer Science & Engineering',
    period: '2023 - 2026',
    location: 'Longowal, Punjab',
    org: 'Sant Longowal Institute of Engineering & Technology',
    detail:
      'Final-year engineering student building a stronger foundation in frontend development, UI systems, data structures, and practical problem solving.',
  },
  {
    title: 'Diploma in Electronics Engineering',
    period: '2020 - 2023',
    location: 'Pilibhit, Uttar Pradesh',
    org: 'Government Polytechnic Pilibhit',
    detail:
      'Completed diploma with 77.27% and developed the technical discipline that later shaped my shift toward web development.',
  },
  {
    title: 'Senior Secondary Education',
    period: '2018 - 2020',
    location: 'Nawabganj, Uttar Pradesh',
    org: 'Shri Krishna Inter College',
    detail:
      'Built consistency in analytical thinking and academic fundamentals while preparing for engineering studies.',
  },
]

const careerTracks = [
  {
    id: '01',
    name: 'Frontend Development',
    status: 'active',
    title: 'Frontend Development',
    summary:
      'Building modern responsive interfaces with React.js, Next.js, clean component systems, and smooth user interactions.',
    priority: 'High',
    load: '100%',
  },
  {
    id: '02',
    name: 'Problem Solving',
    status: 'in progress',
    title: 'Problem Solving & DSA',
    summary:
      'Improving logic, debugging, and coding confidence through structured DSA practice and consistent problem solving.',
    priority: 'High',
    load: '82%',
  },
  {
    id: '03',
    name: 'UI Design Sense',
    status: 'growing',
    title: 'UI Design & Visual Polish',
    summary:
      'Learning how to make interfaces feel more premium through hierarchy, spacing, color systems, and motion.',
    priority: 'Medium',
    load: '74%',
  },
  {
    id: '04',
    name: 'Full Stack Growth',
    status: 'learning',
    title: 'Full Stack Expansion',
    summary:
      'Expanding from frontend into backend-aware thinking so I can build more complete product experiences over time.',
    priority: 'Medium',
    load: '58%',
  },
]

const projects = [
  {
    title: 'SLIET Mentorship Platform',
    label: 'Mentorship Product',
    description:
      'Developed a mentorship platform for student-faculty interaction with clean booking flows, responsive layout, and reusable frontend components.',
    stack: ['React', 'Next.js', 'Responsive UI'],
    live: 'https://sliet-mentorship-platform.vercel.app/',
    code: githubProfile,
    previewClass: 'project-preview-mentor',
  },
  {
    title: 'BolYaar',
    label: 'Social Platform',
    description:
      'Built as a collaborative student social platform featuring anonymous posts, polls, and realtime interactions with Firebase integration.',
    stack: ['React', 'Firebase', 'Realtime'],
    live: githubProfile,
    code: githubProfile,
    previewClass: 'project-preview-social',
  },
]

const experiences = [
  {
    period: 'June 2025 - July 2025',
    role: 'Frontend Development Intern',
    company: 'SoftechBee',
    mode: 'On-site',
    detail:
      'Built responsive web interfaces using HTML, CSS, JavaScript, React.js, and Next.js while improving UI consistency, structure, and debugging quality.',
  },
]

const socialLinks = [
  {
    short: 'GH',
    href: githubProfile,
    label: 'GitHub',
    colorClass: 'social-github',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg',
  },
  {
    short: 'in',
    href: 'https://www.linkedin.com/in/mohd-kapeel-4b9540288/',
    label: 'LinkedIn',
    colorClass: 'social-linkedin',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
  {
    short: 'X',
    href: 'https://x.com/',
    label: 'X',
    colorClass: 'social-x',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg',
  },
  {
    short: 'M',
    href: 'mailto:mohdkapeel786@gmail.com',
    label: 'Gmail',
    colorClass: 'social-gmail',
    logo: 'https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg',
  },
]

const skillIconMap = {
  react: '⚛',
  next: 'N',
  html: '🟧',
  css: '🟦',
  javascript: 'JS',
  flutter: 'F',
  sql: 'SQL',
  c: 'C',
  cpp: 'C++',
  java: '☕',
  dbms: '⛁',
  oops: '</>',
  git: '⌥',
  github: 'GH',
  androidstudio: 'A',
  vscode: '⌘',
}

function App() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [activeCareer, setActiveCareer] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % rotatingRoles.length)
    }, 2200)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const animatedItems = document.querySelectorAll('.skill-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    animatedItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const educationItems = document.querySelectorAll('.education-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    educationItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sectionItems = document.querySelectorAll('.scroll-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    sectionItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const currentCareer = careerTracks[activeCareer]
  return (
    <main className="portfolio-shell">
      <div className="page-glow page-glow-left" aria-hidden="true" />
      <div className="page-glow page-glow-right" aria-hidden="true" />
      <div className="page-dots" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header">
        <div className="site-brand">
          Mohd <span>Kapeel</span>
        </div>
        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`site-nav ${isMenuOpen ? 'site-nav-open' : ''}`}
          aria-label="Primary"
          id="primary-navigation"
        >
          {navItems.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setIsMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy reveal">
          <h2>Hi I&apos;m</h2>
          <h1>Mohd Kapeel</h1>
          <div className="hero-role">
            I&apos;m a <span>{rotatingRoles[roleIndex]}</span>
          </div>
          <p>
            I&apos;m a frontend developer with a strong focus on clean UI,
            practical web solutions, and modern React.js experiences. I enjoy
            working on real-world projects, writing maintainable code, and
            continuously improving my skills through practice and learning.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="/Mohd-Kapeel-Resume.pdf" download>
              Check Resume
            </a>
            <a className="secondary-btn" href="#contact">
              Hire Me
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map((item) => (
              <a
                href={item.href}
                key={item.label}
                aria-label={item.label}
                className={item.colorClass}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <img src={item.logo} alt="" className="social-logo-image" />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="photo-frame">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <div className="orbit-corner orbit-top-right" />
            <div className="orbit-corner orbit-bottom-left" />
            <div className="photo-circle">
              <img src="/kapeel-profile.jpg" alt="Mohd Kapeel portrait" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="skills">
        <div className="section-title reveal">
          <h2>My Skills</h2>
          <p>Exploring technologies and building experiences</p>
        </div>

        <div className="skills-layout">
          {skillRows.map((row, rowIndex) => (
            <div
              className={`skills-row ${row.length === 1 ? 'skills-row-single' : ''}`}
              key={`row-${rowIndex}`}
            >
              {row.map((group) => (
                <div className="skill-group reveal" key={group.title}>
                  <h3 className={`group-title group-title-${group.accent}`}>{group.title}</h3>
                  <div className="hex-grid">
                    {group.items.map((item, itemIndex) => (
                      <article
                        className={`hex-skill hex-skill-${group.accent} skill-reveal ${itemIndex % 2 === 0 ? 'skill-enter-left' : 'skill-enter-right'}`}
                        key={item.name}
                      >
                        <div className={`skill-logo skill-logo-${item.icon}`}>
                          {item.logo ? (
                            <img src={item.logo} alt="" className="skill-logo-image" />
                          ) : (
                            skillIconMap[item.icon]
                          )}
                        </div>
                        <span>{item.name}</span>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" id="education">
        <div className="section-title reveal">
          <h2>Education</h2>
          <p>My academic background and learning journey</p>
        </div>

        <div className="education-timeline">
          {educationItems.map((item, index) => (
            <article
              className={`education-card education-reveal ${index % 2 === 0 ? 'education-left education-reveal-left' : 'education-right education-reveal-right'}`}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <div className="education-meta">
                <span className="education-meta-item">
                  <span
                    className="education-meta-icon education-meta-icon-calendar"
                    aria-hidden="true"
                  />
                  {item.period}
                </span>
                <span className="education-meta-item">
                  <span
                    className="education-meta-icon education-meta-icon-location"
                    aria-hidden="true"
                  />
                  {item.location}
                </span>
              </div>
              <p className="education-org">{item.org}</p>
              <p>{item.detail}</p>
            </article>
          ))}
          <div className="timeline-end-orbit" aria-hidden="true">
            <div className="timeline-end-sliet">
              <div className="timeline-sliet-badge">SLIET</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="career">
        <div className="section-title reveal">
          <h2>Career Path & Aspirations</h2>
          <p>My roadmap for professional growth and future milestones</p>
        </div>

        <div className="career-layout reveal">
          <div className="career-list">
            {careerTracks.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={index === activeCareer ? 'career-tab active' : 'career-tab'}
                onClick={() => setActiveCareer(index)}
              >
                <span>{item.id}</span>
                {item.name}
              </button>
            ))}
          </div>

          <div className="career-panel">
            <div className="career-panel-top">
              <span className="career-chip">MODULE_{currentCareer.id}</span>
              <span className="career-status">Status: {currentCareer.status}</span>
            </div>
            <h3>{currentCareer.title}</h3>
            <p>{currentCareer.summary}</p>
            <div className="career-stats">
              <div>
                <span>Priority</span>
                <strong>{currentCareer.priority}</strong>
              </div>
              <div>
                <span>Load</span>
                <strong>{currentCareer.load}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-title reveal">
          <h2>Featured Projects</h2>
          <p>Some of the projects I have worked on with frontend focus</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card scroll-reveal" key={project.title}>
              <div className="project-preview">
                <div className={`project-preview-screen ${project.previewClass}`}>
                  <div className="project-preview-overlay" />
                  <div className="project-preview-ui">
                    <span className="project-preview-chip">{project.label}</span>
                    <div className="project-preview-bar" />
                    <div className="project-preview-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="project-preview-content">
                    <strong>{project.title}</strong>
                    <span>{project.stack.join(' • ')}</span>
                  </div>
                </div>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="experience">
        <div className="section-title reveal">
          <h2>My Experience</h2>
          <p>My professional journey and internship experience</p>
        </div>

        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-card scroll-reveal" key={item.role}>
              <div className="experience-period">{item.period}</div>
              <div className="experience-body">
                <div className="experience-head">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.mode}</span>
                </div>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="contact">
        <div className="section-title reveal">
          <h2>Get In Touch</h2>
          <p>Let&apos;s discuss your project or any opportunity you might have</p>
        </div>

        <div className="contact-layout">
          <form className="contact-form scroll-reveal">
            <h3>Send Me a Message</h3>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="6" />
            <button type="button">Send Message</button>
          </form>

          <div className="contact-side">
            <article className="contact-card scroll-reveal">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div>
                  <span>Email</span>
                  <p>mohdkapeel786@gmail.com</p>
                </div>
                <div>
                  <span>Phone</span>
                  <p>+91-7310746046</p>
                </div>
                <div>
                  <span>Location</span>
                  <p>India</p>
                </div>
              </div>
            </article>

            <article className="contact-card scroll-reveal">
              <h3>Availability</h3>
              <p>Available for internships, freelance work, and full-time roles.</p>
              <div className="availability-row">
                <span>Response: within 24 hours</span>
                <strong>
                  <span className="availability-dot" aria-hidden="true" />
                  Available
                </strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <h3>Mohd Kapeel</h3>
          <p>Creating clean and modern web experiences.</p>
        </div>
        <div className="footer-links">
          {socialLinks.map((item) => (
            <a
              href={item.href}
              key={item.label}
              aria-label={item.label}
              className={item.colorClass}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <img src={item.logo} alt="" className="social-logo-image" />
            </a>
          ))}
        </div>
        <div className="footer-policy-links">
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
        </div>
        <p className="footer-copyright">
          © 2026 Mohd Kapeel. All rights reserved.
        </p>
      </footer>
    </main>
  )
}

export default App
