import styled from 'styled-components';
import { MdDelete, MdTrendingFlat } from "react-icons/md"
import InputMask from 'react-input-mask';

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
export const TitleNetworkIp = styled.h3`
    color: ${props => props.theme.colors.textActive};
    font-weight:500;
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

export const Input = styled(InputMask)`
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
`
export const ContainerErrorMessage = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ErrorMessage = styled.p`
    color: ${props => props.theme.colors.error};
    font-size: 14px;
`

export const ItemListContainer = styled.div`
    display: flex;
    align-items: center;
`
export const ContainerRange = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
`

export const RangeTitle = styled.p`
    color: ${props => props.theme.colors.textActive};
    font-weight:300;
`
export const DeleteIcon = styled(MdDelete)`
    color: ${props => props.theme.colors.error};
    font-size: 24px;
    cursor: pointer;
`

export const ArrowRightIcon = styled(MdTrendingFlat)`
    color: ${props => props.theme.colors.buttonGreen};
    font-size: 24px;
    margin: 0 5px;
`