import styled from 'styled-components';

export const MainCover = styled.div`
    height: 300px;
    width: 100vw;
    background-color: #1976d2;
    color: white;
    border-radius: 0 0 90% 10%/0 0 20px 0;

    @media (min-width: 700px) {
        border-radius: 0 0 53% 47%/0 0 14% 7%;
    }
`;
export const HeroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px 16px 24px;
`;
