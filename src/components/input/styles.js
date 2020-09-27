import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%; 
`;

export const Label = styled.h4`
    color: ${props => props.theme.colors.primaryDark};
`;

export const Button = styled.button`
    margin-top: 15px;
    padding: 5px;
    border-radius: 5px;
    border: 0px;
    width: 80px;

    :hover {
        background-color: ${props => props.theme.colors.primaryBlue};
    }
`;
