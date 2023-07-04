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
                background: {
                    default: "#141b2d",
                },
                sidebar: {
                    backgroundColor: "#192238",
                    activeColorText: "rgba(80,232,255,0.69)"
                },
                userTable: {
                    backgroundColor: "#192238",
                    accessColumn: {
                        admin: "#06804c",
                        manager: "#05b268",
                        user: "#0af593",
                        default: "#0af593"
                    },
                    cellFocused: "rgba(255,255,255,0.34)",
                    checkbox: "#fcfcfc!important"
                },
                calendar: {
                    dateSelected: {
                        backgroundColor: "#fcfcfc!important",
                        color: "#141b2d"
                    },
                    dateHovered: "rgba(252,252,252,0.1)"
                },
            }
            : {
                primary: {
                    main: "#273056",
                },
                secondary: {
                    main: "#4cceac",
                },
                neutral: {
                    dark: "#a3a3a3",
                    main: "#666666",
                    light: "#141414",
                },
                background: {
                    default: "#fcfcfc",
                },
                sidebar: {
                    backgroundColor: "#e4fff7",
                    activeColorText: "#a3beb6"
                },
                userTable: {
                    backgroundColor: "#e4fff7",
                    accessColumn: {
                        admin: "#045431",
                        manager: "#088651",
                        user: "#08c475",
                        default: "#08c475"
                    },
                    cellFocused: "rgba(0,0,0,0.1)",
                    checkbox: "#141b2d"
                },
                calendar: {
                    dateSelected: {
                        backgroundColor: "#141b2d!important",
                        color: "#fcfcfc"
                    },
                    dateHovered: "rgba(20,27,45,0.1)"
                }
            }),
    },
    components: {
        ...(mode === 'dark'
            ? {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            '&:hover': {
                                boxShadow: '0 0 10px #fcfcfc',
                                backgroundColor: "#fcfcfc"
                            },
                            backgroundColor: "#fcfcfc"
                        }
                    }
                }
            }
            : {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            '&:hover': {
                                boxShadow: '0 0 10px #141b2d',
                                backgroundColor: "#141b2d"
                            },
                            backgroundColor: "#141b2d"
                        }
                    }
                }
            })
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