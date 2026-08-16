import { Eye, Landmark, Lightbulb, ShieldCheck, Sparkles, Target } from 'lucide-react'
import Reveal from './Reveal'
import { useParallax } from './useParallax'
import { Overline, SectionTitle, TopFade } from './shared'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'الاحترافية والموثوقية',
    desc: 'خدمات سياحية موثوقة بمعايير جودة عالية تضمن راحة المسافر في جميع الخطوات.',
  },
  {
    icon: Lightbulb,
    title: 'الابتكار والحلول المتكاملة',
    desc: 'تصميم برامج سياحية مبتكرة وحلول مرنة تلبي التطلعات المختلفة للعملاء.',
  },
  {
    icon: Sparkles,
    title: 'جودة الخدمة وتجربة ملهمة',
    desc: 'نترك أثرًا جميلًا وذكريات فريدة عبر خدمة عملاء متميزة ودعم شخصي طوال الرحلة.',
  },
  {
    icon: Landmark,
    title: 'إبراز المعالم ورؤية 2030',
    desc: 'إبراز المقومات السياحية والثقافية والتاريخية العريقة داخل المملكة وخارجها.',
  },
]

export default function About() {
  const { ref, offset } = useParallax(28)

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-[#F9EDF2] py-28 text-[#2E2145] sm:py-36"
    >
      <TopFade from="#130C24" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 0%, rgba(240,160,179,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <Overline light>من نحن — سياحة أصيلة 2026</Overline>
          <SectionTitle light className="mx-auto mt-6 max-w-4xl">
            صناعةُ تجاربَ سفرٍ مُلهمة تترك{' '}
            <span className="bg-gradient-to-l from-[#4E68B8] via-[#F0A0B3] to-[#6C4F7D] bg-clip-text text-transparent">
              أثرًا جميلًا
            </span>{' '}
            في ذاكرة كل مسافر
          </SectionTitle>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={100}>
            <h3 className="font-display-ar text-2xl text-[#2E2145] sm:text-3xl">
              سفر المعالم للسياحة
            </h3>
            <p className="mt-2 text-sm text-[#6C4F7D]">
              رحلات سياحية لزيارة المعالم التاريخية والأثرية
            </p>
            <p className="mt-6 leading-loose text-[#7A6391]">
              سفر المعالم للسياحة مشروعٌ سياحي سعودي يهدف إلى تقديم تجارب سفر استثنائية
              تجمع بين الاحترافية والابتكار وجودة الخدمة، مع التركيز على إبراز المقومات
              السياحية والثقافية داخل المملكة العربية السعودية وخارجها.
            </p>
            <p className="mt-4 leading-loose text-[#7A6391]">
              نقدم حلولًا متكاملة في مجال السياحة والسفر: تنظيم الرحلات، حجوزات الطيران
              والفنادق، البرامج الداخلية والخارجية، والرحلات الجماعية والفردية — إلى جانب
              تصميم برامج مخصصة تناسب احتياجات كل عميل، دعمًا لمستهدفات رؤية المملكة 2030.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#8A7599] sm:text-sm">
              <span>100% برامج مخصصة بالكامل</span>
              <span className="hidden text-[#2E2145]/25 sm:inline">|</span>
              <span>24/7 دعم ومتابعة مستمرة</span>
              <span className="hidden text-[#2E2145]/25 sm:inline">|</span>
              <span>18 خدمة سياحية متكاملة</span>
            </div>
          </Reveal>

          <Reveal delay={200} className="mb-12 lg:mb-0">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-[#2E2145]/10 shadow-[0_40px_80px_-40px_rgba(46,33,69,0.35)]">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop"
                  alt="طبيعة ساحرة"
                  loading="lazy"
                  className="h-[380px] w-full object-cover sm:h-[440px]"
                />
              </div>
              <div
                className="absolute -bottom-10 -start-2 w-40 overflow-hidden rounded-2xl border border-white/40 shadow-2xl sm:-start-8 sm:w-52"
                style={{ transform: `translateY(${offset}px)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop"
                  alt="بحيرة جبلية"
                  loading="lazy"
                  className="h-52 w-full object-cover sm:h-64"
                />
              </div>
              <div className="liquid-glass absolute bottom-5 end-5 rounded-full px-5 py-2.5 text-xs text-white/90 sm:text-sm">
                حائل • كافة أنحاء المملكة • العالم
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-5 sm:grid-cols-2">
          {[
            {
              icon: Target,
              title: 'رسالتنا',
              text: 'صناعة تجارب سفر ملهمة تترك أثرًا جميلًا في ذاكرة كل مسافر.',
            },
            {
              icon: Eye,
              title: 'رؤيتنا',
              text: 'أن نكون من أبرز العلامات السعودية الرائدة في قطاع السياحة والسفر، المعروفة بالابتكار والموثوقية والتميز في تقديم الخدمات السياحية.',
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="card-light group h-full rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5 sm:p-10">
                <div className="liquid-glass-light flex h-12 w-12 items-center justify-center rounded-full">
                  <item.icon className="h-5 w-5 text-[#6C4F7D]" />
                </div>
                <h3 className="font-display-ar mt-6 text-2xl text-[#2E2145] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-loose text-[#7A6391]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={index * 100}>
              <div className="border-t border-[#2E2145]/15 pt-6">
                <value.icon className="h-5 w-5 text-[#6C4F7D]" />
                <h4 className="mt-4 font-medium text-[#2E2145]">{value.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#7A6391]">{value.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
