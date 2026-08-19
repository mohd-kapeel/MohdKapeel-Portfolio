import { useEffect, useState } from 'react'
import KapeelChatbot from "./components/KapeelChatbot";
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
  "Frontend Developer",
  "React.js Developer",
  "Next.js Developer",
  "Software Developer",
  "AI Application Builder",
  "Flutter Developer",
];

const githubProfile = 'https://github.com/mohd-kapeel'

const skillRows = [
  [
    {
      title: 'Frontend',
      accent: 'blue',
      items: [
        {
          name: 'HTML5',
          icon: 'html',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
          name: 'CSS3',
          icon: 'css',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          name: 'JavaScript',
          icon: 'javascript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          name: 'React.js',
          icon: 'react',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          name: 'Next.js',
          icon: 'next',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        },
        {
          name: 'Tailwind CSS',
          icon: 'tailwind',
          logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
        },
        {
          name: 'Vite',
          icon: 'vite',
          logo: 'https://www.svgrepo.com/show/374167/vite.svg',
        },
        {
          name: 'Flutter',
          icon: 'flutter',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        },
      ],
    },

    {
      title: 'Programming',
      accent: 'green',
      items: [
        {
          name: 'C',
          icon: 'c',
          logo: 'https://cdn.worldvectorlogo.com/logos/c-1.svg',
        },
        {
          name: 'C++',
          icon: 'cpp',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
        },
        {
          name: 'Java',
          icon: 'java',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        },
        {
          name: 'Data Structures',
          icon: 'dsa',
          logo: 'https://img.icons8.com/?size=100&id=s35S45z4txOJ&format=png&color=40C057',
        },
        {
          name: 'OOPS',
          icon: 'oops',
          logo: 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png',
        },
        {
          name: 'DBMS',
          icon: 'dbms',
          logo: 'https://img.icons8.com/?size=100&id=sVW3n13wlswT&format=png&color=000000',
        },
      ],
    },
  ],

  [
    {
      title: 'Backend & APIs',
      accent: 'purple',
      items: [
        {
          name: 'Node.js',
          icon: 'nodejs',
          logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        },
        {
          name: 'REST APIs',
          icon: 'api',
          logo: 'https://img.icons8.com/?size=100&id=121837&format=png&color=228BE6',
        },
        {
          name: 'FastAPI',
          icon: 'fastapi',
          logo: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg',
        },
        {
          name: 'MySQL',
          icon: 'mysql',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'MongoDB',
          icon: 'mongodb',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        {
          name: 'Supabase',
          icon: 'supabase',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
        },
        {
          name: 'Firebase',
          icon: 'firebase',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        },
      ],
    },

    {
      title: 'AI Development',
      accent: 'pink',
      items: [
        {
          name: 'OpenAI Codex',
          icon: 'codex',
          logo: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%3Ctitle%3EOpenAI%20Codex%3C%2Ftitle%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M8.086.457a6.105%206.105%200%200%201%203.046-.415c1.333.153%202.521.72%203.564%201.7a.117.117%200%200%200%20.107.029c1.408-.346%202.762-.224%204.061.366l.063.03.154.076c1.357.703%202.33%201.77%202.918%203.198.278.679.418%201.388.421%202.126a5.655%205.655%200%200%201-.18%201.631.167.167%200%200%200%20.04.155%205.982%205.982%200%200%201%201.578%202.891c.385%201.901-.01%203.615-1.183%205.14l-.182.22a6.063%206.063%200%200%201-2.934%201.851.162.162%200%200%200-.108.102c-.255.736-.511%201.364-.987%201.992-1.199%201.582-2.962%202.462-4.948%202.451-1.583-.008-2.986-.587-4.21-1.736a.145.145%200%200%200-.14-.032c-.518.167-1.04.191-1.604.185a5.924%205.924%200%200%201-2.595-.622%206.058%206.058%200%200%201-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74%207.74%200%200%201-.495-1.283%206.11%206.11%200%200%201-.017-3.064.166.166%200%200%200%20.008-.074.115.115%200%200%200-.037-.064%205.958%205.958%200%200%201-1.38-2.202%205.196%205.196%200%200%201-.333-1.589%206.915%206.915%200%200%201%20.188-2.132c.45-1.484%201.309-2.648%202.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129%200%200%200%20.087-.087A6.016%206.016%200%200%201%205.635%202.31C6.315%201.464%207.132.846%208.086.457zm-.804%207.85a.848.848%200%200%200-1.473.842l1.694%202.965-1.688%202.848a.849.849%200%200%200%201.46.864l1.94-3.272a.849.849%200%200%200%20.007-.854l-1.94-3.393zm5.446%206.24a.849.849%200%200%200%200%201.695h4.848a.849.849%200%200%200%200-1.696h-4.848z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E',
        },
        {
          name: 'Cursor AI',
          icon: 'cursor',
          logo: 'https://www.cursor.com/assets/images/logo.svg',
        },
        {
          name: 'Replit AI',
          icon: 'replit',
          logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAf0lEQVR4AWNwL/ChK6avhaMW/rdhkAPi/zjwalpYmI7Hwp9D3sJRC/9T10KEpY2gFIkF/4fSwViwHNXz4X9bBjV8vqe+hTYMnPgsBPly1EKSMb19GEzFRIMINmjSv4EF/4dmGTlQikXGo0UbXS0ctZATKUX+hGFYCh2ZrbZRCwFTE8+G4baM9wAAAABJRU5ErkJggg==',
        },
      ],
    },
  ],

  [
    {
      title: 'Tools',
      accent: 'orange',
      items: [
        {
          name: 'Git',
          icon: 'git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        },
        {
          name: 'GitHub',
          icon: 'github',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        },

        {
          name: 'Vercel',
          icon: 'vercel',
          logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
        },
        {
          name: 'Android Studio',
          icon: 'androidstudio',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
        },
        {
          name: 'VS Code',
          icon: 'vscode',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
        },
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
      'Completed B.E. in Computer Science & Engineering with a CGPA of 7.69, building a strong foundation in frontend development, data structures, databases, software development, and practical problem solving.',
  },

  {
    title: 'Diploma in Electronics Engineering',
    period: '2020 - 2023',
    location: 'Pilibhit, Uttar Pradesh',
    org: 'Government Polytechnic, Pilibhit',
    detail:
      'Completed Diploma in Electronics Engineering with 77.27%, developing a strong technical foundation and practical engineering skills.',
  },

  {
    title: 'Senior Secondary (Class XII)',
    period: '2019 - 2020',
    location: 'Nawabganj, Uttar Pradesh',
    org: 'Shri Krishna Inter College',
    detail:
      'Completed Senior Secondary education with 68.8%, building strong academic fundamentals before pursuing engineering studies.',
  },
]

const careerTracks = [
  {
    id: '01',
    name: 'Frontend Development',
    status: 'active',
    title: 'Frontend Development',
    summary:
      'Building responsive and modern web interfaces using React.js, Next.js, JavaScript, HTML, CSS, and reusable component-based architecture.',
    priority: 'High',
    load: '100%',
  },

  {
    id: '02',
    name: 'AI Application Development',
    status: 'active',
    title: 'AI & Application Development',
    summary:
      'Building AI-assisted applications and workflows using modern AI development tools, React.js, Next.js, Supabase, and RESTful APIs.',
    priority: 'High',
    load: '90%',
  },

  {
    id: '03',
    name: 'Problem Solving',
    status: 'active',
    title: 'Problem Solving & DSA',
    summary:
      'Strengthening programming and problem-solving skills through data structures, OOPS, DBMS, coding practice, and the GfG 160 problem-solving sprint.',
    priority: 'High',
    load: '88%',
  },

  {
    id: '04',
    name: 'Application Development',
    status: 'active',
    title: 'Application Development',
    summary:
      'Developing practical applications using Flutter and Dart, with experience integrating Firebase and building real-time application experiences.',
    priority: 'Medium',
    load: '82%',
  },

  {
    id: '05',
    name: 'Backend & Database',
    status: 'growing',
    title: 'Backend & Database Integration',
    summary:
      'Working with RESTful APIs, MySQL, MongoDB, Supabase, and Firebase to build database-driven and connected applications.',
    priority: 'Medium',
    load: '75%',
  },
]

const projects = [
  {
    title: 'AI Hire Pro',
    label: 'AI Recruitment Platform',
    description:
      'An AI-powered recruitment platform that helps recruiters screen candidates, analyze resumes, and streamline the hiring workflow.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'AI'],
    live: 'https://ai-hire-pro-demo-website.vercel.app/',
    code: 'https://github.com/mohd-kapeel/ai-hire-pro-demo-website',
    previewClass: 'project-preview-ai',
    previewMode: 'ai-hire-pro',
  },

  {
    title: 'CRM Suite',
    label: 'Customer Relationship Management',
    description:
      'A modern web-based CRM platform built with React.js, TypeScript, Vite, and Supabase to manage leads, contacts, sales pipelines, customer activities, and team collaboration.',
    stack: [
      'React.js',
      'TypeScript',
      'Vite',
      'Supabase',
      'REST APIs',
    ],
    live: 'https://crm-suite.vercel.app/#product',
    code: 'https://github.com/mohd-kapeel/crm-suite',
    previewClass: 'project-preview-crm',
    previewMode: 'crm-suite',
  },

  {
    title: 'SLIET Mentorship Platform',
    label: 'Mentorship Product',
    description:
      'Developed a mentorship platform for student-faculty interaction with clean booking flows, responsive layout, and reusable frontend components.',
    stack: ['React', 'Next.js', 'Responsive UI'],
    live: 'https://sliet-mentorship-platform.vercel.app/',
    code: githubProfile,
    previewClass: 'project-preview-mentor',
    previewMode: 'mentor-home',
  },

  {
  title: 'BolYaar',
  label: 'Social Platform',
  description:
    'Built as a collaborative student social platform featuring anonymous posts, polls, and realtime interactions with Firebase integration.',
  stack: ['Flutter', 'Dart', 'Firebase', 'Realtime', 'Android'],
  live: '/apps/BolYaar.apk',
  code: githubProfile,
  previewClass: 'project-preview-social',
  previewMode: 'bolyaar',
},
]

const experiences = [
  {
    period: 'June 2025 - July 2025',
    role: 'Frontend Development Intern',
    company: 'SoftechBee',
    mode: 'On-site',
    detail:
      'Worked on modern, responsive web applications using HTML5, CSS3, JavaScript, React.js, and Next.js. Developed reusable and maintainable UI components, responsive layouts, interactive user interfaces, and smooth user experiences. Worked with REST APIs and backend integrations, handled application state and data flow, debugged frontend issues, and improved UI consistency and performance. Used Git and GitHub for version control and collaborated with modern development tools and real-world frontend workflows.',
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
  const [displayedCareer, setDisplayedCareer] = useState(0)
  const [isCareerLeaving, setIsCareerLeaving] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [contactStatus, setContactStatus] = useState('')

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
    if (activeCareer === displayedCareer) {
      return undefined
    }

    setIsCareerLeaving(true)

    const timer = window.setTimeout(() => {
      setDisplayedCareer(activeCareer)
      setIsCareerLeaving(false)
    }, 180)

    return () => window.clearTimeout(timer)
  }, [activeCareer, displayedCareer])

  useEffect(() => {
    const root = document.documentElement
    let frameId = 0
    let currentX = window.innerWidth * 0.5
    let currentY = window.innerHeight * 0.24
    let targetX = currentX
    let targetY = currentY

    const applyPointer = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      root.style.setProperty('--cursor-x', `${currentX}px`)
      root.style.setProperty('--cursor-y', `${currentY}px`)
      root.style.setProperty('--cursor-x-ratio', `${currentX / window.innerWidth}`)
      root.style.setProperty('--cursor-y-ratio', `${currentY / window.innerHeight}`)
      frameId = window.requestAnimationFrame(applyPointer)
    }

    const handlePointerMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const handleTouchMove = (event) => {
      const touch = event.touches[0]
      if (!touch) {
        return
      }

      targetX = touch.clientX
      targetY = touch.clientY
    }

    root.style.setProperty('--cursor-x', `${currentX}px`)
    root.style.setProperty('--cursor-y', `${currentY}px`)
    root.style.setProperty('--cursor-x-ratio', `${currentX / window.innerWidth}`)
    root.style.setProperty('--cursor-y-ratio', `${currentY / window.innerHeight}`)

    frameId = window.requestAnimationFrame(applyPointer)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()

    const trimmedForm = {
      name: contactForm.name.trim(),
      email: contactForm.email.trim(),
      subject: contactForm.subject.trim(),
      message: contactForm.message.trim(),
    }

    if (!trimmedForm.name || !trimmedForm.email || !trimmedForm.subject || !trimmedForm.message) {
      setContactStatus('Please fill out all fields before sending.')
      return
    }

    const emailBody = [
      `Name: ${trimmedForm.name}`,
      `Email: ${trimmedForm.email}`,
      '',
      trimmedForm.message,
    ].join('\n')

    const mailtoLink = `mailto:mohdkapeel786@gmail.com?subject=${encodeURIComponent(trimmedForm.subject)}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoLink
    setContactStatus('Your email app is opening with your message.')
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

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

  const currentCareer = careerTracks[displayedCareer]
  return (
    <main className="portfolio-shell">
      <div className="page-aurora" aria-hidden="true" />
      <div className="page-cursor-glow" aria-hidden="true" />
      <div className="page-beam page-beam-left" aria-hidden="true" />
      <div className="page-beam page-beam-right" aria-hidden="true" />
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
            I&apos;m a recent B.E. Computer Science graduate with hands-on
            experience in web, AI, and real-time application development. I
            specialize in React.js, Next.js, JavaScript, and modern frontend
            development, with additional experience in Flutter, Firebase,
            Supabase, RESTful APIs, and AI development tools. I enjoy building
            responsive, practical applications and continuously improving my
            technical and problem-solving skills.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="/Resume.pdf" download>
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
              <img
                src="/professional_headshot.jpg"
                alt="Mohd Kapeel portrait"
              />
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
              className={`skills-row ${row.length === 1 ? 'skills-row-single' : ''
                }`}
              key={`row-${rowIndex}`}
            >
              {row.map((group) => (
                <div
                  className="skill-group reveal"
                  key={group.title}
                >
                  <h3
                    className={`group-title group-title-${group.accent}`}
                  >
                    {group.title}
                  </h3>

                  <div className="hex-grid">
                    {group.items.map(
                      (item, itemIndex) => (
                        <article
                          className={`hex-skill hex-skill-${group.accent} skill-reveal ${itemIndex % 2 === 0
                            ? 'skill-enter-left'
                            : 'skill-enter-right'
                            }`}
                          key={item.name}
                        >
                          <div
                            className={`skill-logo skill-logo-${item.icon}`}
                          >
                            {item.logo ? (
                              <img
                                src={item.logo}
                                alt={`${item.name} logo`}
                                className="skill-logo-image"
                                onError={(event) => {
                                  event.currentTarget.style.display =
                                    'none'
                                }}
                              />
                            ) : (
                              skillIconMap[item.icon]
                            )}
                          </div>

                          <span>{item.name}</span>
                        </article>
                      )
                    )}
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
            <div
              key={currentCareer.id}
              className={`career-panel-content ${isCareerLeaving ? 'is-leaving' : 'is-entering'}`}
            >
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
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-title reveal">
          <h2>Featured Projects</h2>
          <p>Some of the projects I have worked on with frontend focus</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className="project-card scroll-reveal"
              key={project.title}
            >
              <div className="project-preview">
                <div
                  className={`project-preview-screen ${project.previewClass}`}
                >
                  <div className="project-preview-overlay" />

                  {/* =========================
   PROJECT PREVIEWS
   ========================= */}

                  {project.previewMode === 'ai-hire-pro' ? (

                    /* =========================
                       AI HIRE PRO PREVIEW
                       ========================= */

                    <div className="ai-hire-preview">

                      <div className="ai-hire-preview-header">

                        <div className="ai-hire-preview-logo">
                          <span className="ai-logo-mark">✦</span>
                          <strong>AI Hire Pro</strong>
                        </div>

                        <div className="ai-hire-preview-nav">
                          <span>Dashboard</span>
                          <span>Jobs</span>
                          <span>Candidates</span>
                        </div>

                        <div className="ai-hire-preview-profile">
                          MK
                        </div>

                      </div>


                      <div className="ai-hire-preview-body">

                        <div className="ai-hire-preview-left">

                          <span className="ai-hire-preview-badge">
                            AI-POWERED RECRUITMENT
                          </span>

                          <h4>
                            Hire smarter.
                            <br />
                            Hire faster.
                          </h4>

                          <p>
                            AI-powered candidate screening and
                            intelligent recruitment workflows.
                          </p>

                          <div className="ai-hire-preview-buttons">
                            <span>Start Hiring</span>
                            <span>View Candidates</span>
                          </div>

                        </div>


                        <div className="ai-hire-preview-dashboard">

                          <div className="ai-dashboard-heading">
                            <span>Candidate Analysis</span>
                            <b>Live</b>
                          </div>

                          <div className="ai-match-row">

                            <div className="ai-match-circle">
                              <strong>94%</strong>
                              <small>Match</small>
                            </div>

                            <div className="ai-match-info">
                              <strong>Candidate Match</strong>

                              <span>
                                Excellent fit for this role
                              </span>
                            </div>

                          </div>


                          <div className="ai-analysis-bars">

                            <div>
                              <span>Skills</span>

                              <i>
                                <em style={{ width: '92%' }} />
                              </i>
                            </div>


                            <div>
                              <span>Experience</span>

                              <i>
                                <em style={{ width: '84%' }} />
                              </i>
                            </div>


                            <div>
                              <span>Education</span>

                              <i>
                                <em style={{ width: '96%' }} />
                              </i>
                            </div>

                          </div>


                          <div className="ai-candidate-row">

                            <div className="ai-candidate-avatar">
                              MK
                            </div>

                            <div>
                              <strong>
                                Candidate Profile
                              </strong>

                              <span>
                                Resume analyzed by AI
                              </span>
                            </div>

                            <b>94%</b>

                          </div>

                        </div>

                      </div>

                    </div>


                  ) : project.previewMode === 'crm-suite' ? (

                    /* =========================
                       CRM SUITE PREVIEW
                       ========================= */

                    <div className="crm-project-preview">

                      <div className="crm-preview-navbar">

                        <div className="crm-brand">

                          <div className="crm-brand-logo">
                            IM
                          </div>

                          <strong>
                            CRM Suite
                          </strong>

                        </div>


                        <div className="crm-nav-links">
                          <span>Product</span>
                          <span>How it works</span>
                          <span>Outcomes</span>
                          <span>Pricing</span>
                          <span>FAQs</span>
                        </div>


                        <div className="crm-auth">

                          <span>
                            Sign in
                          </span>

                          <button type="button">
                            Sign out
                          </button>

                        </div>

                      </div>


                      <div className="crm-preview-content">

                        {/* CRM LEFT SIDE */}

                        <div className="crm-preview-copy">

                          <span className="crm-badge">
                            ● CLOUD-BASED CRM SUITE · POWERED BY INVENTMODEL
                          </span>

                          <h2>
                            Manage
                            <br />
                            leads. <span>Boost</span>
                            <br />
                            sales. <span>Grow</span>
                            <br />
                            faster.
                          </h2>

                          <p>
                            A connected CRM workspace for leads, customers,
                            sales activities, follow-ups, quotations, invoices,
                            teams and business reporting — all in one place.
                          </p>


                          <div className="crm-preview-actions">

                            <a
                              href="https://crm-suite.vercel.app/#product"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Explore CRM Suite →
                            </a>


                            <a
                              href="https://crm-suite.vercel.app/#product"
                              target="_blank"
                              rel="noreferrer"
                            >
                              See capabilities →
                            </a>

                          </div>


                          <div className="crm-team">

                            <span>IM</span>
                            <span>SA</span>
                            <span>BD</span>
                            <span>TM</span>

                            <small>
                              Built for sales, operations and customer teams.
                            </small>

                          </div>

                        </div>


                        {/* CRM DASHBOARD */}

                        <div className="crm-preview-dashboard">

                          <div className="crm-dashboard-window">

                            <div className="crm-window-bar">

                              <span />
                              <span />
                              <span />

                              <small>
                                crm-suite.vercel.app / dashboard
                              </small>

                            </div>


                            <div className="crm-dashboard-body">

                              {/* SIDEBAR */}

                              <aside className="crm-sidebar">

                                <strong>
                                  CRM
                                </strong>

                                <div className="crm-sidebar-active">
                                  Dashboard
                                </div>

                                <div>
                                  All Leads
                                </div>

                                <div>
                                  Active Leads
                                </div>

                                <div>
                                  Hot Leads
                                </div>

                                <div>
                                  Lost Leads
                                </div>

                                <div>
                                  Converted Leads
                                </div>

                                <br />

                                <div>
                                  Pipeline
                                </div>

                                <div>
                                  My Team
                                </div>

                                <div>
                                  Team Management
                                </div>

                                <br />

                                <div>
                                  Bulk Upload Leads
                                </div>

                                <div>
                                  Bulk Upload Logs
                                </div>

                              </aside>


                              {/* DASHBOARD CONTENT */}

                              <main className="crm-dashboard-main">

                                <div className="crm-dashboard-header">

                                  <div>

                                    <small>
                                      OVERVIEW
                                    </small>

                                    <h3>
                                      Dashboard
                                    </h3>

                                  </div>

                                  <span className="crm-user">
                                    MK
                                  </span>

                                </div>


                                {/* STATISTICS */}

                                <div className="crm-stat-grid">

                                  <div>
                                    <small>
                                      Total Leads
                                    </small>

                                    <strong>
                                      1908
                                    </strong>
                                  </div>


                                  <div>
                                    <small>
                                      Converted Leads
                                    </small>

                                    <strong>
                                      188
                                    </strong>
                                  </div>


                                  <div>
                                    <small>
                                      Conversion Rate
                                    </small>

                                    <strong>
                                      10.0%
                                    </strong>
                                  </div>


                                  <div>
                                    <small>
                                      Total Contacts
                                    </small>

                                    <strong>
                                      0
                                    </strong>
                                  </div>

                                </div>


                                {/* LOWER DASHBOARD */}

                                <div className="crm-dashboard-grid">

                                  <div className="crm-panel">

                                    <strong>
                                      Recent Activities
                                    </strong>

                                    <div>
                                      ● Lead activity recorded
                                    </div>

                                    <div>
                                      ● Candidate details shared
                                    </div>

                                    <div>
                                      ● Follow-up scheduled
                                    </div>

                                    <div>
                                      ● Customer activity updated
                                    </div>

                                    <div>
                                      ● New lead added
                                    </div>

                                  </div>


                                  <div className="crm-panel">

                                    <strong>
                                      Leads by Status
                                    </strong>

                                    <div>
                                      <span>
                                        Lost
                                      </span>

                                      <b>
                                        147
                                      </b>
                                    </div>


                                    <div>
                                      <span>
                                        Proposal
                                      </span>

                                      <b>
                                        3
                                      </b>
                                    </div>


                                    <div>
                                      <span>
                                        Qualified
                                      </span>

                                      <b>
                                        1
                                      </b>
                                    </div>


                                    <div>
                                      <span>
                                        Converted
                                      </span>

                                      <b>
                                        188
                                      </b>
                                    </div>

                                  </div>

                                </div>

                              </main>

                            </div>

                          </div>


                          {/* FLOATING CARDS */}

                          <div className="crm-floating-card crm-live-card">

                            <strong>
                              ◯ Live visibility
                            </strong>

                            <small>
                              Leads · Pipeline · Teams
                            </small>

                          </div>


                          <div className="crm-floating-card crm-work-card">

                            <strong>
                              ⚡ Less manual work
                            </strong>

                            <small>
                              Automate daily operations
                            </small>

                          </div>

                        </div>

                      </div>

                    </div>


                  ) : project.previewMode === 'mentor-home' ? (

                    /* =========================
                       SLIET MENTORSHIP PREVIEW
                       ========================= */

                    <div className="project-preview-ui project-preview-ui-mentor">

                      <div className="project-preview-topline">

                        <span className="project-preview-brand">
                          Sliet Mentors
                        </span>

                        <span className="project-preview-mini-chip">
                          Live
                        </span>

                      </div>


                      <span className="project-preview-chip">
                        {project.label}
                      </span>


                      <div className="project-preview-heading">

                        <strong>
                          Meet Your College Mentor
                        </strong>

                        <span>
                          Book sessions, explore mentors, and grow faster.
                        </span>

                      </div>


                      <div className="project-preview-search">

                        <span className="project-preview-search-field">
                          Search mentors or skills
                        </span>

                        <span className="project-preview-search-button">
                          Search
                        </span>

                      </div>

                    </div>


                  ) : project.previewMode === 'bolyaar' ? (

                    /* =========================
                       BOLYAAR PREVIEW
                       ========================= */

                    <div className="bolyaar-project-preview">

                      <div className="bolyaar-preview-header">

                        <div>

                          <span className="bolyaar-preview-label">
                            STUDENT SOCIAL PLATFORM
                          </span>

                          <h3>
                            BolYaar
                          </h3>

                          <p>
                            Anonymous campus conversations,
                            polls and real-time student interaction.
                          </p>

                        </div>


                        <div className="bolyaar-mobile-badge">
                          Flutter App
                        </div>

                      </div>


                      <div className="bolyaar-preview-image-wrap">

                        <img
                          src="/apps/bolyaarPreview.jpeg"
                          alt="BolYaar mobile application preview"
                          className="bolyaar-preview-image"
                        />

                      </div>


                      <div className="bolyaar-preview-footer">

                        <span>
                          Flutter
                        </span>

                        <span>
                          Dart
                        </span>

                        <span>
                          Firebase
                        </span>

                        <span>
                          Realtime
                        </span>

                      </div>

                    </div>


                  ) : (

                    /* =========================
                       DEFAULT PREVIEW
                       ========================= */

                    <div className="project-preview-ui">

                      <span className="project-preview-chip">
                        {project.label}
                      </span>

                      <div className="project-preview-bar" />

                      <div className="project-preview-lines">

                        <span />
                        <span />
                        <span />

                      </div>

                    </div>

                  )}

                  <div className="project-preview-content">
                    <strong>{project.title}</strong>

                    <span>
                      {project.stack.join(' • ')}
                    </span>
                  </div>

                </div>
              </div>

              <div className="project-body">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">

                  {project.title === 'BolYaar' ? (
                    <a
                      href={project.live}
                      download="BolYaar.apk"
                    >
                      Live Demo ↓
                    </a>
                  ) : (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo →
                    </a>
                  )}

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                  >
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
          <form className="contact-form scroll-reveal" onSubmit={handleContactSubmit}>
            <h3>Send Me a Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={handleContactChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={handleContactChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={contactForm.subject}
              onChange={handleContactChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={contactForm.message}
              onChange={handleContactChange}
            />
            <button type="submit">Send Message</button>
            {contactStatus ? <p className="contact-status">{contactStatus}</p> : null}
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

      {/* Kapeel AI Chatbot */}
      <KapeelChatbot />

    </main>
  )
}

export default App