import React from 'react'
import {CssBaseline, Link, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./React-Dashboard/theme";
import {Topbar} from "./React-Dashboard/views/global/Topbar";
import {SidebarApp} from "./React-Dashboard/views/global/SidebarApp";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserTable} from "./React-Dashboard/views/users/UserTable";
import {Dashboard} from "./React-Dashboard/views/Dashboard";
import {Calendar} from "./React-Dashboard/views/Calendar";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Pie} from "./React-Dashboard/views/charts/Pie";
import {Line} from "./React-Dashboard/views/charts/Line";
import {Bar} from "./React-Dashboard/views/charts/Bar";
import {Geo} from "./React-Dashboard/views/charts/Geo";

export default function () {
    const [theme, colorMode] = useMode()

    return (
        <React.StrictMode>
            <BrowserRouter>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Link sx={{position:'absolute',top:0,left:0,zIndex:999,fontSize:'1rem'}} href="/"><ExitToAppIcon/> Revenir sur devalex.fr</Link>
                        <div style={{position:'relative',display:'flex',width:'100%',height:'100%'}}>
                            <SidebarApp/>
                            <main style={{width:'100%',height:'100%'}}>
                                <Topbar/>
                                <Routes>
                                    <Route path="/react-dashboard" element={<Dashboard/>}/>
                                    <Route path="/react-dashboard/setting/users" element={<UserTable/>}/>
                                    <Route path="/react-dashboard/calendar" element={<Calendar/>}/>
                                    <Route path="/react-dashboard/chart/pie" element={<Pie/>}/>
                                    <Route path="/react-dashboard/chart/line" element={<Line/>}/>
                                    <Route path="/react-dashboard/chart/Bar" element={<Bar/>}/>
                                    <Route path="/react-dashboard/chart/Geo" element={<Geo/>}/>
                                </Routes>
                            </main>
                        </div>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}