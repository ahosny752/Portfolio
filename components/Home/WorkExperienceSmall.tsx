import { useState, useEffect } from 'react';
import { ThemeProps, ThemeContextProps } from '@/contexts/ThemeContext';
import styled from '@emotion/styled';
import IbmPortraitPic from '../../assets/ibm.png';
import DaviePortraitPic from '../../assets/davie.ai.png';
import flayrPortraitPic from '../../assets/flayr.png';
import davieWhiteLogo from '../../assets/davielogo.png';
import davieBlackLogo from '../../assets/davieBlack.png';
import IBMBlackLogo from '../../assets/ibmLogo.png';
import FlayrLogo from '../../assets/flayrLogo.png';
import { useTheme } from '@/contexts/ThemeContext';

const WorkExperienceContainer = styled.div`
    height: 100%;
    height: 100%;
    margin-top: 20px;
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
const ImgContainer = styled.div<ThemeProps>`
    margin-top: 8px;
    height: 100%;
    max-height: 400px;
    width: 100%;
    max-width: 800px;
`;

const Img = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`;

const LeftSection = styled.div`
    width: 100%;
`;

const DescriptionSection = styled.div`
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 40px;
`;

const LogoContainer = styled.div`
    height: 100%;
    width: 100%;
    max-height: 200px;
    max-width: 600px;
`;

const LogoImg = styled.img`
    object-fit: contain;
    height: 100%;
    width: 100%;
`;

const ToolContainer = styled.div`
    height: 32px;
    padding: 8px;
    display: inline-flex;
    margin-right: 10px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: rgb(238, 149, 54);
`;

export default function WorkExperience({ theme }: ThemeProps) {
    const { isDarkMode } = theme;

    return (
        <WorkExperienceContainer>
            <ContentContainer>
                <LeftSection>
                    <DescriptionSection>
                        <div
                            style={{
                                fontSize: '50px',
                                marginTop: '90px',
                                marginBottom: '30px',
                            }}
                        >
                            Experience
                        </div>
                        <LogoContainer>
                            <LogoImg
                                src={
                                    isDarkMode
                                        ? davieWhiteLogo.src
                                        : davieBlackLogo.src
                                }
                            />
                        </LogoContainer>
                        <div style={{ fontSize: '30px', marginBottom: '20px' }}>
                            August 2021 - Present
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                textAlign: 'center',
                                maxWidth: '600px',
                                marginBottom: '20px',
                            }}
                        >
                            A powerful ad tech platform that leverages the power
                            of generative AI to streamline the process of
                            generating, creating, tracking, analyzing, and
                            executing high perforformance advertising campaigns.
                        </div>
                        <div
                            style={{
                                marginBottom: '20px',
                                maxWidth: '600px',
                                fontSize: '20px',
                            }}
                        >
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(52, 187, 143, .4)'
                                        : 'rgb(52, 187, 143)',
                                }}
                            >
                                Typescript
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(69, 115, 255, .4)'
                                        : 'rgb(69, 115, 255)',
                                }}
                            >
                                Next.Js
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(69, 115, 255, .4)'
                                        : 'rgb(69, 115, 255)',
                                }}
                            >
                                React.Js
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(238, 149, 54, .4)'
                                        : 'rgb(238, 149, 54)',
                                }}
                            >
                                Node.Js
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(52, 187, 143, .4)'
                                        : 'rgb(52, 187, 143)',
                                }}
                            >
                                mySQL
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(138, 52, 187, .4)'
                                        : 'rgb(138, 52, 187)',
                                }}
                            >
                                Material UI
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(52, 187, 143, .4)'
                                        : 'rgb(52, 187, 143)',
                                }}
                            >
                                Express.Js
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgba(0, 0, 0, 0.08)'
                                        : 'rgba(255, 255, 255, 0.16)',
                                }}
                            >
                                HTML
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgba(0, 0, 0, 0.08)'
                                        : 'rgba(255, 255, 255, 0.16)',
                                }}
                            >
                                CSS
                            </ToolContainer>
                        </div>
                        <ImgContainer theme={theme}>
                            <Img src={DaviePortraitPic.src} />
                        </ImgContainer>
                    </DescriptionSection>
                    <DescriptionSection style={{ height: '1200px' }}>
                        <LogoContainer>
                            <LogoImg src={IBMBlackLogo.src} />
                        </LogoContainer>
                        <div style={{ marginTop: '20px', fontSize: '30px' }}>
                            August 2018 - August 2021
                        </div>

                        <div
                            style={{
                                fontSize: '20px',
                                textAlign: 'center',
                                maxWidth: '600px',
                                marginBottom: '20px',
                            }}
                        >
                            A tool that transforms how internal sales teams
                            manage deal workflows, track progress, generate
                            reports and manage contract data.
                        </div>
                        <div
                            style={{
                                marginBottom: '20px',
                                maxWidth: '600px',
                                fontSize: '20px',
                            }}
                        >
                            {' '}
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(52, 187, 143, .4)'
                                        : 'rgb(52, 187, 143)',
                                }}
                            >
                                Javascript
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(69, 115, 255, .4)'
                                        : 'rgb(69, 115, 255)',
                                }}
                            >
                                React.Js
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(52, 187, 143, .4)'
                                        : 'rgb(52, 187, 143)',
                                }}
                            >
                                Node.Js
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(52, 187, 143, .4)'
                                        : 'rgb(52, 187, 143)',
                                }}
                            >
                                mySQL
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(138, 52, 187, .4)'
                                        : 'rgb(138, 52, 187)',
                                }}
                            >
                                IBM Storybook
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(138, 52, 187, .4)'
                                        : 'rgb(138, 52, 187)',
                                }}
                            >
                                Jest
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(138, 52, 187, .4)'
                                        : 'rgb(138, 52, 187)',
                                }}
                            >
                                React Testing Library
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(238, 149, 54, .4)'
                                        : 'rgb(238, 149, 54)',
                                }}
                            >
                                Express.Js
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(238, 149, 54, .4)'
                                        : 'rgb(238, 149, 54)',
                                }}
                            >
                                Bootstrap
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(69, 115, 255, .4)'
                                        : 'rgb(69, 115, 255)',
                                }}
                            >
                                Docker
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(69, 115, 255, .4)'
                                        : 'rgb(69, 115, 255)',
                                }}
                            >
                                Jira
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgba(0, 0, 0, 0.08)'
                                        : 'rgba(255, 255, 255, 0.16)',
                                }}
                            >
                                HTML
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgba(0, 0, 0, 0.08)'
                                        : 'rgba(255, 255, 255, 0.16)',
                                }}
                            >
                                CSS
                            </ToolContainer>
                        </div>
                        <ImgContainer theme={theme}>
                            <Img src={IbmPortraitPic.src} />
                        </ImgContainer>
                    </DescriptionSection>
                    <DescriptionSection style={{ height: '700px' }}>
                        <LogoContainer>
                            <LogoImg src={FlayrLogo.src} />
                        </LogoContainer>
                        <div style={{ fontSize: '30px' }}>Project</div>
                        <div
                            style={{
                                fontSize: '20px',
                                textAlign: 'center',
                                maxWidth: '600px',
                                marginBottom: '20px',
                            }}
                        >
                            A decentralized platform built on the ethereum
                            network that allows artists to design, mint and sell
                            their own tickets in the form of NFT's. Tickets are
                            then validated via QR code for easy entry.
                        </div>

                        <div
                            style={{
                                marginBottom: '20px',
                                maxWidth: '600px',
                                fontSize: '20px',
                            }}
                        >
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(52, 187, 143, .4)'
                                        : 'rgb(52, 187, 143)',
                                }}
                            >
                                Typescript
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(69, 115, 255, .4)'
                                        : 'rgb(69, 115, 255)',
                                }}
                            >
                                React
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(238, 149, 54, .4)'
                                        : 'rgb(238, 149, 54)',
                                }}
                            >
                                Solidity
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(52, 187, 143, .4)'
                                        : 'rgb(52, 187, 143)',
                                }}
                            >
                                Truffle
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(138, 52, 187, .4)'
                                        : 'rgb(138, 52, 187)',
                                }}
                            >
                                Ganache
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgb(52, 187, 143, .4)'
                                        : 'rgb(52, 187, 143)',
                                }}
                            >
                                Firebase
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgba(0, 0, 0, 0.08)'
                                        : 'rgba(255, 255, 255, 0.16)',
                                }}
                            >
                                HTML
                            </ToolContainer>
                            <ToolContainer
                                style={{
                                    backgroundColor: !isDarkMode
                                        ? 'rgba(0, 0, 0, 0.08)'
                                        : 'rgba(255, 255, 255, 0.16)',
                                }}
                            >
                                CSS
                            </ToolContainer>
                        </div>
                        <ImgContainer theme={theme}>
                            <Img src={flayrPortraitPic.src} />
                        </ImgContainer>
                    </DescriptionSection>
                </LeftSection>
            </ContentContainer>
        </WorkExperienceContainer>
    );
}
