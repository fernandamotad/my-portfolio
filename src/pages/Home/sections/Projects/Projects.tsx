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
    title: "Project Exemple",
    subtitle: "Jul 2023 - Dez 2023",
    srcImg: "/src/assets/images/project-trello.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris.",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL: "https://trello.com/",
    codeURL: "https://github.com/",
  },
  {
    title: "Project Exemple",
    subtitle: "Jul 2023 - Dez 2023",
    srcImg: "/src/assets/images/project-financas.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris.",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL: "https://trello.com/",
    codeURL: "https://github.com/",
  },
  {
    title: "Project Craze Maze",
    subtitle: "Jul 2019 - May 2019",
    srcImg: "/src/assets/images/project1-craze-maze.gif",
    description:
      "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started.",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
    codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
  },
  {
    title: "Project Blotting",
    subtitle: "Jul 2019 - May 2019",
    srcImg: "/src/assets/images/project2-blotting.png",
    description:
      "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started.",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
    codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
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
          Projects
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
                      Demo
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
