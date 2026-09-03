import config from "../../../portfolio-config.json";

export default function ExperienceResponse() {
  return (
    <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {config.experience.map((job, i) => (
        <div
          key={i}
          style={{
            background: "linear-gradient(to bottom, #ffffff, #f8faff)",
            border: "1px solid rgba(20,40,120,0.11)",
            borderLeft: "3px solid var(--navy-mid)",
            borderRadius: 8,
            padding: "14px 18px",
            boxShadow: "0 1px 4px rgba(20,40,120,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--navy)" }}>{job.company}</span>
            <span style={{ fontSize: 11, color: "var(--soft)" }}>
              {job.startDate} – {job.endDate} &nbsp;·&nbsp; {job.location}
            </span>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--navy-mid)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
            {job.role}
          </div>
          <ul style={{ paddingLeft: 14, display: "flex", flexDirection: "column", gap: 3 }}>
            {job.bullets.map((b, j) => (
              <li key={j} style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65 }}>{b}</li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 10 }}>
            {job.tags.map((t) => (
              <span key={t} className="xp-chip">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
