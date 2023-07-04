import React from 'react'
import {Box, IconButton, InputBase, useTheme} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {ColorModeContext} from "../../theme";
import {useContext} from "react";

export function Topbar () {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" borderRadius="3px">
                <InputBase sx={{ml:1}} placeholder="Search" />
                <IconButton type="button" sx={{p:1}}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ?
                        (<LightModeIcon></LightModeIcon>)
                        :
                        (<DarkModeIcon></DarkModeIcon>)
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}