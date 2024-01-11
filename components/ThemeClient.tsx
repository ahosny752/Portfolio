'use client';
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider } from '@/contexts/ThemeContext';
import App from './App';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeProps, ThemeContextProps } from '@/contexts/ThemeContext';

export default function ThemeClient({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
            ></LocalizationProvider>
            <App>{children}</App>
        </ThemeProvider>
    );
}
