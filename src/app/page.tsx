"use client";

import { useState } from "react";
import Landing from "@/components/Landing";
import ResponsePanel from "@/components/ResponsePanel";
import ChatView from "@/components/ChatView";

export type Section =
  | "me"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact"
  | "resume";

export type View = "landing" | "chat" | Section;

export default function Home() {
  const [view, setView] = useState<View>("landing");
  const [initialQuery, setInitialQuery] = useState("");

  const SECTIONS: Section[] = [
    "me",
    "experience",
    "projects",
    "skills",
    "education",
    "contact",
    "resume",
  ];

  const isSection = (v: View): v is Section =>
    SECTIONS.includes(v as Section);

  function handleAsk(query: string) {
    setInitialQuery(query);
    setView("chat");
  }

  function reset() {
    setView("landing");
    setInitialQuery("");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 24px 24px",
        }}
      >
        {view === "landing" && (
          <Landing
            onNavigate={(section: Section) => setView(section)}
            onAsk={handleAsk}
          />
        )}

        {isSection(view) && (
          <ResponsePanel section={view} onBack={reset} />
        )}

        {view === "chat" && (
          <ChatView initialQuery={initialQuery} onBack={reset} />
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          flexShrink: 0,
          background: "var(--footer-bg)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45)",
        }}
      >
        <span style={{ fontSize: 12, color: "var(--footer-tx)" }}>
          Paris, France &nbsp;·&nbsp; available immediately
        </span>
        <div style={{ display: "flex", gap: 14 }}>
          <button
            onClick={reset}
            style={{
              fontSize: 12,
              color: "var(--footer-tx)",
              cursor: "pointer",
              textDecoration: "underline",
              background: "none",
              border: "none",
              fontFamily: "inherit",
              padding: 0,
            }}
          >
            Start over
          </button>
          <button
            onClick={() => setView("me")}
            style={{
              fontSize: 12,
              color: "var(--footer-tx)",
              cursor: "pointer",
              textDecoration: "underline",
              background: "none",
              border: "none",
              fontFamily: "inherit",
              padding: 0,
            }}
          >
            About
          </button>
        </div>
      </footer>
    </div>
  );
}
