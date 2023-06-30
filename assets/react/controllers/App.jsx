import React from 'react';
import {Box, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {ColorModeContext, useMode} from "../theme";
import {Topbar} from "./Topbar";
import {SectionTitle} from "./SectionTitle";
import {SectionProjects} from "./SectionProjects";
import {SectionContact} from "./SectionContact";
import CopyrightIcon from '@mui/icons-material/Copyright';
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function () {
    const [theme, colorMode] = useMode()
    useWindowDimensions()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <Topbar/>
                    <SectionTitle/>
                    <SectionProjects/>
                    <SectionContact/>
                    <Box id="footer" paddingX={5} display="flex" justifyContent="center">
                        <Typography sx={{display: 'flex', alignItmes: 'center'}}>
                            <CopyrightIcon sx={{fontSize: '1em', alignSelf: 'center'}}/>&nbsp;Alex Perrot
                        </Typography>
                    </Box>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
