import { useState, type FormEvent } from 'react'
import { AtSign, Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  Overline,
  PHONE_DISPLAY,
  PHONE_LINK,
  SectionTitle,
  TopFade,
  wa,
} from './shared'

const SERVICE_OPTIONS = [
  'برامج سياحة حائل واستكشاف المعالم',
  'تنظيم الرحلات الداخلية بالمملكة',
  'تنظيم الرحلات الخارجية والدولية',
  'حجز الفنادق والشقق الفندقية والطيران',
  'باقات العائلات وشهر العسل',
  'رحلات الشركات والجهات الحكومية',
  'استفسار عام',
]

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: 'الهاتف والتواصل المباشر',
    value: PHONE_DISPLAY,
    hint: 'متاح طوال الأسبوع — دعم 24/7',
    href: PHONE_LINK,
    ltr: true,
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    value: EMAIL,
    hint: 'نرد خلال ساعات العمل وفورًا',
    href: `mailto:${EMAIL}`,
    ltr: true,
  },
  {
    icon: MapPin,
    title: 'المقر والعنوان',
    value: 'حائل، المملكة العربية السعودية',
    hint: 'عروس الشمال — بوابة المعالم',
    href: undefined,
    ltr: false,
  },
  {
    icon: AtSign,
    title: 'التواصل الاجتماعي',
    value: INSTAGRAM_HANDLE,
    hint: 'متابعة وتواصل',
    href: INSTAGRAM_URL,
    ltr: true,
  },
]

const inputClass =
  'w-full rounded-xl border border-[#2E2145]/15 bg-white/60 px-4 py-3 text-sm text-[#2E2145] outline-none transition-colors duration-300 placeholder:text-[#2E2145]/35 focus:border-[#6C4F7D]/60'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = [
      'استفسار جديد من الموقع:',
      `الاسم: ${form.name}`,
      `الجوال: ${form.phone}`,
      form.email ? `البريد: ${form.email}` : '',
      `الخدمة المطلوبة: ${form.service}`,
      form.message ? `الرسالة: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.open(wa(text), '_blank')
  }

  return (
    <section
      id="contact"
      className="relative bg-[#F9EDF2] py-28 text-[#2E2145] sm:py-36"
    >
      <TopFade from="#1E1433" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 0%, rgba(240,160,179,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <Overline light>تواصل معنا</Overline>
          <SectionTitle light className="mx-auto mt-6 max-w-2xl text-3xl sm:text-4xl md:text-5xl">
            نحن هنا لخدمتك والإجابة على استفساراتك
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-xl leading-loose text-[#7A6391]">
            عبر الهاتف أو الواتساب أو البريد الإلكتروني — أو تفضل بزيارة مقرنا في حائل.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_CARDS.map((card, index) => {
              const content = (
                <>
                  <div className="liquid-glass-light flex h-11 w-11 items-center justify-center rounded-full">
                    <card.icon className="h-4.5 w-4.5 text-[#6C4F7D]" />
                  </div>
                  <h3 className="mt-5 text-sm font-medium text-[#2E2145]">{card.title}</h3>
                  <p
                    dir={card.ltr ? 'ltr' : undefined}
                    className="mt-2 text-sm text-[#5A4472] tabular-nums"
                  >
                    {card.value}
                  </p>
                  <p className="mt-1 text-xs text-[#8A7599]">{card.hint}</p>
                </>
              )
              const className =
                'card-light h-full rounded-3xl p-6 text-start transition-transform duration-500 hover:-translate-y-1.5'
              return (
                <Reveal key={card.title} delay={index * 90} className="h-full">
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className={`block ${className}`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={className}>{content}</div>
                  )}
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={150} className="h-full">
            <form
              onSubmit={handleSubmit}
              className="card-light flex h-full flex-col gap-4 rounded-3xl p-7 sm:p-9"
            >
              <h3 className="font-display-ar text-2xl text-[#2E2145]">
                أرسل لنا استفسارك المباشر
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="الاسم الكامل *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  required
                  type="tel"
                  placeholder="رقم الجوال / الواتساب *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={`${inputClass} appearance-none`}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option} className="bg-white text-[#2E2145]">
                    {option}
                  </option>
                ))}
              </select>
              <textarea
                rows={4}
                placeholder="نص الرسالة أو الاستفسار"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2E2145] px-7 py-3.5 text-sm font-medium text-[#F9EDF2] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_40px_-12px_rgba(78,104,184,0.5)]"
              >
                <Send className="h-4 w-4" />
                إرسال الاستفسار إلى سفر المعالم
              </button>
              <p className="text-center text-xs text-[#8A7599]">
                سيصل استفسارك مباشرة إلى فريق خدمة العملاء عبر واتساب
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
