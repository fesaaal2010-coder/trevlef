import Reveal from './Reveal'
import { Overline, SectionTitle, TopFade } from './shared'

const FEATURES = [
  {
    num: '01',
    title: 'تجربة سياحية مخصصة لكل مسافر',
    desc: 'صمّم رحلتك وفق اهتماماتك وميزانيتك ومدتك، بدلًا من برامج موحدة — مع اقتراح الوجهات والأنشطة والإقامة الأنسب لك.',
  },
  {
    num: '02',
    title: 'اكتشاف الوجهات بطريقة مختلفة',
    desc: 'تجارب تركز على اكتشاف المعالم والقصص والثقافة المحلية، لا مجرد زيارة المكان — لتعيش تجربة تجمع بين المعرفة والاستكشاف والترفيه.',
  },
  {
    num: '03',
    title: 'باقات سياحية متكاملة',
    desc: 'حجز الطيران والإقامة والتنقل والبرامج والأنشطة في رحلة واحدة، توفر عليك الوقت والجهد وتجعل التخطيط أسهل.',
  },
  {
    num: '04',
    title: 'دعم ومتابعة مستمرة 24/7',
    desc: 'نرافقك من لحظة التخطيط وحتى عودتك بسلامة، مع فريق دعم فوري جاهز للإجابة وتذليل أي صعوبات أثناء السفر.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-[#F9EDF2] py-28 text-[#2E2145] sm:py-36">
      <TopFade from="#1E1433" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 35% at 50% 100%, rgba(240,160,179,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <Overline light>لماذا سفر المعالم؟</Overline>
          <SectionTitle light className="mx-auto mt-6 max-w-3xl">
            وعدُنا لكل مسافر
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl leading-loose text-[#7A6391]">
            نبتكر في تقديم الخدمات السياحية لنضمن لكل مسافر رحلة فريدة تجمع بين
            الراحة والجودة والقيمة المضافة.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#2E2145]/10 bg-[#2E2145]/10 sm:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.num} delay={index * 110} className="h-full">
              <div className="group relative h-full overflow-hidden bg-[#FDF5F8] p-8 transition-colors duration-500 hover:bg-[#F5E4EE] sm:p-12">
                <span className="font-display-ar pointer-events-none absolute -top-3 end-6 text-8xl text-[#2E2145]/5 transition-colors duration-500 group-hover:text-[#6C4F7D]/15 sm:text-9xl">
                  {feature.num}
                </span>
                <div className="relative">
                  <span className="text-xs text-[#6C4F7D]">جودة وموثوقية</span>
                  <h3 className="font-display-ar mt-4 max-w-xs text-2xl leading-snug text-[#2E2145] sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-loose text-[#7A6391]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
