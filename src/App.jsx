import { useEffect } from 'react'

import About from './components/About'
import Awards from './components/Awards'
import BackToTop from './components/BackToTop'
import Blog from './components/Blog'
import Brands from './components/Brands'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Preloader from './components/Preloader'
import Projects from './components/Projects'
import Services from './components/Services'
import Team from './components/Team'
import WhyChoose from './components/WhyChoose'
import { useThemeScripts } from './hooks/useThemeScripts'

export default function App() {
  useThemeScripts()

  useEffect(() => {
    document.documentElement.classList.add('lenis', 'lenis-smooth')
  }, [])

  return (
    <>
      <div id="page" className="site site_wrapper">
        <Preloader />
        <BackToTop />
        <Header />
        <div className="body-bg-1 bg-default">
          <div
            data-elementor-type="wp-page"
            data-elementor-id="6173"
            className="elementor elementor-6173"
          >
            <Hero />
            <About />
            <Services />
            <WhyChoose />
            <Gallery />
            <Projects />
            <Brands />
            <Awards />
            <Team />
            <FAQ />
            <Blog />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
