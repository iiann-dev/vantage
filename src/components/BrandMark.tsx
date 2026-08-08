export default function Logo({ className = '', markClassName = '' }: { className?: string; markClassName?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className={`grid size-9 shrink-0 place-items-center rounded-[10px] bg-gradient-to-br from-ember to-ember-deep shadow-md shadow-ember/25 ${markClassName}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 16.5 8.6 5.5l3.9 11L16.6 8l4.4 8.5"
            stroke="#0C0A07"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="17.6" cy="5.4" r="2.1" fill="#0C0A07" />
        </svg>
      </span>
      <span className="font-display text-lg leading-none tracking-tight text-mist">
        Vantage
      </span>
    </span>
  )
}