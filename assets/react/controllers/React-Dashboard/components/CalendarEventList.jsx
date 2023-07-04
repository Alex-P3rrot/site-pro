import React from 'react'
import {Box, Checkbox, List, ListItem, Typography} from "@mui/material";
import Header from "./Header";

export function CalendarEventList({events, themeColors}) {
    return (
        <Box padding={2} backgroundColor={themeColors.palette.sidebar.backgroundColor}>
            <Header subtitle="Liste des évènements"/>
            <List dense sx={{width: '100%'}}>
                {events.map((value) => {
                    return (
                        <ListItem
                            sx={{
                                '& .Mui-checked': {
                                    color: themeColors.palette.userTable.checkbox
                                }
                            }}
                            key={value.id}
                            secondaryAction={<Checkbox edge="end"/>}
                            disablePadding>
                            <Typography>
                                {value.title}
                                <br/>
                                {value.start.toLocaleDateString(['fr-FR'], {dateStyle: 'long'})}
                            </Typography>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    )
}