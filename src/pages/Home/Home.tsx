import Hero from './sections/Hero/Hero'
import AboutSection from './sections/About/About'
import ProjectsSection from './sections/Projects/Projects'
import NavBar from '../../components/NavBar/NavBar'


function Home() {

  return (
    <>
      <NavBar />
        <Hero />
        <AboutSection />
        <ProjectsSection />
    </>
  )
}

export default Home
