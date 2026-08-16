import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowUpLeft, Headphones, Send, X } from 'lucide-react'
import { wa } from './shared'

type Message = { from: 'bot' | 'user'; text: string }

const WELCOME =
  'أهلًا بك في سفر المعالم ✦ أنا كونسيرج السفر الخاص بك، جاهز لخدمتك على مدار الساعة. كيف أقدر أساعدك اليوم؟'

const QUICK_CHIPS = [
  'أريد تصميم برنامج سياحي',
  'ما هي الأسعار؟',
  'برامج حائل',
  'التأشيرات السياحية',
]

const BOT_RULES: { keys: string[]; reply: string }[] = [
  {
    keys: ['سعر', 'أسعار', 'تكلفة', 'كم', 'الأسعار'],
    reply:
      'أسعارنا تعتمد على تفاصيل رحلتك — الوجهة والمدة وعدد المسافرين ونمط الإقامة. صمّم برنامجك من قسم «صمم رحلتك» أو أكمل عبر واتساب وسيصلك عرض سعر تنافسي فورًا.',
  },
  {
    keys: ['حائل', 'أجا', 'سلمى', 'جبة', 'الشويمس'],
    reply:
      'حائل وجهتنا الخاصة! برامجنا تشمل جبال أجا وسلمى، ونقوش جبة والشويمس المسجلة في اليونسكو، وقلعة عيرف وقصر القشلة — مع إرشاد وإقامة ونقل متكامل.',
  },
  {
    keys: ['تأشيرة', 'تأشيرات', 'فيزا', 'فيز'],
    reply:
      'نساعدك في تجهيز مستندات التأشيرات السياحية لمختلف الدول والوجهات، لضمان قبول سريع ودون أي تعقيدات.',
  },
  {
    keys: ['حجز', 'برنامج', 'رحلة', 'باقة', 'شهر', 'عسل', 'عائل'],
    reply:
      'ممتاز! جميع برامجنا مخصصة 100% حسب ميزانيتك ومدتك واهتماماتك — أرسل لنا التفاصيل وسيصوغ مستشارونا برنامجك المثالي.',
  },
]

const DEFAULT_REPLY =
  'شكرًا لتواصلك مع سفر المعالم ✦ فريق الكونسيرج جاهز لخدمتك على مدار الساعة. للرد الفوري أكمل المحادثة عبر واتساب وسيتولى أحد مستشارينا طلبك شخصيًا.'

function matchReply(text: string) {
  const rule = BOT_RULES.find((r) => r.keys.some((k) => text.includes(k)))
  return rule ? rule.reply : DEFAULT_REPLY
}

export default function SupportChat() {
  const [open, setOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open || messages.length > 0) return
    setIsTyping(true)
    const id = setTimeout(() => {
      setMessages([{ from: 'bot', text: WELCOME }])
      setIsTyping(false)
    }, 900)
    return () => clearTimeout(id)
  }, [open, messages.length])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping, open])

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return
    setMessages((prev) => [...prev, { from: 'user', text: trimmed }])
    setInput('')
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: matchReply(trimmed) }])
      setIsTyping(false)
    }, 1200)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    send(input)
  }

  const lastUserMessage = [...messages].reverse().find((m) => m.from === 'user')?.text

  return (
    <>
      {/* Chat panel */}
      <div
        dir="rtl"
        className={`fixed bottom-24 left-4 z-40 w-[calc(100vw-2rem)] max-w-[380px] origin-bottom-left transition-all duration-500 sm:bottom-26 sm:left-8 ${
          open
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-6 scale-90 opacity-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
      >
        <div
          className="liquid-glass flex h-[540px] max-h-[72vh] flex-col overflow-hidden rounded-[1.75rem]"
          style={{ background: 'rgba(30, 20, 51, 0.55)' }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 p-4">
            <div className="relative">
              <div className="liquid-glass flex h-11 w-11 items-center justify-center rounded-full">
                <Headphones className="h-5 w-5 text-[#F0A0B3]" />
              </div>
              <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 animate-pulse rounded-full border-2 border-[#1E1433] bg-emerald-400" />
            </div>
            <div className="text-start">
              <p className="font-display-ar text-lg leading-tight text-white">
                كونسيرج سفر المعالم
              </p>
              <p className="mt-0.5 text-[11px] text-white/50">
                متصل الآن • يرد خلال دقائق
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="إغلاق المحادثة"
              className="ms-auto flex h-8 w-8 items-center justify-center rounded-full text-white/50 transition-colors duration-300 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                    message.from === 'user'
                      ? 'rounded-2xl rounded-tl-md bg-gradient-to-l from-[#4E68B8] to-[#6C4F7D] text-white'
                      : 'liquid-glass rounded-2xl rounded-tr-md text-white/85'
                  }`}
                >
                  {message.text}
                  {message.from === 'bot' && (
                    <a
                      href={wa(lastUserMessage ? `متابعة استفساري: ${lastUserMessage}` : 'مرحبًا، أرغب بالاستفسار عن خدماتكم.')}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 flex items-center gap-1 text-[11px] text-[#F0A0B3] transition-colors duration-300 hover:text-white"
                    >
                      متابعة فورية عبر واتساب
                      <ArrowUpLeft className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="liquid-glass flex items-center gap-1.5 rounded-2xl rounded-tr-md px-4 py-3.5">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#F0A0B3]"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick chips */}
          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {QUICK_CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => send(chip)}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-white/70 transition-all duration-300 hover:border-[#F0A0B3]/40 hover:bg-white/10 hover:text-white"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/35 focus:border-[#F0A0B3]/40"
            />
            <button
              type="submit"
              aria-label="إرسال"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-l from-[#4E68B8] to-[#6C4F7D] text-white transition-transform duration-300 hover:scale-110"
            >
              <Send className="h-4 w-4 -scale-x-100" />
            </button>
          </form>
        </div>
      </div>

      {/* Floating button */}
      <div className="fixed bottom-6 left-6 z-40 sm:bottom-8 sm:left-8">
        <button
          onClick={() => {
            setOpen((o) => !o)
            setHasOpened(true)
          }}
          aria-label="الدعم والتواصل"
          className="liquid-glass group relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_32px_rgba(240,160,179,0.45)]"
          style={{ background: 'rgba(30, 20, 51, 0.35)' }}
        >
          {!hasOpened && !open && (
            <span className="absolute -top-0.5 -end-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F0A0B3] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#F0A0B3]" />
            </span>
          )}
          <span className="relative h-5 w-5">
            <Headphones
              className={`absolute inset-0 h-5 w-5 text-[#F0A0B3] transition-all duration-300 group-hover:text-white ${
                open ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              className={`absolute inset-0 h-5 w-5 text-[#F0A0B3] transition-all duration-300 group-hover:text-white ${
                open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-75 opacity-0'
              }`}
            />
          </span>
        </button>
      </div>
    </>
  )
}
