import React, {useState} from "react"
import {Box, ImageList, ImageListItem, Link, Modal, Typography, useTheme} from "@mui/material";
import {ModalCarousel} from "./ModalCarousel";
import LaunchIcon from '@mui/icons-material/Launch';

const imagesArray = require('../../../images/imagesData.json')

export function ModalProject(props) {
    const {title, url, stack, imageDatasKey, urlTarget} = props
    const imageList = imagesArray[imageDatasKey].map(item => require(`../../../images/${imageDatasKey}/${item}`))
    const [open, setOpen] = useState(false)
    const [currentId, setCurrentId] = useState()
    const [currentImage, setCurrentImage] = useState()
    const theme = useTheme()
    const updateId = (id) => setCurrentId(id)
    const updateImage = (id) => {
        setCurrentImage(imageList[id])
        setCurrentId(id)
    }
    const handleModalImageOpen = id => {
        setCurrentImage(imageList[id])
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
                    <ModalCarousel currentId={currentId} currentImage={currentImage} imagesArrayLength={imagesArray[imageDatasKey].length} handleChange={updateImage} handleCloseModalImage={handleClose}/>
                </Box>
            </Modal>
            <Box display="flex" alignItems="center" justifyContent="space-between" padding={2}
                 sx={theme.palette.mode === 'dark' ? {
                     backgroundColor: '#141b2d',
                     color: '#fcfcfc'
                 } : {backgroundColor: '#fcfcfc', color: '#141b2d'}}>
                <Typography width="90%"><u>Stack technique</u> : {stack.join(', ')}</Typography>
                {window.windowWidth > 600 ?
                    <Typography><Link sx={theme.palette.mode === 'dark' ? {color: '#fcfcfc'} : {color: '#141b2d'}}
                                      href={url}>Visiter le site</Link></Typography>
                    :
                    <Link sx={theme.palette.mode === 'dark' ? {color: '#fcfcfc'} : {color: '#141b2d'}} href={url} target={urlTarget}><LaunchIcon/></Link>
                }
            </Box>
        </Box>
    )
}


const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    boxShadow: 24,
    opacity: 1,
    border: 'none',
    ':hover': {cursor: 'pointer'}
}