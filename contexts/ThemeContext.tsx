import React, { useContext } from 'react';

export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    isDarkMode: boolean;
}

const lightTheme: Theme = {
    primaryColor: '#ffffff', // white
    secondaryColor: '#000000', // black
    isDarkMode: false,
};

const darkTheme: Theme = {
    primaryColor: '#000000', // black
    secondaryColor: '#ffffff', // white
    isDarkMode: true,
};

export interface ThemeContextProps {
    theme: Theme;
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ThemeProps {
    theme: Theme;
}
export const ThemeContext = React.createContext<ThemeContextProps | undefined>(
    undefined,
);

export function useTheme() {
    return useContext(ThemeContext);
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
