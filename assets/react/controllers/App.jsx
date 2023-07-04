import React from 'react';
import {Box, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {ThemeContext, useMode} from "./App/theme";
import {Topbar} from "./App/Topbar";
import {SectionTitle} from "./App/SectionTitle";
import {SectionProjects} from "./App/SectionProjects";
import {SectionContact} from "./App/SectionContact";
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function () {
    const [theme, colorMode, mobileBreakpoint, xlBreakpoint, lgBreakpoint, mdBreakpoint] = useMode()

    return (
        <ThemeContext.Provider value={{colorMode, mobileBreakpoint, xlBreakpoint, lgBreakpoint, mdBreakpoint}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Topbar/>
                <SectionTitle/>
                <SectionProjects/>
                <SectionContact/>
                <Box id="footer" paddingX={5} display="flex" justifyContent="center">
                    <Typography sx={{display: 'flex', alignItmes: 'center'}}>
                        <CopyrightIcon sx={{fontSize: '1em', alignSelf: 'center'}}/>&nbsp;Alex Perrot
                    </Typography>
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
