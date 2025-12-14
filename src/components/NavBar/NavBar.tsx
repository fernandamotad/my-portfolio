import { useEffect, useMemo, useState } from "react"
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { alpha, useTheme } from "@mui/material/styles"

/**
 * Itens de navegação da página.
 * Cada item aponta para um id existente no DOM, permitindo scroll suave e destaque da seção ativa.
 */
const navItems = [
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Habilidades", href: "#habilidades", id: "habilidades" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
]

/**
 * NavBar responsiva com:
 * 1) Estado de "scrolled" para ajustar estilo ao rolar a página
 * 2) Menu mobile (hamburger) usando Menu do MUI
 * 3) Destaque automático do item ativo via IntersectionObserver
 * 4) Scroll suave para âncoras
 */
function NavBar() {
  /**
   * Acesso ao tema atual do MUI para cores, zIndex e outros tokens visuais.
   */
  const theme = useTheme()

  /**
   * Elemento âncora do Menu no mobile.
   * Quando existe um HTMLElement aqui, o Menu abre ancorado nele.
   */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  /**
   * Id da seção atualmente "ativa" na viewport.
   * Usado para destacar o item de navegação.
   */
  const [activeId, setActiveId] = useState<string>("sobre")

  /**
   * True quando a página já foi rolada além de um pequeno limite,
   * usado para aumentar opacidade, sombra e borda do AppBar.
   */
  const [scrolled, setScrolled] = useState(false)

  /**
   * Boolean derivado do anchorEl para controlar abertura do Menu mobile.
   */
  const open = Boolean(anchorEl)

  /**
   * Observa o scroll para alterar o estado "scrolled".
   * O { passive: true } melhora performance ao evitar bloqueio do scroll.
   */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /**
   * Cria um IntersectionObserver para detectar qual seção está mais visível.
   * Quando uma seção fica visível dentro dos thresholds definidos,
   * atualiza activeId com o id do elemento.
   *
   * rootMargin reduz a área efetiva, ajudando a "fixar" o item ativo
   * mais próximo da região superior da tela.
   */
  useEffect(() => {
    const ids = navItems.map((n) => n.id)
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        // Filtra os que estão intersectando e escolhe o mais "dominante"
        // pela maior intersectionRatio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5],
        rootMargin: "-20% 0px -60% 0px",
      }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /**
   * Cor de fundo do AppBar baseada no tema e no estado de scroll.
   * alpha aplica transparência, dando efeito "glass" com backdropFilter.
   */
  const surfaceBg = useMemo(() => {
    const base = alpha(theme.palette.background.paper, scrolled ? 0.92 : 0.82)
    return base
  }, [theme, scrolled])

  /**
   * Handler de navegação por âncora com scroll suave.
   * 1) previne navegação padrão do link
   * 2) fecha menu mobile
   * 3) faz scrollIntoView no elemento alvo
   * 4) se não existir elemento, cai no hash padrão
   */
  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setAnchorEl(null)

    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    else window.location.hash = href
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        // Fica acima de drawers caso existam
        zIndex: theme.zIndex.drawer + 1,

        // Borda e sombra ficam mais evidentes quando a tela rola
        borderBottom: `1px solid ${alpha(
          theme.palette.primary.main,
          scrolled ? 0.22 : 0.14
        )}`,

        // Fundo semitransparente com blur para efeito "glass"
        backgroundColor: surfaceBg,
        backdropFilter: "blur(14px)",
        transition: "all .2s ease",
        boxShadow: scrolled ? `0 10px 30px ${alpha("#000", 0.35)}` : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: 72 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Brand: bolinha e nome clicável que volta para o topo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: theme.palette.primary.main,
                boxShadow: `0 0 0 6px ${alpha(theme.palette.primary.main, 0.14)}`,
              }}
            />
            <Typography
              component="a"
              href="#topo"
              onClick={handleNav("#topo")}
              sx={{
                color: theme.palette.text.primary,
                textDecoration: "none",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                fontSize: { xs: "1rem", md: "1.05rem" },
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              Portfólio
            </Typography>
          </Box>

          {/* Navegação desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
              px: 0.75,
              py: 0.5,
              borderRadius: 999,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
              backgroundColor: alpha(theme.palette.common.black, 0.18),
            }}
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id

              return (
                <Box
                  key={item.id}
                  component="a"
                  href={item.href}
                  onClick={handleNav(item.href)}
                  sx={{
                    position: "relative",
                    px: 2,
                    py: 1,
                    borderRadius: 999,
                    color: isActive
                      ? theme.palette.common.white
                      : alpha(theme.palette.text.primary, 0.86),
                    textDecoration: "none",
                    fontWeight: 650,
                    fontSize: "0.98rem",
                    transition: "all .18s ease",
                    outline: "none",

                    "&:hover": {
                      color: theme.palette.common.white,
                      backgroundColor: alpha(theme.palette.primary.main, 0.35),
                    },

                    "&:focus-visible": {
                      boxShadow: `0 0 0 3px ${alpha(
                        theme.palette.primary.main,
                        0.35
                      )}`,
                    },

                    ...(isActive && {
                      backgroundColor: alpha(theme.palette.primary.main, 0.35),
                      boxShadow: `inset 0 0 0 1px ${alpha(
                        theme.palette.primary.main,
                        0.35
                      )}`,
                    }),

                    // Underline animado quando ativo
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 16,
                      right: 16,
                      bottom: 6,
                      height: 2,
                      borderRadius: 999,
                      backgroundColor: theme.palette.primary.main,
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "center",
                      transition: "transform .18s ease",
                      opacity: isActive ? 1 : 0,
                    },
                  }}
                >
                  {item.label}
                </Box>
              )
            })}
          </Box>

          {/* Navegação mobile: botão abre Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <IconButton
              aria-label="Abrir menu"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{
                color: theme.palette.text.primary,
                borderRadius: 2,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.22)}`,
                backgroundColor: alpha(theme.palette.common.black, 0.18),
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.12),
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 220,
                  borderRadius: 3,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  backgroundColor: alpha(theme.palette.background.paper, 0.92),
                  backdropFilter: "blur(14px)",
                  overflow: "hidden",
                },
              }}
            >
              {navItems.map((item) => {
                const isActive = activeId === item.id

                return (
                <MenuItem
                key={item.id}
                selected={isActive}
                onClick={handleNav(item.href)}
                sx={{
                    position: "relative",
                    py: 1.25,
                    px: 2,
                    borderRadius: 2,
                    fontWeight: 650,
                    color: alpha(theme.palette.text.primary, 0.88),

                    "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.14),
                    color: theme.palette.common.white,
                    },

                    "&.Mui-selected": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.22),
                    color: theme.palette.common.white,
                    },

                    "&.Mui-selected:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.28),
                    color: theme.palette.common.white,
                    },

                    "&.Mui-selected::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 8,
                    bottom: 8,
                    width: 4,
                    borderRadius: 999,
                    backgroundColor: theme.palette.primary.main,
                    },
                }}
                >
                {item.label}
                </MenuItem>
                )
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
