type IconProps = { className?: string };

const base = "h-6 w-6";

export function PhoneIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ClockIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.56-1.72A12.74 12.74 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16 3.2Zm5.62 15.37c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.53-1.83-1.71-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.55.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.55.08-.83.39-.28.31-1.09 1.07-1.09 2.6 0 1.53 1.12 3.01 1.27 3.22.16.2 2.2 3.36 5.33 4.71.74.32 1.32.51 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  );
}

export function StarRow({ className = "" }: IconProps) {
  return (
    <span className={`inline-flex gap-0.5 text-gold-500 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="m10 1.6 2.47 5.18 5.7.62-4.25 3.83 1.16 5.6L10 14.6l-5.08 2.65 1.16-5.6L1.83 8l5.7-.62L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}
