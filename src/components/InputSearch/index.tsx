import { createTheme, Input, ThemeProvider } from "@material-ui/core"
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Container } from "./styles";

export const InputSearch = () => {
    const [showPlaceholder, setShowPlaceholder] = useState(false);

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

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Input
                    placeholder={showPlaceholder ? 'buscar equipamento...' : ''}
                    onMouseEnter={() => setShowPlaceholder(true)}
                    onMouseOut={() => setShowPlaceholder(false)}
                    disableUnderline={true}
                    style={{
                        fontWeight: 300, 
                        marginRight: 20, 
                    }}
                />
                <MdSearch 
                    size={25} 
                    color='#fff'
                    cursor='pointer'
                />
            </Container>
        </ThemeProvider>
    )
}