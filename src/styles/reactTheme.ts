import { createTheme } from "@material-ui/core";
import { ptBR } from '@mui/x-data-grid';

export const reactTheme = createTheme({
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
          disabled: '#71809649',
          active: '#fff',
      },
    },
  }, ptBR);