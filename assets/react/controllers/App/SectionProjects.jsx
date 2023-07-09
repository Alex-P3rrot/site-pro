import React, {useContext} from 'react'
import {Box, Typography} from "@mui/material";
import {Project} from "./Project"
import {ThemeContext} from "./theme";

export function SectionProjects() {
    const {mobileBreakpoint} = useContext(ThemeContext)
    const gridLength = () => {
        if (mobileBreakpoint) {
            return 1
        } else {
            if (projectsData.length > 4) {
                return 4
            } else {
                return projectsData.length
            }
        }
    }

    return (
        <Box id="sectionProject" paddingY={10}>
            <Typography textAlign="center" paddingBottom={mobileBreakpoint ? 10 : 30} variant="h3">Mes réalisations</Typography>
            <Box width="100%" display="grid" gridTemplateColumns={`repeat(${gridLength()}, 1fr)`} px={2} rowGap={5}>
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