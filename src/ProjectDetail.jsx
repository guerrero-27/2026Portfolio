/** @format */

import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink, Sun, Moon } from "lucide-react";

export default function ProjectDetail({ project, onBack, theme, toggleTheme }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const screenshotUrl = `https://image.thum.io/get/width/1200/crop/800/${project.live}`;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="detail-page">
      {/* TOP BAR */}
      <div className="detail-topbar">
        <button className="detail-back-btn" onClick={onBack}>
          <ArrowLeft size={15} />
          Back to Portfolio
        </button>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>

      <div className="detail-content">
        {/* HEADER */}
        <div className="detail-header">
          <div className="detail-meta">
            {project.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-desc">{project.desc}</p>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="detail-live-link"
          >
            <ExternalLink size={14} />
            Visit Live Site
          </a>
        </div>

        {/* SCREENSHOT PREVIEW */}
        <div className="detail-preview-wrap">
          <div className="detail-browser-bar">
            <div className="detail-browser-dots">
              <span /><span /><span />
            </div>
            <div className="detail-browser-url">{project.live}</div>
          </div>
          <div className="detail-screenshot-box">
            <img
              src={screenshotUrl}
              alt={`${project.title} screenshot`}
              className="detail-screenshot"
              onError={(e) => {
                e.target.style.display = "none";
                setIframeError(true);
              }}
            />
            {iframeError && (
              <div className="detail-screenshot-fallback">
                <span>Preview not available</span>
                <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                  <ExternalLink size={14} /> Open Site
                </a>
              </div>
            )}
          </div>
        </div>

        {/* TWO COLUMN: OVERVIEW + FLOW */}
        <div className="detail-grid">
          <div className="detail-card">
            <div className="detail-card-label">Overview</div>
            <p className="detail-card-text">{project.details.overview}</p>
          </div>

          <div className="detail-card">
            <div className="detail-card-label">How It Works</div>
            <ol className="detail-flow-list">
              {project.details.flow.map((step, i) => (
                <li key={i}>
                  <span className="detail-flow-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="detail-card">
          <div className="detail-card-label">Key Highlights</div>
          <div className="detail-highlights-grid">
            {project.details.highlights.map((h, i) => (
              <div className="detail-highlight-item" key={i}>
                <span className="detail-highlight-dot" />
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* LIVE IFRAME EMBED */}
        <div className="detail-iframe-section">
          <div className="detail-card-label" style={{ marginBottom: "16px" }}>Live Preview</div>
          <div className="detail-browser-bar">
            <div className="detail-browser-dots">
              <span /><span /><span />
            </div>
            <div className="detail-browser-url">{project.live}</div>
            <a href={project.live} target="_blank" rel="noreferrer" className="detail-browser-open">
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="detail-iframe-wrap">
            {!iframeLoaded && (
              <div className="detail-iframe-loader">Loading preview…</div>
            )}
            <iframe
              src={project.live}
              title={project.title}
              className="detail-iframe"
              onLoad={() => setIframeLoaded(true)}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
