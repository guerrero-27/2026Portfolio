/** @format */

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Monitor,
  Smartphone,
  Sun,
  Moon,
} from "lucide-react";

const VIEWPORTS = [
  { id: "desktop", label: "Desktop", Icon: Monitor },
  { id: "mobile", label: "Mobile", Icon: Smartphone },
];

export default function ProjectDetail({ project, onBack, theme, toggleTheme }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [viewport, setViewport] = useState("desktop");

  const displayUrl = project.live.replace(/^https?:\/\//, "").replace(/\/$/, "");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pd-page">
      {/* TOP BAR */}
      <div className="pd-topbar">
        <div className="pd-topbar-inner">
          <button className="pd-back" onClick={onBack}>
            <ArrowLeft size={15} />
            Back to Portfolio
          </button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>

      <main className="pd-main">
        {/* HEADER */}
        <header className="pd-hero">
          <div className="pd-rise">
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-desc">{project.desc}</p>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="pd-btn"
            >
              Visit Live Site
              <ArrowUpRight size={16} />
            </a>
          </div>

          <dl className="pd-facts pd-rise" style={{ "--i": 1 }}>
            <div className="pd-fact">
              <dt>Built with</dt>
              <dd className="pd-tags">
                {project.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </dd>
            </div>
            <div className="pd-fact">
              <dt>Live at</dt>
              <dd className="pd-fact-url">{displayUrl}</dd>
            </div>
          </dl>
        </header>

        {/* LIVE PREVIEW */}
        <section
          className="pd-preview-section pd-rise"
          style={{ "--i": 2 }}
          aria-label="Live preview"
        >
          <div className="pd-preview">
            <div className="pd-preview-bar">
              <span className="pd-preview-url">{displayUrl}</span>
              <div className="pd-seg" role="group" aria-label="Preview size">
                {VIEWPORTS.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    className="pd-seg-btn"
                    aria-pressed={viewport === id}
                    aria-label={label}
                    title={label}
                    onClick={() => setViewport(id)}
                  >
                    <Icon size={15} />
                  </button>
                ))}
              </div>
            </div>
            <div className="pd-stage" data-viewport={viewport}>
              {!iframeLoaded && (
                <div className="pd-skeleton" role="status">
                  <span className="pd-skeleton-nav" />
                  <span className="pd-skeleton-line pd-skeleton-line-lg" />
                  <span className="pd-skeleton-line" />
                  <span className="pd-skeleton-block" />
                  <span className="pd-sr-only">Loading preview</span>
                </div>
              )}
              <iframe
                src={project.live}
                title={`${project.title} live preview`}
                className={`pd-frame${iframeLoaded ? " is-loaded" : ""}`}
                onLoad={() => setIframeLoaded(true)}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
          <p className="pd-preview-note">
            This is the real site, running in a frame. If it stays blank,{" "}
            <a href={project.live} target="_blank" rel="noreferrer">
              open it in a new tab
            </a>
            .
          </p>
        </section>

        {/* OVERVIEW + FLOW */}
        <div className="pd-body">
          <section>
            <h2 className="pd-h2">Overview</h2>
            <p className="pd-overview">{project.details.overview}</p>
            <ul className="pd-highlights">
              {project.details.highlights.map((h) => (
                <li key={h}>
                  <Check size={16} aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="pd-h2">How it works</h2>
            <ol className="pd-flow">
              {project.details.flow.map((step, i) => (
                <li key={i}>
                  <span className="pd-flow-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <footer className="pd-end">
          <button className="pd-end-link" onClick={onBack}>
            <ArrowLeft size={15} />
            Back to Portfolio
          </button>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="pd-end-link"
          >
            Visit Live Site
            <ArrowUpRight size={15} />
          </a>
        </footer>
      </main>
    </div>
  );
}
