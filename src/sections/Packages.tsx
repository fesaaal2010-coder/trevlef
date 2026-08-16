import { ArrowUpLeft } from 'lucide-react'
import Reveal from './Reveal'
import { Overline, SectionTitle, TopFade, wa } from './shared'

const PACKAGES = [
  {
    title: 'باقات شهر العسل',
    desc: 'رحلات رومانسية فاخرة في أجمل الوجهات، بلمسات خاصة واستقبال مميز.',
    tag: 'للاثنين',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop',
    span: 'md:col-span-7',
    height: 'h-[380px] md:h-[460px]',
  },
  {
    title: 'باقات العائلات',
    desc: 'برامج آمنة وممتعة تراعي كبار السن والأطفال وترضي الجميع.',
    tag: 'عائلية',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop',
    span: 'md:col-span-5',
    height: 'h-[380px] md:h-[460px]',
  },
  {
    title: 'باقات الأفراد',
    desc: 'حرية الاستكشاف التامة مع ضمان الأمان والمساندة في كل خطوة.',
    tag: 'مغامرة',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    span: 'md:col-span-4',
    height: 'h-[320px]',
  },
  {
    title: 'باقات المجموعات',
    desc: 'رحلات جماعية تفاعلية بأسعار تشجيعية وجداول مليئة بالمغامرة.',
    tag: 'جماعية',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop',
    span: 'md:col-span-4',
    height: 'h-[320px]',
  },
  {
    title: 'رحلات الشركات والجهات الحكومية',
    desc: 'تنظيم رحلات العمل والوفود الرسمية وحوافز الموظفين باحترافية.',
    tag: 'أعمال',
    img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000&auto=format&fit=crop',
    span: 'md:col-span-4',
    height: 'h-[320px]',
  },
  {
    title: 'الرحلات المدرسية والجامعية',
    desc: 'رحلات تعليمية وتثقيفية آمنة للطلاب والوفود الأكاديمية، تحت إشراف متخصصين لتعزيز المعرفة بالمعالم الوطنية.',
    tag: 'تعليمية',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop',
    span: 'md:col-span-12',
    height: 'h-[300px]',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative bg-[#1E1433] py-28 sm:py-36">
      <TopFade from="#F9EDF2" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <Overline>باقات السفر</Overline>
          <SectionTitle className="mx-auto mt-6 max-w-3xl">
            لكل قصةِ سفرٍ باقة
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl leading-loose text-white/60">
            برامج مصممة لكل فئة من المسافرين — من العرائس الجدد إلى الوفود الرسمية،
            ومن المغامر الفردي إلى العائلة الكاملة.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-12">
          {PACKAGES.map((pkg, index) => (
            <Reveal key={pkg.title} delay={(index % 3) * 110} className={pkg.span}>
              <a
                href={wa(`أرغب بالاستفسار عن: ${pkg.title}`)}
                target="_blank"
                rel="noreferrer"
                className={`group relative block w-full overflow-hidden rounded-3xl border border-white/10 ${pkg.height}`}
              >
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500" />
                <span className="liquid-glass absolute start-5 top-5 rounded-full px-3.5 py-1.5 text-[11px] text-white/80">
                  {pkg.tag}
                </span>
                <span className="liquid-glass absolute end-5 top-5 flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpLeft className="h-4 w-4 text-white" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7 text-start">
                  <h3 className="font-display-ar text-2xl text-white sm:text-3xl">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                    {pkg.desc}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
