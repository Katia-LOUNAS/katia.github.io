export function PersonIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
      <defs>
        <linearGradient id="person-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7090d8" />
          <stop offset="1" stopColor="#4060b4" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="17" r="10" fill="url(#person-g)" />
      <path d="M4 44 Q4 30 24 30 Q44 30 44 44 Z" fill="url(#person-g)" />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
      <defs>
        <linearGradient id="brief-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d89030" />
          <stop offset="1" stopColor="#b07018" />
        </linearGradient>
        <linearGradient id="brief-latch" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0b848" />
          <stop offset="1" stopColor="#d09030" />
        </linearGradient>
      </defs>
      <rect x="4" y="17" width="40" height="27" rx="4" fill="url(#brief-g)" />
      <path
        d="M16 17V12Q16 8 20 8H28Q32 8 32 12V17"
        stroke="#8a5a08"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="4" y="29" width="40" height="3" fill="#a86c10" opacity="0.7" />
      <rect x="20" y="26" width="8" height="9" rx="2" fill="url(#brief-latch)" />
    </svg>
  );
}

export function FolderIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
      <defs>
        <linearGradient id="folder-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7098d8" />
          <stop offset="1" stopColor="#4870b4" />
        </linearGradient>
      </defs>
      <path
        d="M4 14 L4 38 Q4 42 8 42 L40 42 Q44 42 44 38 L44 18 Q44 14 40 14 L24 14 L20 10 Q19 8 16 8 L8 8 Q4 8 4 12 Z"
        fill="url(#folder-g)"
      />
      <path d="M4 18 L44 18" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    </svg>
  );
}

export function ToolboxIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
      <defs>
        <linearGradient id="tool-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d04040" />
          <stop offset="1" stopColor="#a02828" />
        </linearGradient>
      </defs>
      <rect x="4" y="20" width="40" height="26" rx="4" fill="url(#tool-g)" />
      <rect x="4" y="20" width="40" height="7" rx="4" fill="#c03838" />
      <rect x="10" y="30" width="10" height="3" rx="1.5" fill="rgba(255,255,255,0.8)" />
      <rect x="10" y="35" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.6)" />
      <rect x="28" y="30" width="10" height="3" rx="1.5" fill="rgba(255,255,255,0.8)" />
      <rect
        x="20" y="17" width="8" height="6" rx="2"
        fill="rgba(255,255,255,0.25)"
        stroke="rgba(200,100,80,0.8)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function GradCapIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
      <defs>
        <linearGradient id="cap-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a5070" />
          <stop offset="1" stopColor="#2a3050" />
        </linearGradient>
        <linearGradient id="cap-g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a6480" />
          <stop offset="1" stopColor="#3a4460" />
        </linearGradient>
      </defs>
      <polygon points="24,8 44,19 24,30 4,19" fill="url(#cap-g)" />
      <path
        d="M10 22 L10 34 Q24 42 38 34 L38 22"
        fill="url(#cap-g2)"
        opacity="0.9"
      />
      <rect x="39" y="19" width="3" height="14" rx="1.5" fill="#5a6070" />
      <circle cx="40.5" cy="34" r="3" fill="#3a4060" />
    </svg>
  );
}

export function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
      <defs>
        <linearGradient id="env-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5888d0" />
          <stop offset="1" stopColor="#3060a8" />
        </linearGradient>
      </defs>
      <rect x="4" y="10" width="40" height="28" rx="4" fill="url(#env-g)" />
      <polyline
        points="4,10 24,26 44,10"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="4" y1="38" x2="18" y2="26" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="44" y1="38" x2="30" y2="26" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    </svg>
  );
}

export function DocumentIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
      <defs>
        <linearGradient id="doc-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eef2fc" />
        </linearGradient>
        <linearGradient id="doc-corner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d0d8f0" />
          <stop offset="1" stopColor="#b8c4e0" />
        </linearGradient>
        <linearGradient id="doc-badge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5080d0" />
          <stop offset="1" stopColor="#2858a8" />
        </linearGradient>
      </defs>
      <rect x="8" y="2" width="28" height="36" rx="3" fill="url(#doc-g)" />
      <rect
        x="8" y="2" width="28" height="36" rx="3"
        fill="none"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="1"
      />
      <path d="M30 2 L36 8 L30 8 Z" fill="url(#doc-corner)" />
      <rect x="13" y="14" width="18" height="2" rx="1" fill="rgba(80,100,160,0.4)" />
      <rect x="13" y="19" width="18" height="2" rx="1" fill="rgba(80,100,160,0.3)" />
      <rect x="13" y="24" width="13" height="2" rx="1" fill="rgba(80,100,160,0.3)" />
      <rect x="13" y="29" width="16" height="2" rx="1" fill="rgba(80,100,160,0.25)" />
      <circle cx="36" cy="36" r="8" fill="url(#doc-badge)" />
      <path
        d="M33 36 L36 33 L39 36 M36 33 L36 40"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
