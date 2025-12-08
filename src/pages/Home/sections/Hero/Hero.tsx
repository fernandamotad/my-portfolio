import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/foto.jpeg"
import Grid from "@mui/material/Grid"
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import { Button, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Hero() {
    const theme = useTheme()

    const StyledHero = styled("div")({
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "0 20px",
        /*Mobile*/
        [theme.breakpoints.down("md")]: {
            height: "auto",
            display: "block",
            paddingTop: "80px",
            paddingBottom: "40px",
        }
    })

    const StyledImage = styled("img")({
        width: "100%",              // ocupa a largura máxima permitida pelo Grid
        maxWidth: "260px",          // limita para não ficar gigante em telas grandes
        display: "block",           // permite centralizar
        margin: "0 auto",           // centraliza a imagem
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        /*Mobile*/
        [theme.breakpoints.down("md")]: {
            width: "100%",
            maxWidth: "220px",
        }
    })

    const StyledText = styled("div")({
        color: "white",
        textAlign: "left",
        padding: "0 1rem",
        width: "100%",
        /*Mobile*/
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            padding: "0 0.5rem",
            marginTop: "1rem",
        },
    })

    const StyledContent = styled("div")({

    })

    return (
        
        <StyledHero>
            <StyledContent>

                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                    <Grid size={{xs: 12, md: 4}}>
                        <StyledImage src={Avatar} alt="avatar" />
                    </Grid>
                    <Grid size={{xs: 12, md: 8}}>

                        <StyledText>
                        <Typography variant="h1" align={"center"} sx={{ whiteSpace: "nowrap" }}>
                                Fernanda Diniz
                        </Typography>
                        <Typography variant="h2" align={"center"} sx={{ whiteSpace: "nowrap" }}>
                                Desenvolvedora Web
                        </Typography>

                        <Grid container display={"center"}>
                            <Grid size={{xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                                <Button><DownloadIcon />Download CV</Button>
                            </Grid>
                        </Grid>
                        <Grid container display={"center"}>
                            <Grid size={{xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                                <Button><MailOutlineIcon/>Fale Comigo</Button>
                            </Grid>
                        </Grid>
                        </StyledText>

                    </Grid>
                    </Grid>
                </Container>

            </StyledContent>
        </StyledHero>
    )
    
}

export default Hero
