import {Box, Container} from '@mui/material'
import React, {useEffect, useState} from "react";
import {requestBusiness} from "../services/business/business"
import styled from "styled-components";
import ListComponent from "../components/UI/catalog/list-component.tsx";
import {BusinessInfo} from "../utils/interfaces";
const Root = () => {
  const [business,setBusiness] = useState<any>(null);
  useEffect(() => {
    const fetcher = async () => {
      const response = await requestBusiness();
      setBusiness(response);
    }
    fetcher().then()
  }, []);
  return business && (
    <Box sx={{display:"flex",
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      width:'100vw',
    }}  >

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
      <Container maxWidth="lg">
        <ul style={{listStyle: 'none'}}>
          {business.map((biz: BusinessInfo)=>(
              <ListComponent biz={biz} key={biz.id} />
          ))}
        </ul>
      </Container>
    </Box>
  )
}

export default Root
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
