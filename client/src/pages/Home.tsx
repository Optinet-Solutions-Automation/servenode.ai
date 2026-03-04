import Hero from '../components/sections/Hero'
import LogoCarousel from '../components/sections/LogoCarousel'
import Approach from '../components/sections/Approach'
import TechStack from '../components/sections/TechStack'
import Advantages from '../components/sections/Advantages'
import Quotes from '../components/sections/Quotes'
import ProblemsOutcomes from '../components/sections/ProblemsOutcomes'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Approach />
      <TechStack />
      <Advantages />
      <Quotes />
      <ProblemsOutcomes />
      <FinalCTA />
    </>
  )
}
