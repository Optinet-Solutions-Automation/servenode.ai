import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import LogoCarousel from '../components/sections/LogoCarousel'
import Approach from '../components/sections/Approach'
import CaseStudiesPreview from '../components/sections/CaseStudiesPreview'
import TechStack from '../components/sections/TechStack'
import Team from '../components/sections/Team'
import Advantages from '../components/sections/Advantages'
import Quotes from '../components/sections/Quotes'
import ProblemsOutcomes from '../components/sections/ProblemsOutcomes'
import Testimonials from '../components/sections/Testimonials'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <LogoCarousel />
      <Approach />
      <CaseStudiesPreview />
      <TechStack />
      <Team />
      <Advantages />
      <Quotes />
      <ProblemsOutcomes />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
