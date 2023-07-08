import React from 'react'
import {Box, Typography} from "@mui/material";
import {Project} from "./Project"

export function SectionProjects() {
    return (
        <Box id="sectionProject" paddingY={10}>
            <Typography textAlign="center" paddingBottom={window.windowWidth > 600 ? 30 : 10} variant="h3">Mes réalisations</Typography>
            <Box width="100%" display="grid" gridTemplateColumns={`repeat(${projectsData.length}, 1fr)`} sx={{px: 2}}>
                {projectsData.map((project, id) => (
                    <Project key={id}
                             title={project.title}
                             url={project.url}
                             description={project.description}
                             src={project.logo}
                             stack={project.stack}
                             imageDatasKey={project.imageDatasKey}
                             urlTarget={project.urlTarget}/>
                ))}
            </Box>
        </Box>
    )
}

const projectsData = [
    {
        title: "Ohani",
        url: "https://ohani.pf",
        urlTarget: '_blank',
        description: "E-commerce d'un magasin de vêtements pour femme à Tahiti",
        logo: require('../../../images/Web_vert.png'),
        stack: ['PHP8', 'Symfony6', 'JavaScript', 'Vue.js'],
        imageDatasKey: 'Ohani'
    },
    {
        title: "React dashboard",
        url: "/react-dashboard",
        urlTarget: '',
        description: "Interface d'administration, projet de veille.",
        logo: require('../../../images/ReactDashboard/dashboard.png'),
        stack: ['React.js'],
        imageDatasKey: 'ReactDashboard'
    }
]