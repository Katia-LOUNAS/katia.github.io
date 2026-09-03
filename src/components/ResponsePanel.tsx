import type { Section } from "@/app/page";
import MeResponse from "./responses/MeResponse";
import ExperienceResponse from "./responses/ExperienceResponse";
import ProjectsResponse from "./responses/ProjectsResponse";
import SkillsResponse from "./responses/SkillsResponse";
import EducationResponse from "./responses/EducationResponse";
import ContactResponse from "./responses/ContactResponse";
import ResumeResponse from "./responses/ResumeResponse";

const TITLES: Record<Section, string> = {
  me:         "About Me",
  experience: "Experience",
  projects:   "Projects",
  skills:     "Skills",
  education:  "Education",
  contact:    "Contact",
  resume:     "Resume",
};

const COMPONENTS: Record<Section, React.ComponentType> = {
  me:         MeResponse,
  experience: ExperienceResponse,
  projects:   ProjectsResponse,
  skills:     SkillsResponse,
  education:  EducationResponse,
  contact:    ContactResponse,
  resume:     ResumeResponse,
};

interface ResponsePanelProps {
  section: Section;
  onBack: () => void;
}

export default function ResponsePanel({ section, onBack }: ResponsePanelProps) {
  const Component = COMPONENTS[section];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 700,
        animation: "fadeUp 0.22s ease forwards",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 22,
        }}
      >
        <button className="xp-btn" onClick={onBack}>
          &#8592; Back
        </button>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "var(--navy)",
          }}
        >
          {TITLES[section]}
        </h2>
      </div>

      <Component />
    </div>
  );
}
