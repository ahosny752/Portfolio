'use client';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeProps, ThemeContextProps } from '@/contexts/ThemeContext';
import RocketImg from '../../assets/rocket.png';
import Bio from './Bio';
import Profile from './Profile';
import WorkExperience from './WorkExperience';
import ContactMe from './ContactMe';
import WorkExperienceSmall from './WorkExperienceSmall';

const HomeContainer = styled.div<ThemeProps>`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionOne = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    width: 90%;

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
    filter: brightness(
        0.7
    ); /* Adjust the value between 0 and 1 (or higher for brighter) */
`;

const SectionTwo = styled.div`
    margin-top: -150px;
    height: 100%;
    width: 100%;
`;

export default function Home(props: any) {
    const themeContext = useTheme();
    const { theme, isDarkMode, setIsDarkMode } =
        themeContext as ThemeContextProps;

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth < 1268,
    );

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1268);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(isSmallScreen, 'is small');

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
            <MainContent>
                <SectionOne>
                    <Bio theme={theme} />
                    <Profile theme={theme} />
                    {theme.isDarkMode ? (
                        <ImageContainer style={imageStyle}>
                            <Image src={RocketImg.src} />
                        </ImageContainer>
                    ) : null}
                </SectionOne>

                <SectionTwo>
                    {isSmallScreen ? (
                        <WorkExperienceSmall theme={theme} />
                    ) : (
                        <WorkExperience theme={theme} />
                    )}
                </SectionTwo>
            </MainContent>
            <ContactMe theme={theme} />
        </HomeContainer>
    );
}
