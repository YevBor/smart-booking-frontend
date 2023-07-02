import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { requestBusiness } from '../services/business/business';
import ListComponent from '../components/UI/catalog/list-component';
import { BusinessInfo } from '../utils/interfaces';
import Hero from '../components/hero/Hero';
import styled from 'styled-components';

const Root = () => {
    const [business, setBusiness] = useState<BusinessInfo[]>([]);

    useEffect(() => {
        const fetcher = async () => {
            try {
                const response = await requestBusiness();
                setBusiness(response);
            } catch (error) {
                console.error('Failed to fetch business:', error);
            }
        };
        fetcher().then();
    }, []);

    return (
        <>
            {business && business.length > 0 && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <Hero />
                    <Container maxWidth='lg'>
                        <Ul>
                            {business.map((biz: BusinessInfo) => (
                                <ListComponent biz={biz} key={biz.id} />
                            ))}
                        </Ul>
                    </Container>
                </Box>
            )}
        </>
    );
};

export default Root;

export const Ul = styled.ul`
    list-style: none;
    gap: 16px;
    width: 100%;
    height: auto;
    align-items: flex-start;
    flex-shrink: 0;
`;
