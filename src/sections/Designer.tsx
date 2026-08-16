import Reveal from './Reveal'
import { Overline, SectionTitle, WhatsAppButton } from './shared'

const STEPS = [
  {
    label: 'اختر الوجهة السياحية',
    options: 'حائل • الرياض • العلا • أبها • البحر الأحمر • وجهات عالمية',
  },
  {
    label: 'نوع الرحلة',
    options: 'عائلية • شهر عسل • أفراد ومغامرة • مجموعات • أعمال MICE • تعليمية',
  },
  {
    label: 'عدد المسافرين',
    options: 'مفرد • زوجان • عائلة • مجموعة كبيرة',
  },
  {
    label: 'مدة الرحلة',
    options: 'ويكند قصير • 4–7 أيام • 8–14 يوم • أكثر من أسبوعين',
  },
  {
    label: 'نمط الإقامة',
    options: 'منتجعات 5 نجوم • فنادق 4 نجوم • شقق اقتصادية • مخيمات تراثية',
  },
  {
    label: 'الخدمات المطلوبة',
    options: 'طيران • فنادق • نقل • مرشد محلي • أنشطة • تأشيرات • تأمين سفر',
  },
]

export default function Designer() {
  return (
    <section id="designer" className="relative overflow-hidden bg-[#1E1433] py-28 sm:py-36">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1800&auto=format&fit=crop"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1433] via-[#1E1433]/70 to-[#1E1433]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="liquid-glass rounded-[2.5rem] p-8 sm:p-12 md:p-16">
            <div className="text-center">
              <Overline>صمم رحلتك بنفسك</Overline>
              <SectionTitle className="mx-auto mt-6 max-w-2xl text-3xl sm:text-4xl md:text-5xl">
                برنامجك السياحي، على مقاسك وميزانيتك
              </SectionTitle>
              <p className="mx-auto mt-6 max-w-xl leading-loose text-white/60">
                حدّد تفاصيل سفرك بسهولة، وسيصوغ فريق سفر المعالم أفضل برنامج مخصص
                يطابق تطلعاتك — مع عرض سعر تنافسي.
              </p>
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {STEPS.map((step, index) => (
                <div key={step.label} className="flex items-start gap-4 text-start">
                  <span className="font-display-ar mt-0.5 w-8 shrink-0 text-2xl text-[#F0A0B3]/70 tabular-nums">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-medium text-white">{step.label}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/50 sm:text-sm">
                      {step.options}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-white/10 pt-10 text-center">
              <WhatsAppButton
                label="أرسل التفاصيل — نصممها لك مجانًا"
                message="أرغب بتصميم برنامج سياحي مخصص حسب رغبتي وميزانيتي."
              />
              <p className="mt-4 text-xs text-white/40">
                سيتواصل معك فورًا أحد مستشاري السفر لدى سفر المعالم
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
