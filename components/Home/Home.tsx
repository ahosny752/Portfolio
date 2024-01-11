'use client';
import styled from '@emotion/styled';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeProps, ThemeContextProps } from '@/contexts/ThemeContext';
import salonImage1 from '@/assets/salonImage1.jpeg';
import salonImage2 from '@/assets/salonImage2.jpeg';
import squiggle from '@/assets/squiggle.svg';
import { Inter, REM, Fredoka, Vibur } from 'next/font/google';
import Avatar from '@mui/material/Avatar';
import profilePic from '@/assets/profilepic.jpg';
import Chatbot from '../Chatbot';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

const HomeContainer = styled.div<ThemeProps>`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    /* background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor}; */
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

const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    @media only screen and (max-width: 767px) {
        width: 100%;
    }
`;

const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 600px;

    @media only screen and (max-width: 767px) {
        margin-bottom: 30px;
        width: 100%;
        order: -1; /* This moves the #right element to the beginning */
    }
`;

const PrimaryContainer = styled.div<ThemeProps>`
    display: flex;
    width: 50%;

    height: 860px;
    flex-direction: column;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
`;

const SecondaryContainer = styled.div<ThemeProps>`
    display: flex;
    width: 50%;
    height: 860px;
    flex-direction: column;
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
`;

const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const Image = styled.img`
    object-fit: cover;
    object-position: center;
    height: 100%;
`;

const HeaderContainer = styled.div<ThemeProps>`
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 200px;
    justify-content: center;
    align-items: center;

    .fullstack {
        font-size: 60px;
        font-weight: 900;
    }
`;

const Neon = styled.div`
    &.logo {
        height: 50px;
        width: 400px;
        user-select: none;
    }

    &.logo b {
        font-family: 400 'Vibur';
        color: #fee;
        font-size: 60px;
        text-shadow:
            0 -40px 100px,
            0 0 2px,
            0 0 1em #c744ff,
            0 0 0.5em #c744ff,
            0 0 0.1em #c744ff,
            0 10px 3px #000;
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

const StyledAvatar = styled(Avatar)<ThemeProps>`
    box-shadow: ${props =>
        props.theme.isDarkMode
            ? `0 0 0.2rem #bc13fe,
        0 0 0.2rem #bc13fe,
        0 0 2rem #bc13fe,
        0 0 0.8rem #bc13fe,
        0 0 2.8rem #bc13fe,
        inset 0 0 1.3rem #bc13fe`
            : 'unset'};
`;

const Title = styled.div`
    font-size: 60px;
    font-weight: bold;
    margin-top: -50px;
    @media only screen and (max-width: 767px) {
        font-size: 50px;
    }
`;

const SocialsContainer = styled.div`
    display: none;

    @media only screen and (max-width: 767px) {
        display: unset;
        font-size: 30px;
        margin-top: 50px;
        margin-bottom: 10px;
    }
`;

const SocialsContent = styled.div`
    height: 50px;
    width: 400px;
`;

const SocialsLabel = styled.span`
    font-size: 20px;
`;

const IconContainer = styled.div<ThemeProps>`
    margin-right: 10px;
    display: inline-flex;
    align-items: center;
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

const vibur = Vibur({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Home(props: any) {
    const themeContext = useTheme();

    const { theme, isDarkMode, setIsDarkMode } =
        themeContext as ThemeContextProps;

    return (
        <HomeContainer theme={theme}>
            <ContentContainer>
                <ContentLeft>
                    <div style={{ fontSize: '38px' }}>Full Stack</div>
                    <div>
                        <object
                            type="image/svg+xml"
                            data={squiggle.src}
                        ></object>
                    </div>

                    <Title>Software Engineer</Title>
                    <div style={{ fontSize: '24px' }}>
                        A collaborative connoisseur with an appetite for
                        knowledge. Javascript is my love language. Appreciator
                        of breathtaking UI, aesthetic subtlety, and contemporary
                        design.
                    </div>
                    <br />
                    <div style={{ fontSize: '20px' }}>
                        Like what you see? Lets Connect!
                    </div>

                    <SocialsContainer>
                        Social
                        <SocialsContent>
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
                        </SocialsContent>
                    </SocialsContainer>

                    <div
                        style={{
                            fontSize: '30px',
                            marginTop: '50px',
                            marginBottom: '10px',
                        }}
                    >
                        ToolKit{' '}
                    </div>
                    <div
                        style={{
                            height: '500px',
                            width: '400px',
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
                                    ? 'rgb(52, 187, 143, .4)'
                                    : 'rgb(52, 187, 143)',
                            }}
                        >
                            Typescript
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(52, 187, 143, .4)'
                                    : 'rgb(52, 187, 143)',
                            }}
                        >
                            HTML
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(52, 187, 143, .4)'
                                    : 'rgb(52, 187, 143)',
                            }}
                        >
                            CSS
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(52, 187, 143, .4)'
                                    : 'rgb(52, 187, 143)',
                            }}
                        >
                            SQL
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(52, 187, 143, .4)'
                                    : 'rgb(52, 187, 143)',
                            }}
                        >
                            Bash
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(52, 187, 143, .4)'
                                    : 'rgb(52, 187, 143)',
                            }}
                        >
                            PHP
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
                                    ? 'rgb(69, 115, 255, .4)'
                                    : 'rgb(69, 115, 255)',
                            }}
                        >
                            React Native
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
                            Node.Js
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(69, 115, 255, .4)'
                                    : 'rgb(69, 115, 255)',
                            }}
                        >
                            Express.Js
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(69, 115, 255, .4)'
                                    : 'rgb(69, 115, 255)',
                            }}
                        >
                            Chart.Js
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(238, 149, 54, .4)'
                                    : 'rgb(238, 149, 54)',
                            }}
                        >
                            Material UI
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
                                    ? 'rgb(238, 149, 54, .4)'
                                    : 'rgb(238, 149, 54)',
                            }}
                        >
                            Jest
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(238, 149, 54, .4)'
                                    : 'rgb(238, 149, 54)',
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
                            Truffle
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(138, 52, 187, .4)'
                                    : 'rgb(138, 52, 187)',
                            }}
                        >
                            Git
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(138, 52, 187, .4)'
                                    : 'rgb(138, 52, 187)',
                            }}
                        >
                            Docker
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(138, 52, 187, .4)'
                                    : 'rgb(138, 52, 187)',
                            }}
                        >
                            NPM
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(138, 52, 187, .4)'
                                    : 'rgb(138, 52, 187)',
                            }}
                        >
                            Azure
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(138, 52, 187, .4)'
                                    : 'rgb(138, 52, 187)',
                            }}
                        >
                            AWS
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(138, 52, 187, .4)'
                                    : 'rgb(138, 52, 187)',
                            }}
                        >
                            GCP
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgba(0, 0, 0, 0.08)'
                                    : 'rgba(255, 255, 255, 0.16)',
                            }}
                        >
                            JWT
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgba(0, 0, 0, 0.08)'
                                    : 'rgba(255, 255, 255, 0.16)',
                            }}
                        >
                            Ganache
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgba(0, 0, 0, 0.08)'
                                    : 'rgba(255, 255, 255, 0.16)',
                            }}
                        >
                            Jira
                        </ToolContainer>
                        {/* <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgba(0, 0, 0, 0.08)'
                                    : 'rgba(255, 255, 255, 0.16)',
                            }}
                        >
                            React Native
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgba(0, 0, 0, 0.08)'
                                    : 'rgba(255, 255, 255, 0.16)',
                            }}
                        >
                            React Native
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(69, 115, 255, .4)'
                                    : 'rgb(69, 115, 255)',
                            }}
                        >
                            NextJs
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(69, 115, 255, .4)'
                                    : 'rgb(69, 115, 255)',
                            }}
                        >
                            SQL
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(69, 115, 255, .4)'
                                    : 'rgb(69, 115, 255)',
                            }}
                        >
                            Bash
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(138, 52, 187, .4)'
                                    : 'rgb(138, 52, 187)',
                            }}
                        >
                            Git
                        </ToolContainer>
                        <ToolContainer
                            style={{
                                backgroundColor: !isDarkMode
                                    ? 'rgb(138, 52, 187, .4)'
                                    : 'rgb(138, 52, 187)',
                            }}
                        >
                            PHP
                        </ToolContainer> */}
                    </div>
                </ContentLeft>
                <ContentRight>
                    {' '}
                    <StyledAvatar
                        theme={theme}
                        alt="Remy Sharp"
                        src={profilePic.src}
                        sx={{ width: 250, height: 250 }}
                    />
                    <Chatbot />
                </ContentRight>
            </ContentContainer>
        </HomeContainer>
    );
}
