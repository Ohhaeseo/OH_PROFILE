type BrandMarkProps = {
  className?: string;
  dark?: boolean;
};

export function BrandMark({ className = "", dark = false }: BrandMarkProps) {
  const bg = dark ? "#ece7de" : "#2b211a";
  const stroke = dark ? "#100f0e" : "#f4eee6";
  const accent = dark ? "#a6724b" : "#c89a68";

  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-xl shadow-[0_10px_28px_-18px_rgba(28,21,15,0.65)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <rect width="64" height="64" rx="16" fill={bg} />
        <path
          d="M20 43.5C13.9 43.5 10 38.9 10 32s3.9-11.5 10-11.5S30 25.1 30 32s-3.9 11.5-10 11.5Z"
          fill="none"
          stroke={accent}
          strokeWidth="5"
        />
        <path
          d="M37 20.5v23M54 20.5v23M37 32h17"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth="5"
        />
      </svg>
    </span>
  );
}
