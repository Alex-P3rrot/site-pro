import React from 'react'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./React-Dashboard/theme";
import {Topbar} from "./React-Dashboard/views/global/Topbar";
import {SidebarApp} from "./React-Dashboard/views/global/SidebarApp";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserTable} from "./React-Dashboard/views/users/UserTable";
import {Dashboard} from "./React-Dashboard/views/Dashboard";
import {Calendar} from "./React-Dashboard/views/Calendar";

export default function () {
    const [theme, colorMode] = useMode()

    return (
        <React.StrictMode>
            <BrowserRouter>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <div style={{position:'relative',display:'flex',width:'100%',height:'100%'}}>
                            <SidebarApp/>
                            <main style={{width:'100%',height:'100%'}}>
                                <Topbar/>
                                <Routes>
                                    <Route path="/react-dashboard" element={<Dashboard/>}/>
                                    <Route path="/react-dashboard/setting/users" element={<UserTable/>}/>
                                    <Route path="/react-dashboard/calendar" element={<Calendar/>}/>
                                </Routes>
                            </main>
                        </div>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}