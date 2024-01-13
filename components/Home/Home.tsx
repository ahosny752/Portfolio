'use client';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeProps, ThemeContextProps } from '@/contexts/ThemeContext';
import RocketImg from '../../assets/rocket.png';
import Bio from './Bio';
import Profile from './Profile';

const HomeContainer = styled.div<ThemeProps>`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 200vh;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    padding-top: 60px;

    @media only screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    position: absolute;
    height: 300px;
    width: 300px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    z-index: -1;
`;

const Image = styled.img`
    object-fit: contain;
    object-position: center;
    height: 100%;
`;

export default function Home(props: any) {
    const themeContext = useTheme();

    const { theme, isDarkMode, setIsDarkMode } =
        themeContext as ThemeContextProps;

    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const imageStyle = {
        top: `calc(100% - ${scrollPosition * 0.1}%)`,
    };

    return (
        <HomeContainer theme={theme}>
            <ContentContainer>
                <Bio theme={theme} />
                <Profile theme={theme} />

                {theme.isDarkMode ? (
                    <ImageContainer style={imageStyle}>
                        <Image src={RocketImg.src} />
                    </ImageContainer>
                ) : null}
            </ContentContainer>
        </HomeContainer>
    );
}
