/**
 * Atmosphere — global page backdrop.
 *
 * Renders a faint, slowly-drifting warm ember gradient that sits behind every
 * section. Combined with the heavy dark base, it gives the sky-toned sections
 * a subtle warmth that reads as "premium / cinematic" rather than flat #0c0a07.
 */

export default function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* warm ember bloom, top-right */}
      <div
        className="absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(232,145,78,0.35) 0%, rgba(201,110,47,0.18) 40%, transparent 70%)',
        }}
      />
      {/* cool nebula, bottom-left */}
      <div
        className="absolute -bottom-40 -left-40 h-[38rem] w-[38rem] rounded-full opacity-30 blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(120,160,200,0.25) 0%, rgba(80,120,160,0.12) 50%, transparent 70%)',
        }}
      />
      {/* mid warm wash */}
      <div
        className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[160px]"
        style={{
          background:
            'radial-gradient(circle, rgba(232,145,78,0.18) 0%, transparent 60%)',
        }}
      />
      {/* subtle film grain across the whole viewport */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '3px 3px',
        }}
      />
    </div>
  )
}
