import type { ReactNode } from 'react'
import { MessageCircle } from 'lucide-react'

export const PHONE_DISPLAY = '055 285 8382'
export const PHONE_LINK = 'tel:+966552858382'
export const EMAIL = 'sightseeingtravel2026@gmail.com'
export const INSTAGRAM_HANDLE = '@safaralmaalem'
export const INSTAGRAM_URL = 'https://instagram.com/safaralmaalem'

export const wa = (text: string) =>
  `https://wa.me/966552858382?text=${encodeURIComponent(text)}`

export function Overline({
  children,
  light = false,
}: {
  children: ReactNode
  light?: boolean
}) {
  return (
    <div
      className={`flex items-center justify-center gap-4 text-xs sm:text-sm ${
        light ? 'text-[#8A7599]' : 'text-[#F0A0B3]/60'
      }`}
    >
      <span
        className={`h-px w-10 sm:w-16 bg-gradient-to-l to-transparent ${
          light ? 'from-[#2E2145]/30' : 'from-[#F0A0B3]/40'
        }`}
      />
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={`h-px w-10 sm:w-16 bg-gradient-to-r to-transparent ${
          light ? 'from-[#2E2145]/30' : 'from-[#F0A0B3]/40'
        }`}
      />
    </div>
  )
}

export function SectionTitle({
  children,
  className = '',
  light = false,
}: {
  children: ReactNode
  className?: string
  light?: boolean
}) {
  return (
    <h2
      className={`font-display-ar text-4xl sm:text-5xl md:text-6xl leading-[1.5] ${
        light ? 'text-[#2E2145]' : 'text-[#F3EAF6]'
      } ${className}`}
    >
      {children}
    </h2>
  )
}

export function TopFade({ from }: { from: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 sm:h-44"
      style={{
        background: `linear-gradient(to bottom, ${from} 0%, transparent 100%)`,
      }}
    />
  )
}

export function Divider() {
  return (
    <div className="h-px w-full bg-gradient-to-l from-transparent via-white/10 to-transparent" />
  )
}

export function WhatsAppButton({
  label,
  message,
  className = '',
  dark = false,
}: {
  label: string
  message: string
  className?: string
  dark?: boolean
}) {
  return (
    <a
      href={wa(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 ${
        dark
          ? 'bg-[#2E2145] text-[#F6E9F2] hover:shadow-[0_0_36px_rgba(78,104,184,0.45)]'
          : 'bg-white text-black hover:shadow-[0_0_36px_rgba(255,255,255,0.25)]'
      } ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  )
}
