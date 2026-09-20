"use client";

import { useRef, KeyboardEvent } from "react";
import IconButton from "./IconButton";
import {
  PersonIcon,
  BriefcaseIcon,
  FolderIcon,
  ToolboxIcon,
  GradCapIcon,
  EnvelopeIcon,
  DocumentIcon,
} from "./icons";
import type { Section } from "@/app/page";

interface LandingProps {
  onNavigate: (section: Section) => void;
  onAsk: (query: string) => void;
}

export default function Landing({ onNavigate, onAsk }: LandingProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAsk() {
    const val = inputRef.current?.value.trim();
    if (val) onAsk(val);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleAsk();
  }

  const row1: { section: Section; label: string; icon: React.ReactNode }[] = [
    { section: "me",         label: "Me",         icon: <PersonIcon /> },
    { section: "experience", label: "Experience",  icon: <BriefcaseIcon /> },
    { section: "projects",   label: "Projects",    icon: <FolderIcon /> },
    { section: "skills",     label: "Skills",      icon: <ToolboxIcon /> },
  ];

  const row2: { section: Section; label: string; icon: React.ReactNode }[] = [
    { section: "education", label: "Education", icon: <GradCapIcon /> },
    { section: "contact",   label: "Contact",   icon: <EnvelopeIcon /> },
    { section: "resume",    label: "Resume",    icon: <DocumentIcon /> },
  ];

  return (
    <div
      className="fade-up"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 760,
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          background: "linear-gradient(145deg, #d8e2f8 0%, #c0ccec 60%, #b4c4e8 100%)",
          border: "2px solid rgba(255,255,255,0.9)",
          boxShadow:
            "0 4px 14px rgba(20,40,120,0.18), 0 1px 4px rgba(20,40,120,0.1), inset 0 1px 2px rgba(255,255,255,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 22,
          flexShrink: 0,
        }}
      >
        {/* Person + laptop SVG */}
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <defs>
            <linearGradient id="av1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7090d8" />
              <stop offset="1" stopColor="#4060b0" />
            </linearGradient>
            <linearGradient id="av2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8098c8" />
              <stop offset="1" stopColor="#6080b0" />
            </linearGradient>
            <linearGradient id="av3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#9ab0e0" />
              <stop offset="1" stopColor="#7090c8" />
            </linearGradient>
          </defs>
          <circle cx="22" cy="15" r="8" fill="url(#av1)" />
          <path d="M4 44 Q4 32 22 32 Q36 32 38 38" fill="url(#av1)" opacity="0.9" />
          <rect x="28" y="30" width="20" height="13" rx="2" fill="url(#av2)" />
          <rect x="28" y="30" width="20" height="10" rx="2" fill="url(#av3)" />
          <rect x="30" y="32" width="16" height="1.5" rx="0.75" fill="rgba(255,255,255,0.5)" />
          <rect x="30" y="35" width="10" height="1.5" rx="0.75" fill="rgba(255,255,255,0.4)" />
        </svg>
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: 32,
          fontWeight: 700,
          color: "var(--navy)",
          letterSpacing: "-0.01em",
          marginBottom: 6,
        }}
      >
        Hey, I&apos;m Katia
      </h1>
      <p style={{ fontSize: 16, color: "var(--muted)", marginBottom: 16 }}>
        AI &amp; Data Engineer, Paris, France
      </p>
      <p
        style={{
          fontSize: 14,
          color: "var(--muted)",
          textAlign: "center",
          lineHeight: 1.65,
          maxWidth: 520,
          marginBottom: 32,
        }}
      >
        No scrolling required. Ask me anything about my work, or click a
        shortcut, and I&apos;ll answer it myself.
      </p>

      {/* Input bar */}
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: 560,
          marginBottom: 36,
          borderRadius: 8,
          border: "1px solid #b8c0d4",
          background: "#ffffff",
          boxShadow: "var(--input-shadow)",
          overflow: "hidden",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask me anything..."
          onKeyDown={handleKeyDown}
          style={{
            flex: 1,
            padding: "13px 16px",
            border: "none",
            outline: "none",
            fontFamily: "inherit",
            fontSize: 14,
            color: "var(--text)",
            background: "transparent",
          }}
        />
        <button
          onClick={handleAsk}
          style={{
            padding: "0 22px",
            border: "none",
            borderLeft: "1px solid #ccd2e4",
            background:
              "linear-gradient(to bottom, #f6f7fc 0%, #e8ebf6 45%, #dce2f4 55%, #e4e8f6 100%)",
            fontFamily: "inherit",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--navy)",
            cursor: "pointer",
            boxShadow: "inset 1px 0 0 rgba(255,255,255,0.7)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(to bottom, #eef2ff, #d8e0ff 45%, #ccd6ff 55%, #d4dcff)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(to bottom, #f6f7fc 0%, #e8ebf6 45%, #dce2f4 55%, #e4e8f6 100%)";
          }}
        >
          Ask
        </button>
      </div>

      {/* Icon grid */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", gap: 12 }}>
          {row1.map(({ section, label, icon }) => (
            <IconButton
              key={section}
              icon={icon}
              label={label}
              onClick={() => onNavigate(section)}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {row2.map(({ section, label, icon }) => (
            <IconButton
              key={section}
              icon={icon}
              label={label}
              onClick={() => onNavigate(section)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
