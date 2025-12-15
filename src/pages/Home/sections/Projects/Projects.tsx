import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography, Button } from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"

type Project = {
  title: string
  subtitle: string
  srcImg: string
  description: string
  technologies: string
  websiteURL: string
  codeURL: string
}

const projects: Project[] = [
  {
    title: "Benchmark Processos vs. Threads",
    subtitle: "Dez 2025",
    srcImg: "/cv/projeto1.png",
    description:
      "Projeto acadêmico que analisa o desempenho de paralelismo em C, com implementações sequenciais, multithread e multiprocessos para contagem de frequência em 100 milhões de números. Realizado em Linux (WSL2) usando o benchmark Hyperfine, comparando tempo de execução, variabilidade e recursos.",
    technologies: "Tecnologias: C, PThreads, Processos, Memória Compartilhada, Hyperfine, Linux",
    websiteURL: "https://github.com/fernandamotad/process-vs-thread-benchmark/blob/main/README.md",
    codeURL: "https://github.com/fernandamotad/process-vs-thread-benchmark",
  },
  {
    title: "API Leads BD",
    subtitle: "Set 2024",
    srcImg: "/cv/projeto2.png",
    description:
      "API desenvolvida em Python para gerenciamento eficiente de leads. O sistema realiza operações CRUD completas, validação de dados via Pandas e interage com bancos relacionais (MySQL/PostgreSQL) utilizando ORM SQLAlchemy para persistência segura.",
    technologies: "Tecnologias: Python, Pandas, SQLAlchemy, MySQL/PostgreSQL",
    websiteURL: "https://github.com/fernandamotad/api-leads-bd/blob/main/readme",
    codeURL: "https://github.com/fernandamotad/api-leads-bd",
  },
  {
    title: "Imobiliária Online",
    subtitle: "Out 2023",
    srcImg: "/cv/projeto3.png",
    description:
      "Plataforma web para gestão e divulgação de imóveis. O sistema facilita a conexão entre proprietários e inquilinos, permitindo o cadastro detalhado de propriedades, busca avançada por filtros e gerenciamento eficiente de clientes e contratos.",
    technologies: "Tecnologias: Python, Flask, SQLAlchemy, HTML5, CSS3, Bootstrap",
    websiteURL: "https://github.com/fernandamotad/imobiliaria-online/blob/main/README.md",
    codeURL: "https://github.com/fernandamotad/imobiliaria-online",
  },
  {
    title: "Automação de Testes em Python",
    subtitle: "Set 2025",
    srcImg: "/cv/projeto4.png",
    description:
      "Projeto educacional que implementa Testes Unitários, TDD, Cobertura de Código e Testes de Mutação, aplicados ao utilitário Unix cal e a uma calculadora, com foco em garantir a robustez do software.",
    technologies: "Tecnologias: Python, Pytest, Mutmut, TDD",
    websiteURL: "https://github.com/fernandamotad/Teste_Software_3_2025_gessica_santos_leticia_cavalcanti_maria_diniz_pedro_santos_wenderson_silva/tree/master",
    codeURL: "https://github.com/fernandamotad/Teste_Software_3_2025_gessica_santos_leticia_cavalcanti_maria_diniz_pedro_santos_wenderson_silva",
  },
]

export default function ProjectsSection() {
  const theme = useTheme()

  const cardSx = {
    background: alpha(theme.palette.common.white, 0.03),
    border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
    borderRadius: 16,
    overflow: "hidden",
    height: "100%",
    display: "flex",
    flexDirection: "column" as const,
    transition: "transform 200ms ease, background 200ms ease, border-color 200ms ease",
    "&:hover": {
      transform: "translateY(-6px)",
      background: alpha(theme.palette.common.white, 0.06),
      borderColor: alpha(theme.palette.primary.main, 0.35),
    },
  }

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        backgroundColor: "#1a1a1a",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.02em",
            fontSize: { xs: 36, sm: 42, md: 48 },
            textAlign: "center",
            mb: { xs: 3, md: 4 },
          }}
        >
          Projetos
        </Typography>
        <Box
          sx={{
            width: 68,
            height: 4,
            borderRadius: 999,
            backgroundColor: theme.palette.primary.main,
            mx: "auto",
            mb: { xs: 5, md: 6 },
          }}
        />

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.title} size={{ xs: 12, md: 6 }}>
              <Card sx={cardSx}>
                <CardMedia
                  component="img"
                  image={project.srcImg}
                  alt={project.title}
                  sx={{ height: 200, objectFit: "cover" }}
                />
                <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ opacity: 0.8 }}>{project.subtitle}</Typography>
                  <Typography sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                  <Typography sx={{ opacity: 0.8, fontWeight: 600 }}>
                    {project.technologies}
                  </Typography>
                  <Stack direction="row" spacing={1.5} sx={{ mt: 1.5 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.websiteURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sobre
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      href={project.codeURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Código
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
