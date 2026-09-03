import config from "../../../portfolio-config.json";

export default function SkillsResponse() {
  const skills = config.skills as Record<string, string[]>;
  return (
    <div className="xp-card fade-up" style={{ padding: "20px 22px" }}>
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} style={{ marginBottom: 18 }}>
          <div className="group-label">{group}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {items.map((skill) => (
              <span key={skill} className="xp-chip">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
