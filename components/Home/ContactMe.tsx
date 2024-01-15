'use client';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProps } from '@/contexts/ThemeContext';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MessageIcon from '@mui/icons-material/Message';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const ContactMeContainer = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    @media only screen and (max-width: 767px) {
    }
`;

const ContactMeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 80%; /* Adjust as needed */
    max-width: 100%; /* Adjust as needed */
    margin-bottom: 100px;
`;
const ContactMeTitle = styled.div`
    text-align: center;
    font-size: 40px;
`;

const ContactMeForm = styled.form<ThemeProps>`
    .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
        color: black;
    }

    box-shadow: ${props =>
        props.theme.isDarkMode
            ? `0 0 0.2rem #bc13fe,
        0 0 0.2rem #bc13fe,
        0 0 2rem #bc13fe,
        0 0 0.8rem #bc13fe,
        0 0 2.8rem #bc13fe,
        inset 0 0 1.3rem #bc13fe`
            : 'unset'};

    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
`;

const StyledTextField = styled(TextField)`
    width: 100%;
`;

const Row = styled.div`
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    gap: 10px;
`;

const StyledButton = styled(Button)`
    height: 50px;
    background-color: #bc13fe;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    :hover {
        background-color: #6a0b90f1;
    }

    :disabled {
        background-color: #d1ace1;
        color: red;
    }
`;

interface FormData {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
}
export default function ContactMe({ theme }: ThemeProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    });

    const [postData, setPostData] = useState({
        isLoading: false,
        error: false,
        success: false,
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isDisabled =
        formData.name === '' ||
        formData.email === '' ||
        formData.message === '' ||
        formData.phone === '';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setPostData(prevData => ({
            ...prevData,
            isLoading: true,
            success: false,
            error: false,
        }));

        try {
            await fetch('/api/contactMe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            setPostData(prevData => ({
                ...prevData,
                isLoading: false,
                success: true,
            }));
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (err) {
            setPostData(prevData => ({
                ...prevData,
                isLoading: false,
                success: false,
                error: true,
            }));
        }
    };
    return (
        <ContactMeContainer>
            <ContactMeContent>
                <ContactMeTitle>
                    Interested in my work? Contact Me!
                </ContactMeTitle>
                <ContactMeForm theme={theme} onSubmit={handleSubmit}>
                    <Row>
                        <StyledTextField
                            id="input-with-icon-textfield"
                            label="Full Name"
                            name="name"
                            required
                            onChange={handleInputChange}
                            value={formData.name}
                            InputProps={{
                                classes: {
                                    input: 'red',
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                        <StyledTextField
                            id="input-with-icon-textfield"
                            label="Company"
                            name="company"
                            onChange={handleInputChange}
                            value={formData.company}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BusinessIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Row>
                    <Row>
                        <StyledTextField
                            id="input-with-icon-textfield"
                            label="Email Address"
                            name="email"
                            required
                            onChange={handleInputChange}
                            value={formData.email}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                        <StyledTextField
                            id="input-with-icon-textfield"
                            label="Phone Number"
                            name="phone"
                            required
                            onChange={handleInputChange}
                            value={formData.phone}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIphoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Row>
                    <Row>
                        <StyledTextField
                            style={{ width: '100%' }}
                            id="input-with-icon-textfield"
                            label="Message"
                            name="message"
                            required
                            onChange={handleInputChange}
                            value={formData.message}
                            multiline
                            rows={4}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MessageIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Row>
                    <StyledButton disabled={isDisabled} type="submit">
                        {postData.isLoading ? (
                            <CircularProgress
                                style={{
                                    height: '20px',
                                    width: '20px',
                                    color: 'white',
                                }}
                                color="primary"
                            />
                        ) : (
                            <div>
                                {isDisabled
                                    ? 'Please fill out the required fields!'
                                    : 'Sumbit'}
                            </div>
                        )}
                    </StyledButton>
                    <br />
                </ContactMeForm>
                <div
                    style={{
                        color: theme.isDarkMode ? 'white' : 'black',
                    }}
                >
                    {postData.success ? (
                        <div>
                            Your message was recieved!, I will be in touch with
                            you!.
                        </div>
                    ) : null}
                    {postData.error ? <div>Something went wrong.</div> : null}
                </div>
            </ContactMeContent>
        </ContactMeContainer>
    );
}
