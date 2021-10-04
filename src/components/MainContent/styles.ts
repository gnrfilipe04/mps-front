import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';
import { MdAddCircle, MdFindReplace, MdDelete } from "react-icons/md";
import { IconButton } from "@material-ui/core";

export const Container = styled.div`
  width: 77vw;
  height: 80vh;
  margin: 10px 0 10px 10px;
  padding: 20px 10px;

  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  overflow: hidden;
  overflow-y: auto;

`;

export const ContainerRemoveIcon = styled.div`
    position: absolute;
    bottom: 100px;
    right: 160px;
`

export const RemoveIcon = styled(MdDelete)`
    color: ${props => props.theme.colors.buttonGreen};
    font-size: 45px;
    cursor: pointer;
    color: ${props => props.theme.colors.error};

    :hover{
        opacity: 0.8;
    }

`

export const ContainerAddIcon = styled.div`
    position: absolute;
    bottom: 100px;
    right: 40px;
`

export const AddIcon = styled(MdAddCircle)`
    color: ${props => props.theme.colors.buttonGreen};
    font-size: 45px;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }

`

export const ContainerValidationIcon = styled.div`
    position: absolute;
    bottom: 100px;
    right: 100px;
`

export const ValidationIcon = styled(MdFindReplace)`
    color: ${props => props.theme.colors.buttonGreen};
    font-size: 45px;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`

export const ModalBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const TitleModal = styled.h3`
    color: ${props => props.theme.colors.textActive};
` 

export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    border-radius: 4px;
`

export const Input = styled.input`
    padding: 10px 5px;
    border-radius: 4px;
    border: none;
    width: 20rem;
    margin: 5px 0;
`

export const Button = styled.button`
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

export const ModalValidation= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 95vw;
    height: 95vh;

    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.20);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);

    overflow: hidden;
    overflow-y: auto;
    
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    width: 95vw;
`
export const ValidationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ValidationTitle = styled.h3`
    color: ${props => props.theme.colors.textActive};
    margin: 0px 0px 10px 0px;

    font-size: 14px;
`

export const ValidationContentProps = styled.div`
    width: 65vw;
    height: 79vh;

`

export const ValidationContainerItemProps = styled.div`
    width: 64vw;
    height: 29vh;
    max-height: 32vh;
    margin-bottom: 10px;
    padding-left: 24px;

`

export const ValidationItemLine = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 10px;
`

export const ValidationItemTitle = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.textDesactive};
    font-weight: 300;
    font-size: 12px;
`

export const ValidationContainerItemValue = styled.div`
    display: flex;
    justify-content: flex-start;

    width: 12.5rem;
`

export const ValidationItemValue = styled.h4`
    margin: 0px;
    color: ${props => props.theme.colors.textActive};
    font-size: 12px;

`

export const ValidationContentCounters = styled.div`
    width: 30vw;
    height: 79vh;
    padding: 5px 10px;

`

export const ValidationContainerSupplies = styled.div`
    width: 64vw;
    height: 40vh;
    max-height: 40vh;
    margin-top: 30px;
    padding-left: 24px;
`