import React from 'react'
import {Sidebar, Menu, MenuItem, SubMenu, menuClasses} from 'react-pro-sidebar';
import {Avatar, Box, IconButton, Tooltip, Typography, useTheme} from "@mui/material";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import PieChartIcon from "@mui/icons-material/PieChart";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import GroupsIcon from "@mui/icons-material/Groups";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MapIcon from '@mui/icons-material/Map';
import {themeColors} from "../../theme";

export function SidebarApp() {
    const [selected, setSelected] = useState("Dashboard")
    const [collapsed, setCollapsed] = useState(false);
    const theme = useTheme()
    const colors = themeColors(theme.palette.mode)
    const ItemMenu = ({selected, setSelected, icon, to, title, submenu = false}) => {
        return (
            <MenuItem
                component={<Link to={to}/>}
                active={selected === title}
                onClick={() => setSelected(title)}
                className={theme.palette.mode === "dark" ? "menuItem" : ["menuItem", "menuItemLight"]}
                sx={{textAlign: 'center'}}>
                <Tooltip placement="top-start" title={title}>

                    {collapsed && !submenu
                        ? <Typography variant="body2" sx={{textAlign: 'center'}}>{icon}</Typography>
                        : <Typography variant="body2" sx={{display: 'flex', gap: 2}}>{icon} {title}</Typography>
                    }
                </Tooltip>
            </MenuItem>
        )
    }

    return (
        <Sidebar
            collapsed={collapsed}
            breakPoint="md"
            backgroundColor={colors.palette.sidebar.backgroundColor}
            rootStyles={{
                position: 'relative',
                height: '100%',
                width: '270px',
                minWidth: '270px',
                overflowX: 'hidden',
                border: 'none',
            }}>
            {collapsed ?
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <IconButton onClick={() => setCollapsed(false)}>
                        <MenuIcon/>
                    </IconButton>
                </Box>
                :
                <Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" paddingTop={5} paddingX={5}>
                        <Typography>ADMIN</Typography>
                        <IconButton onClick={() => setCollapsed(true)}>
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" height={150}>
                        <Avatar alt="Avatar" sx={{height: 100, width: 'auto'}}
                                src="https://media.istockphoto.com/id/897376356/fr/vectoriel/avatar-f%C3%A9minin-profil-ic%C3%B4ne-ronde-femme-visage.jpg?s=170667a&w=0&k=20&c=dwcpvfHa3VaH88PwGOXfBW6Zga29j0_YpI43w0-u46Y="/>
                    </Box>
                </Box>
            }
            <Box paddingTop={collapsed ? 5 : 0} paddingLeft={collapsed ? 1 : 3}>
                <Menu menuItemStyles={{
                    button: ({level, active}) => {
                        if (level === 0 || level === 1) {
                            return {
                                color: active ? colors.palette.sidebar.activeColorText : undefined,
                                "&:hover": {
                                    color: colors.palette.sidebar.activeColorText,
                                    backgroundColor: 'transparent'
                                },
                            }
                        }
                    },
                }}>
                    <ItemMenu selected={selected} setSelected={setSelected} icon={<DashboardIcon/>} to="/react-dashboard/"
                              title="Dashboard"/>
                    <ItemMenu selected={selected} setSelected={setSelected} icon={<CalendarMonthIcon/>} to="/react-dashboard/calendar"
                              title="Calendrier"/>
                </Menu>
                <Box paddingTop={2} textAlign="center">
                    <Typography
                        variant="body2"
                        fontWeight={600}
                        style={{opacity: collapsed ? 0 : 0.5, letterSpacing: '1px'}}>
                        Graphiques
                    </Typography>
                </Box>
                <Menu menuItemStyles={{
                    button: ({level, active}) => {
                        if (level === 0 || level === 1) {
                            return {
                                color: active ? colors.palette.sidebar.activeColorText : undefined,
                                "&:hover": {
                                    color: colors.palette.sidebar.activeColorText,
                                    backgroundColor: 'transparent'
                                },
                                "& svg": {
                                    height: '1.3rem',
                                    width: '1.3rem',
                                }
                            }
                        }
                    },
                }}>
                    <ItemMenu selected={selected} setSelected={setSelected} icon={<PieChartIcon/>} to="/react-dashboard/chart/pie"
                              title="Circulaire"/>
                    <ItemMenu selected={selected} setSelected={setSelected} icon={<StackedLineChartIcon/>}
                              to="/react-dashboard/chart/line" title="Linéaire"/>
                    <ItemMenu selected={selected} setSelected={setSelected} icon={<BarChartIcon/>} to="/react-dashboard/chart/bar"
                              title="Bâtons"/>
                    <ItemMenu selected={selected} setSelected={setSelected} icon={<MapIcon/>} to="/react-dashboard/chart/geo"
                              title="Geo"/>
                    <SubMenu
                        rootStyles={{
                            ['.' + menuClasses.subMenuContent]: {
                                backgroundColor: colors.palette.sidebar.backgroundColor,
                            },
                        }}
                        label={
                            collapsed
                                ? <Tooltip placement="top-start" title="Paramètres"><SettingsApplicationsIcon/></Tooltip>
                                : <Tooltip placement="top-start" title="Paramètres">
                                    <Typography variant="body2">Paramètres</Typography>
                                </Tooltip>
                        }>
                        <ItemMenu selected={selected} setSelected={setSelected} icon={<GroupsIcon/>} to="/react-dashboard/setting/users"
                                  title="Utilisateurs" submenu={true}/>
                    </SubMenu>
                </Menu>
            </Box>
        </Sidebar>
    )
}