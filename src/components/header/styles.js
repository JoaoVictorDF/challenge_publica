import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;    
    background-color: ${props => props.theme.colors.primaryBlue};
    z-index: 1000;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.primaryDark};
`;