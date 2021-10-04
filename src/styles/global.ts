import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html,
    body {
        padding: 0;
        margin: 0;
        
        font-family: Inter;

        background-color: ${props => props.theme.colors.background};
        background-image: 
        radial-gradient(at 47% 33%, hsl(212.26, 77%, 40%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%);
        
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    button {
        font-family: Inter;
        cursor: pointer;
    }

    input {
        font-family: Inter;

    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    * {
        box-sizing: border-box;
    }

    /* Scroll-custom ============= */

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 4px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent; 
        border-radius: 4px;

    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.textDesactive}; 
        border-radius: 4px;

    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors.buttonGreen}; 
    }
`

