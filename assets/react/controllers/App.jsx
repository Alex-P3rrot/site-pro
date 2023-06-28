import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "../theme";
import {Topbar} from "./Topbar";
import {SectionTitle} from "./SectionTitle";
import {SectionProjects} from "./SectionProjects";

export default function () {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <Topbar/>
                    <SectionTitle/>
                    <SectionProjects/>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
