import {useState, useEffect} from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles';
import useDarkMode from 'use-dark-mode'
import {lightTheme, darkTheme} from '../theme'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import NoSsr from '@material-ui/core/NoSsr'


import '../styles/globals.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Root = styled.div`
  display: flex;
`

function MyApp({ Component, pageProps }) {

  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <GlobalStyle />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <NoSsr>
            <Root>
              <Navigation />
              <Component {...pageProps} />
            </Root>
          </NoSsr>
        </ThemeProvider>
      </StylesProvider>
    </>
  )
}

export default MyApp
