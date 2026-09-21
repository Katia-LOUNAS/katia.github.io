import config from "@/portfolio-config.json";

export default function MeResponse() {
  const { personal } = config;
  return (
    <div className="xp-card fade-up" style={{ padding: "20px 22px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 18, alignItems: "start" }}>
        {/* Avatar */}
        <div
          style={{
            width: 72, height: 72, borderRadius: "50%",
            background: "linear-gradient(135deg, #d0dcf4, #a8bcdc)",
            border: "2px solid rgba(255,255,255,0.9)",
            boxShadow: "0 0 0 1px rgba(20,40,120,0.15), 1px 2px 6px rgba(20,40,120,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 700, color: "var(--navy)",
          }}
        >
          KL
        </div>

        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 2 }}>
            {personal.name}
          </div>
          <div style={{ fontSize: 12, color: "var(--soft)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
            {personal.title} &nbsp;·&nbsp; {personal.location}
          </div>
          {personal.bio.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.7, marginBottom: 8 }}>
              {para}
            </p>
          ))}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}>
            {["AI Engineer", "LLM Pipelines", "Python", ...personal.languages].map((t) => (
              <span key={t} className="xp-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
