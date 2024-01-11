'use client';
import React, { use, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeProps, ThemeContextProps } from '@/contexts/ThemeContext';
import Header from './Header';
import StyledParticles from './Home/Particles';

const AppContainer = styled.div<ThemeProps>`
    width: 100%;
    height: 100%;
    color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.primaryColor};
`;

const ParticlesContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
export default function App({ children }: { children: React.ReactNode }) {
    const themeContext = useTheme();

    const { theme, isDarkMode, setIsDarkMode } =
        themeContext as ThemeContextProps;

    return (
        <AppContainer theme={theme}>
            {isDarkMode ? <StyledParticles /> : null}

            <ParticlesContainer>
                <Header />
                {children}
            </ParticlesContainer>
        </AppContainer>
    );
}
