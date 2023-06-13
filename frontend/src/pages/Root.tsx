import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { requestBusiness } from '../services/business/business';
import ListComponent from '../components/UI/catalog/list-component';
import { BusinessInfo } from '../utils/interfaces';
import Hero from '../components/hero/Hero';
import styled from 'styled-components';
const Root = () => {
    const [business, setBusiness] = useState<any>(null);
    useEffect(() => {
        const fetcher = async () => {
            const response = await requestBusiness();
            setBusiness(response);
        };
        fetcher().then();
    }, []);
    return (
        business && (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100vw',
                    overflow: 'hidden',
                }}
            >
                <Hero />
                <Container maxWidth='lg'>
                    <Ul style={{ listStyle: 'none' }}>
                        {business.map((biz: BusinessInfo) => (
                            <ListComponent biz={biz} key={biz.id} />
                        ))}
                    </Ul>
                </Container>
            </Box>
        )
    );
};

export default Root;
export const Ul = styled.ul`
    display: inline-flex;
    gap: 16px;

    animation: 50000ms linear 0s infinite normal none running slide;

    &:hover {
        animation-play-state: paused;
    }

    @keyframes slide {
        0% {
            transform: translateX(1500px);
        }
        100% {
            transform: translateX(-1500px);
        }
    }
`;
