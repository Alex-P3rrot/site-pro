import React, {useContext, useState} from 'react'
import {Box, IconButton} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CloseIcon from '@mui/icons-material/Close';
import {ThemeContext} from "./theme";

const IMAGE_BASE_PATH = '../../../images/'
export function ModalCarousel(props) {
    const {imagesArray, title, handleCloseModalImage, currentId, handleChange} = props
    const [currentImage, setCurrentImage] = useState(require(`${IMAGE_BASE_PATH}${title}/${imagesArray[currentId]}`))
    const {mobileBreakpoint, xlBreakpoint, lgBreakpoint, mdBreakpoint} = useContext(ThemeContext)
    const imageSize = () => {
        let style
        if (xlBreakpoint) {
            style = {maxWidth: '80%', maxHeight: '80%'}
        }
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
        if (imagesArray.length - 1 >= currentId + 1) {
            setCurrentImage(() => require(`${IMAGE_BASE_PATH}${title}/${imagesArray[currentId + 1]}`))
            handleChange(currentId + 1)
        } else {
            setCurrentImage(() => require(`${IMAGE_BASE_PATH}${title}/${imagesArray[0]}`))
            handleChange(0)
        }
    }
    const handlePrev = () => {
        if (currentId === 0) {
            setCurrentImage(() => require(`${IMAGE_BASE_PATH}${title}/${imagesArray[imagesArray.length - 1]}`))
            handleChange(imagesArray.length - 1)
        } else {
            setCurrentImage(() => require(`${IMAGE_BASE_PATH}${title}/${imagesArray[currentId - 1]}`))
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