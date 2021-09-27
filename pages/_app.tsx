import type { AppProps } from "next/app";
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, GlobalStyles, lightTheme } from '../themeConfig';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  pageProps.setIsDarkMode = setIsDarkMode
  pageProps.isDarkMode = isDarkMode

  return (
    <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
