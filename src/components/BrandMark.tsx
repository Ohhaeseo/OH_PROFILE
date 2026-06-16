type BrandMarkProps = {
  className?: string;
  dark?: boolean;
};

export function BrandMark({ className = "", dark = false }: BrandMarkProps) {
  const bg = dark ? "#f4eee6" : "#17110d";
  const panel = dark ? "#17110d" : "#2b211a";
  const stroke = dark ? "#f4eee6" : "#fff7eb";
  const accent = dark ? "#d7ad78" : "#d0a06b";
  const muted = dark ? "#72523a" : "#6b5440";

  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-[1.1rem] shadow-[0_14px_36px_-20px_rgba(28,21,15,0.85)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <rect width="64" height="64" rx="18" fill={bg} />
        <rect x="6" y="6" width="52" height="52" rx="15" fill={panel} />
        <path
          d="M24.2 45.4c-8 0-13.2-5.4-13.2-13.4s5.2-13.4 13.2-13.4c4.9 0 8.9 2.1 11.2 5.7"
          fill="none"
          stroke={accent}
          strokeLinecap="round"
          strokeWidth="5.2"
        />
        <path
          d="M24.2 45.4c5 0 8.9-2.1 11.2-5.7"
          fill="none"
          stroke={muted}
          strokeLinecap="round"
          strokeWidth="5.2"
        />
        <path
          d="M40 19.6v24.8M53 19.6v24.8M40 32h13"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth="5.2"
        />
        <path
          d="M13.8 50.2h36.4"
          fill="none"
          stroke={accent}
          strokeLinecap="round"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}
