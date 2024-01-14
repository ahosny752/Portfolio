import { useState, useEffect } from 'react';

import { ThemeProps, ThemeContextProps } from '@/contexts/ThemeContext';
import styled from '@emotion/styled';
import daviePic from '../../assets/davie.ai.png';
import ibmPic from '../../assets/ibm.png';
import FlayrPic from '../../assets/flayr.png';
const WorkExperienceContainer = styled.div`
    height: 100%;
    height: 1300px;
`;
const ContentContainer = styled.div`
    display: flex;
    overflow: hidden;
`;
const DavieImgContainer = styled.div`
    position: absolute;
    top: 900px; /* Adjust the top value as needed */
    left: 50%; /* Adjust the left value as needed */
    height: 500px;
    transition: opacity 0.5s ease; /* Add a smooth transition effect */
`;

const DavieImg = styled.img`
    object-fit: contain;
    width: 100%; /* Make sure the image takes the full width of its container */
    height: 100%; /* Make sure the image takes the full height of its container */
    border: 1px solid black;
`;

const IBMImgContainer = styled.div`
    position: absolute;
    top: 900px; /* Adjust the top value as needed */
    left: 50%; /* Adjust the left value as needed */
    /* border: 1px solid red; */
    height: 500px;
    transition: opacity 0.5s ease; /* Add a smooth transition effect */
`;

const IBMImg = styled.img`
    object-fit: contain;
    border: 1px solid black;
    width: 100%; /* Make sure the image takes the full width of its container */
    height: 100%; /* Make sure the image takes the full height of its container */
`;

const LeftSection = styled.div`
    /* border: 1px solid green; */

    height: 1900px;
    width: 50%;
`;
const RightSection = styled.div`
    /* border: 1px solid blue; */
    height: 500px;
    width: 50%;
    overflow: auto; /* Add this to enable scrolling */
`;

const DescriptionSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 430px;
    font-size: 40px;
`;
export default function WorkExperience({ theme }: ThemeProps) {
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

    console.log(scrollY, 'y');

    const calculateOpacity = () => {
        const minScroll = 973;
        const maxScroll = 1430;

        // Ensure opacity is within the range [0, 1]
        const opacity =
            1 -
            Math.min(
                Math.max((scrollY - minScroll) / (maxScroll - minScroll), 0),
                1,
            );

        return opacity;
    };

    // const calculateFadeInOpacity = () => {
    //     const fadeInStart = 973; // Adjust this value based on when you want the fade-in effect to start
    //     const fadeInEnd = 1430; // Adjust this value based on when you want the fade-in effect to be complete

    //     // Ensure opacity is within the range [0, 1]
    //     const opacity = Math.min(
    //         Math.max((scrollY - fadeInStart) / (fadeInEnd - fadeInStart), 0),
    //         1,
    //     );

    //     return opacity;
    // };

    const calculateFadeInOpacity = (start: number, end: number) => {
        // Ensure opacity is within the range [0, 1]
        return Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    };

    console.log(calculateOpacity(), 'opacity');
    return (
        <WorkExperienceContainer>
            <ContentContainer>
                <LeftSection>
                    <DescriptionSection>Davie.ai</DescriptionSection>
                    <DescriptionSection>IBM</DescriptionSection>
                    <DescriptionSection>Flayr Labs</DescriptionSection>
                </LeftSection>
                <RightSection>
                    <DavieImgContainer
                        style={{
                            position: scrollY > 944 ? 'fixed' : 'absolute',
                            top: scrollY > 944 ? '-44px' : '910px',
                            opacity: calculateOpacity(),
                            display: scrollY > 1780 ? 'none' : 'unset',
                        }}
                    >
                        <DavieImg src={daviePic.src} />
                    </DavieImgContainer>
                    <IBMImgContainer
                        style={{
                            position: scrollY > 944 ? 'fixed' : 'absolute',
                            top: scrollY > 944 ? '-37px' : '910px',
                            opacity: calculateFadeInOpacity(948, 1364),
                            display: scrollY > 1780 ? 'none' : 'unset',
                        }}
                    >
                        <IBMImg src={ibmPic.src} />
                    </IBMImgContainer>

                    <IBMImgContainer
                        style={{
                            position:
                                scrollY > 944 && scrollY <= 1780
                                    ? 'fixed'
                                    : 'absolute',
                            top:
                                scrollY > 944 && scrollY <= 1780
                                    ? '-44px'
                                    : '1745px',
                            opacity:
                                scrollY <= 1780
                                    ? calculateFadeInOpacity(1364, 1760)
                                    : 'unset', // Reset opacity if scroll is above 1780
                        }}
                    >
                        <IBMImg src={FlayrPic.src} />
                    </IBMImgContainer>
                </RightSection>
            </ContentContainer>
        </WorkExperienceContainer>
    );
}
