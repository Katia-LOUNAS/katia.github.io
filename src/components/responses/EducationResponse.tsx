import config from "@/portfolio-config.json";

export default function EducationResponse() {
  return (
    <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {config.education.map((edu, i) => (
        <div key={i} className="xp-card" style={{ padding: "16px 18px" }}>
          <div style={{ fontSize: 11, color: "var(--soft)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginBottom: 4 }}>
            {edu.startYear} – {edu.endYear}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>
            {edu.degree}
          </div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            {edu.school} &nbsp;·&nbsp; {edu.location}
          </div>
          {edu.honors && (
            <div style={{ marginTop: 8 }}>
              <span className="xp-chip">{edu.honors}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
