import React from 'react'
import { Typography, Box, useTheme } from "@mui/material";
import { themeColors } from "../theme";

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = themeColors(theme.palette.mode);
    return (
        <Box mb={5}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="body1" sx={{color: colors.palette.secondary.main}}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;