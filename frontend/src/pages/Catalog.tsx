import React, { useEffect, useState } from 'react'
import { requestBusiness } from '../services/business/business'
import { Container } from '@mui/material'
import { BusinessInfo } from '../utils/interfaces'
import styled from 'styled-components'
import ListComponent from '../components/UI/catalog/list-component.tsx'

const Catalog = () => {
  const [business, setBusiness] = useState<BusinessInfo[] | null>(null)
  useEffect(() => {
    const fetcher = async () => {
      const response = await requestBusiness()
      setBusiness(response)
    }
    fetcher().then()
  }, [])
  return (
    <Container maxWidth='xl'>
      <h1>Catalog</h1>
      <p>RESULTS FOUND: {business && business?.length}</p>
      <MainWrapper>
        <ContentWrapper>
          <ServiceWrapper>
            {business &&
              business.map((biz: BusinessInfo) => (
                <ListComponent biz={biz} key={biz.id} />
              ))}
          </ServiceWrapper>
        </ContentWrapper>
        <div>Adv</div>
      </MainWrapper>
    </Container>
  )
}

export default Catalog

const MainWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (max-width: 400px) {
    padding: 12px 12px 0;
  }
  @media screen and (max-width: 640px) {
    padding: 16px 16px 0;
  }
  @media screen and (max-width: 781px) {
    padding: 24px 24px 0;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  max-width: calc(100% - 398px);

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`
const ServiceWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`
