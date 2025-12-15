import Hero from './sections/Hero/Hero'
import AboutSection from './sections/About/About'
import ProjectsSection from './sections/Projects/Projects'
import NavBar from '../../components/NavBar/NavBar'
import SkillsSection from './sections/Skills/Skills'


function Home() {

  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  )
}

export default Home
