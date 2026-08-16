import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 sm:bottom-8 sm:right-8 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="العودة إلى الأعلى"
        className="liquid-glass group flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_32px_rgba(78,104,184,0.5)]"
        style={{ background: 'rgba(30, 20, 51, 0.35)' }}
      >
        <ArrowUp className="h-5 w-5 text-[#F0A0B3] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-white" />
      </button>
    </div>
  )
}
