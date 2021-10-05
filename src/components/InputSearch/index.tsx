import { createTheme, Input, ThemeProvider } from "@material-ui/core"
import { useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import isIp from "is-ip";
import Cookie from "js-cookie";
import { useSnackBar } from "../../contexts/SnackBarContext";
import { api } from "../../services/api"
import { Container } from "./styles";

export const InputSearch = () => {
    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const { changeOpenSnackbar, changeIsSucess } = useSnackBar();

    const [valueIp, setValueIp] = useState(Cookie.get('Agente-doc-mps') || '');

    const theme = createTheme({
        palette: {
          primary: {
              main: '#fff',
          },
          secondary: {
              main: '#718096' 
          },
          text: {
              primary: '#718096',
              secondary: '#718096',
          },
          action: {
              active: '#fff',
          },
        },
      });    

    function setIP(){
        const isValid = isIp(valueIp);

        if(isValid){

            Cookie.set('Agente-doc-mps', String(valueIp))

            changeIsSucess(true);
            changeOpenSnackbar(true);
        }else {
            changeIsSucess(false);
            changeOpenSnackbar(true);
        }
    }  

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Input
                    placeholder='Digite o IP do servidor'
                    disableUnderline={true}
                    value={valueIp}
                    onChange={(e) => setValueIp(e.target.value)}
                    style={{
                        fontWeight: 300, 
                        marginRight: 0,
                        paddingLeft: 5, 
                        background: 'white'
                    }}
                />
                <MdArrowForward 
                    size={25} 
                    color='#48BB78'
                    cursor='pointer'
                    onClick={setIP}
                />
            </Container>
        </ThemeProvider>
    )
}