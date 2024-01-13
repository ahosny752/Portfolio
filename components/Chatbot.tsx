import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { ThemeProps, ThemeContextProps } from '@/contexts/ThemeContext';
import { useTheme } from '@/contexts/ThemeContext';

const ChatbotContainer = styled.div<ThemeProps>`
    width: 380px;
    margin: 0 auto;
    border: ${props => (props.theme.isDarkMode ? 'unset' : '1px solid #ccc')};
    border-radius: 8px;
    padding: 16px;
    background-color: ${props => props.theme.primaryColor};
    box-shadow: ${props =>
        props.theme.isDarkMode
            ? `0 0 0.2rem #bc13fe,
        0 0 0.2rem #bc13fe,
        0 0 2rem #bc13fe,
        0 0 0.8rem #bc13fe,
        0 0 2.8rem #bc13fe,
        inset 0 0 1.3rem #bc13fe`
            : 'unset'};
    .message {
        margin: 8px 0;
        padding: 8px;
        border-radius: 4px;
        font-size: 16px;
        line-height: 1.5;
    }
    .user-message {
        background-color: ${props =>
            props.theme.isDarkMode ? '#007bff' : '#a5c8ed'};
        text-align: right;
    }
    .ai-message {
        background-color: ${props =>
            props.theme.isDarkMode ? '#bc13fe' : '#ecc0fe'};
        text-align: left;
    }
    .chatbot-input-form {
        display: flex;
        margin-top: 16px;
    }
    .chatbot-input-form input {
        flex: 1;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px 0 0 4px;
        font-size: 16px;
    }
    .chatbot-input-form button {
        padding: 8px 16px;
        border: none;
        background-color: #bc13fe;
        color: white;
        border-radius: 0 4px 4px 0;
        font-size: 16px;
        cursor: pointer;
    }
    .chatbot-input-form button:hover {
        background-color: #bb13fe87;
    }
`;
const ChatBotMessages = styled.div`
    height: 250px;
    overflow-y: scroll;
    padding: 8px;
`;

const ChatbotHeader = styled.div`
    margin-left: 10px;
`;

const ChatbotLoader = styled.div<ThemeProps>`
    .loader {
        position: relative;
        margin-left: 40%;
        height: 30px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin: 40px; */
    }

    .loader__dot {
        display: block;
        width: 10px;
        height: 10px;
        margin: calc(10px / 2.5);
        border-radius: calc(10px / 2);
        background-color: ${props =>
            props.theme.isDarkMode ? '#dea9f4' : '#bc13fe'};

        float: left;
    }

    /* Slide animation */
    .slide {
        will-change: transform, opacity;
        animation: slide 400ms infinite linear;
    }

    .slide__one {
        animation: fadeIn 400ms infinite ease-out;
    }

    .slide__two {
        animation: fadeOut 400ms infinite ease-in;
    }

    @keyframes slide {
        from {
            transform: translateX(-18px);
        }
        to {
            transform: translateX(0px);
        }
    }

    @keyframes fadeIn {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
`;

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{ text: string; user: boolean }[]>(
        [],
    );
    const chatbotRef = useRef<HTMLDivElement | null>(null);

    const themeContext = useTheme();

    const { theme, isDarkMode, setIsDarkMode } =
        themeContext as ThemeContextProps;

    const openingMessage =
        "Hi I'm AJ's AI assistant. Im trained on his entire life!, hehe. Well at least some of it. You can ask me anything about AJ. Ask me things like 'What is AJ's favorite color?' or 'What is AJ's favorite food?', You can even ask about my past work experience, projects, hobbies or even fun facts!";

    useEffect(() => {
        const aiMessage = {
            text: openingMessage,
            user: false,
        };
        setMessages([aiMessage]);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const chatWithGPT3 = async (userInput: string) => {
        const headers = {
            'Content-Type': 'application/json',
        };

        const data = {
            question: userInput,
        };
        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers,
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            console.log(responseData, 'response data');
            return responseData;
        } catch (error) {
            console.error(
                'Error communicating with the API:',
                (error as any).message,
            );
            return '';
        }
    };

    const scrollToBottom = () => {
        if (chatbotRef.current) {
            console.log('here');
            chatbotRef.current.style.scrollBehavior = 'smooth'; // Apply smooth scrolling

            chatbotRef.current.scrollTop = chatbotRef.current.scrollHeight;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setInput('');

        e.preventDefault();
        if (!input.trim()) return;
        const userMessage = { text: input, user: true };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        const aiMessage = { text: 'loading', user: false };
        setMessages(prevMessages => [...prevMessages, aiMessage]);
        const response = await chatWithGPT3(input);

        const newAiMessage = { text: response.answer.content, user: false };
        setMessages(prevMessages => [
            ...prevMessages.slice(0, -1),
            newAiMessage,
        ]);
    };
    return (
        <ChatbotContainer theme={theme}>
            <ChatbotHeader>AJ's AI Assistant</ChatbotHeader>
            <ChatBotMessages ref={chatbotRef}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${
                            message.user ? 'user-message' : 'ai-message'
                        }`}
                    >
                        {message.text === 'loading' &&
                        message.user === false ? (
                            <ChatbotLoader theme={theme}>
                                <div className="loader slide">
                                    <span className="loader__dot slide__one"></span>
                                    <span className="loader__dot"></span>
                                    <span className="loader__dot"></span>
                                    <span className="loader__dot slide__two"></span>
                                </div>
                            </ChatbotLoader>
                        ) : (
                            message.text
                        )}
                    </div>
                ))}
            </ChatBotMessages>
            <form className="chatbot-input-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </ChatbotContainer>
    );
};
export default Chatbot;
