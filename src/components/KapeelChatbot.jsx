import { useEffect, useRef, useState } from "react";
import "./KapeelChatbot.css";

/* =========================================================
   MOHD KAPEEL - COMPLETE PROFILE
   ========================================================= */

const kapeelInfo = {
  name: "Mohd Kapeel",
  role: "Frontend Developer",
  location: "India",

  email: "mohdkapeel786@gmail.com",
  phone: "+91-7310746046",

  summary: `
Mohd Kapeel is a recent B.E. Computer Science graduate with
hands-on experience in web, AI, and real-time application
development using React.js, Next.js, Flutter, Firebase, and Supabase.

He has a strong foundation in programming, data structures,
databases, AI development tools, and problem solving.
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
    programming: ["C", "C++", "Java"],

    web: ["HTML", "CSS", "JavaScript"],

    frameworks: ["React.js", "Next.js", "Flutter"],

    ai: ["OpenAI Codex", "Cursor AI", "Replit AI"],

    apisDatabase: [
      "RESTful APIs",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
    ],

    core: ["Data Structures", "OOPS", "DBMS"],

    additional: [
      "Git",
      "GitHub",
      "Vite",
      "Dart",
      "Tailwind CSS",
    ],
  },

  experience: {
    overall: `
Mohd Kapeel has hands-on experience in web, AI, and real-time
application development using React.js, Next.js, Flutter,
Firebase, and Supabase.

His experience includes responsive web applications,
UI development, AI-assisted workflows, authentication,
role-based access control, RESTful APIs, database management,
and real-time applications.
`,

    internship: `
Mohd Kapeel completed a 1-month Web Development Internship
at SoftechBee from June 2025 to July 2025.

During the internship, he worked with HTML, CSS, JavaScript,
React.js and Next.js.

He gained practical experience in responsive web development,
UI development, debugging, and real-world development workflows.
`,
  },

  projects: {
    aiHirePro: {
      name: "AI Hire Pro",

      technologies: [
        "React.js",
        "Next.js",
        "AI Tools",
        "Supabase",
        "REST APIs",
      ],

      shortDescription: `
AI Hire Pro is an AI-powered recruitment platform designed
to streamline candidate sourcing, screening, evaluation,
and hiring workflows.
`,

      explanation: `
AI Hire Pro is an AI-powered recruitment platform developed
to streamline the recruitment process.

The platform helps with candidate sourcing, screening,
evaluation, and hiring workflows.

Responsive recruiter dashboards were built using React.js
and Next.js for managing candidates, job requirements,
and recruitment activities.

AI-assisted workflows were integrated to support candidate
analysis and improve recruitment decision-making.

Authentication and role-based access controls were implemented
using Supabase for secure user and application data management.
`,

      features: [
        "AI-powered recruitment workflows",
        "Candidate sourcing",
        "Candidate screening",
        "Candidate evaluation",
        "Recruiter dashboards",
        "Job requirement management",
        "Candidate analysis",
        "Authentication",
        "Role-based access control",
        "Application data management",
        "Responsive UI",
        "REST API integration",
      ],
    },

    bolyaar: {
      name: "BolYaar",

      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Platform Security",
      ],

      shortDescription: `
BolYaar is a real-time social platform with closed-loop
campus verification controls designed to regulate network access.
`,

      explanation: `
BolYaar is a real-time social platform developed using
Flutter, Dart, and Firebase.

The platform uses closed-loop campus verification controls
to regulate network access.

Firebase database rule-sets were configured to manage
anonymous user posts and polls securely.

Traffic metrics and system connection logs were audited
to detect and mitigate malicious patterns.
`,

      features: [
        "Real-time social platform",
        "Campus verification",
        "Network access control",
        "Anonymous posts",
        "Anonymous polls",
        "Firebase security rules",
        "Traffic monitoring",
        "Connection log analysis",
        "Platform security",
      ],
    },

    mentorship: {
      name: "SLIET Mentorship Platform",

      technologies: [
        "Web Technologies",
        "JavaScript",
        "Frontend Development",
      ],

      shortDescription: `
A web-based mentorship platform designed to connect students
and mentors.
`,

      explanation: `
The SLIET Mentorship Platform is a web-based platform designed
to connect students and mentors.

The project focuses on providing an interface where students
can interact with mentorship resources and connect with mentors.
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

      shortDescription: `
An AI-based examination monitoring system involving face detection,
blink detection, phone detection, head pose, and gaze analysis.
`,

      explanation: `
The AI-Based Online Exam Proctoring project focuses on
monitoring online examinations using AI and computer vision.

The system involves face detection, blink detection,
phone detection, head pose analysis, and gaze direction analysis.

The goal is to help monitor examination behavior through
automated visual analysis.
`,
    },

    mindtrain: {
      name: "MindTrain",

      technologies: [
        "Flutter",
        "Dart",
        "Local Storage",
        "Background Alarm Functionality",
      ],

      shortDescription: `
A Flutter-based alarm and profile management application
with local storage and background alarm functionality.
`,

      explanation: `
MindTrain is a Flutter-based application focused on alarm
and profile management.

The application uses local storage and supports
background alarm functionality.
`,
    },

    portfolio: {
      name: "Portfolio Website",

      technologies: [
        "React.js",
        "JavaScript",
        "Vite",
        "CSS",
      ],

      shortDescription: `
A modern responsive personal portfolio built using React,
Vite, and modern CSS.
`,

      explanation: `
The portfolio website is a responsive personal developer
portfolio built using React, Vite, JavaScript, and modern CSS.

It presents Mohd Kapeel's skills, education, projects,
experience, achievements, and contact information through
an interactive developer-focused interface.
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
Mohd Kapeel is interested in Frontend Development and Software
Development opportunities, especially roles involving React.js,
Next.js, JavaScript, modern web technologies, AI-assisted development,
and application development.
`,
};


/* =========================================================
   HELPER FUNCTIONS
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

const projectResponse = (project) => {
  return `
${project.name}

${project.shortDescription.trim()}

Technologies:
${formatList(project.technologies)}

Explanation:
${project.explanation.trim()}

${project.features ? `Key Features:\n${formatList(project.features)}` : ""}
`.trim();
};


/* =========================================================
   CHATBOT RESPONSE ENGINE
   ========================================================= */

function getBotResponse(question) {
  const q = normalize(question);

  if (!q) {
    return "Please ask me something about Mohd Kapeel.";
  }

  /* -------------------------------------------------------
     GREETINGS
  ------------------------------------------------------- */

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
• Skills and technologies
• Education
• Experience
• Internship
• Projects
• Project explanations
• Achievements
• Career
• Contact information

You can ask me naturally, for example:

"Explain AI Hire Pro"

"What did Kapeel do in BolYaar?"

"What technologies does he know?"
`.trim();
  }

  /* -------------------------------------------------------
     THANKS
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     ABOUT / PROFILE
  ------------------------------------------------------- */

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
${kapeelInfo.name} is a ${kapeelInfo.role} and recent B.E.
Computer Science graduate from Sant Longowal Institute of
Engineering & Technology (SLIET).

He has hands-on experience in web, AI, and real-time application
development using React.js, Next.js, Flutter, Firebase, and Supabase.

His technical background includes programming languages,
frontend technologies, AI development tools, RESTful APIs,
databases, data structures, OOPS, and DBMS.

His major projects include AI Hire Pro and BolYaar,
along with academic and personal projects.
`.trim();
  }

  /* -------------------------------------------------------
     SUMMARY
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     SKILLS
  ------------------------------------------------------- */

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

Programming Languages:
${formatList(kapeelInfo.skills.programming)}

Web Technologies:
${formatList(kapeelInfo.skills.web)}

Frameworks:
${formatList(kapeelInfo.skills.frameworks)}

AI Development Tools:
${formatList(kapeelInfo.skills.ai)}

APIs & Databases:
${formatList(kapeelInfo.skills.apisDatabase)}

Core Concepts:
${formatList(kapeelInfo.skills.core)}

Additional:
${formatList(kapeelInfo.skills.additional)}
`.trim();
  }

  /* -------------------------------------------------------
     PROGRAMMING
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "programming language",
      "programming languages",
      "coding language",
      "coding languages",
      "what languages",
    ])
  ) {
    return `
Mohd Kapeel's programming languages are:

${formatList(kapeelInfo.skills.programming)}
`.trim();
  }

  /* -------------------------------------------------------
     FRONTEND
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "frontend",
      "front end",
      "frontend skills",
      "web development",
      "web technologies",
      "frontend technologies",
    ])
  ) {
    return `
Mohd Kapeel focuses on frontend and web development.

Web Technologies:
${formatList(kapeelInfo.skills.web)}

Frameworks:
${formatList(kapeelInfo.skills.frameworks)}

He has hands-on experience building responsive web applications
and recruiter dashboards using React.js and Next.js.
`.trim();
  }

  /* -------------------------------------------------------
     REACT
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "react",
      "react.js",
      "reactjs",
    ])
  ) {
    return `
Yes. React.js is one of Mohd Kapeel's main frontend technologies.

He has used React.js to build responsive web applications,
including recruiter dashboards for AI Hire Pro.

React.js is one of his core frontend development technologies.
`.trim();
  }

  /* -------------------------------------------------------
     NEXT.JS
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "next js",
      "next.js",
      "nextjs",
    ])
  ) {
    return `
Next.js is one of Mohd Kapeel's main frontend frameworks.

He used Next.js in AI Hire Pro to build responsive recruiter
dashboards for managing candidates, job requirements,
and recruitment activities.
`.trim();
  }

  /* -------------------------------------------------------
     FLUTTER
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "flutter",
      "dart",
    ])
  ) {
    return `
Mohd Kapeel has experience with Flutter and Dart.

He used Flutter and Dart in projects such as BolYaar and MindTrain.

Flutter is part of his application development experience
alongside React.js and Next.js.
`.trim();
  }

  /* -------------------------------------------------------
     AI TOOLS
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "ai tools",
      "ai tool",
      "artificial intelligence tools",
      "openai",
      "codex",
      "cursor",
      "replit",
    ])
  ) {
    return `
Mohd Kapeel's AI development tools include:

${formatList(kapeelInfo.skills.ai)}

He has also worked with AI-assisted workflows through
the AI Hire Pro recruitment platform.
`.trim();
  }

  /* -------------------------------------------------------
     DATABASES
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "database",
      "databases",
      "mysql",
      "mongodb",
      "mongo",
      "supabase",
      "firebase",
    ])
  ) {
    return `
Mohd Kapeel has experience with:

${formatList(kapeelInfo.skills.apisDatabase)}

These technologies support his application development,
data management, authentication, and real-time application work.
`.trim();
  }

  /* -------------------------------------------------------
     EDUCATION
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     B.E. / SLIET
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     DIPLOMA
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     CLASS XII
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "12th",
      "class 12",
      "senior secondary",
      "school",
      "68.8",
      "shri krishna",
    ])
  ) {
    return kapeelInfo.education.school.trim();
  }

  /* -------------------------------------------------------
     EXPERIENCE
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "experience",
      "work experience",
      "professional experience",
      "worked",
      "work history",
    ])
  ) {
    return kapeelInfo.experience.overall.trim();
  }

  /* -------------------------------------------------------
     INTERNSHIP
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "internship",
      "intern",
      "softechbee",
      "softech bee",
    ])
  ) {
    return kapeelInfo.experience.internship.trim();
  }

  /* -------------------------------------------------------
     PROJECT LIST
  ------------------------------------------------------- */

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

2. BolYaar
   Real-time campus social platform.

3. SLIET Mentorship Platform
   Web-based platform connecting students and mentors.

4. AI-Based Online Exam Proctoring
   AI-based examination monitoring system.

5. MindTrain
   Flutter-based alarm and profile management application.

6. Portfolio Website
   Responsive personal developer portfolio.
`.trim();
  }

  /* -------------------------------------------------------
     AI HIRE PRO
  ------------------------------------------------------- */

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
    ])
  ) {
    return projectResponse(kapeelInfo.projects.aiHirePro);
  }

  /* -------------------------------------------------------
     BOLYAAR
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "bolyaar",
      "bol yaar",
      "social platform",
      "campus social",
      "campus platform",
    ])
  ) {
    return projectResponse(kapeelInfo.projects.bolyaar);
  }

  /* -------------------------------------------------------
     MENTORSHIP
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     PROCTORING
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     MINDTRAIN
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "mindtrain",
      "mind train",
      "alarm application",
      "alarm project",
    ])
  ) {
    return projectResponse(kapeelInfo.projects.mindtrain);
  }

  /* -------------------------------------------------------
     PORTFOLIO
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     PROJECT EXPLANATION
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "explain the project",
      "explain project",
      "project explanation",
      "how does the project work",
      "how was the project built",
      "what did he do in the project",
      "what was his role in the project",
      "project details",
      "tell me more about the project",
    ])
  ) {
    return `
I can explain Mohd Kapeel's projects in detail.

You can ask me about:

• AI Hire Pro
• BolYaar
• SLIET Mentorship Platform
• AI-Based Online Exam Proctoring
• MindTrain
• Portfolio Website

For example:

"Explain AI Hire Pro"

"What did Kapeel do in BolYaar?"

"What technologies were used in AI Hire Pro?"
`.trim();
  }

  /* -------------------------------------------------------
     ACHIEVEMENTS
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     POSITIONS
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     CAREER
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     CONTACT
  ------------------------------------------------------- */

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

You can also use the LinkedIn, GitHub,
and Portfolio links available on the website.
`.trim();
  }

  /* -------------------------------------------------------
     EMAIL
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     PHONE
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     GITHUB
  ------------------------------------------------------- */

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
You can find Mohd Kapeel's projects and source code
through the GitHub link available in the portfolio's
social links.
`.trim();
  }

  /* -------------------------------------------------------
     LINKEDIN
  ------------------------------------------------------- */

  if (
    hasAny(q, [
      "linkedin",
      "linkedin profile",
    ])
  ) {
    return `
You can find Mohd Kapeel's LinkedIn profile through
the LinkedIn link available in the portfolio's social links.
`.trim();
  }

  /* -------------------------------------------------------
     LOCATION
  ------------------------------------------------------- */

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

  /* -------------------------------------------------------
     FALLBACK
  ------------------------------------------------------- */

  return `
I'm Kapeel AI 🤖.

I can answer questions about Mohd Kapeel, including:

• About / profile
• Skills & technologies
• React.js / Next.js
• Flutter
• AI development tools
• Education
• Experience & internship
• AI Hire Pro
• BolYaar
• SLIET Mentorship Platform
• AI Exam Proctoring
• MindTrain
• Portfolio Website
• Achievements
• Positions of responsibility
• Career interests
• Contact information

Try asking:

"Explain AI Hire Pro"

"What technologies does Kapeel know?"

"What did he do in BolYaar?"

"Tell me about his education"
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
      text: "Hi! 👋 I'm Kapeel AI. Ask me anything about Mohd Kapeel.",
    },
  ]);

  const [input, setInput] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const typingTimerRef = useRef(null);

  /* =======================================================
     SOUND
  ======================================================= */

  const playSound = (type) => {
    try {
      const AudioContext =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContext) return;

      const audioContext = new AudioContext();

      const oscillator = audioContext.createOscillator();

      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);

      gainNode.connect(audioContext.destination);

      const now = audioContext.currentTime;

      if (type === "user") {
        oscillator.frequency.setValueAtTime(
          520,
          now
        );

        oscillator.frequency.exponentialRampToValueAtTime(
          700,
          now + 0.08
        );
      } else {
        oscillator.frequency.setValueAtTime(
          620,
          now
        );

        oscillator.frequency.exponentialRampToValueAtTime(
          850,
          now + 0.12
        );
      }

      gainNode.gain.setValueAtTime(
        0.001,
        now
      );

      gainNode.gain.exponentialRampToValueAtTime(
        0.06,
        now + 0.01
      );

      gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.15
      );

      oscillator.start(now);

      oscillator.stop(now + 0.15);

      oscillator.addEventListener(
        "ended",
        () => {
          audioContext.close();
        }
      );
    } catch {
      // Sound is optional.
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
    };
  }, []);


  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  const sendMessage = (customMessage = "") => {
    const question = (
      customMessage || input
    ).trim();

    if (!question || isTyping) return;

    const botAnswer = getBotResponse(question);

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

    /*
     * Small delay before AI starts typing.
     */
    setTimeout(() => {
      playSound("bot");

      /*
       * Add empty bot message first.
       */
      setMessages((previous) => [
        ...previous,
        {
          sender: "bot",
          text: "",
        },
      ]);

      let characterIndex = 0;

      let currentText = "";

      /*
       * Typing speed.
       *
       * Lower = faster
       * Higher = slower
       */
      const typingSpeed = 12;

      typingTimerRef.current = setInterval(() => {
        currentText += botAnswer.charAt(
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

        /*
         * Finish typing
         */
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
    }, 350);
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
     QUICK QUESTION
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
          onClick={() =>
            setOpen(true)
          }
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

          {/* =================================================
              HEADER
          ================================================= */}

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
              onClick={() =>
                setOpen(false)
              }
              aria-label="Close chatbot"
              type="button"
            >
              ×
            </button>

          </div>


          {/* =================================================
              MESSAGES
          ================================================= */}

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
                            key={
                              lineIndex
                            }
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


            {/* Typing indicator */}

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


            <div
              ref={messagesEndRef}
            />

          </div>


          {/* =================================================
              QUICK QUESTIONS
          ================================================= */}

          <div className="kapeel-suggestions">

            <button
              type="button"
              disabled={isTyping}
              onClick={() =>
                askQuickQuestion(
                  "What are Kapeel's skills?"
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
                  "Tell me about his education"
                )
              }
            >
              Education
            </button>

            <button
              type="button"
              disabled={isTyping}
              onClick={() =>
                askQuickQuestion(
                  "Tell me about his achievements"
                )
              }
            >
              Achievements
            </button>

          </div>


          {/* =================================================
              INPUT
          ================================================= */}

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
              onKeyDown={
                handleKeyDown
              }
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