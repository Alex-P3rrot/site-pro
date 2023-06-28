import React from 'react';
import {Box, IconButton, useTheme} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {ColorModeContext} from "../theme";
import {useContext} from "react";

export function Topbar() {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box>
                {/*<img src={logo} height={50} alt="logo"/>*/}
            </Box>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ?
                    (<LightModeIcon></LightModeIcon>)
                    :
                    (<DarkModeIcon></DarkModeIcon>)
                }
            </IconButton>
        </Box>
    )
}