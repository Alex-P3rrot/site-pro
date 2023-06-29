import React from 'react';
import {Box, IconButton, Link, Tooltip, Typography, useTheme} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {ColorModeContext} from "../theme";
import {useContext} from "react";
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const logoModeDark = require('../../images/logoModeDark.png')
const logoModeLight = require('../../images/logoModeLight.png')

export function Topbar() {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const toProjectSection = () => {
        const sectionProject =  document.getElementById('sectionProject')
        console.log(sectionProject)
        sectionProject.scrollIntoView({behavior: "smooth"})
    }

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box>
                <img src={theme.palette.mode === "dark" ? logoModeDark : logoModeLight} height={100} alt="logo"/>
            </Box>
            <Box>
                <Tooltip title={<Typography>Réalisations</Typography>}>
                    <IconButton onClick={toProjectSection}>
                        <CodeIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={<Typography>Github</Typography>}>
                    <IconButton onClick={() => window.open('https://github.com/Alex-P3rrot', '_blank')}>
                        <GitHubIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={<Typography>Linkedin</Typography>}>
                    <IconButton onClick={() => window.open('https://www.linkedin.com/in/alex-perrot/', '_blank')}>
                        <LinkedInIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={<Typography>Mode {theme.palette.mode === "dark" ? 'light' : 'dark'}</Typography>}>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ?
                            (<LightModeIcon></LightModeIcon>)
                            :
                            (<DarkModeIcon></DarkModeIcon>)
                        }
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
}