import { Box, Card, Container, Typography } from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"

const skillsSet = [
  "Javascript",
  "Typescript",
  "React",
  "Git",
  "HTML",
  "Python",
  "Figma",
  "Testes exploratórios",
  "Análise de requisitos",
  "Modelagem de processos",
  "Scrum",
  "Experiência do usuário",
]

export default function SkillsSection() {
  const theme = useTheme()

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        position: "relative",
        py: { xs: 5, md: 7 },
        backgroundColor: "#212121",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.01em",
            fontSize: { xs: 28, sm: 32, md: 36 },
            textAlign: "center",
            mb: { xs: 3, md: 4 },
          }}
        >
          Habilidades
        </Typography>
        <Box
          sx={{
            width: 52,
            height: 3,
            borderRadius: 999,
            backgroundColor: theme.palette.primary.main,
            mx: "auto",
            mb: { xs: 3, md: 4 },
          }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(120px, 1fr))",
              sm: "repeat(3, minmax(140px, 1fr))",
              md: "repeat(6, minmax(140px, 1fr))",
            },
            gap: { xs: 2, md: 2.5 },
            justifyItems: "center",
          }}
        >
          {skillsSet.map((skill) => (
            <Card
              key={skill}
              variant="outlined"
              sx={{
                width: "100%",
                minHeight: 72,
                background: alpha(theme.palette.common.white, 0.03),
                border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                borderRadius: 24,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: { xs: 1.75, md: 2.2 },
                px: { xs: 2, md: 2.6 },
                fontWeight: 600,
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
                transition: "transform 180ms ease, background 180ms ease, border-color 180ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  background: alpha(theme.palette.common.white, 0.05),
                  borderColor: alpha(theme.palette.primary.main, 0.35),
                },
              }}
            >
              {skill}
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
