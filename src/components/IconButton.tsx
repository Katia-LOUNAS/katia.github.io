import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

export default function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 158,
        height: 126,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        background: "linear-gradient(to bottom, #ffffff 0%, #f6f8fe 100%)",
        border: "1px solid rgba(20,40,120,0.13)",
        borderRadius: 12,
        boxShadow:
          "0 2px 8px rgba(20,40,120,0.08), 0 1px 2px rgba(20,40,120,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
        cursor: "pointer",
        fontFamily: "inherit",
        color: "var(--text)",
        transition: "box-shadow 0.15s, transform 0.1s, background 0.1s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background =
          "linear-gradient(to bottom, #ffffff, #eef2ff)";
        el.style.boxShadow =
          "0 4px 16px rgba(20,40,120,0.13), 0 2px 4px rgba(20,40,120,0.08), inset 0 1px 0 rgba(255,255,255,0.95)";
        el.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background =
          "linear-gradient(to bottom, #ffffff 0%, #f6f8fe 100%)";
        el.style.boxShadow =
          "0 2px 8px rgba(20,40,120,0.08), 0 1px 2px rgba(20,40,120,0.06), inset 0 1px 0 rgba(255,255,255,0.95)";
        el.style.transform = "translateY(0)";
      }}
      onMouseDown={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(1px)";
        el.style.boxShadow =
          "0 1px 4px rgba(20,40,120,0.1), inset 0 2px 4px rgba(20,40,120,0.08)";
      }}
      onMouseUp={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-1px)";
      }}
    >
      <div style={{ width: 48, height: 48 }}>{icon}</div>
      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
        {label}
      </span>
    </button>
  );
}
