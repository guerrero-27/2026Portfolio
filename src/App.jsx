/** @format */

import { useState, useEffect } from "react";
import {
  GitBranch,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  ArrowUp,
  ExternalLink,
  Link,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import heroImg from "./assets/hero.png";
import darkImg from "./assets/darkmode.jpeg";
import lightImg from "./assets/lightmode.jpeg";
import gallery4 from "./assets/gallery/4.png";
import gallery6 from "./assets/gallery/6.png";
import gallery7 from "./assets/gallery/7.png";
import gallery8 from "./assets/gallery/8.png";
import gallery9 from "./assets/gallery/9.png";
import gallery10 from "./assets/gallery/10.png";
import "./index.css";

const GALLERY = [
  { src: gallery4, caption: "" },
  { src: gallery6, caption: "" },
  { src: gallery7, caption: "" },
  { src: gallery8, caption: "" },
  { src: gallery9, caption: "" },
  { src: gallery10, caption: "" },
];

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

const EXPERIENCES = [
  {
    period: "2023 — Present",
    role: "Full-Stack Web Developer",
    company: "PocketDevs",
    url: "#",
    desc: "Developing modern web applications for clients, focusing on performance, usability, and clean architecture. Involved in frontend and backend development, feature planning, and technical implementation.",
    tags: ["React", "Next.js", "PHP", "JavaScript", "MySQL"],
  },
  {
    period: "2022 — 2023",
    role: "Web Developer (Freelance)",
    company: "Self-Employed",
    url: "#",
    desc: "Built custom websites and web applications for startups and small businesses. Delivered responsive UI, backend functionality, and API integrations based on client requirements.",
    tags: ["JavaScript", "PHP", "Laravel", "Vue.js", "MySQL"],
  },
  {
    period: "2021 — 2022",
    role: "Frontend Web Developer",
    company: "Various Clients",
    url: "#",
    desc: "Created responsive and user-friendly web interfaces and landing pages. Focused on UI implementation, layout accuracy, and cross-browser compatibility.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Figma"],
  },
];

const PROJECTS = [
  {
    title: "Travel Website Landing Page",
    desc: "A responsive travel website UI showcasing destinations, tour packages, and booking interface, designed to highlight tourism services with a clean and structured layout.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "https://guerrero-27.github.io/travel_website/",
  },
  {
    title: "Gym Fitness Website UI",
    desc: "A responsive fitness website UI featuring training sections, trainer profiles, and contact interface, designed to showcase gym services and attract potential clients.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "https://guerrero-27.github.io/gym_website/",
  },
  {
    title: "Healthcare Plus Medical UI",
    desc: "A healthcare service landing page featuring structured medical information, treatment sections, and responsive layout designed for medical tourism and healthcare services.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "https://healthcareplusmedcare.netlify.app/",
  },
  {
    title: "SF Fintech Dashboard",
    desc: "A modern fintech dashboard UI built with React, showcasing real-time analytics, financial data visualization, and responsive admin interface design. Focused on clean UI/UX and scalable component structure.",
    tags: ["React", "JavaScript", "CSS", "Dashboard UI"],
    live: "https://sfintech.netlify.app/",
  },
  {
    title: "McCare Healthcare Landing Page",
    desc: "A modern healthcare landing page UI inspired by job-matching platforms, designed with a clean layout, responsive structure, and user-friendly interface for medical service applications.",
    tags: ["React", "JavaScript", "CSS", "UI/UX"],
    live: "https://mccare.netlify.app/",
  },
  {
    title: "Holiday Explorer Travel UI",
    desc: "A responsive travel website UI built using a Bootstrap template, featuring destination listings, booking form interface, and structured layout for tour and travel services.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://holidayexplorer.netlify.app/",
  },
  {
    title: "Designo Agency Website UI",
    desc: "A responsive agency website UI built from a modern design template, featuring service sections, branding-focused layout, and clean component structure for digital agency presentations.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "https://designo-code.netlify.app/",
  },
  {
    title: "QuickGo URL Shortener UI",
    desc: "A modern URL shortener landing page built with a clean and responsive UI, featuring link input interface, analytics sections, and structured frontend components inspired by SaaS tools.",
    tags: ["React", "JavaScript", "CSS", "UI/UX"],
    live: "https://quickgome.netlify.app/",
  },
  {
    title: "FlexLaunch SaaS Landing Page",
    desc: "A modern SaaS landing page built with a responsive layout and clean UI components, showcasing product features, call-to-action sections, and structured frontend design.",
    tags: ["React", "JavaScript", "CSS", "UI/UX"],
    live: "https://flexlauch.netlify.app/",
  },
  {
    title: "Food Delivery Website UI",
    desc: "A responsive food delivery landing page showcasing menu items, service sections, and ordering interface design with a clean and user-friendly layout.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "https://guerrero-27.github.io/delivery_website/",
  },
];

const SKILLS = [
  {
    group: "Languages",
    items: ["JavaScript", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Vite", "Figma"],
  },
  {
    group: "Backend",
    items: ["PHP", "Laravel", "REST APIs", "MySQL"],
  },
  {
    group: "Tools & Infrastructure",
    items: ["Git", "GitHub", "Postman", "Vercel", "cPanel"],
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [slide, setSlide] = useState(GALLERY.length);
  const visibleCount = () =>
    window.innerWidth <= 640 ? 1 : window.innerWidth <= 900 ? 2 : 3;

  const prevSlide = () => setSlide((s) => s - 1);
  const nextSlide = () => setSlide((s) => s + 1);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => s + 1), 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (slide >= GALLERY.length * 2) {
      setTimeout(() => setSlide(GALLERY.length), 0);
    } else if (slide < GALLERY.length) {
      setTimeout(() => setSlide(GALLERY.length * 2 - 1), 0);
    }
  }, [slide]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            Kevin<span>.</span>
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              className="nav-mobile-btn"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={closeMobile}>
            {l}
          </a>
        ))}
      </div>

      <main>
        {/* ── HERO ── */}
        <section id="hero">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-badge fade-up">
                <span className="hero-badge-dot" />
                Available for work
              </div>
              <div className="hero-title-row">
                <div className="hero-image-wrap">
                  <img
                    src={darkImg}
                    alt="Kevin Guerrero"
                    className={`hero-image ${theme === "dark" ? "visible" : "hidden"}`}
                  />
                  <img
                    src={lightImg}
                    alt="Kevin Guerrero"
                    className={`hero-image ${theme === "light" ? "visible" : "hidden"}`}
                  />
                </div>
                <div>
                  <h1 className="hero-title fade-up-2">
                    Hi, I'm Kevin Guerrero.
                    <br />
                    {/* <em>I build things for the web.</em> */}
                  </h1>
                  <div className="hero-location">
                    <Globe size={13} />
                    Camarines Norte, Philippines
                  </div>
                </div>
              </div>
              <p className="hero-desc fade-up-3">
                Web Developer specializing in JavaScript and PHP, building
                scalable and responsive web applications.
              </p>
              <div className="hero-actions fade-up-4">
                <a
                  href="https://cal.com/kevin-guerrero"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Schedule a Call
                  <ArrowUpRight size={16} />
                </a>
                <a href="#projects" className="btn-secondary">
                  View Projects
                  <ArrowUpRight size={16} />
                </a>
              </div>
              {/* <div className="hero-socials fade-up-5">
                <span className="hero-socials-label">Find me on</span>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div> */}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about">
          <p className="section-label">About</p>
          <div className="about-text">
            <p>
              I'm a <strong>full-stack web developer</strong> based in the
              Philippines with a passion for building clean, performant, and
              user-friendly digital products. I specialize in JavaScript and
              PHP, developing responsive frontends and robust backend systems
              while working across the entire web stack.
            </p>
            <p>
              Beyond coding, I’m actively involved in the{" "}
              <strong>developer community</strong>, sharing knowledge and
              supporting aspiring developers as they grow their skills. I
              believe great software is built at the intersection of technical
              excellence and real user understanding.
            </p>
            <p>
              When I’m not building websites, I’m exploring new tools and
              technologies, improving my craft, and contributing to developer
              growth through community initiatives.
            </p>
          </div>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-num">4+</span>
              <span className="about-stat-label">Years Experience</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">10+</span>
              <span className="about-stat-label">Projects Shipped</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">10+</span>
              <span className="about-stat-label">Happy Clients</span>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience">
          <p className="section-label">Experience</p>
          <div className="exp-list">
            {EXPERIENCES.map((exp, i) => (
              <div className="exp-item" key={i}>
                <div className="exp-period">{exp.period}</div>
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="exp-company-link"
                    >
                      {exp.company} <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="exp-desc">{exp.desc}</div>
                  <div className="exp-tags">
                    {exp.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects">
          <div className="section-header">
            <p className="section-label">Projects</p>
            <button
              className="view-all-btn"
              onClick={() => setShowAllProjects(true)}
            >
              View All <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="projects-grid">
            {PROJECTS.slice(0, 5).map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-body">
                  <div className="project-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={14} />
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills">
          <p className="section-label">Skills & Stack</p>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div className="skill-group" key={s.group}>
                <div className="skill-group-title">{s.group}</div>
                <div className="skill-items">
                  {s.items.map((item) => (
                    <span className="skill-item" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GALLERY ── */}
        {GALLERY.length > 0 && (
          <section id="gallery">
            <p className="section-label">Gallery</p>
            <div className="gallery-slider">
              <div
                className="gallery-track"
                style={{
                  transform: `translateX(-${slide * (100 / visibleCount())}%)`,
                }}
              >
                {[...GALLERY, ...GALLERY, ...GALLERY].map((g, i) => (
                  <div className="gallery-slide" key={i}>
                    <img
                      src={g.src}
                      alt={g.caption || `Photo ${i + 1}`}
                      className="gallery-img"
                    />
                    {g.caption && (
                      <div className="gallery-caption">{g.caption}</div>
                    )}
                  </div>
                ))}
              </div>
              <button
                className="gallery-btn gallery-btn-prev"
                onClick={prevSlide}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="gallery-btn gallery-btn-next"
                onClick={nextSlide}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            <div className="gallery-dots">
              {GALLERY.map((_, i) => (
                <button
                  key={i}
                  className={`gallery-dot ${slide % GALLERY.length === i ? "active" : ""}`}
                  onClick={() => setSlide(GALLERY.length + i)}
                />
              ))}
            </div>
          </section>
        )}

        {/* ── CONTACT ── */}
        <section id="contact">
          <p className="section-label">Contact</p>
          <div className="contact-wrap">
            <h2 className="contact-heading">Let's work together.</h2>
            <p className="contact-desc">
              I'm open to new opportunities, collaborations, and interesting
              projects. Whether you have a job offer, a project idea, or just
              want to say hi — my inbox is always open.
            </p>
            <a
              href="mailto:markkevinguerrero7@gmail.com"
              className="contact-email"
            >
              <Mail size={16} />
              markkevinguerrero7@gmail.com
            </a>
            <div className="contact-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <span className="footer-copy">
          © 2025 Kevin Guerrero. All rights reserved.
        </span>
        <button className="footer-back" onClick={scrollTop}>
          Back to top <ArrowUp size={13} />
        </button>
      </footer>

      {/* ALL PROJECTS MODAL */}
      {showAllProjects && (
        <div
          className="modal-overlay"
          onClick={() => setShowAllProjects(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">All Projects</span>
              <button
                className="modal-close"
                onClick={() => setShowAllProjects(false)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="modal-list">
              {PROJECTS.map((p, i) => (
                <div className="modal-item" key={i}>
                  <div className="modal-item-left">
                    <span className="modal-item-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="modal-item-title">{p.title}</div>
                      <div className="modal-item-desc">{p.desc}</div>
                      <div className="modal-item-tags">
                        {p.tags.map((t) => (
                          <span className="tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="modal-item-links">
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          <ExternalLink size={14} />
                          Live Site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
