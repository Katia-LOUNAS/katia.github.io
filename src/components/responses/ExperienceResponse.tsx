"use client";

import { useState } from "react";
import config from "../../../portfolio-config.json";

type Job = (typeof config.experience)[number] & { detail?: string };

function ExpCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

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
      <div style={{ padding: "14px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "var(--navy)" }}>{job.company}</span>
          <span style={{ fontSize: 11, color: "var(--soft)" }}>
            {job.startDate} – {job.endDate} &nbsp;·&nbsp; {job.location}
          </span>
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--navy-mid)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
          {job.role}
        </div>
        <ul style={{ paddingLeft: 14, display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
          {job.bullets.map((b, i) => (
            <li key={i} style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65 }}>{b}</li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {job.tags.map((t) => (
              <span key={t} className="xp-chip">{t}</span>
            ))}
          </div>
          {job.detail && (
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
              {open ? "Hide details" : "Read more"}
            </button>
          )}
        </div>
      </div>

      {job.detail && open && (
        <div
          style={{
            borderTop: "1px solid rgba(20,40,120,0.09)",
            background: "linear-gradient(to bottom, #f4f6fc, #f0f3fa)",
            padding: "16px 18px",
          }}
        >
          {job.detail.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.75, marginBottom: i < job.detail!.split("\n\n").length - 1 ? 12 : 0 }}>
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperienceResponse() {
  return (
    <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {config.experience.map((job, i) => (
        <ExpCard key={i} job={job as Job} />
      ))}
    </div>
  );
}
