import React from "react";
import { Box, Container } from "@mui/material";
import { HeroWrapper, MainCover } from "./styles";

const Hero = () => {
  return (
    <MainCover>
      <Container maxWidth="lg">
        <HeroWrapper>
          <div>
            <h2>Israel's Top Professionals Services,</h2>
            <h2>Gathered Under One Roof</h2>
            <p>
              This page be our top 10 of services ( For every individual who
              makes a payment towards this promotion )
            </p>
          </div>
          <div>
            <Box
              component="img"
              sx={{
                maxHeight: { xs: "120px", md: "180px" },
                width: "auto",
                objectFit: "cover",
                borderRadius: "24px",
                transform: "rotate(8deg)",
              }}
              alt="barbershop"
              src={`https://freedesignfile.com/upload/2019/08/Barbershop-vintage-logo-template-vector.jpg`}
            />
          </div>
        </HeroWrapper>
      </Container>
    </MainCover>
  );
};

export default Hero;
