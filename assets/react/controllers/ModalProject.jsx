import React, {useState} from "react"
import {Box, ImageList, ImageListItem, Modal} from "@mui/material";
import {ModalImage} from "./ModalImage";

const imageData = require('../../images/imagesData.json')

export function ModalProject(props) {
    const {title, stack} = props
    const imageList = Object.values(imageData[title]).map(item => require(`../../images/${title}/${item}`))
    const [open, setOpen] = useState(false)
    const [modalImageData, setModalImageData] = useState()
    const handleModalImageOpen = data => {
        setModalImageData(data)
        setOpen(true)
    }
    const handleNext = () => {
        setModalImageData(prev => {
            let id = (parseInt(prev.id) + 1).toString()
            let nextItem
            if (imageData[title].hasOwnProperty(id)) {
                nextItem = require(`../../images/${title}/${imageData[title][id]}`)
            } else {
                id = '0'
                nextItem = require(`../../images/${title}/${imageData[title]['0']}`)
            }
            return {item: nextItem, id}
        })
    }
    const handlePrev = () => {
        setModalImageData(prev => {
            let id,
                prevItem
            if ((prev.id - 1) < 0) {
                const biggest = Math.max(...Object.keys(imageData[title]).map(Number))
                id = biggest
                prevItem = require(`../../images/${title}/${imageData[title][biggest]}`)
            } else {
                id = (parseInt(prev.id) - 1).toString()
                prevItem = require(`../../images/${title}/${imageData[title][id]}`)
            }
            return {item: prevItem, id}
        })
    }

    const handleClose = () => setOpen(false)

    return (
        <div style={{height: '100%'}}>
            <ImageList sx={{height: '100%', justifyContent: 'center', alignItems: 'center', marginY: 0}}
                       cols={3} gap={25}>
                {imageList.map((item, id) => (
                        <ImageListItem key={item} onClick={() => handleModalImageOpen({item, id})}>
                            <img src={item} alt="image" loading="lazy"/>
                        </ImageListItem>
                    )
                )}
            </ImageList>
            <Modal open={open} onClose={() => setOpen(false)} sx={style}>
                <Box>
                    <ModalImage image={modalImageData} handleNextImage={handleNext} handlePrevImage={handlePrev} handleCloseModalImage={handleClose}/>
                </Box>
            </Modal>
        </div>
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