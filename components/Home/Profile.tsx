'use client';
import React from 'react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/contexts/ThemeContext';
import Avatar from '@mui/material/Avatar';
import Chatbot from '../Chatbot';
import profilePic from '@/assets/profilepic.jpg';

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
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export default function Profile({ theme }: ThemeProps) {
    return (
        <ContentRight>
            <StyledAvatar
                theme={theme}
                alt="Remy Sharp"
                src={profilePic.src}
                sx={{ width: 380, height: 280 }}
            />
            <Chatbot />
        </ContentRight>
    );
}
