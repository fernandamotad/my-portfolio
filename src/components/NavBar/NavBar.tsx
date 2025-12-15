import { useEffect, useMemo, useState } from "react"
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { alpha, useTheme } from "@mui/material/styles"

const navItems = [
  { label: "Início", href: "#top", id: "top" },
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Habilidades", href: "#skills", id: "skills" },
  { label: "Projetos", href: "#projects", id: "projects" },
]

function NavBar() {
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [activeId, setActiveId] = useState<string>("top")
  const [scrolled, setScrolled] = useState(false)
  const open = Boolean(anchorEl)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Atualiza a seção ativa ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      const navOffset = 110
      const scrollY = window.scrollY + navOffset

      const sections = navItems
        .map((item) => {
          const el = document.getElementById(item.id)
          if (!el) return null
          return { id: item.id, top: el.offsetTop, bottom: el.offsetTop + el.offsetHeight }
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[]

      if (!sections.length) return

      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 12
      if (nearBottom) {
        const lastId = sections[sections.length - 1].id
        setActiveId(lastId)
        window.history.replaceState(null, "", `#${lastId}`)
        return
      }

      let current = sections[0].id
      for (let i = 0; i < sections.length; i++) {
        const s = sections[i]
        if (scrollY >= s.top && scrollY < s.bottom) {
          current = s.id
          break
        }
      }

      setActiveId(current)
      window.history.replaceState(null, "", `#${current}`)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const surfaceBg = useMemo(() => {
    const base = alpha(theme.palette.background.paper, scrolled ? 0.92 : 0.82)
    return base
  }, [theme, scrolled])

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setAnchorEl(null)

    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      setActiveId(id)
      const yOffset = 100
      const y = el.getBoundingClientRect().top + window.scrollY - yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      window.history.replaceState(null, "", `#${id}`)
    } else {
      window.location.hash = href
    }
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        borderBottom: `1px solid ${alpha(
          theme.palette.primary.main,
          scrolled ? 0.22 : 0.14
        )}`,
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
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
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
                      transform: "translateY(0)",

                      "&:hover": {
                        color: theme.palette.common.white,
                        backgroundColor: alpha(theme.palette.primary.main, 0.35),
                        transform: "translateY(-2px)",
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
          </Box>

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
