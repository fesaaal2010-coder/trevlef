import About from './About'
import Contact from './Contact'
import Designer from './Designer'
import Faq from './Faq'
import Footer from './Footer'
import Hail from './Hail'
import Packages from './Packages'
import Services from './Services'
import Testimonials from './Testimonials'
import WhyUs from './WhyUs'

export default function SiteSections() {
  return (
    <div dir="rtl" className="font-body-ar relative overflow-x-clip bg-[#130C24] text-white">
      <About />
      <Hail />
      <Services />
      <WhyUs />
      <Packages />
      <Designer />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}
