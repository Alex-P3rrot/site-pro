import {createContext, useMemo, useState} from "react";
import {createTheme} from "@mui/material";

export const themeColors = (mode) => ({
    palette: {
        mode: mode,
        ...(mode === 'dark'
            ? {
                primary: {
                    main: "#141b2d",
                },
                secondary: {
                    main: "#4cceac",
                },
                neutral: {
                    dark: "#a3a3a3",
                    main: "#666666",
                    light: "#141414",
                },
                card: {
                    backgroundColor: "#171f34",
                    ':hover': {
                        boxShadow: '0 0 50px #1f2a48',
                    }
                },
                modal: {
                    backgroundColor: "#171f34",
                },
                background: {
                    default: "#141b2d",
                },
            }
            : {
                primary: {
                    main: "#040509",
                },
                secondary: {
                    main: "#4cceac",
                },
                neutral: {
                    dark: "#a3a3a3",
                    main: "#666666",
                    light: "#141414",
                },
                card: {
                    backgroundColor: "#fcfcfc",
                    boxShadow: '0 0 50px #d8deea',
                    ':hover': {
                        boxShadow: 'none',
                    }
                },
                modal: {
                    backgroundColor: "#fcfcfc",
                },
                background: {
                    default: "#fcfcfc",
                },
            }),
    }
})

export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
})

export const useMode = () => {
    const [mode, setMode] = useState('dark')

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode(prev => prev === 'dark' ? 'light' : 'dark')
        }
    }), [])

    const theme = useMemo(() => createTheme(themeColors(mode)), [mode])

    return [theme, colorMode]
}