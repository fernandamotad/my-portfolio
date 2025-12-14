import { Box, Card, Container, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import SchoolIcon from "@mui/icons-material/School"
import { alpha, useTheme } from "@mui/material/styles"

type AboutSectionProps = {
  title?: string
  text?: string
}

export default function AboutSection({
  title = "Sobre mim",
  text = "Sou profissional na interseção entre negócios, tecnologia e experiência do usuário. Atualmente atuo com análise de requisitos e sistemas em soluções SaaS, traduzindo necessidades de negócio em especificações claras para times técnicos. Participo da definição e priorização de backlog, acompanhamento de desenvolvimento, testes e validação de entregas junto a stakeholders e clientes B2B. Tenho experiência em ambientes ágeis, atuando de forma estratégica entre produto, desenvolvimento e comercial. Sou movida por aprendizado contínuo, visão analítica e pela criação de soluções eficientes que geram impacto real e mensurável para as empresas.",
}: AboutSectionProps) {
  const theme = useTheme()

  const cardSx = {
    background: alpha(theme.palette.common.white, 0.03),
    border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
    borderRadius: 16,
    px: { xs: 2.5, md: 3 },
    py: { xs: 2.5, md: 3 },
    textAlign: "center",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    transition: "transform 180ms ease, background 180ms ease, border-color 180ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      background: alpha(theme.palette.common.white, 0.05),
      borderColor: alpha(theme.palette.primary.main, 0.35),
    },
    "& svg": {
      fontSize: 28,
      opacity: 0.92,
      color: alpha(theme.palette.common.white, 0.9),
    },
  }

  const aboutTextBoxSx = {
    mx: "auto",
    maxWidth: 980,
    background: alpha(theme.palette.common.white, 0.02),
    border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
    borderRadius: 18,
    px: { xs: 2.5, md: 4 },
    py: { xs: 2.5, md: 3.5 },
    transition: "transform 180ms ease, background 180ms ease, border-color 180ms ease",
    willChange: "transform",
    cursor: "default",
    "&:hover": {
      transform: "translateY(-4px)",
      background: alpha(theme.palette.common.white, 0.03),
      borderColor: alpha(theme.palette.primary.main, 0.35),
    },
  } as const

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
    "Experiência do usuário"
  ]

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        backgroundColor: "#212121",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: { xs: 160, md: 220 },
          background: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.95) 0%,
              rgba(0, 0, 0, 0.85) 12%,
              rgba(0, 0, 0, 0.72) 24%,
              rgba(0, 0, 0, 0.58) 36%,
              rgba(0, 0, 0, 0.44) 48%,
              rgba(0, 0, 0, 0.30) 60%,
              rgba(0, 0, 0, 0.18) 72%,
              rgba(0, 0, 0, 0.08) 84%,
              rgba(0, 0, 0, 0) 100%
            )
          `,
          filter: "blur(16px)",
          transform: "translateY(-40px)",
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.02em",
            fontSize: { xs: 36, sm: 42, md: 48 },
            lineHeight: 1.1,
            textAlign: "center",
            mb: { xs: 5, md: 6 },
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: 68,
            height: 4,
            borderRadius: 999,
            backgroundColor: theme.palette.primary.main,
            mx: "auto",
            mb: { xs: 4, md: 5 },
          }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2.5,
            alignItems: "stretch",
            mb: { xs: 3, md: 4 },
            maxWidth: 820,
            mx: "auto",
          }}
        >
          <Card variant="outlined" sx={cardSx}>
            <WorkspacePremiumIcon />
            <Typography sx={{ fontWeight: 700 }}>Atuação</Typography>
            <Typography sx={{ opacity: 0.88 }}>Requisitos, Sistemas e UX</Typography>
          </Card>

          <Card variant="outlined" sx={cardSx}>
            <SchoolIcon />
            <Typography sx={{ fontWeight: 700 }}>Formação</Typography>
            <Typography sx={{ opacity: 0.88 }}>Sistemas de Informação 7/10</Typography>
          </Card>
        </Box>

        <Box sx={aboutTextBoxSx}>
          <Typography
            sx={{
              opacity: 0.88,
              lineHeight: 1.85,
              fontSize: { xs: 16, md: 18 },
              transition: "opacity 180ms ease",
            }}
          >
            {text}
          </Typography>
        </Box>

        <Box sx={{ mt: { xs: 5, md: 6 } }}>
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

          <Grid container spacing={2.5} justifyContent="center">
            {skillsSet.map((skill) => (
              <Grid key={skill} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <Card
                  variant="outlined"
                  sx={{
                    background: alpha(theme.palette.common.white, 0.03),
                    border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                    borderRadius: 12,
                    textAlign: "center",
                    height: 72,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 1, md: 1.5 },
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
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
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mt: { xs: 6, md: 7 }, opacity: 0.12 }} />
      </Container>
    </Box>
  )
}
