import { Box, Typography } from "@mui/material"
import NavBar from "../../components/NavBar/NavBar"
import AboutSection from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import ProjectsSection from "./sections/Projects/Projects"
import SkillsSection from "./sections/Skills/Skills"

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 4,
          backgroundColor: "#121212",
          color: "#ccc",
          mt: { xs: 2, md: 3 },
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Fernanda Diniz. Todos os direitos reservados.
        </Typography>
      </Box>
    </>
  )
}

export default Home
