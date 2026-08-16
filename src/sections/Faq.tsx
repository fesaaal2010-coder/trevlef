import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'
import { Overline, SectionTitle, TopFade } from './shared'

const FAQS = [
  {
    q: 'هل يمكنني تصميم برنامجي السياحي بالكامل؟',
    a: 'نعم، جميع برامجنا مخصصة 100%. تحدّد الوجهة ونوع الرحلة وعدد المسافرين والمدة ونمط الإقامة والخدمات المطلوبة، ويصوغ مستشارونا برنامجًا يطابق تطلعاتك مع عرض سعر تنافسي.',
  },
  {
    q: 'هل تساعدون في إصدار التأشيرات السياحية؟',
    a: 'نعم، نوفر مساعدة كاملة في تجهيز مستندات التأشيرات السياحية لمختلف الدول والوجهات، لضمان قبول سريع ودون أي تعقيدات.',
  },
  {
    q: 'هل تشمل الباقات الطيران والفنادق والنقل؟',
    a: 'باقاتنا متكاملة: حجز تذاكر الطيران المحلية والدولية، الإقامة بمختلف الفئات، وسائل النقل الحديثة مع سائقين محترفين، بالإضافة إلى الأنشطة والجولات مع مرشدين مرخصين.',
  },
  {
    q: 'هل تقتصر رحلاتكم على حائل؟',
    a: 'حائل هي وجهتنا الخاصة بجبال أجا وسلمى ونقوش جبة والشويمس، لكن برامجنا تمتد إلى رحلات داخلية (الرياض، العلا، أبها، البحر الأحمر) ووجهات عالمية حول العالم.',
  },
  {
    q: 'هل يوجد دعم أثناء الرحلة؟',
    a: 'نعم، فريق دعم متواجد على مدار الساعة طوال أيام الأسبوع — نرافقك من لحظة التخطيط وحتى عودتك بسلامة، مع مساعدة فورية لأي طارئ.',
  },
  {
    q: 'كيف أحجز، وما آلية التعديل أو الإلغاء؟',
    a: 'الحجز عبر الواتساب أو نموذج التواصل، وسيتواصل معك مستشار سفر فورًا. نساعدك في إجراء التعديلات والإلغاءات وفق سياسات مزودي الخدمة، مع دعم كامل قبل وأثناء السفر.',
  },
]

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-[#1E1433] py-28 sm:py-36">
      <TopFade from="#F9EDF2" />
      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <Overline>الأسئلة الشائعة</Overline>
          <SectionTitle className="mx-auto mt-6 text-3xl sm:text-4xl md:text-5xl">
            كل ما يدور في ذهنك
          </SectionTitle>
        </Reveal>

        <div className="mt-14 space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openId === index
            return (
              <Reveal key={faq.q} delay={index * 80}>
                <div className="liquid-glass rounded-2xl">
                  <button
                    onClick={() => setOpenId(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-start sm:px-8"
                  >
                    <span
                      className={`text-base font-medium transition-colors duration-300 sm:text-lg ${
                        isOpen ? 'text-white' : 'text-white/75'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-white/40 transition-transform duration-500 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div className={`accordion-answer ${isOpen ? 'open' : ''}`}>
                    <div>
                      <p className="px-6 pb-6 text-sm leading-loose text-white/60 sm:px-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
