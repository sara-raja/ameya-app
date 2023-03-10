import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '@mui/material';
import {theme} from '../utils/theme/config.js'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
  <Component {...pageProps} />
</ThemeProvider>
}
