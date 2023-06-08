import {Box} from '@mui/material'
import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {requestBusiness} from "../utils/requests";
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
        <h1>Main Page</h1>
      {business.map((biz: any)=>(
          <div key={biz.id}>
            <h1>here must be component CARD or something like this</h1>
            <h2>we must render here list of featured companies/services</h2>
            <p>This page be our top 10 of services ( For every individual who makes a payment towards this promotion )</p>
            <p>with service name: <strong>{biz.name}</strong></p>
            <p>with service short description: <strong>{biz.description}</strong></p>
            <p>with service address: <strong>{biz.address}</strong></p>
            <p>with service phone number: <strong>{biz.phoneNumber}</strong></p>
            <div>
             Link:  <Link to={`/biz/${biz.slug}`}>{biz.name}</Link>
            </div>
          </div>
      ))}

    </Box>
  )
}

export default Root
