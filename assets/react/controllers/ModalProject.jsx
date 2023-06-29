import React, {useState} from "react"
import {Box, ImageList, ImageListItem, Link, Modal, Typography, useTheme} from "@mui/material";
import {ModalCarousel} from "./ModalCarousel";

const imagesArray = require('../../images/imagesData.json')

export function ModalProject(props) {
    const {title, stack} = props
    const imageList = imagesArray[title].map(item => require(`../../images/${title}/${item}`))
    const [open, setOpen] = useState(false)
    const [currentId, setCurrentId] = useState()
    const theme = useTheme()
    const updateId = (id) => setCurrentId(id)
    const handleModalImageOpen = id => {
        setCurrentId(id)
        setOpen(true)
    }

    const handleClose = () => setOpen(false)

    return (
        <Box height="100%">
            <ImageList sx={{height: '100%', justifyContent: 'center', alignItems: 'center', marginY: 0}}
                       cols={3} gap={25}>
                {imageList.map((item, id) => (
                        <ImageListItem key={item} onClick={() => handleModalImageOpen(id)}>
                            <img src={item} alt="image" loading="lazy"/>
                        </ImageListItem>
                    )
                )}
            </ImageList>
            <Modal open={open} onClose={() => setOpen(false)} sx={style}>
                <Box>
                    <ModalCarousel currentId={currentId} imagesArray={imagesArray[title]} handleChange={updateId} title={title} handleCloseModalImage={handleClose}/>
                </Box>
            </Modal>
            <Box display="flex" alignItems="center" justifyContent="space-between" padding={2} sx={theme.palette.mode === 'dark' ? {backgroundColor: '#141b2d',color: '#fcfcfc'} : {backgroundColor: '#fcfcfc',color: '#141b2d'}}>
                <Typography><u>Stack technique</u> : {stack.join(', ')}</Typography>
                <Typography><Link sx={theme.palette.mode === 'dark' ? {color: '#fcfcfc'} : {color: '#141b2d'}} href="https://ohani.pf">Visiter le site</Link></Typography>
            </Box>
        </Box>
    )
}


const style = {
    position: 'absolute',
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
    boxShadow: 24,
    opacity: 1,
    border: 'none',
    ':hover': {cursor: 'pointer'}
}