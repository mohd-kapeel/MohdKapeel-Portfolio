import { useState, useRef, useEffect } from "react";
import "./KapeelChatbot.css";

const kapeelInfo = {
  name: "Mohd Kapeel",
  role: "Frontend Developer",
  location: "India",

  education: `
Mohd Kapeel is a final-year B.Tech Computer Science & Engineering student at Sant Longowal Institute of Engineering & Technology (SLIET).
He also holds a Diploma in Electronics Engineering.
`,

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "Flutter",
    "Dart",
    "Firebase",
    "REST APIs",
    "Git",
    "GitHub"
  ],

  experience: `
Mohd Kapeel completed a 1-month Web Development Internship at SoftechBee from June 2025 to July 2025.

During the internship, he worked with HTML, CSS, JavaScript, React and Next.js and gained practical experience in responsive web development, UI development, debugging and real-world development workflows.
`,

  projects: [
    {
      name: "BolYaar",
      description:
        "An anonymous campus communication platform designed for SLIET students using Flutter and Firebase."
    },
    {
      name: "SLIET Mentorship Platform",
      description:
        "A web-based mentorship platform designed to connect students and mentors."
    },
    {
      name: "AI-Based Online Exam Proctoring",
      description:
        "An AI-based examination monitoring system involving face detection, blink detection, phone detection, head pose and gaze analysis."
    },
    {
      name: "MindTrain",
      description:
        "A Flutter-based alarm and profile management application with local storage and background alarm functionality."
    },
    {
      name: "Portfolio Website",
      description:
        "A modern responsive personal portfolio built using React, Vite and modern CSS."
    }
  ],

  contact: `
Visitors can contact Mohd Kapeel through the Contact section of this portfolio.
`
};

function getBotResponse(question) {
  const q = question.toLowerCase().trim();

  if (
    q.includes("who is") ||
    q.includes("about mohd") ||
    q.includes("about kapeel") ||
    q.includes("tell me about")
  ) {
    return `Mohd Kapeel is a final-year B.Tech Computer Science & Engineering student and Frontend Developer. He works with technologies such as React.js, Next.js, JavaScript, HTML, CSS and Flutter. He enjoys building modern, responsive and user-friendly applications.`;
  }

  if (
    q.includes("skill") ||
    q.includes("technology") ||
    q.includes("tech stack") ||
    q.includes("know react") ||
    q.includes("know javascript")
  ) {
    return `Mohd Kapeel's main technical skills include:\n\n• HTML\n• CSS\n• JavaScript\n• React.js\n• Next.js\n• Vite\n• Tailwind CSS\n• Flutter\n• Dart\n• Firebase\n• REST APIs\n• Git & GitHub`;
  }

  if (
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("college") ||
    q.includes("university")
  ) {
    return kapeelInfo.education.trim();
  }

  if (
    q.includes("experience") ||
    q.includes("internship") ||
    q.includes("work")
  ) {
    return kapeelInfo.experience.trim();
  }

  if (
    q.includes("project") ||
    q.includes("projects")
  ) {
    return `Mohd Kapeel has worked on several projects, including:\n\n• BolYaar — Anonymous campus communication platform\n• SLIET Mentorship Platform\n• AI-Based Online Exam Proctoring System\n• MindTrain — Flutter alarm application\n• Personal Portfolio Website`;
  }

  if (
    q.includes("bolyaar") ||
    q.includes("bol yaar")
  ) {
    return kapeelInfo.projects[0].description;
  }

  if (
    q.includes("mentorship")
  ) {
    return kapeelInfo.projects[1].description;
  }

  if (
    q.includes("proctor") ||
    q.includes("exam")
  ) {
    return kapeelInfo.projects[2].description;
  }

  if (
    q.includes("mindtrain") ||
    q.includes("alarm")
  ) {
    return kapeelInfo.projects[3].description;
  }

  if (
    q.includes("frontend") ||
    q.includes("developer") ||
    q.includes("role")
  ) {
    return `Mohd Kapeel is focused on Frontend Development, particularly React.js and Next.js. He also has experience with Flutter and application development.`;
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("hire") ||
    q.includes("reach")
  ) {
    return `You can contact Mohd Kapeel through the Contact section of this portfolio. You can also use the social links available on the website.`;
  }

  if (
    q.includes("github") ||
    q.includes("code")
  ) {
    return `You can find Mohd Kapeel's projects and code through the GitHub link available in the portfolio's social links.`;
  }

  if (
    q.includes("looking for job") ||
    q.includes("job") ||
    q.includes("available")
  ) {
    return `Mohd Kapeel is interested in Frontend Development and Software Development opportunities, especially roles involving React.js, Next.js and modern web technologies.`;
  }

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey")
  ) {
    return `Hello! 👋 I'm Kapeel AI. Ask me anything about Mohd Kapeel, his skills, education, experience, projects or contact information.`;
  }

  if (
    q.includes("thank")
  ) {
    return `You're welcome! 😊 Feel free to ask me anything about Mohd Kapeel.`;
  }

  return `I'm Kapeel AI 🤖. I can answer questions about Mohd Kapeel's:\n\n• Skills & technologies\n• Education\n• Internship & experience\n• Projects\n• Frontend development\n• Contact information\n• Career interests\n\nTry asking: "What are Kapeel's skills?"`;
}

export default function KapeelChatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I'm Kapeel AI. Ask me anything about Mohd Kapeel."
    }
  ]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);
  const playSound = (type) => {
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
    oscillator.frequency.setValueAtTime(520, now);
    oscillator.frequency.exponentialRampToValueAtTime(
      700,
      now + 0.08
    );
  } else {
    oscillator.frequency.setValueAtTime(620, now);
    oscillator.frequency.exponentialRampToValueAtTime(
      850,
      now + 0.12
    );
  }

  gainNode.gain.setValueAtTime(0.001, now);

  gainNode.gain.exponentialRampToValueAtTime(
    0.08,
    now + 0.01
  );

  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    now + 0.15
  );

  oscillator.start(now);

  oscillator.stop(now + 0.15);

  oscillator.addEventListener("ended", () => {
    audioContext.close();
  });
};

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);

 const sendMessage = () => {
  const question = input.trim();

  if (!question) return;

  // 🔊 Sound when visitor asks
  playSound("user");

  const botAnswer = getBotResponse(question);

  setMessages((previous) => [
    ...previous,
    {
      sender: "user",
      text: question
    }
  ]);

  setInput("");

  // Kapeel AI responds after a short delay
  setTimeout(() => {

    // 🔊 Sound when AI responds
    playSound("bot");

    setMessages((previous) => [
      ...previous,
      {
        sender: "bot",
        text: botAnswer
      }
    ]);

  }, 350);
};

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {!open && (
        <button
          className="kapeel-chat-button"
          onClick={() => setOpen(true)}
          aria-label="Open Kapeel AI chatbot"
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

          <div className="kapeel-chat-header">

            <div className="kapeel-chat-profile">
              <div className="kapeel-ai-avatar">
                K
              </div>

              <div>
                <strong>Kapeel AI</strong>
                <span>
                  Ask about Mohd Kapeel
                </span>
              </div>
            </div>

            <button
              className="kapeel-close"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>

          </div>


          <div className="kapeel-chat-messages">

            {messages.map((message, index) => (
              <div
                key={index}
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
                  {message.text.split("\n").map(
                    (line, lineIndex) => (
                      <div key={lineIndex}>
                        {line || "\u00A0"}
                      </div>
                    )
                  )}
                </div>

              </div>
            ))}

            <div ref={messagesEndRef} />

          </div>


          <div className="kapeel-suggestions">

            <button
              onClick={() => {
                setInput("What are Kapeel's skills?");
              }}
            >
              Skills
            </button>

            <button
              onClick={() => {
                setInput("Tell me about his projects");
              }}
            >
              Projects
            </button>

            <button
              onClick={() => {
                setInput("Tell me about his experience");
              }}
            >
              Experience
            </button>

          </div>


          <div className="kapeel-chat-input">

            <input
              type="text"
              placeholder="Ask about Kapeel..."
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
            />

            <button
              onClick={sendMessage}
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