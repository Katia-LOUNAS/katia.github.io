"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  background: "linear-gradient(to bottom, #d8dff0 0px, #ffffff 3px, #ffffff 100%)",
  border: "1px solid #8898b8",
  borderTopColor: "#6070a0",
  borderLeftColor: "#6070a0",
  borderRadius: 4,
  boxShadow: "inset 1px 1px 3px rgba(20,40,120,0.12)",
  fontFamily: "inherit",
  fontSize: 13,
  color: "var(--text)",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 5,
};

export default function ContactResponse() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="xp-card fade-up"
        style={{ padding: "40px 28px", textAlign: "center" }}
      >
        {/* Checkmark icon */}
        <div
          style={{
            width: 56, height: 56, borderRadius: "50%", margin: "0 auto 16px",
            background: "linear-gradient(135deg, #d0f0d8, #a8e0b8)",
            border: "2px solid rgba(46,139,58,0.3)",
            boxShadow: "0 0 0 1px rgba(46,139,58,0.15), 0 2px 8px rgba(46,139,58,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M5 13l6 6L21 7" stroke="#2e8b3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>
          Message sent
        </div>
        <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, maxWidth: 320, margin: "0 auto 24px" }}>
          Thank you for reaching out. I will get back to you as soon as possible.
        </div>
        <button
          className="xp-btn"
          onClick={() => setStatus("idle")}
          style={{ margin: "0 auto" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <form onSubmit={handleSubmit} noValidate>

        {/* Name + Email row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <div>
            <label style={labelStyle} htmlFor="cf-name">Name <span style={{ color: "#c03030" }}>*</span></label>
            <input
              id="cf-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              style={inputStyle}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#2050b0"; e.currentTarget.style.boxShadow = "inset 1px 1px 3px rgba(20,40,120,0.15), 0 0 0 2px rgba(40,80,180,0.15)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#8898b8"; e.currentTarget.style.borderTopColor = "#6070a0"; e.currentTarget.style.boxShadow = "inset 1px 1px 3px rgba(20,40,120,0.12)"; }}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="cf-email">Email <span style={{ color: "#c03030" }}>*</span></label>
            <input
              id="cf-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              style={inputStyle}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#2050b0"; e.currentTarget.style.boxShadow = "inset 1px 1px 3px rgba(20,40,120,0.15), 0 0 0 2px rgba(40,80,180,0.15)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#8898b8"; e.currentTarget.style.borderTopColor = "#6070a0"; e.currentTarget.style.boxShadow = "inset 1px 1px 3px rgba(20,40,120,0.12)"; }}
            />
          </div>
        </div>

        {/* Subject */}
        <div style={{ marginBottom: 12 }}>
          <label style={labelStyle} htmlFor="cf-subject">Subject</label>
          <input
            id="cf-subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "#2050b0"; e.currentTarget.style.boxShadow = "inset 1px 1px 3px rgba(20,40,120,0.15), 0 0 0 2px rgba(40,80,180,0.15)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "#8898b8"; e.currentTarget.style.borderTopColor = "#6070a0"; e.currentTarget.style.boxShadow = "inset 1px 1px 3px rgba(20,40,120,0.12)"; }}
          />
        </div>

        {/* Message */}
        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle} htmlFor="cf-message">Message <span style={{ color: "#c03030" }}>*</span></label>
          <textarea
            id="cf-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
            rows={5}
            style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "#2050b0"; e.currentTarget.style.boxShadow = "inset 1px 1px 3px rgba(20,40,120,0.15), 0 0 0 2px rgba(40,80,180,0.15)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "#8898b8"; e.currentTarget.style.borderTopColor = "#6070a0"; e.currentTarget.style.boxShadow = "inset 1px 1px 3px rgba(20,40,120,0.12)"; }}
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <div
            style={{
              marginBottom: 12, padding: "9px 14px", borderRadius: 4,
              background: "#fff0f0", border: "1px solid rgba(180,40,40,0.25)",
              fontSize: 13, color: "#a02020",
            }}
          >
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "var(--soft)" }}>
            * Required fields
          </span>
          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "9px 24px", borderRadius: 6,
              background: status === "sending"
                ? "linear-gradient(to bottom, #c0c8e0, #a8b4d0)"
                : "linear-gradient(to bottom, #2c60c8, #1848a8)",
              border: "1px solid rgba(20,40,80,0.4)",
              borderTopColor: "rgba(20,40,80,0.2)",
              fontFamily: "inherit", fontSize: 13, fontWeight: 700,
              color: "#fff", cursor: status === "sending" ? "not-allowed" : "pointer",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), 1px 1px 4px rgba(20,40,120,0.25)",
            }}
          >
            {status === "sending" ? (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ animation: "spin 1s linear infinite" }}>
                  <circle cx="7" cy="7" r="5" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                  <path d="M7 2 A5 5 0 0 1 12 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7l5 5 7-9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0"/>
                  <path d="M1 1l12 6-12 6V8l8-1-8-1V1z" fill="white"/>
                </svg>
                Send message
              </>
            )}
          </button>
        </div>

      </form>

      {/* Social links */}
      <div
        style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: "1px solid rgba(20,40,120,0.1)",
          display: "flex",
          gap: 10,
        }}
      >
        <a
          href="https://linkedin.com/in/katia-lounas"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "7px 16px", borderRadius: 6, textDecoration: "none",
            background: "linear-gradient(to bottom, #f4f6fc, #e4e8f4)",
            border: "1px solid #b0b8d0", borderTopColor: "#c8d0e4",
            fontSize: 12, fontWeight: 600, color: "var(--navy)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(20,40,120,0.1)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="0.5" y="0.5" width="13" height="13" rx="2.5" fill="#0a66c2"/>
            <text x="2.5" y="11" fontSize="8" fontWeight="700" fill="white" fontFamily="Arial">in</text>
          </svg>
          LinkedIn
        </a>

        <a
          href="https://github.com/Katia-LOUNAS"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "7px 16px", borderRadius: 6, textDecoration: "none",
            background: "linear-gradient(to bottom, #f4f6fc, #e4e8f4)",
            border: "1px solid #b0b8d0", borderTopColor: "#c8d0e4",
            fontSize: 12, fontWeight: 600, color: "var(--navy)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(20,40,120,0.1)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6.5" fill="#24292e"/>
            <path d="M7 1.5a5.5 5.5 0 00-1.74 10.72c.27.05.37-.12.37-.26v-.93c-1.52.33-1.84-.73-1.84-.73-.25-.64-.61-.81-.61-.81-.5-.34.04-.33.04-.33.55.04.84.57.84.57.49.84 1.28.6 1.59.46.05-.36.19-.6.35-.74-1.22-.14-2.5-.61-2.5-2.71 0-.6.21-1.09.57-1.47-.06-.14-.25-.7.05-1.45 0 0 .46-.15 1.51.56A5.26 5.26 0 017 4.53c.47 0 .94.06 1.38.18 1.05-.71 1.51-.56 1.51-.56.3.75.11 1.31.05 1.45.36.38.57.87.57 1.47 0 2.11-1.28 2.57-2.5 2.71.2.17.37.5.37 1.01v1.5c0 .14.1.31.37.26A5.5 5.5 0 007 1.5z" fill="white"/>
          </svg>
          GitHub
        </a>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
