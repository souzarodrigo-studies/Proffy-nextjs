/**
 *
 * Third parth - imports
 */

import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

/**
 *
 * Local - imports
 */
import { Container } from '@styles/Index.ts';
import { ThemeName, themes } from '@styles/Themes.ts';

/**
 *
 * @author Rodrigo Santos de Souza
 * @description Pagina index do projeto
 *
 * @returns react - web page
 *
 */
export default function Index() {
    const [themeName, setThemeName] = useState<ThemeName>('dark');
    const currentTheme = themes[themeName];

    return (
        <Container>
            <Head>
                <title>Proffy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>
                Welcome to <a href="https://nextjs.org">Proffy</a>
            </h1>
        </Container>
    );
}
