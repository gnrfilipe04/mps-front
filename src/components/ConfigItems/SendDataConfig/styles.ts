import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
`;

export const TitleSession = styled.h1`
    font-size: 16px;
    color: ${props => props.theme.colors.textActive};
    text-transform: uppercase;

`

export const ContainerContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid ${props => props.theme.colors.divisor};
`;

export const TitleContent = styled.p`
    color: ${props => props.theme.colors.textActive};
    padding-left: 20px;
    font-weight:300;
`

export const ContentValue = styled.p`
    color: ${props => props.theme.colors.textDesactive};
    padding-right: 20px;
    font-weight:300;

`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.button`
    margin-top: 20px;
    padding: 10px 20px 10px 20px;

    font-size: 16px;

    border: none;
    border-radius: 4px;
    background: ${props => props.theme.colors.buttonGreen};
    color: ${props => props.theme.colors.background}; 

    :hover {
        opacity: 0.8;
    }
`

export const Input = styled.input`
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
`