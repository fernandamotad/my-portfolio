import Hero from './sections/Hero/Hero'
import AboutSection from './sections/About/About'
import NavBar from '../../components/NavBar/NavBar'


function Home() {

  return (
    <>
      <NavBar />
        <Hero />
        <AboutSection />
    </>
  )
}

export default Home
