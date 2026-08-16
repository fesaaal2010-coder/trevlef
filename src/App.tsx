import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import SiteSections from './sections/SiteSections'
import BackToTop from './sections/BackToTop'
import SupportChat from './sections/SupportChat'
import { wa } from './sections/shared'

const VIDEOS = [
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4',
    label: 'الساعة الذهبية',
  },
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4',
    label: 'الماء الساكن',
  },
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4',
    label: 'الغابة العميقة',
  },
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4',
    label: 'الفجر الهادئ',
  },
]

const NAV_LINKS = [
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'الباقات', href: '#packages' },
  { label: 'تواصل معنا', href: '#contact' },
]

const DARK = '#1E1433'

function App() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isDark = activeVideo === 2

  const handleVideoSwitch = (index: number) => {
    if (index === activeVideo || isTransitioning) return
    setActiveVideo(index)
    setIsTransitioning(true)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setActiveVideo((current) => (current + 1) % VIDEOS.length)
    }, 7000)
    return () => clearInterval(id)
  }, [activeVideo])

  const heroTextColor = isDark ? DARK : '#ffffff'
  const heroTransition = 'color 700ms ease, border-color 700ms ease, background-color 700ms ease'

  return (
    <>
      <section dir="rtl" className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background video layer */}
        {VIDEOS.map((video, index) => (
          <video
            key={video.src}
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeVideo ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Transparent PNG overlay */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png"
          alt=""
          className="train-bob absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none"
        />

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-opacity duration-500 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative flex flex-col items-center justify-center h-full gap-8">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display-ar text-white text-3xl transition-all duration-500"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                  transitionDelay: `${100 + index * 50}ms`,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(1rem)',
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={wa('مرحبًا، أرغب بحجز رحلة مع سفر المعالم.')}
              target="_blank"
              rel="noreferrer"
              className="font-body-ar mt-6 bg-white text-black text-sm px-8 py-3 rounded-full transition-all duration-500"
              style={{
                transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                transitionDelay: '300ms',
                transform: menuOpen ? 'scale(1)' : 'scale(0.9)',
                opacity: menuOpen ? 1 : 0,
              }}
              onClick={() => setMenuOpen(false)}
            >
              احجز رحلتك
            </a>
          </div>
        </div>

        {/* Content layer */}
        <div className="relative z-[2] flex flex-col h-full font-body-ar">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-8">
            <span className="font-display-ar text-white text-2xl sm:text-3xl">سفر المعالم</span>

            {/* Desktop nav */}
            <div className="hidden md:flex liquid-glass rounded-full items-center gap-8 ps-8 pe-2 py-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={wa('مرحبًا، أرغب بحجز رحلة مع سفر المعالم.')}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black text-sm px-5 py-2 rounded-full"
              >
                احجز الآن
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden liquid-glass rounded-full w-11 h-11 flex items-center justify-center text-white"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="القائمة"
            >
              <span className="relative w-5 h-5">
                <Menu
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    menuOpen ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-75 opacity-0'
                  }`}
                />
              </span>
            </button>
          </nav>

          {/* Hero content */}
          <div className="flex flex-col items-center text-center px-6 mt-14 sm:mt-20">
            {/* Badge */}
            <div
              className="liquid-glass rounded-full px-5 py-2 text-xs sm:text-sm"
              style={{
                color: heroTextColor,
                transition: heroTransition,
              }}
            >
              رؤية المملكة 2030 • تجارب سفر سعودية ملهمة وموثوقة
            </div>

            {/* Heading */}
            <h1
              className="font-display-ar mt-6 text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.35] max-w-4xl"
              style={{ color: heroTextColor, transition: heroTransition }}
            >
              صناعةُ تجاربَ سفرٍ مُلهمة
              <br />
              تترك أثرًا جميلًا في الذاكرة
            </h1>

            {/* Subtext */}
            <p
              className="mt-6 max-w-xl leading-relaxed text-sm sm:text-base"
              style={{
                color: heroTextColor,
                transition: heroTransition,
              }}
            >
              منصة سياحية سعودية متخصصة في تجارب السفر المتكاملة — برامج سياحية،
              حجوزات طيران وفنادق، وتنظيم رحلات سهلة وموثوقة داخل المملكة وخارجها.
            </p>

            {/* CTA pill */}
            <div className="liquid-glass rounded-full mt-8 flex items-center gap-4 ps-6 pe-1.5 py-1.5">
              <span
                className="text-sm whitespace-nowrap"
                style={{
                  color: heroTextColor,
                  transition: heroTransition,
                }}
              >
                إلى أين تودّ السفر؟
              </span>
              <a
                href="#designer"
                className="bg-white text-black text-sm px-5 py-2.5 rounded-full whitespace-nowrap transition-transform duration-300 hover:scale-105"
              >
                صمم رحلتك
              </a>
            </div>

            {/* Video switcher */}
            <div className="mt-8 flex items-center gap-5 sm:gap-8">
              {VIDEOS.map((video, index) => (
                <button
                  key={video.label}
                  onClick={() => handleVideoSwitch(index)}
                  className={`pb-1.5 text-xs sm:text-sm border-b transition-all duration-300 ${
                    index === activeVideo
                      ? 'opacity-100'
                      : 'opacity-50 border-transparent hover:opacity-80'
                  }`}
                  style={{
                    color: heroTextColor,
                    borderColor: index === activeVideo ? heroTextColor : 'transparent',
                    transition: heroTransition,
                  }}
                >
                  {video.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      <SiteSections />
      <BackToTop />
      <SupportChat />
    </>
  )
}

export default App
