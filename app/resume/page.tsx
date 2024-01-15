'use client';
import Link from 'next/link';
import styled from '@emotion/styled';
import ResumePic from '@/assets/resume.png';
const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const ResumeContent = styled.div`
    border: 1px solid #ccc;
    width: 100%;
    max-width: 800px; /* Set a maximum width if needed */
    height: 100%; /* Set a fixed height or adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ResumeImg = styled.img`
    width: 100%; /* Make the image responsive to its container */
    height: auto; /* Maintain the aspect ratio */
    max-width: 100%;
`;

export default function Resume() {
    return (
        <ResumeContainer>
            <ResumeContent>
                <ResumeImg src={ResumePic.src} />
            </ResumeContent>
        </ResumeContainer>
    );
}
