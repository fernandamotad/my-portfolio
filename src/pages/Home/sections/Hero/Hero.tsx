import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/foto.jpeg"

function Hero() {

    const StyledHero = styled("div")({
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    })

    const StyledImage = styled("img")({
        width: "200px",
        borderRadius: "50%",
    })

    return (
        <StyledHero>
            <StyledImage src={Avatar} />
        </StyledHero>
    )
}

export default Hero
