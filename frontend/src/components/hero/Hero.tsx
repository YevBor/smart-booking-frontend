import React from 'react';
import {Box, Container} from "@mui/material";
import styled from "styled-components";

const Hero = () => {
	return (
		<MainCover>
			<Container maxWidth="lg">
				<HeroWrapper>
					<div>
						<h2>Israel's Top Professionals Services,</h2>
						<h2>Gathered Under One Roof</h2>
						<p>This page be our top 10 of services ( For every individual who makes a payment towards this promotion )</p>
					</div>
					<div>
						<Box
							component="img"
							sx={{
								maxHeight: { xs: '120px', md: '180px' },
								width: 'auto',
								objectFit: 'cover',
								borderRadius: '24px',
								transform: 'rotate(8deg)'
							}}
							alt='barbershop'
							src={`https://freedesignfile.com/upload/2019/08/Barbershop-vintage-logo-template-vector.jpg`}
						/>
					</div>
				</HeroWrapper>
			</Container>
		</MainCover>
	);
};

export default Hero;
const MainCover = styled.div`
  height: 300px;
  width: 100vw;
  background-color: #1976d2;
  color: white;
  border-radius: 0 0 90% 10%/0 0 20px 0;
  
  @media (min-width: 700px) {
    border-radius: 0 0 53% 47%/0 0 14% 7%;
  }
`
const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 16px 24px;
`
