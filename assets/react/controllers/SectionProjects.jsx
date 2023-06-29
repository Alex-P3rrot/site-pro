import React from 'react'
import {Box, Typography} from "@mui/material";
import {Project} from "./Project"

const LogoOhani = require('../../images/Web_vert.png')

export function SectionProjects() {
    return (
        <Box id="sectionProject">
            <Typography textAlign="center" paddingY={15} variant="h3">Mes réalisations</Typography>
            <Box width="100%" display="grid" gridTemplateColumns="repeat(2, 1fr)" sx={{px: 2}}>
                <Project title="Ohani" description="E-commerce d'un magasin de vêtements pour femme à Tahiti"
                         src={LogoOhani} stack={['PHP8', 'Symfony6', 'JavaScript', 'Vue.js']}/>
            </Box>
        </Box>
    )
}