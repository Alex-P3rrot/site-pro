import React, {useState} from 'react'
import {Box, IconButton, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CloseIcon from '@mui/icons-material/Close';

export function ModalCarousel(props) {
    const {imagesArray, title, handleCloseModalImage, currentId, handleChange} = props
    const [currentImage, setCurrentImage] = useState(require(`../../images/${title}/${imagesArray[currentId]}`))

    const handleNext = () => {
        if (imagesArray.length - 1 >= currentId + 1) {
            setCurrentImage(() => require(`../../images/${title}/${imagesArray[currentId + 1]}`))
            handleChange(currentId + 1)
        } else {
            setCurrentImage(() => require(`../../images/${title}/${imagesArray[0]}`))
            handleChange(0)
        }
    }
    const handlePrev = () => {
        if (currentId === 0) {
            setCurrentImage(() => require(`../../images/${title}/${imagesArray[imagesArray.length - 1]}`))
            handleChange(imagesArray.length - 1)
        } else {
            setCurrentImage(() => require(`../../images/${title}/${imagesArray[currentId - 1]}`))
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
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <IconButton sx={{position: 'absolute', top: 15, right: 15}} onClick={handleCloseModalImage}>
                <CloseIcon/>
            </IconButton>
            {
                window.windowWidth > 600 ?
                    <IconButton sx={{marginLeft: 5}} onClick={handlePrev}>
                        <NavigateBeforeIcon/>
                    </IconButton>
                    : null
            }
            <img src={currentImage} alt="image"
                 style={{maxWidth: '100%', maxHeight: '100%'}}
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                 onTouchEnd={handleTouchEnd}/>
            {
                window.windowWidth > 600 ?
                    <IconButton sx={{marginRight: 5}} onClick={handleNext}>
                        <NavigateNextIcon/>
                    </IconButton>
                    : null
            }
        </Box>
    )
}
