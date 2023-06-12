import styled from 'styled-components';

export const DivWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(41, 38, 33);
    color: #dcdddd;
    padding: 16px;
`;
export const TextWrapper = styled.span`
    font-size: 32px;
`;
export const TitleWrapper = styled(TextWrapper)`
    font-weight: bold;
    margin-right: 8px;
`;
export const ButtonWrapper = styled.button`
    background-color: rgb(103, 100, 97);
    color: #e6e6e6;
    border: unset;
    height: 20px;
    margin-right: 2px;
    border-radius: 4px;
    cursor: pointer;
    outline: unset;
`;
export const TodayButton = styled(ButtonWrapper)`
    padding-left: 16px;
    padding-right: 16px;
    font-weight: bold;
`;
