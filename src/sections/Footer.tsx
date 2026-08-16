import { AtSign, Mail, Phone } from 'lucide-react'
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_LINK,
  TopFade,
  wa,
} from './shared'

const QUICK_LINKS = [
  { label: 'من نحن', href: '#about' },
  { label: 'وجهة حائل', href: '#hail' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why' },
  { label: 'الباقات', href: '#packages' },
  { label: 'صمم رحلتك', href: '#designer' },
]

const SERVICE_LINKS = [
  'حجز الطيران والفنادق',
  'الرحلات الداخلية والخارجية',
  'باقات شهر العسل والعائلات',
  'التأشيرات والتأمين',
  'النقل واستقبال المطارات',
  'رحلات الشركات MICE',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#130C24]">
      <TopFade from="#F9EDF2" />
      <span
        aria-hidden
        className="font-display-ar pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] leading-none text-[#F0A0B3]/[0.05]"
      >
        سفر المعالم
      </span>

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
          <div className="text-start">
            <p className="font-display-ar text-3xl text-white">سفر المعالم</p>
            <p className="mt-4 max-w-sm text-sm leading-loose text-white/55">
              منصة سياحية سعودية متخصصة في صناعة تجارب سفر متكاملة — برامج سياحية،
              حجوزات طيران وفنادق، وتنظيم رحلات سهلة وموثوقة داخل المملكة وخارجها.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="حساب التواصل الاجتماعي"
                className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors duration-300 hover:text-white"
              >
                <AtSign className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="البريد الإلكتروني"
                className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors duration-300 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={PHONE_LINK}
                aria-label="اتصل بنا"
                className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors duration-300 hover:text-white"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={wa('مرحبًا، أرغب بالاستفسار عن خدماتكم.')}
                target="_blank"
                rel="noreferrer"
                className="liquid-glass rounded-full px-4 py-2 text-xs text-white/70 transition-colors duration-300 hover:text-white"
              >
                واتساب مباشر
              </a>
            </div>
          </div>

          <div className="text-start">
            <h4 className="text-sm font-medium text-white/85">أقسام الموقع</h4>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-start">
            <h4 className="text-sm font-medium text-white/85">من خدماتنا</h4>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-white/35" dir="ltr">
              {PHONE_DISPLAY} • {EMAIL} • {INSTAGRAM_HANDLE}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-8 text-xs text-white/35 sm:flex-row">
          <p>© 2026 سفر المعالم للسياحة — جميع الحقوق محفوظة</p>
          <p>صُنع بشغف دعمًا لمستهدفات رؤية المملكة 2030</p>
        </div>
      </div>
    </footer>
  )
}
