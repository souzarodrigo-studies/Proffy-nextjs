/**
 *
 * Third parth - imports
 */
import React, { useState } from 'react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { ThemeProvider } from 'styled-components';

/**
 *
 * Local - imports
 */
import GlobalStyle from '@styles/GlobalStyle.ts';
import { ThemeName, themes } from '@styles/Themes.ts';

/**
 *
 * @author Rodrigo Santos de Souza
 * @description Configuração base do projeto Next.JS
 *
 * @param { Component, pageProps }: AppProps
 *
 * @returns Component
 */
function App({ Component, pageProps }: AppProps) {
    const [themeName, setThemeName] = useState<ThemeName>('dark');
    const currentTheme = themes[themeName];

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

/**
 *
 * @author Rodrigo Santos de Souza
 * @description Export metricas do modulo web
 *
 * @param metric
 *
 * @tutorial https://nextjs.org/docs/advanced-features/measuring-performance
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
    console.log(metric);
}

export default App;
