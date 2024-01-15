import { ThemeProps } from '@/contexts/ThemeContext';
import styled from '@emotion/styled';

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

export default function ToolKit({ theme }: ThemeProps) {
    const { isDarkMode } = { ...theme };

    return (
        <div>
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
        </div>
    );
}
