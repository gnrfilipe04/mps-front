import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { theme } from '../styles/theme'
import { AsideBarProvider } from '../contexts/AsideBarContext'
import { SnackBarProvider } from '../contexts/SnackBarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <AsideBarProvider>
          <SnackBarProvider>
            <Component {...pageProps} />
          </SnackBarProvider>
        </AsideBarProvider>
      <GlobalStyle />
    </ThemeProvider>  
  )
}
export default MyApp
