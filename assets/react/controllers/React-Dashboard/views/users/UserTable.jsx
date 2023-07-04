import React from 'react'
import {DataGrid} from "@mui/x-data-grid";
import {mockDataTeam} from "../../mockData";
import {Box, Typography, useTheme} from "@mui/material";
import {themeColors} from "../../theme";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import Header from "../../components/Header";

export function UserTable() {
    const theme = useTheme()
    const colors = themeColors(theme.palette.mode)
    const columns = [
        {
            field: "id",
            headerName: "Id",
            flex: 1
        }, {
            field: "name",
            headerName: "Name",
            flex: 1
        }, {
            field: "email",
            headerName: "Email",
            flex: 1
        }, {
            field: "age",
            headerName: "Age",
            flex: 1
        }, {
            field: "phone",
            headerName: "Phone",
            flex: 1
        }, {
            field: "access",
            headerName: "Access",
            flex: 1,
            renderCell: ({row: {access}}) => {
                return (
                    <Box backgroundColor={
                        access === "admin" ? colors.palette.userTable.accessColumn.admin
                            : access === "manager" ? colors.palette.userTable.accessColumn.manager
                                : access === "user" ? colors.palette.userTable.accessColumn.user
                                    : colors.palette.userTable.accessColumn.default
                    }
                         color={theme.palette.mode === "light" ? "#fff" : "#000"}
                         width="100%"
                         paddingY={.5}
                         textAlign="center"
                         borderRadius={3}
                         display="flex"
                         justifyContent="center"
                         gap={1}>
                        {
                            access === "admin" ? <AdminPanelSettingsIcon/>
                                : access === "manager" ? <ManageAccountsIcon/>
                                    : access === "user" ? <PersonIcon/>
                                        : <NoAccountsIcon/>
                        }
                        <Typography>{access}</Typography>
                    </Box>
                )
            }
        }
    ]
    return (
        <Box padding={2}
             sx={{
                 '& .MuiDataGrid-columnHeaders': {
                     backgroundColor: colors.palette.userTable.backgroundColor
                 },
             }}>
            <Header title="Utilisateurs" subtitle="Informations des utilisteurs"/>
            <DataGrid
                checkboxSelection={true}
                columns={columns}
                rows={mockDataTeam}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                sx={{
                    '& .MuiDataGrid-cell:focus': {
                        backgroundColor: colors.palette.userTable.cellFocused
                    },
                    '& .Mui-checked': {
                        color: colors.palette.userTable.checkbox
                    }
                }}>
            </DataGrid>
        </Box>
    )
}