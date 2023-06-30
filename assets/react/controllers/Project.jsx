import React, {useState} from 'react'
import {Box, Card, CardContent, CardHeader, CardMedia, Divider, Modal, useTheme} from "@mui/material";
import {themeColors} from "../theme";
import {ModalProject} from "./ModalProject";

export function Project(props) {
    const {title, description, src, stack} = props
    const theme = useTheme()
    const colors = themeColors(theme.palette.mode)
    const [open, setOpen] = useState(false)

    return (
        <Box display="flex" justifyContent="center">
            <Card className="project-card" sx={{...colors.palette.card, pt: 1, maxWidth: '400px'}} onClick={() => setOpen(true)}>
                <CardMedia sx={{height: '100px', backgroundSize: 'contain', backgroundPosition: '50 50'}} image={src}/>
                <CardHeader sx={{textAlign: 'center', pt: 3}} title={title}/>
                <Divider/>
                <CardContent sx={{textAlign: 'center', px: 6}}>{description}</CardContent>
            </Card>
            <Modal sx={style} open={open} onClose={() => setOpen(false)}>
                <Box>
                    <ModalProject title={title} stack={stack}/>
                </Box>
            </Modal>
        </Box>
    )
}

const style = {
    display: 'flex',
    padding: window.windowWidth > 600 ? 25 : 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    boxShadow: 24,
    opacity: 1,
    ':hover': {cursor: 'pointer'}
}