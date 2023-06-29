import React from 'react'
import {Box, IconButton, TextField, Typography, useTheme} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {styled} from '@mui/system';
import {Formik} from "formik";
import {object} from 'yup';
import * as yup from "yup";
import SendIcon from '@mui/icons-material/Send';

export function SectionContact() {
    const theme = useTheme()
    const handleSubmit = (values) => {

    }

    return (
        <Box id="sectionContact" textAlign="center" padding={20}>
            <Typography variant="h5">Contact</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" paddingY={5} sx={{'& form': {width: '70%'}}}>
                <Formik sx={{width: "100%", marginLeft: "50%", transform: "translate(-50%)"}} onSubmit={handleSubmit}
                        initialValues={initialValues} validationSchema={validationSchema}>
                    {({values, errors, touched, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Box display="flex" flexDirection="column" gap={2}>
                                <TextField sx={{borderRadius: '12px','& div, & input': {borderRadius: '12px'}}}
                                           placeholder="Email"/>
                                <StyledTextarea sx={{width:'100%'}} placeholder="Message"/>
                                <IconButton sx={{width:"fit-content",borderRadius:'10px',marginX:'auto'}}>
                                    <SendIcon/>&nbsp;Envoyer
                                </IconButton>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

const initialValues = {
    email: '',
    message: ''
}
const validationSchema = object({
    email: yup.string().email().required('Vous devez renseigner vote email'),
    message: yup.string().min(10).required('Vous devez écrire un message')
})

const StyledTextarea = styled(TextareaAutosize)(
    ({theme}) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? "#fcfcfc" : "#141b2d"};
    background: ${theme.palette.mode === 'dark' ? "#141b2d" : '#141b2d'};
    border: 1px solid ${theme.palette.mode === 'dark' ? '#424a53' : '#d0d7de'};
    box-shadow: 0px 2px 24px ${
        theme.palette.mode === 'dark' ? "#141b2d" : "#fcfcfc"
    };
  
    &:hover {
      border-color: '#3399FF';
      box-shadow: 0 0 0 1px ${theme.palette.mode === 'dark' ? '#fcfcfc' : '#141b2d'};
    }
  
    &:focus {
      border-color: '#3399FF';
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);