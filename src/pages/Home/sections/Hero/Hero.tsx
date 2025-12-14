import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/foto.jpeg"
import Container from "@mui/material/Container"
import { useTheme } from "@mui/material/styles"
import { Button, Typography, Stack, Box } from "@mui/material"
import Grid from "@mui/material/Grid"
import useMediaQuery from "@mui/material/useMediaQuery"
import DownloadIcon from "@mui/icons-material/Download"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import { AnimatedBackground } from "../../../../components/AnimatedBackground"

function Hero() {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

    const StyledHero = styled("div")({
        backgroundColor: "black",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box",
        padding: "96px 20px 64px",
        [theme.breakpoints.down("md")]: {
            minHeight: "auto",
            padding: "104px 16px 56px",
        },
    })

    const StyledImage = styled("img")({
        width: "100%",
        maxWidth: "280px",
        display: "block",
        margin: "0 auto",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
        [theme.breakpoints.down("md")]: {
            maxWidth: "220px",
        },
    })

    const StyledText = styled("div")({
        color: "white",
        textAlign: "left",
        padding: "0 1rem",
        width: "100%",
        maxWidth: "800px",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            padding: "0",
            marginTop: "1.5rem",
            marginInline: "auto",
        },
    })

    const ButtonRow = styled(Stack)({
        marginTop: "28px",
        gap: "16px",
        alignItems: "flex-start",
        [theme.breakpoints.down("md")]: {
            alignItems: "stretch",
        },
    })

    return (
        <StyledHero>
            <Box position={"relative"}
                sx={{
                    width: "50%", 
                    position: "absolute",
                    inset: 0,
                    opacity: 1,
                    pointerEvents: "none",
                    overflow: "hidden",
                    zIndex: 0,
                    
                }}
            >
                <AnimatedBackground />
            </Box>
            <Container
                maxWidth={false}
                sx={{ display: "flex", justifyContent: "center", px: { xs: 2, md: 3 }, position: "relative", zIndex: 1 }}
            >
                <Box sx={{ width: "100%", maxWidth: 1100, margin: "0 auto" }}>
                    <Grid
                        container
                        columns={{ xs: 12, md: 12 }}
                        spacing={{ xs: 3, md: 6 }}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ width: "100%", justifyItems: "center" }}
                    >
                        <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                            <StyledImage src={Avatar} alt="avatar" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <StyledText>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3rem" },
                                        whiteSpace: "normal",
                                        lineHeight: 1.1,
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    Fernanda Diniz
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem" },
                                        marginTop: { xs: "0.35rem", md: "0.5rem" },
                                        textAlign: { xs: "center", md: "left" },
                                        fontWeight: 400,
                                    }}
                                >
                                    Desenvolvedora Web
                                </Typography>

                                <ButtonRow
                                    direction={{ xs: "column", sm: "row" }}
                                    justifyContent={{ xs: "center", md: "flex-start" }}
                                >
                                    <Button
                                        component="a"
                                        variant="contained"
                                        size="large"
                                        startIcon={<DownloadIcon />}
                                        fullWidth={isSmallScreen}
                                        href="/cv/CV-Fernanda-Diniz.pdf"
                                        download
                                    >
                                        Download CV
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        size="large"
                                        startIcon={<MailOutlineIcon />}
                                        fullWidth={isSmallScreen}
                                        component="a"
                                        href="https://wa.me/5579996541410"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Fale comigo
                                    </Button>
                                </ButtonRow>
                            </StyledText>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </StyledHero>
    )
}

export default Hero
