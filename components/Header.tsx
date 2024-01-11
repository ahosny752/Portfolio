'use client';
import React, { use, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeProps, ThemeContextProps } from '@/contexts/ThemeContext';
import logo1 from '@/assets/logo1.png';
import ThemeSwitch from './ThemeSwitch';
import { Inter, REM, Fredoka, Vibur } from 'next/font/google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import { Avatar } from '@mui/material';

const HeaderContainer = styled.div<ThemeProps>`
    display: flex;
    width: 100%;
    height: 80px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.primaryColor};
`;

const ContentContainer = styled.div<ThemeProps>`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 100%;
    align-items: center;
    border-bottom: ${props =>
        props.theme.isDarkMode
            ? '1px solid rgba(255, 255, 255, 0.254)'
            : '1px solid rgba(0, 0, 0, 0.12)'};
`;

const Name = styled.div`
    font-size: 30px;
    font-weight: 900;
    height: 100%;
    margin-right: 10px;

    @media only screen and (max-width: 767px) {
        font-size: 25px;
    }
`;

const SocialsLabel = styled.span`
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ThemeSwitchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`;

const SocialsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 5;
    height: 40px;
`;

const IconContainer = styled.div<ThemeProps>`
    margin-right: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
    padding: 8px;
    height: 32px;
    border-radius: 32px;
    background-color: ${props =>
        props.theme.isDarkMode
            ? ' rgba(255, 255, 255, 0.254)'
            : 'rgba(0, 0, 0, 0.08)'};

    cursor: pointer;

    :hover {
        background-color: ${props =>
            props.theme.isDarkMode
                ? ' rgba(255, 255, 255, 0.336)'
                : 'rgba(0, 0, 0, 0.227)'};
    }
`;

const Neon = styled.div`
    &.logo {
        position: absolute;
        height: 10px;
        width: 100px;
        user-select: none;
        bottom: 0;
        top: 40px;
        left: 180px;

        @media only screen and (max-width: 767px) {
            left: 110px;
            top: 45px;
        }
    }

    &.logo b {
        font-family: 400 'Vibur';
        color: #fee;
        font-size: 26px;
        text-shadow:
            0 -40px 100px,
            0 0 2px,
            0 0 1em #c744ff,
            0 0 0.5em #c744ff,
            0 0 0.1em #c744ff,
            0 10px 3px #000;

        @media only screen and (max-width: 767px) {
            font-size: 20px;
        }
    }
    &.logo b span {
        animation: blink linear infinite 2s;
    }
    &.logo b span:nth-of-type(2) {
        animation: blink linear infinite 3s;
    }
    @keyframes blink {
        78% {
            color: inherit;
            text-shadow: inherit;
        }
        79% {
            color: #333;
        }
        80% {
            text-shadow: none;
        }
        81% {
            color: inherit;
            text-shadow: inherit;
        }
        82% {
            color: #333;
            text-shadow: none;
        }
        83% {
            color: inherit;
            text-shadow: inherit;
        }
        92% {
            color: #333;
            text-shadow: none;
        }
        92.5% {
            color: inherit;
            text-shadow: inherit;
        }
    }
`;

const vibur = Vibur({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Header() {
    const themeContext = useTheme();

    const { theme, isDarkMode, setIsDarkMode } =
        themeContext as ThemeContextProps;

    return (
        <HeaderContainer theme={theme}>
            <ContentContainer theme={theme}>
                <LogoContainer>
                    <Name>Ahmed Hosny</Name>
                    {isDarkMode ? (
                        <Neon className="logo">
                            <b className={vibur.className}>
                                <span>Aft</span>er
                                <span style={{ marginLeft: '5px' }}>Da</span>
                                <span>r</span>
                                <span>k</span>
                            </b>
                        </Neon>
                    ) : null}
                </LogoContainer>
                <SocialsContainer>
                    <IconContainer theme={theme}>
                        <GitHubIcon />
                        <SocialsLabel>GitHub</SocialsLabel>
                    </IconContainer>
                    <IconContainer theme={theme}>
                        <LinkedInIcon />
                        <SocialsLabel>LinkedIn</SocialsLabel>
                    </IconContainer>
                    <IconContainer theme={theme}>
                        <EmailIcon />
                        <SocialsLabel>Email</SocialsLabel>
                    </IconContainer>
                    <IconContainer theme={theme}>
                        <ArticleIcon />
                        <SocialsLabel>Resume</SocialsLabel>
                    </IconContainer>
                </SocialsContainer>
                <ThemeSwitchContainer>
                    <ThemeSwitch
                        theme={theme}
                        handleChange={() => {
                            setIsDarkMode(!isDarkMode);
                        }}
                        checked={isDarkMode}
                    />
                </ThemeSwitchContainer>
            </ContentContainer>
        </HeaderContainer>
    );
}
