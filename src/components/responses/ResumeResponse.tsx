"use client";

import { useState } from "react";

const PDF_PATH = "/resume.pdf";

export default function ResumeResponse() {
  const [pdfError, setPdfError] = useState(false);

  const btnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "9px 22px",
    borderRadius: 6,
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    border: "1px solid #8090c0",
    borderTopColor: "#b0bcd4",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85), 1px 1px 4px rgba(20,40,120,0.15)",
  };

  return (
    <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 12 }}>

      {/* Action buttons */}
      <div
        className="xp-card"
        style={{
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--navy)", marginBottom: 2 }}>
            Katia Lounas, Resume
          </div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            AI &amp; Data Engineer &nbsp;·&nbsp; Available immediately
          </div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {/* Open in new tab */}
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...btnStyle,
              background: "linear-gradient(to bottom, #f4f6fc, #e0e8f8 45%, #d0dcf4 55%, #dce6fc)",
              color: "var(--navy)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h4M2 2v4M2 2l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="6" y="6" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Open
          </a>

          {/* Download */}
          <a
            href={PDF_PATH}
            download="Katia_Lounas_Resume.pdf"
            style={{
              ...btnStyle,
              background: "linear-gradient(to bottom, #2c60c8, #1848a8)",
              color: "#fff",
              border: "1px solid rgba(20,40,80,0.5)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 1px 1px 4px rgba(20,40,120,0.3)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 11h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Download
          </a>
        </div>
      </div>

      {/* PDF preview */}
      {!pdfError ? (
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(20,40,120,0.13)",
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(20,40,120,0.08)",
            position: "relative",
          }}
        >
          <iframe
            src={PDF_PATH}
            title="Katia Lounas Resume"
            width="100%"
            height="680"
            style={{ display: "block", border: "none" }}
            onError={() => setPdfError(true)}
          />
        </div>
      ) : (
        /* Fallback when PDF not found */
        <div
          className="xp-card"
          style={{ padding: "40px 24px", textAlign: "center" }}
        >
          <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.3 }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ margin: "0 auto", display: "block" }}>
              <rect x="8" y="2" width="28" height="36" rx="3" fill="#eef2fc" stroke="rgba(20,40,120,0.2)" strokeWidth="1"/>
              <path d="M30 2 L36 8 L30 8 Z" fill="rgba(20,40,120,0.1)"/>
              <rect x="13" y="14" width="18" height="2" rx="1" fill="rgba(80,100,160,0.3)"/>
              <rect x="13" y="19" width="18" height="2" rx="1" fill="rgba(80,100,160,0.2)"/>
              <rect x="13" y="24" width="13" height="2" rx="1" fill="rgba(80,100,160,0.2)"/>
            </svg>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", marginBottom: 8 }}>
            Resume not uploaded yet
          </div>
          <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.7, maxWidth: 340, margin: "0 auto" }}>
            To display your resume here, add your PDF file to:
            <br />
            <code
              style={{
                display: "inline-block",
                marginTop: 8,
                padding: "4px 10px",
                background: "#f0f2f8",
                border: "1px solid rgba(20,40,120,0.12)",
                borderRadius: 4,
                fontSize: 12,
                color: "var(--navy)",
                fontFamily: "monospace",
              }}
            >
              public/resume.pdf
            </code>
          </div>
        </div>
      )}

    </div>
  );
}
