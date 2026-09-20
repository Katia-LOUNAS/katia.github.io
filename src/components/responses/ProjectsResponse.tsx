"use client";

import { useState } from "react";
import config from "../../../portfolio-config.json";

type Project = (typeof config.projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const bd = (project as Project & { breakdown?: { what: string; challenges: string[]; solutions: string[]; outcome: string } }).breakdown;

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f8faff)",
        border: "1px solid rgba(20,40,120,0.11)",
        borderLeft: "3px solid var(--navy-mid)",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 1px 4px rgba(20,40,120,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {/* Card header, always visible */}
      <div style={{ padding: "16px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--navy)", marginBottom: 2 }}>
              {project.title}
            </div>
            <div style={{ fontSize: 10, color: "var(--soft)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
              {project.category}
            </div>
          </div>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ fontSize: 11, color: "var(--navy-mid)", textDecoration: "underline", flexShrink: 0, marginLeft: 12 }}
            >
              GitHub
            </a>
          )}
        </div>

        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, marginBottom: 12 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: bd ? 12 : 0 }}>
          {project.stack.map((s) => (
            <span key={s} className="xp-chip">{s}</span>
          ))}
        </div>

        {/* Expand toggle */}
        {bd && (
          <button
            onClick={() => setOpen((o) => !o)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 12px", borderRadius: 4, cursor: "pointer",
              fontFamily: "inherit", fontSize: 12, fontWeight: 600,
              background: open
                ? "linear-gradient(to bottom, #e0e8fc, #d0dcf4)"
                : "linear-gradient(to bottom, #f4f6fc, #e4e8f4)",
              border: "1px solid",
              borderColor: open ? "#8090c0" : "#b0b8d0",
              color: open ? "var(--navy)" : "var(--muted)",
              boxShadow: open
                ? "inset 1px 1px 3px rgba(20,40,120,0.15)"
                : "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 2px rgba(20,40,120,0.08)",
            }}
          >
            <svg
              width="10" height="10" viewBox="0 0 10 10" fill="none"
              style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {open ? "Hide breakdown" : "Project breakdown"}
          </button>
        )}
      </div>

      {/* Expandable breakdown */}
      {bd && open && (
        <div
          style={{
            borderTop: "1px solid rgba(20,40,120,0.09)",
            background: "linear-gradient(to bottom, #f4f6fc, #f0f3fa)",
            padding: "18px 18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* What I did */}
          <div>
            <div className="group-label" style={{ marginBottom: 6 }}>What I did</div>
            <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.75 }}>{bd.what}</p>
          </div>

          {/* Challenges */}
          {bd.challenges.length > 0 && (
          <div>
            <div className="group-label" style={{ marginBottom: 8 }}>Challenges</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {bd.challenges.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div
                    style={{
                      flexShrink: 0, marginTop: 3,
                      width: 18, height: 18, borderRadius: 3,
                      background: "linear-gradient(135deg, #f0d0d0, #e0b8b8)",
                      border: "1px solid rgba(180,60,60,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 9, fontWeight: 700, color: "#a02020",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.7 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Solutions */}
          {bd.solutions.length > 0 && (
          <div>
            <div className="group-label" style={{ marginBottom: 8 }}>How I solved them</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {bd.solutions.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div
                    style={{
                      flexShrink: 0, marginTop: 3,
                      width: 18, height: 18, borderRadius: 3,
                      background: "linear-gradient(135deg, #d0ecd8, #b8dcc4)",
                      border: "1px solid rgba(40,120,60,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 9, fontWeight: 700, color: "#1a6030",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.7 }}>{s}</p>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Outcome */}
          {bd.outcome && (
          <div
            style={{
              background: "linear-gradient(to bottom, #eef2ff, #e4eafc)",
              border: "1px solid rgba(40,70,180,0.15)",
              borderRadius: 6,
              padding: "12px 14px",
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy-mid)", marginBottom: 5 }}>
              Outcome
            </div>
            <p style={{ fontSize: 13, color: "var(--navy)", lineHeight: 1.7 }}>{bd.outcome}</p>
          </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectsResponse() {
  return (
    <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {config.projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}
