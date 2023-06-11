import {Box, Container} from '@mui/material'
import React, {useEffect, useState} from "react";
import {requestBusiness} from "../services/business/business"
import ListComponent from "../components/UI/catalog/list-component";
import {BusinessInfo} from "../utils/interfaces";
import Hero from "../components/hero/Hero";
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
        <Hero/>
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
