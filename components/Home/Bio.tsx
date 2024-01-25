'use client';
import React from 'react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/contexts/ThemeContext';
import squiggle from '@/assets/squiggle.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import ToolKit from './ToolKit';
import { useRouter } from 'next/navigation';

const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    @media only screen and (max-width: 767px) {
        width: 100%;
        margin-top: 60px;
    }
`;

const Title = styled.div`
    font-size: 60px;
    font-weight: bold;
    margin-top: -50px;
    @media only screen and (max-width: 767px) {
        font-size: 40px;
        margin-top: -40px;
    }
`;

const SocialsContainer = styled.div`
    display: none;
    height: 140px;

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

export default function Bio({ theme }: ThemeProps) {
    const { push } = useRouter();

    return (
        <ContentLeft>
            <div style={{ fontSize: '44px' }}>Full Stack</div>
            <div>
                <object type="image/svg+xml" data={squiggle.src}></object>
            </div>

            <Title>Software Engineer</Title>
            <div style={{ fontSize: '24px' }}>
                A collaborative connoisseur with an appetite for knowledge.
                Javascript is my love language. Appreciator of breathtaking UI,
                aesthetic subtlety, and contemporary design.
            </div>
            <br />
            <div style={{ fontSize: '20px' }}>
                Like what you see? Lets Connect!
            </div>

            <SocialsContainer>
                Social
                <SocialsContent>
                    <IconContainer
                        onClick={() => push('https://github.com/ahosny752')}
                        theme={theme}
                    >
                        <GitHubIcon />
                        <SocialsLabel>GitHub</SocialsLabel>
                    </IconContainer>
                    <IconContainer
                        onClick={() =>
                            push('https://www.linkedin.com/in/ahosny752/')
                        }
                        theme={theme}
                    >
                        <LinkedInIcon />
                        <SocialsLabel>LinkedIn</SocialsLabel>
                    </IconContainer>
                    <IconContainer
                        onClick={() => push('mailto:ajhosny@gmail.com')}
                        theme={theme}
                    >
                        <EmailIcon />
                        <SocialsLabel>Email</SocialsLabel>
                    </IconContainer>
                    <IconContainer
                        onClick={() => push('/resume')}
                        theme={theme}
                    >
                        <ArticleIcon />
                        <SocialsLabel>Resume</SocialsLabel>
                    </IconContainer>
                </SocialsContent>
            </SocialsContainer>
            <ToolKit theme={theme} />
        </ContentLeft>
    );
}
