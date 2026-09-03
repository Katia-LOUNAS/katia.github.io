"use client";

import { useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";

interface ChatViewProps {
  initialQuery: string;
  onBack: () => void;
}

export default function ChatView({ initialQuery, onBack }: ChatViewProps) {
  const submitted = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: "/api/chat",
  });

  useEffect(() => {
    if (initialQuery && !submitted.current) {
      submitted.current = true;
      append({ role: "user", content: initialQuery });
    }
  }, [initialQuery, append]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="fade-up"
      style={{
        width: "100%",
        maxWidth: 700,
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 160px)",
        maxHeight: 600,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexShrink: 0 }}>
        <button className="xp-btn" onClick={onBack}>
          &#8592; Back
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)" }}>
          Ask Katia
        </h2>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          paddingBottom: 8,
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            {msg.role === "assistant" && (
              <div
                style={{
                  width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg, #d0dcf4, #a8bcdc)",
                  border: "1px solid rgba(20,40,120,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 9, fontWeight: 700, color: "var(--navy)",
                  marginRight: 10, marginTop: 2,
                }}
              >
                KL
              </div>
            )}
            <div
              style={{
                maxWidth: "72%",
                padding: "10px 14px",
                borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                background:
                  msg.role === "user"
                    ? "linear-gradient(to bottom, #2c60c8, #1848a8)"
                    : "linear-gradient(to bottom, #ffffff, #f8faff)",
                border: msg.role === "user"
                  ? "1px solid rgba(20,40,120,0.5)"
                  : "1px solid rgba(20,40,120,0.11)",
                color: msg.role === "user" ? "#fff" : "var(--text)",
                fontSize: 13,
                lineHeight: 1.65,
                boxShadow:
                  msg.role === "user"
                    ? "inset 0 1px 0 rgba(255,255,255,0.2), 1px 2px 5px rgba(0,20,60,0.25)"
                    : "0 1px 4px rgba(20,40,120,0.07), inset 0 1px 0 rgba(255,255,255,0.8)",
                whiteSpace: "pre-wrap",
              }}
            >
              {msg.parts
                ? msg.parts
                    .filter((p) => p.type === "text")
                    .map((p, i) => <span key={i}>{p.text}</span>)
                : msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 30, height: 30, borderRadius: "50%",
                background: "linear-gradient(135deg, #d0dcf4, #a8bcdc)",
                border: "1px solid rgba(20,40,120,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, fontWeight: 700, color: "var(--navy)",
              }}
            >
              KL
            </div>
            <div
              style={{
                padding: "10px 16px",
                background: "linear-gradient(to bottom, #ffffff, #f8faff)",
                border: "1px solid rgba(20,40,120,0.11)",
                borderRadius: "14px 14px 14px 4px",
                boxShadow: "0 1px 4px rgba(20,40,120,0.07)",
                display: "flex", gap: 4,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--soft)", display: "block",
                    animation: `bounce 1.2s ease-in-out ${i * 0.18}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          marginTop: 12,
          borderRadius: 8,
          border: "1px solid #b8c0d4",
          background: "#ffffff",
          boxShadow: "var(--input-shadow)",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask a question..."
          disabled={isLoading}
          style={{
            flex: 1, padding: "12px 16px",
            border: "none", outline: "none",
            fontFamily: "inherit", fontSize: 13,
            color: "var(--text)", background: "transparent",
          }}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          style={{
            padding: "0 20px",
            border: "none",
            borderLeft: "1px solid #ccd2e4",
            background: "linear-gradient(to bottom, #f6f7fc 0%, #e8ebf6 45%, #dce2f4 55%, #e4e8f6 100%)",
            fontFamily: "inherit", fontSize: 13, fontWeight: 600,
            color: "var(--navy)", cursor: "pointer",
            opacity: isLoading || !input.trim() ? 0.5 : 1,
          }}
        >
          Send
        </button>
      </form>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.65); opacity: 0.45; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
