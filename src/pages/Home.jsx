import React,{lazy,Suspense} from 'react'
import NavBar from "../components/NavBar"
import CheckPage from '../components/custom/CheckPage'
import Loader from '../components/custom/Loader'
const LandingSection = lazy(()=>import('../Sections/LandingSection'))
const AboutSection = lazy(()=>import('../Sections/AboutSection'))
const ServicesSection = lazy(()=>import('../Sections/ServicesSection'))
const ContactSection = lazy(()=>import('../Sections/ContactSection'))
const WhyChooseUs = lazy(()=>import('../Sections/WhyChooseUs'))
const BookService = lazy(()=>import('../Sections/BookService'))
const Footer = lazy(()=>import('../components/Footer'))

const LandingWith404 = CheckPage(LandingSection)
const AboutWith404 = CheckPage(AboutSection)
const ServicesWith404 = CheckPage(ServicesSection)
const ContactWith404 = CheckPage(ContactSection)
const WhyChooseUsWith404 = CheckPage(WhyChooseUs)
const BookServiceWith404 = CheckPage(BookService)
const FooterWith404 = CheckPage(Footer)

// className='bg-gradient-to-br from-yellow-50 to-gray-300 '
const Home = () => {
  return (
    <section className='w-full bg-gradient-to-br'>
      <NavBar />

      <Suspense fallback={<Loader />} >  
        <LandingWith404 />
        <AboutWith404 />
        <ServicesWith404 />
        <ContactWith404 />
        <WhyChooseUsWith404 />
        <BookServiceWith404 />
        <FooterWith404 />
      </Suspense>

    </section>
  )
}

export default Home
