import React from 'react'
import {Box, IconButton} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CloseIcon from '@mui/icons-material/Close';

export function ModalImage(props) {
    const {image, handleNextImage, handlePrevImage, handleCloseModalImage} = props

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <IconButton sx={{position: 'absolute',top: 15,right: 15}} onClick={handleCloseModalImage}>
                <CloseIcon/>
            </IconButton>
            <IconButton sx={{marginLeft: 5}} onClick={handlePrevImage}>
                <NavigateBeforeIcon/>
            </IconButton>
            <img src={image.item} alt="image" style={{maxWidth: '100%', maxHeight: '100%'}}/>
            <IconButton sx={{marginRight: 5}} onClick={handleNextImage}>
                <NavigateNextIcon/>
            </IconButton>
        </Box>
    )
}
