import styled from 'styled-components'

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.button`
    margin: 20px 0;
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