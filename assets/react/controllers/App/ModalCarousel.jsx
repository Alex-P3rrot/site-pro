import React, {useContext, useState} from 'react'
import {Box, IconButton} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CloseIcon from '@mui/icons-material/Close';
import {ThemeContext} from "./theme";

export function ModalCarousel(props) {
    const {handleCloseModalImage, imagesArrayLength, currentId, currentImage, handleChange} = props
    const {mobileBreakpoint, lgBreakpoint, mdBreakpoint} = useContext(ThemeContext)
    const imageSize = () => {
        let style = {maxWidth: '80%', maxHeight: '80%'}
        if (lgBreakpoint) {
            style = {maxWidth: '85%', maxHeight: '85%'}
        }
        if (mdBreakpoint) {
            style = {maxWidth: '80%', maxHeight: '80%'}
        }
        if (mobileBreakpoint) {
            style = {maxWidth: '100%', maxHeight: '100%'}
        }
        return style
    }

    const handleNext = () => {
        if (imagesArrayLength - 1 >= currentId + 1) {
            handleChange(currentId + 1)
        } else {
            handleChange(0)
        }
    }
    const handlePrev = () => {
        if (currentId === 0) {
            handleChange(imagesArrayLength - 1)
        } else {
            handleChange(currentId - 1)
        }
    }
    let direction
    let start
    const handleTouchStart = event => {
        start = event.touches[0].clientX
    }
    const handleTouchMove = event => {
        direction = start - event.touches[0].clientX
    }
    const handleTouchEnd = event => {
        if (direction > 0) {
            handleNext()
        } else {
            handlePrev()
        }
    }

    return (
        <Box width="100vw" display="flex" alignItems="center" justifyContent="space-between">
            <IconButton sx={{position: 'absolute', top: 15, right: 15}} onClick={handleCloseModalImage}>
                <CloseIcon/>
            </IconButton>
            {
                !mobileBreakpoint ?
                    <IconButton sx={{marginLeft: 5}} onClick={handlePrev}>
                        <NavigateBeforeIcon/>
                    </IconButton>
                    : null
            }
            <img src={currentImage} alt="image"
                 style={imageSize()}
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                 onTouchEnd={handleTouchEnd}/>
            {
                !mobileBreakpoint ?
                    <IconButton sx={{marginRight: 5}} onClick={handleNext}>
                        <NavigateNextIcon/>
                    </IconButton>
                    : null
            }
        </Box>
    )
}