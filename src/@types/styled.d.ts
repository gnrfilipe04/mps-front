import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {

    colors: {
      textActive: string;
      textDesactive: string;
      background: string;
      buttonGreen: string;
      divisor: string;
      error: string;
    };
  }
}