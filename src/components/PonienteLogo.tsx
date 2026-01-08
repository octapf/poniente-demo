import * as React from "react";

export function PonienteLogo({
  className,
  title = "PONIENTE — Bar de Playa",
}: {
  className?: string;
  title?: string;
}) {
  const titleId = React.useId();

  return (
    <svg
      viewBox="0 0 256 256"
      role="img"
      aria-labelledby={titleId}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>

      {/* Radial sun rays */}
      <g fill="none" stroke="currentColor" strokeWidth="6" opacity="0.9">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 24;
          const x1 = 128 + Math.cos(angle) * 78;
          const y1 = 128 + Math.sin(angle) * 78;
          const x2 = 128 + Math.cos(angle) * 102;
          const y2 = 128 + Math.sin(angle) * 102;
          return (
            <line
              key={i}
              x1={x1.toFixed(2)}
              y1={y1.toFixed(2)}
              x2={x2.toFixed(2)}
              y2={y2.toFixed(2)}
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Inner circle + sun */}
      <circle
        cx="128"
        cy="128"
        r="76"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        opacity="0.95"
      />
      <g fill="currentColor">
        <path d="M96 110c10 0 14-10 22-10s12 10 22 10 14-10 22-10 12 10 22 10v10H96v-10Z" />
        <path d="M96 130h128v10H96z" opacity="0.9" />
        <path
          d="M128 94c-18 0-32 12-32 28h64c0-16-14-28-32-28Z"
          opacity="0.95"
        />
      </g>

      {/* Text */}
      <g fill="currentColor" fontFamily="var(--font-sans), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial">
        <text
          x="128"
          y="66"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          letterSpacing="2"
        >
          MAR DEL PLATA
        </text>
        <text
          x="128"
          y="152"
          textAnchor="middle"
          fontSize="36"
          fontWeight="800"
          letterSpacing="2"
        >
          PONIENTE
        </text>
        <text
          x="128"
          y="196"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          letterSpacing="2"
        >
          BAR DE PLAYA
        </text>
      </g>
    </svg>
  );
}
