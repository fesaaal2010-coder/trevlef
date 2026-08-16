import { Castle, Landmark, Mountain, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { useParallax } from './useParallax'
import { Overline, SectionTitle, TopFade, WhatsAppButton, PHONE_DISPLAY, PHONE_LINK } from './shared'

const HIGHLIGHTS = [
  {
    icon: Mountain,
    tag: 'طبيعة ومغامرة',
    title: 'سلسلة جبال أجا وسلمى',
    desc: 'تضاريس صحراوية وجبلية ساحرة تنبض بالقصص والكرم العربي، ومكان مثالي للتخييم والجولات الاستكشافية.',
  },
  {
    icon: Landmark,
    tag: 'تراث يونسكو',
    title: 'نقوش جبة والشويمس',
    desc: 'أحد أكبر مواقع الفنون الصخرية في العالم، يضم نقوشًا يعود تاريخها لأكثر من 10,000 عام.',
  },
  {
    icon: Castle,
    tag: 'معالم تاريخية',
    title: 'قلعة عيرف وقصر القشلة',
    desc: 'معالم طينية شامخة تتوسط قلب حائل وتطل على المدينة لتروي سيرة تاريخ المنطقة العريق.',
  },
]

const DESTINATIONS = ['حائل', 'الرياض', 'العلا', 'أبها', 'البحر الأحمر', 'وجهات عالمية']

export default function Hail() {
  const { ref, offset } = useParallax(70)

  return (
    <section id="hail" ref={ref} className="relative overflow-hidden py-32 sm:py-40">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop"
          alt="جبال تحت سماء مرصعة بالنجوم"
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ transform: `translateY(${offset}px) scale(1.18)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/45 to-black" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 60% at 50% 45%, transparent 0%, rgba(0,0,0,0.55) 100%)',
          }}
        />
      </div>
      <TopFade from="#F9EDF2" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <Overline>وجهتنا الخاصة — عروس الشمال</Overline>
          <SectionTitle className="mx-auto mt-6 max-w-3xl">
            حائلُ والأرضُ والمستقبل
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl leading-loose text-white/70">
            برامج سياحية متخصصة لاستكشاف عروس الشمال «حائل» — بدءًا من نقوش اليونسكو
            التاريخية، مرورًا بقلاعها الطينية الشامخة، وصولًا إلى التخييم ومغامرات
            جبال أجا وسلمى، مع إرشادٍ وإقامةٍ ونقلٍ متكاملة.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
          {HIGHLIGHTS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 130}
              className={index === 1 ? 'lg:translate-y-10' : ''}
            >
              <div className="liquid-glass group h-full rounded-3xl p-7 text-start transition-transform duration-500 hover:-translate-y-2 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full">
                    <item.icon className="h-5 w-5 text-[#F0A0B3]/90" />
                  </div>
                  <span className="rounded-full border border-white/15 px-3.5 py-1 text-[11px] text-white/60">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-display-ar mt-6 text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-loose text-white/65">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-20">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-white/40 sm:text-sm">وجهاتنا:</span>
            {DESTINATIONS.map((destination) => (
              <span
                key={destination}
                className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/75 transition-colors duration-300 hover:text-white sm:text-sm"
              >
                {destination}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-10">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton
              label="احجز برنامج حائل السياحي"
              message="أرغب بحجز برنامج حائل السياحي واستكشاف المعالم التراثية والطبيعية."
            />
            <a
              href={PHONE_LINK}
              className="liquid-glass inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-sm text-white/85 transition-colors duration-300 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr" className="tabular-nums">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
