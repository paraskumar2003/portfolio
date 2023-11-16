import { WelcomeProvider } from '../context/WelcomeContext';
import '../styles/globals.css'
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from "@mui/material/styles";

const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <StyledEngineProvider>
      <WelcomeProvider>
        <Component {...pageProps} />
      </WelcomeProvider>
    </StyledEngineProvider>
  </ThemeProvider>
}

export default MyApp
