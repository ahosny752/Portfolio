import { useState, useEffect } from 'react';
import { ThemeProps } from '@/contexts/ThemeContext';
import styled from '@emotion/styled';
import IbmPortraitPic from '../../assets/ibmPortrait.png';
import DaviePortraitPic from '../../assets/daviePortrait.png';
import flayrPortraitPic from '../../assets/flayrlabsHome.png';
import davieWhiteLogo from '../../assets/davielogo.png';
import davieBlackLogo from '../../assets/davieblack.png';
import IBMBlackLogo from '../../assets/ibmlogo.png';
import FlayrLogo from '../../assets/flayrLogo.png';

const WorkExperienceContainer = styled.div`
    height: 100%;
    height: 100%;
    margin-top: 60px;
`;
const ContentContainer = styled.div`
    position: relative;
    display: flex;
`;
const ImgContainer = styled.div<ThemeProps>`
    margin-top: 8px;
    position: -webkit-sticky;
    position: sticky;
    height: 100vh;
    top: 0px;
    border: ${props => (props.theme.isDarkMode ? 'unset' : '1px solid #ccc')};
`;

const Img = styled.img`
    object-fit: fill; /* Adjust to 'contain' if you want to maintain the aspect ratio */
    width: 100%;
    height: 100%;
`;

const LeftSection = styled.div`
    width: 50%;
`;
const RightSection = styled.div`
    width: 50%;
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
    height: 300px;
    width: 600px;
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

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        // Use the scrollY property of the window object to get the vertical scroll position
        const verticalScroll =
            window.scrollY || document.documentElement.scrollTop;
        setScrollY(verticalScroll);
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once during mount/unmount

    const calculateOpacity = () => {
        const minScroll = 950;
        const maxScroll = 1638;

        // Ensure opacity is within the range [0, 1]
        const opacity =
            1 -
            Math.min(
                Math.max((scrollY - minScroll) / (maxScroll - minScroll), 0),
                1,
            );

        return opacity;
    };

    const calculateFadeInOpacity = (start: number, end: number) => {
        // Ensure opacity is within the range [0, 1]
        return Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    };

    return (
        <WorkExperienceContainer>
            <ContentContainer>
                <LeftSection>
                    <DescriptionSection style={{ position: 'relative' }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: '0px',
                                left: '60px',
                                fontSize: '50px',
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
                        <div style={{ marginTop: '-90px', fontSize: '30px' }}>
                            August 2021 - Present
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                textAlign: 'center',
                                marginTop: '10px',
                                maxWidth: '600px',
                            }}
                        >
                            A powerful ad tech platform that leverages the power
                            of generative AI to streamline the process of
                            generating, creating, tracking, analyzing, and
                            executing high perforformance advertising campaigns.
                        </div>
                        <div
                            style={{
                                width: '500px',
                                height: '100px',
                                flexDirection: 'row',
                                fontSize: '20px',
                                marginTop: '10px',
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
                    </DescriptionSection>
                    <DescriptionSection>
                        <LogoContainer>
                            <LogoImg src={IBMBlackLogo.src} />
                        </LogoContainer>
                        <div style={{ marginTop: '-20px', fontSize: '30px' }}>
                            August 2018 - August 2021
                        </div>

                        <div
                            style={{
                                fontSize: '20px',
                                textAlign: 'center',
                                marginTop: '10px',
                                maxWidth: '600px',
                            }}
                        >
                            A tool that transforms how internal sales teams
                            manage deal workflows, track progress, generate
                            reports and manage contract data.
                        </div>
                        <div
                            style={{
                                width: '500px',
                                height: '100px',
                                flexDirection: 'row',
                                fontSize: '20px',
                                marginTop: '10px',
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
                    </DescriptionSection>
                    <DescriptionSection>
                        <LogoContainer>
                            <LogoImg src={FlayrLogo.src} />
                        </LogoContainer>
                        <div style={{ marginTop: '-60px', fontSize: '30px' }}>
                            Project
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                textAlign: 'center',
                                marginTop: '10px',
                                maxWidth: '600px',
                            }}
                        >
                            A decentralized platform built on the ethereum
                            network that allows artists to design, mint and sell
                            their own tickets in the form of NFT's. Tickets are
                            then validated via QR code for easy entry.
                        </div>

                        <div
                            style={{
                                width: '500px',
                                height: '100px',
                                flexDirection: 'row',
                                fontSize: '20px',
                                marginTop: '10px',
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
                    </DescriptionSection>
                </LeftSection>
                <RightSection>
                    <ImgContainer
                        theme={theme}
                        style={{
                            opacity: calculateOpacity(),
                        }}
                    >
                        <Img src={DaviePortraitPic.src} />
                    </ImgContainer>

                    <ImgContainer
                        theme={theme}
                        style={{
                            marginTop: '-860px',
                            opacity: calculateFadeInOpacity(1300, 1860),
                        }}
                    >
                        <Img src={IbmPortraitPic.src} />
                    </ImgContainer>
                    <ImgContainer
                        theme={theme}
                        style={{
                            opacity: calculateFadeInOpacity(2100, 2600),
                        }}
                    >
                        <Img src={flayrPortraitPic.src} />
                    </ImgContainer>
                </RightSection>
            </ContentContainer>
        </WorkExperienceContainer>
    );
}
