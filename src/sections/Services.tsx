import { useState } from 'react'
import {
  ArrowUpLeft,
  Briefcase,
  Car,
  Compass,
  FileCheck,
  Globe,
  GraduationCap,
  Headphones,
  Heart,
  Map,
  Plane,
  PlaneLanding,
  Plus,
  Presentation,
  ShieldCheck,
  SlidersHorizontal,
  Ticket,
  User,
  Users,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import Reveal from './Reveal'
import { Overline, SectionTitle, TopFade, wa } from './shared'

type Service = {
  icon: LucideIcon
  title: string
  desc: string
}

const SERVICES: Service[] = [
  {
    icon: Plane,
    title: 'حجز الفنادق والشقق الفندقية والطيران',
    desc: 'تذاكر طيران محلية ودولية وإقامة بأسعار تنافسية، مع اختيار أفضل الرحلات وفق ميزانيتك ومواعيدك، وإجراء التعديلات والإلغاءات والدعم قبل وأثناء السفر.',
  },
  {
    icon: Map,
    title: 'تنظيم الرحلات الداخلية',
    desc: 'برامج سياحية متكاملة داخل المملكة تشمل تخطيط الرحلة والإقامة والنقل والأنشطة وزيارة أبرز المعالم الطبيعية والتراثية.',
  },
  {
    icon: Globe,
    title: 'تنظيم الرحلات الخارجية',
    desc: 'برامج متكاملة إلى أبرز الوجهات العالمية: تخطيط الرحلة، حجوزات الطيران والإقامة، التنقلات والجولات — بما يناسب ميزانيتك.',
  },
  {
    icon: Heart,
    title: 'باقات شهر العسل',
    desc: 'رحلات رومانسية فاخرة للمتزوجين الجدد في أجمل الوجهات العالمية والمحلية، مع لمسات خاصة واستقبال مميز.',
  },
  {
    icon: Users,
    title: 'باقات العائلات',
    desc: 'برامج عائلية ممتعة وآمنة تراعي كبار السن والأطفال، وتوفر أنشطة ترفيهية وإقامة مريحة لجميع أفراد الأسرة.',
  },
  {
    icon: User,
    title: 'باقات الأفراد',
    desc: 'رحلات مرنة ومستقلة للمسافر الفردي الراغب في الاستكشاف والحرية، مع ضمان الأمان والمساعدة في جميع الخطوات.',
  },
  {
    icon: UsersRound,
    title: 'باقات المجموعات',
    desc: 'رحلات جماعية تفاعلية للأصدقاء والأقارب بأسعار تشجيعية وجداول ممتعة تجمع بين الترفيه والمغامرة.',
  },
  {
    icon: GraduationCap,
    title: 'الرحلات المدرسية والجامعية',
    desc: 'رحلات تعليمية وتثقيفية ممتعة وآمنة للطلاب والوفود الأكاديمية، تحت إشراف متخصصين لتعزيز المعرفة بالمعالم الوطنية.',
  },
  {
    icon: Briefcase,
    title: 'رحلات الشركات والجهات الحكومية',
    desc: 'تنظيم رحلات العمل والوفود الرسمية وحوافز الموظفين بكفاءة عالية واحترافية تلائم متطلبات قطاع الأعمال.',
  },
  {
    icon: Car,
    title: 'حجوزات النقل وتأجير السيارات',
    desc: 'وسائل نقل حديثة ومريحة مع سائقين محترفين، وتأجير سيارات بمختلف الفئات لتنقل سلس طوال مدة الرحلة.',
  },
  {
    icon: PlaneLanding,
    title: 'استقبال وتوديع المسافرين في المطارات',
    desc: 'خدمة استقبال وتوديع خاصة وسلسة في المطارات للعملاء والوفود، تضمن الوصول إلى مقر الإقامة بكل يسر.',
  },
  {
    icon: FileCheck,
    title: 'إصدار التأشيرات السياحية',
    desc: 'مساعدة كاملة وتجهيز مستندات التأشيرات السياحية لمختلف الدول والوجهات، لضمان قبول سريع دون تعقيدات.',
  },
  {
    icon: SlidersHorizontal,
    title: 'برامج سياحية مخصصة حسب رغبتك',
    desc: 'صمّم رحلتك بالكامل من الصفر وفق ميزانيتك ومدة إقامتك والأنشطة التي تفضلها، بصحبة مستشارينا.',
  },
  {
    icon: Compass,
    title: 'جولات سياحية مع مرشدين مرخصين',
    desc: 'رافق مرشدين محليين متميزين يقدمون سردًا تاريخيًا وثقافيًا غنيًا يُحيي القصص الكامنة خلف المعالم.',
  },
  {
    icon: Ticket,
    title: 'حجز الأنشطة والتجارب السياحية',
    desc: 'حجز مسبق للرحلات الاستكشافية والمغامرات ورحلات السفاري الصحراوية والأنشطة الترفيهية والمهرجانات.',
  },
  {
    icon: Presentation,
    title: 'الفعاليات والمؤتمرات والرحلات التحفيزية (MICE)',
    desc: 'حلول متكاملة لإدارة المؤتمرات والمعارض والرحلات التحفيزية للمؤسسات والشركات بأعلى المعايير.',
  },
  {
    icon: ShieldCheck,
    title: 'التأمين على السفر',
    desc: 'تغطيات تأمينية شاملة للطوارئ الصحية وإلغاء الرحلات وفقدان الأمتعة، لتبدأ رحلتك ببالٍ مطمئن.',
  },
  {
    icon: Headphones,
    title: 'دعم العملاء أثناء الرحلة 24/7',
    desc: 'فريق دعم متواجد على مدار الساعة طوال أيام الأسبوع للرد على الاستفسارات ومتابعتك وإتاحة المساعدة الفورية.',
  },
]

export default function Services() {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <section id="services" className="relative bg-[#1E1433] py-28 sm:py-36">
      <TopFade from="#130C24" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="text-start">
              <Overline>حلول سياحية متكاملة</Overline>
              <SectionTitle className="mt-6 text-start text-3xl sm:text-4xl md:text-5xl">
                كل ما تحتاجه رحلتك، تحت سقفٍ واحد
              </SectionTitle>
              <p className="mt-6 leading-loose text-white/60">
                ثمانية عشر خدمة مصممة لتوفير رحلة سلسة ومريحة ومتكاملة — من أول فكرة
                السفر حتى العودة إلى أرض الوطن. تصفّح الفهرس واطلب خدمتك مباشرة.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/75">
                  18 خدمة متكاملة
                </span>
                <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/75">
                  رد فوري خلال 24 ساعة
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            {SERVICES.map((service, index) => {
              const isOpen = openId === index
              return (
                <Reveal key={service.title} delay={Math.min(index, 6) * 60}>
                  <div className="border-b border-white/8">
                    <button
                      onClick={() => setOpenId(isOpen ? null : index)}
                      className="group grid w-full grid-cols-[auto_auto_1fr_auto] items-center gap-4 py-5 text-start"
                    >
                      <span className="w-8 font-display-ar text-sm text-[#F0A0B3]/40 tabular-nums transition-colors duration-300 group-hover:text-[#F0A0B3]/80">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full">
                        <service.icon className="h-4 w-4 text-white/70" />
                      </span>
                      <span
                        className={`text-base font-medium transition-colors duration-300 sm:text-lg ${
                          isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </span>
                      <Plus
                        className={`h-4 w-4 text-white/40 transition-transform duration-500 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      />
                    </button>
                    <div className={`accordion-answer ${isOpen ? 'open' : ''}`}>
                      <div>
                        <div className="pb-6 ps-12 pe-2 sm:ps-[4.5rem]">
                          <p className="text-sm leading-loose text-white/60">
                            {service.desc}
                          </p>
                          <a
                            href={wa(`أرغب بطلب خدمة: ${service.title}`)}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#F0A0B3]/85 transition-colors duration-300 hover:text-[#F0A0B3]"
                          >
                            طلب هذه الخدمة
                            <ArrowUpLeft className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
