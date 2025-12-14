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
      borderColor: alpha(theme.palette.common.white, 0.18),
    },
    "& svg": {
      fontSize: 28,
      opacity: 0.92,
      color: alpha(theme.palette.common.white, 0.9),
    },
  }

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.25,
            mb: { xs: 5, md: 6 },
          }}
        >


          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              letterSpacing: "-0.02em",
              fontSize: { xs: 44, sm: 56, md: 72 },
              lineHeight: 1.05,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Grid
          container
          spacing={2.5}
          sx={{
            alignItems: "stretch",
            justifyContent: "center",
            mb: { xs: 4, md: 5 },
          }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card variant="outlined" sx={cardSx}>
              <WorkspacePremiumIcon />
              <Typography sx={{ fontWeight: 700 }}>
                Atuação
              </Typography>
              <Typography sx={{ opacity: 0.88 }}>
                Requisitos, Sistemas e UX
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card variant="outlined" sx={cardSx}>
              <SchoolIcon />
              <Typography sx={{ fontWeight: 700 }}>
                Formação
              </Typography>
              <Typography sx={{ opacity: 0.88 }}>
                Sistemas de Informação 7/10
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Box
          sx={{
            mx: "auto",
            maxWidth: 980,
            background: alpha(theme.palette.common.white, 0.02),
            border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
            borderRadius: 18,
            px: { xs: 2.5, md: 4 },
            py: { xs: 2.5, md: 3.5 },
          }}
        >
          <Typography
            sx={{
              opacity: 0.92,
              lineHeight: 1.85,
              fontSize: { xs: 16, md: 18 },
            }}
          >
            {text}
          </Typography>
        </Box>

        <Divider sx={{ mt: { xs: 6, md: 7 }, opacity: 0.12 }} />
      </Container>
    </Box>
  )
}
