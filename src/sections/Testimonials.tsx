import { useEffect, useState } from 'react'
import { Quote, Star } from 'lucide-react'
import Reveal from './Reveal'
import { Overline, TopFade } from './shared'

const TESTIMONIALS = [
  {
    quote:
      'من لحظة التخطيط حتى عودتنا، كان كل شيء منظمًا بدقة متناهية. رحلتنا إلى حائل مع الأطفال تجربة لن تُنسى — النقوش والجبال وحسن الاستقبال فاقت كل توقعاتنا.',
    name: 'أبو فهد',
    role: 'رحلة عائلية — الرياض',
  },
  {
    quote:
      'صمّموا لنا شهر عسلٍ فاق كل ما حلمنا به؛ كل التفاصيل الصغيرة كانت مدروسة بعناية فائقة. شكرًا سفر المعالم على ذكريات ستبقى معنا للأبد.',
    name: 'عبدالله ونورة',
    role: 'باقة شهر العسل',
  },
  {
    quote:
      'تعاملنا معهم في تنظيم رحلة تحفيزية لموظفي الشركة؛ احترافية عالية والتزام كامل بالمواعيد والميزانية المحددة من البداية للنهاية.',
    name: 'م. خالد العتيبي',
    role: 'رحلة شركات',
  },
  {
    quote:
      'سافرت وحدي لأول مرة عبر سفر المعالم، ودعمهم على مدار الساعة منحني شعورًا بالأمان طوال الرحلة. تجربة سأكررها بالتأكيد.',
    name: 'سارة القحطاني',
    role: 'باقة أفراد — جورجيا',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="testimonials"
      className="relative bg-[#F9EDF2] py-28 text-[#2E2145] sm:py-36"
    >
      <TopFade from="#1E1433" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Overline light>آراء المسافرين</Overline>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="grid">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={item.name}
                style={{ gridArea: '1 / 1' }}
                className={`flex flex-col items-center transition-all duration-1000 ease-in-out ${
                  index === active
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-4 opacity-0'
                }`}
              >
                <Quote className="h-8 w-8 text-[#6C4F7D]/40" />
                <blockquote className="font-display-ar mt-8 text-2xl leading-[1.9] text-[#2E2145]/90 sm:text-3xl sm:leading-[1.9]">
                  «{item.quote}»
                </blockquote>
                <div className="mt-8 flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-[#D87A96] text-[#D87A96]"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm font-medium text-[#2E2145]">{item.name}</p>
                <p className="mt-1 text-xs text-[#8A7599]">{item.role}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex items-center justify-center gap-2.5">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                aria-label={`الشهادة ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === active
                    ? 'w-8 bg-[#2E2145]'
                    : 'w-1.5 bg-[#2E2145]/25 hover:bg-[#2E2145]/40'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
