import { useEffect, useRef, useState } from "react";
import "./KapeelChatbot.css";

/* =========================================================
   MOHD KAPEEL - CURRENT PROFILE
   ========================================================= */

const kapeelInfo = {
  name: "Mohd Kapeel",
  role: "Frontend Developer",
  location: "India",

  email: "mohdkapeel786@gmail.com",
  phone: "+91-7310746046",

  linkedin:
    "https://www.linkedin.com/in/mohd-kapeel-4b9540288/",
  github: "https://github.com/mohd-kapeel",

  summary: `
Mohd Kapeel is a recent B.E. Computer Science & Engineering
graduate and Frontend Developer with hands-on experience in
modern web development and AI-powered application development.

He specializes in React.js, Next.js, JavaScript, TypeScript,
responsive UI development, REST APIs, databases and modern
AI-assisted development tools.

He enjoys building practical, responsive and user-friendly
applications.
`,

  education: {
    degree: `
Bachelor of Engineering (B.E.) in Computer Science & Engineering

Sant Longowal Institute of Engineering & Technology (SLIET)
Longowal, Punjab

Duration: 2023 – 2026
CGPA: 7.69
`,

    diploma: `
Diploma in Electronics Engineering

Government Polytechnic, Pilibhit
Pilibhit, Uttar Pradesh

Duration: 2020 – 2023
Percentage: 77.27%
`,

    school: `
Senior Secondary (Class XII)

Shri Krishna Inter College
Nawabganj, Uttar Pradesh

Duration: 2019 – 2020
Percentage: 68.8%
`,
  },

  skills: {
    programming: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
    ],

    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vite",
    ],

    backend: [
      "Node.js",
      "REST APIs",
      "FastAPI",
    ],

    databases: [
      "MySQL",
      "MongoDB",
      "Supabase",
    ],

    ai: [
      "OpenAI Codex",
      "Cursor AI",
      "Replit AI",
      "AI-assisted development",
    ],

    core: [
      "Data Structures",
      "OOPS",
      "DBMS",
      "Git",
      "GitHub",
      "Responsive Web Development",
    ],
  },

  internship: {
    company: "Invent Model Technology Solutions",

    role: "Web Development / Software Development Intern",

    description: `
During his internship at Invent Model Technology Solutions,
Mohd Kapeel worked on practical software and web application
projects including AI Hire Pro, CRM Suite and HRMS.

His work included frontend interfaces, responsive layouts,
application workflows, API integration, database-driven
features, debugging and improving user experiences.
`,
  },

  projects: {
    aiHirePro: {
      name: "AI Hire Pro",

      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AI",
      ],

      description: `
AI Hire Pro is an AI-powered recruitment platform designed
to streamline candidate sourcing, screening, evaluation and
hiring workflows.
`,

      explanation: `
The platform helps recruiters manage candidates and
recruitment activities through a modern web interface.

It includes recruiter dashboards, candidate management,
job requirement management, candidate screening and
AI-assisted candidate analysis.

The goal is to reduce manual recruitment work and make
the hiring workflow more efficient.
`,

      features: [
        "AI-powered recruitment workflows",
        "Candidate sourcing",
        "Candidate screening",
        "Candidate evaluation",
        "Recruiter dashboards",
        "Job requirement management",
        "Candidate analysis",
        "Responsive UI",
        "REST API integration",
      ],
    },

    crmSuite: {
      name: "CRM Suite",

      technologies: [
        "React.js",
        "TypeScript",
        "Vite",
        "Supabase",
      ],

      description: `
CRM Suite is a modern web-based Customer Relationship
Management platform for managing leads, contacts, sales
pipelines, customer activities and team collaboration.
`,

      explanation: `
The platform provides a centralized workspace for managing
customer and sales-related activities.

It includes lead management, contact management, sales
pipeline management, customer activities and team
collaboration.

The application uses a responsive modern interface built
with React.js and TypeScript.
`,

      features: [
        "Lead management",
        "Contact management",
        "Sales pipeline",
        "Customer activities",
        "Team collaboration",
        "Responsive dashboard",
        "Customer management",
      ],
    },

    hrms: {
      name: "HRMS",

      technologies: [
        "React.js",
        "Next.js",
        "JavaScript",
        "REST APIs",
        "Database",
      ],

      description: `
HRMS is a Human Resource Management System designed to
support employee and HR-related business processes.
`,

      explanation: `
The HRMS project focuses on digitizing and simplifying
common HR workflows through a centralized web application.

The system provides interfaces for managing employee and
HR-related information and workflows.

The application focuses on responsive UI, structured data
management and practical business functionality.
`,

      features: [
        "Employee management",
        "HR workflow management",
        "Responsive interface",
        "Data management",
        "Dashboard workflows",
      ],
    },

    mentorship: {
      name: "SLIET Mentorship Platform",

      technologies: [
        "JavaScript",
        "Frontend Development",
        "Responsive UI",
      ],

      description: `
A web-based mentorship platform designed to connect
students and mentors.
`,

      explanation: `
The platform provides an interface where students can
interact with mentorship resources and connect with mentors.

The project focuses on responsive frontend development
and user-friendly interaction.
`,
    },

    proctoring: {
      name: "AI-Based Online Exam Proctoring",

      technologies: [
        "AI",
        "Computer Vision",
        "TensorFlow Lite",
        "YOLOv8",
      ],

      description: `
An AI-based examination monitoring system involving
face detection, blink detection, phone detection,
head pose and gaze analysis.
`,

      explanation: `
The project focuses on monitoring online examinations
using AI and computer vision techniques.

The system involves face detection, blink detection,
phone detection, head pose analysis and gaze direction
analysis.
`,

      features: [
        "Face detection",
        "Blink detection",
        "Phone detection",
        "Head pose analysis",
        "Gaze analysis",
        "Computer vision",
      ],
    },

    portfolio: {
      name: "Portfolio Website",

      technologies: [
        "React.js",
        "JavaScript",
        "Vite",
        "CSS",
      ],

      description: `
A modern responsive personal portfolio built using
React.js, Vite and modern CSS.
`,

      explanation: `
The portfolio presents Mohd Kapeel's skills, education,
projects, experience, achievements and contact information
through an interactive developer-focused interface.
`,
    },
  },

  achievements: [
    "98.86 percentile in Naukri Campus Young Turks 2024",
    "Completed GfG 160 – 160 Days of Problem Solving by GeeksforGeeks",
    "Specialized in OSINT Web Mining and threat intelligence frameworks for academic projects",
    "Analyzed Fibre Channel network topologies and data routing structures in advanced labs",
  ],

  positions: [
    "SLIET Alumni Association — Active Member",
    "SLIET Software Development Club — Active Member",
    "TechFest’24 (Plexus) — Member",
  ],

  career: `
Mohd Kapeel is interested in Frontend Development,
Full-Stack Development and Software Development opportunities.

He is particularly interested in roles involving React.js,
Next.js, JavaScript, TypeScript, modern web technologies,
AI-assisted development, responsive UI development and
application development.

He is open to suitable internship and full-time opportunities.
`,
};


/* =========================================================
   HELPERS
   ========================================================= */

const normalize = (text = "") =>
  text
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[?!.:,;]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const hasAny = (text, words) =>
  words.some((word) => text.includes(word));

const formatList = (items) =>
  items.map((item) => `• ${item}`).join("\n");

const projectResponse = (project) => `
${project.name}

${project.description.trim()}

Technologies:
${formatList(project.technologies)}

Explanation:
${project.explanation.trim()}

${
  project.features
    ? `Key Features:\n${formatList(project.features)}`
    : ""
}
`.trim();


/* =========================================================
   RESPONSE ENGINE
   ========================================================= */

function getBotResponse(question) {
  const q = normalize(question);

  if (!q) {
    return "Please ask me something about Mohd Kapeel.";
  }


  /* GREETING */

  if (
    q === "hi" ||
    q === "hello" ||
    q === "hey" ||
    q.includes("good morning") ||
    q.includes("good afternoon") ||
    q.includes("good evening")
  ) {
    return `
Hello! 👋 I'm Kapeel AI.

I can answer questions about Mohd Kapeel, including:

• Profile
• Technical Skills
• Education
• Internship
• Experience
• AI Hire Pro
• CRM Suite
• HRMS
• Other Projects
• Achievements
• Career
• Contact Information

Try asking:

"Tell me about Mohd Kapeel"

"What are his skills?"

"Explain AI Hire Pro"

"Tell me about CRM Suite"
`.trim();
  }


  /* THANK YOU */

  if (
    q.includes("thank you") ||
    q.includes("thanks") ||
    q === "thank"
  ) {
    return `
You're welcome! 😊

Feel free to ask me anything about Mohd Kapeel.
`.trim();
  }


  /* ABOUT */

  if (
    hasAny(q, [
      "who is mohd",
      "who is kapeel",
      "who is mohdkapeel",
      "about mohd",
      "about kapeel",
      "tell me about mohd",
      "tell me about kapeel",
      "tell me about him",
      "who is he",
      "introduce mohd",
      "introduction",
      "profile",
      "about him",
    ])
  ) {
    return `
${kapeelInfo.name} is a ${kapeelInfo.role} and recent
B.E. Computer Science & Engineering graduate from
Sant Longowal Institute of Engineering & Technology (SLIET).

He specializes in React.js, Next.js, JavaScript, TypeScript,
responsive web development, REST APIs and modern frontend
development.

He has hands-on experience building AI-powered and
business-focused applications including AI Hire Pro,
CRM Suite and HRMS.

He is interested in Frontend Development, Full-Stack
Development and Software Development opportunities.
`.trim();
  }


  /* SUMMARY */

  if (
    hasAny(q, [
      "summary",
      "professional summary",
      "brief introduction",
      "briefly describe",
      "describe mohd",
      "describe kapeel",
    ])
  ) {
    return kapeelInfo.summary.trim();
  }


  /* SKILLS */

  if (
    hasAny(q, [
      "skills",
      "skill",
      "technical skills",
      "tech stack",
      "technologies",
      "technology",
      "what technologies",
      "what tech",
      "what does he know",
      "what can he do",
      "technical knowledge",
    ])
  ) {
    return `
Mohd Kapeel's technical skills include:

Programming:
${formatList(kapeelInfo.skills.programming)}

Frontend:
${formatList(kapeelInfo.skills.frontend)}

Backend & APIs:
${formatList(kapeelInfo.skills.backend)}

Databases:
${formatList(kapeelInfo.skills.databases)}

AI Development:
${formatList(kapeelInfo.skills.ai)}

Core Skills:
${formatList(kapeelInfo.skills.core)}
`.trim();
  }


  /* FRONTEND */

  if (
    hasAny(q, [
      "frontend",
      "front end",
      "frontend skills",
      "web development",
      "web technologies",
    ])
  ) {
    return `
Mohd Kapeel focuses on frontend and modern web development.

Frontend technologies:

${formatList(kapeelInfo.skills.frontend)}

He uses React.js and Next.js to build responsive,
component-based and user-friendly web applications.
`.trim();
  }


  /* REACT */

  if (
    hasAny(q, [
      "react",
      "react.js",
      "reactjs",
    ])
  ) {
    return `
Yes. React.js is one of Mohd Kapeel's primary frontend
technologies.

He uses React.js to build responsive interfaces,
reusable components, dashboards and web applications.

AI Hire Pro and CRM Suite are examples of projects
using React-based development.
`.trim();
  }


  /* NEXT.JS */

  if (
    hasAny(q, [
      "next js",
      "next.js",
      "nextjs",
    ])
  ) {
    return `
Next.js is one of Mohd Kapeel's main frontend frameworks.

He uses Next.js for modern web application development,
responsive interfaces and application workflows.

AI Hire Pro and CRM Suite are examples of projects
using modern frontend frameworks.
`.trim();
  }


  /* JAVASCRIPT / TYPESCRIPT */

  if (
    hasAny(q, [
      "javascript",
      "typescript",
      "js",
      "ts",
    ])
  ) {
    return `
Mohd Kapeel works with JavaScript and TypeScript as part
of his modern frontend development stack.

He uses them with React.js and Next.js to build
interactive and maintainable web applications.
`.trim();
  }


  /* AI */

  if (
    hasAny(q, [
      "ai",
      "artificial intelligence",
      "ai tools",
      "openai",
      "codex",
      "cursor",
      "replit",
    ])
  ) {
    return `
Mohd Kapeel has experience with AI-assisted application
development and modern AI development tools.

AI tools include:

${formatList(kapeelInfo.skills.ai)}

He also worked on AI-powered application development,
including the AI Hire Pro recruitment platform.
`.trim();
  }


  /* DATABASE / API */

  if (
    hasAny(q, [
      "database",
      "databases",
      "mysql",
      "mongodb",
      "mongo",
      "supabase",
      "api",
      "apis",
      "rest api",
      "rest apis",
    ])
  ) {
    return `
Mohd Kapeel has experience with:

Databases:
${formatList(kapeelInfo.skills.databases)}

Backend & APIs:
${formatList(kapeelInfo.skills.backend)}

These technologies support his web applications,
data management and API-driven workflows.
`.trim();
  }


  /* EDUCATION */

  if (
    hasAny(q, [
      "education",
      "degree",
      "college",
      "university",
      "study",
      "studied",
      "qualification",
      "graduation",
      "graduate",
      "academic background",
    ])
  ) {
    return `
EDUCATION

${kapeelInfo.education.degree.trim()}

${kapeelInfo.education.diploma.trim()}

${kapeelInfo.education.school.trim()}
`.trim();
  }


  /* B.E. / SLIET */

  if (
    hasAny(q, [
      "b.e",
      "be degree",
      "btech",
      "b tech",
      "computer science degree",
      "engineering degree",
      "cgpa",
      "7.69",
      "sliet",
    ])
  ) {
    return kapeelInfo.education.degree.trim();
  }


  /* DIPLOMA */

  if (
    hasAny(q, [
      "diploma",
      "electronics engineering",
      "polytechnic",
      "77.27",
    ])
  ) {
    return kapeelInfo.education.diploma.trim();
  }


  /* EXPERIENCE */

  if (
    hasAny(q, [
      "experience",
      "work experience",
      "professional experience",
      "worked",
      "work history",
    ])
  ) {
    return `
Mohd Kapeel has hands-on experience in modern web
development and AI-powered application development.

His practical work includes frontend development,
responsive UI development, API integration,
database-driven applications, debugging and
application workflows.

He has worked on AI Hire Pro, CRM Suite and HRMS
during his internship experience.
`.trim();
  }


  /* INTERNSHIP */

  if (
    hasAny(q, [
      "internship",
      "intern",
      "invent model",
      "inventmodel",
    ])
  ) {
    return `
Internship:
${kapeelInfo.internship.company}

Role:
${kapeelInfo.internship.role}

${kapeelInfo.internship.description.trim()}
`.trim();
  }


  /* PROJECT LIST */

  if (
    hasAny(q, [
      "projects",
      "project list",
      "what projects",
      "projects worked",
      "projects built",
      "projects developed",
    ])
  ) {
    return `
Mohd Kapeel has worked on several projects:

1. AI Hire Pro
   AI-powered recruitment platform.

2. CRM Suite
   Customer Relationship Management platform.

3. HRMS
   Human Resource Management System.

4. SLIET Mentorship Platform
   Web-based mentorship platform.

5. AI-Based Online Exam Proctoring
   AI and computer vision examination monitoring system.

6. Portfolio Website
   Responsive personal developer portfolio.
`.trim();
  }


  /* AI HIRE PRO */

  if (
    hasAny(q, [
      "ai hire pro",
      "ai hire",
      "aihirepro",
      "recruitment platform",
      "recruitment project",
      "hiring platform",
      "recruiter dashboard",
      "candidate platform",
      "candidate screening",
    ])
  ) {
    return projectResponse(kapeelInfo.projects.aiHirePro);
  }


  /* CRM SUITE */

  if (
    hasAny(q, [
      "crm",
      "crm suite",
      "customer relationship",
      "customer relationship management",
      "crm project",
      "sales pipeline",
      "lead management",
      "customer management",
    ])
  ) {
    return projectResponse(kapeelInfo.projects.crmSuite);
  }


  /* HRMS */

  if (
    hasAny(q, [
      "hrms",
      "human resource",
      "human resources",
      "hr management",
      "hr project",
      "employee management",
    ])
  ) {
    return projectResponse(kapeelInfo.projects.hrms);
  }


  /* MENTORSHIP */

  if (
    hasAny(q, [
      "mentorship",
      "mentor platform",
      "sliet mentorship",
      "student mentor",
    ])
  ) {
    return projectResponse(kapeelInfo.projects.mentorship);
  }


  /* PROCTORING */

  if (
    hasAny(q, [
      "proctoring",
      "proctor",
      "exam monitoring",
      "online exam",
      "exam project",
      "face detection",
      "blink detection",
      "phone detection",
      "gaze",
      "head pose",
    ])
  ) {
    return projectResponse(kapeelInfo.projects.proctoring);
  }


  /* PORTFOLIO */

  if (
    hasAny(q, [
      "portfolio",
      "portfolio website",
      "personal website",
      "personal portfolio",
    ])
  ) {
    return projectResponse(kapeelInfo.projects.portfolio);
  }


  /* ACHIEVEMENTS */

  if (
    hasAny(q, [
      "achievement",
      "achievements",
      "percentile",
      "naukri",
      "young turks",
      "geeksforgeeks",
      "gfg",
      "problem solving",
    ])
  ) {
    return `
Mohd Kapeel's achievements include:

${formatList(kapeelInfo.achievements)}
`.trim();
  }


  /* POSITIONS */

  if (
    hasAny(q, [
      "position",
      "positions",
      "responsibility",
      "responsibilities",
      "alumni",
      "software development club",
      "development club",
      "techfest",
      "plexus",
    ])
  ) {
    return `
POSITIONS OF RESPONSIBILITY

${formatList(kapeelInfo.positions)}
`.trim();
  }


  /* CAREER */

  if (
    hasAny(q, [
      "career",
      "career goal",
      "career interest",
      "looking for job",
      "looking for jobs",
      "job",
      "jobs",
      "available",
      "opportunity",
      "opportunities",
      "hire him",
      "should we hire",
      "why hire",
    ])
  ) {
    return kapeelInfo.career.trim();
  }


  /* CONTACT */

  if (
    hasAny(q, [
      "contact",
      "contact information",
      "reach him",
      "reach kapeel",
      "how can i contact",
      "how to contact",
    ])
  ) {
    return `
You can contact Mohd Kapeel through:

Email:
${kapeelInfo.email}

Phone:
${kapeelInfo.phone}

LinkedIn:
${kapeelInfo.linkedin}

GitHub:
${kapeelInfo.github}
`.trim();
  }


  /* EMAIL */

  if (
    hasAny(q, [
      "email",
      "email address",
      "mail id",
      "mail address",
    ])
  ) {
    return `
Mohd Kapeel's email address is:

${kapeelInfo.email}
`.trim();
  }


  /* PHONE */

  if (
    hasAny(q, [
      "phone",
      "phone number",
      "mobile",
      "contact number",
    ])
  ) {
    return `
Mohd Kapeel's contact number is:

${kapeelInfo.phone}
`.trim();
  }


  /* GITHUB */

  if (
    hasAny(q, [
      "github",
      "github profile",
      "github account",
      "source code",
      "repositories",
      "repository",
      "repo",
    ])
  ) {
    return `
Mohd Kapeel's GitHub profile:

${kapeelInfo.github}
`.trim();
  }


  /* LINKEDIN */

  if (
    hasAny(q, [
      "linkedin",
      "linkedin profile",
    ])
  ) {
    return `
Mohd Kapeel's LinkedIn profile:

${kapeelInfo.linkedin}
`.trim();
  }


  /* LOCATION */

  if (
    hasAny(q, [
      "location",
      "where is he",
      "where does he live",
      "place",
    ])
  ) {
    return `Mohd Kapeel is based in ${kapeelInfo.location}.`;
  }


  /* FALLBACK */

  return `
I'm Kapeel AI 🤖.

I can answer questions about:

• Mohd Kapeel's Profile
• Technical Skills
• React.js / Next.js
• JavaScript / TypeScript
• AI Development
• Education
• Internship
• Experience
• AI Hire Pro
• CRM Suite
• HRMS
• SLIET Mentorship Platform
• AI Exam Proctoring
• Portfolio Website
• Achievements
• Career Interests
• Contact Information

Try asking:

"Tell me about Mohd Kapeel"

"What are his technical skills?"

"Explain AI Hire Pro"

"Tell me about CRM Suite"

"Tell me about his internship"
`.trim();
}


/* =========================================================
   CHATBOT COMPONENT
   ========================================================= */

export default function KapeelChatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hi! 👋 I'm Kapeel AI. Ask me anything about Mohd Kapeel, his skills, projects, education or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const typingTimerRef = useRef(null);
  const responseTimeoutRef = useRef(null);


  /* =======================================================
     SOUND
     ======================================================= */

  const playSound = (type) => {
    try {
      const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

      if (!AudioContext) return;

      const audioContext = new AudioContext();

      const oscillator =
        audioContext.createOscillator();

      const gainNode =
        audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      const now = audioContext.currentTime;

      if (type === "user") {
        /* User send sound */
        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
          520,
          now
        );

        oscillator.frequency.exponentialRampToValueAtTime(
          700,
          now + 0.08
        );

        gainNode.gain.setValueAtTime(
          0.001,
          now
        );

        gainNode.gain.exponentialRampToValueAtTime(
          0.055,
          now + 0.01
        );

        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          now + 0.12
        );

        oscillator.start(now);
        oscillator.stop(now + 0.12);
      } else {
        /* AI response sound */
        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
          620,
          now
        );

        oscillator.frequency.exponentialRampToValueAtTime(
          850,
          now + 0.12
        );

        gainNode.gain.setValueAtTime(
          0.001,
          now
        );

        gainNode.gain.exponentialRampToValueAtTime(
          0.045,
          now + 0.015
        );

        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          now + 0.18
        );

        oscillator.start(now);
        oscillator.stop(now + 0.18);
      }

      oscillator.addEventListener(
        "ended",
        () => {
          audioContext.close();
        },
        { once: true }
      );
    } catch {
      /* Sound is optional */
    }
  };


  /* =======================================================
     AUTO SCROLL
     ======================================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);


  /* =======================================================
     CLEANUP
     ======================================================= */

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
      }

      if (responseTimeoutRef.current) {
        clearTimeout(responseTimeoutRef.current);
      }
    };
  }, []);


  /* =======================================================
     SEND MESSAGE
     ======================================================= */

  const sendMessage = (customMessage = "") => {
    const question =
      (customMessage || input).trim();

    if (!question || isTyping) return;

    const botAnswer =
      getBotResponse(question);

    /* 🔊 USER SEND SOUND */
    playSound("user");

    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: question,
      },
    ]);

    setInput("");
    setIsTyping(true);


    /* Small response delay */

    responseTimeoutRef.current =
      setTimeout(() => {

        /* 🔊 AI RESPONSE SOUND */
        playSound("bot");

        setMessages((previous) => [
          ...previous,
          {
            sender: "bot",
            text: "",
          },
        ]);

        let characterIndex = 0;
        let currentText = "";

        const typingSpeed = 8;

        typingTimerRef.current =
          setInterval(() => {

            currentText +=
              botAnswer.charAt(
                characterIndex
              );

            characterIndex += 1;

            setMessages((previous) => {
              const updated = [...previous];

              if (updated.length > 0) {
                updated[updated.length - 1] = {
                  sender: "bot",
                  text: currentText,
                };
              }

              return updated;
            });

            if (
              characterIndex >=
              botAnswer.length
            ) {
              clearInterval(
                typingTimerRef.current
              );

              typingTimerRef.current = null;

              setIsTyping(false);
            }
          }, typingSpeed);
      }, 250);
  };


  /* =======================================================
     KEYBOARD
     ======================================================= */

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      sendMessage();
    }
  };


  /* =======================================================
     QUICK QUESTIONS
     ======================================================= */

  const askQuickQuestion = (question) => {
    if (isTyping) return;

    sendMessage(question);
  };


  /* =======================================================
     UI
     ======================================================= */

  return (
    <>
      {!open && (
        <button
          className="kapeel-chat-button"
          onClick={() => setOpen(true)}
          aria-label="Open Kapeel AI chatbot"
          type="button"
        >
          <span className="kapeel-chat-glow"></span>

          <span className="kapeel-chat-icon">
            ✦
          </span>

          <span className="kapeel-chat-text">
            Kapeel AI
          </span>
        </button>
      )}


      {open && (
        <div className="kapeel-chat-window">

          {/* HEADER */}

          <div className="kapeel-chat-header">

            <div className="kapeel-chat-profile">

              <div className="kapeel-ai-avatar">
                K
              </div>

              <div>
                <strong>
                  Kapeel AI
                </strong>

                <span>
                  Ask about Mohd Kapeel
                </span>
              </div>

            </div>

            <button
              className="kapeel-close"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
              type="button"
            >
              ×
            </button>

          </div>


          {/* MESSAGES */}

          <div className="kapeel-chat-messages">

            {messages.map(
              (message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`kapeel-message-row ${
                    message.sender === "user"
                      ? "user-message"
                      : "bot-message"
                  }`}
                >

                  {message.sender === "bot" && (
                    <div className="small-ai-avatar">
                      K
                    </div>
                  )}

                  <div className="kapeel-message">

                    {message.text
                      .split("\n")
                      .map(
                        (
                          line,
                          lineIndex
                        ) => (
                          <div
                            key={lineIndex}
                          >
                            {line ||
                              "\u00A0"}
                          </div>
                        )
                      )}

                  </div>

                </div>
              )
            )}


            {/* TYPING INDICATOR */}

            {isTyping && (
              <div className="kapeel-message-row bot-message">

                <div className="small-ai-avatar">
                  K
                </div>

                <div className="kapeel-message kapeel-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>
            )}

            <div ref={messagesEndRef} />

          </div>


          {/* QUICK QUESTIONS */}

          <div className="kapeel-suggestions">

            <button
              type="button"
              disabled={isTyping}
              onClick={() =>
                askQuickQuestion(
                  "What are Kapeel's technical skills?"
                )
              }
            >
              Skills
            </button>

            <button
              type="button"
              disabled={isTyping}
              onClick={() =>
                askQuickQuestion(
                  "Explain AI Hire Pro"
                )
              }
            >
              AI Hire Pro
            </button>

            <button
              type="button"
              disabled={isTyping}
              onClick={() =>
                askQuickQuestion(
                  "Tell me about CRM Suite"
                )
              }
            >
              CRM Suite
            </button>

            <button
              type="button"
              disabled={isTyping}
              onClick={() =>
                askQuickQuestion(
                  "Tell me about his internship"
                )
              }
            >
              Internship
            </button>

          </div>


          {/* INPUT */}

          <div className="kapeel-chat-input">

            <input
              type="text"
              placeholder={
                isTyping
                  ? "Kapeel AI is typing..."
                  : "Ask about Kapeel..."
              }
              value={input}
              disabled={isTyping}
              onChange={(event) =>
                setInput(
                  event.target.value
                )
              }
              onKeyDown={handleKeyDown}
              aria-label="Ask Kapeel AI"
            />

            <button
              type="button"
              disabled={
                isTyping ||
                !input.trim()
              }
              onClick={() =>
                sendMessage()
              }
              aria-label="Send message"
            >
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  );
}