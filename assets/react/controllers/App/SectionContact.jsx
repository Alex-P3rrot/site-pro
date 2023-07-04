import React, {useEffect, useState} from 'react'
import {Alert, Box, FormLabel, IconButton, TextField, Typography, useTheme} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {styled} from '@mui/system';
import {object, setLocale} from 'yup';
import * as yup from "yup";
import SendIcon from '@mui/icons-material/Send';
import {AlertMessage} from "./AlertMessage";

const min = 10
setLocale({
    string: {
        min: `Le message doit comporter au moins ${min} caractères`
    }
})

export function SectionContact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [formError, setFormError] = useState()
    const [formSuccess, setFormSuccess] = useState()
    useEffect(() => {
        const storedEmail = sessionStorage.getItem('formEmail')
        const storedMessage = sessionStorage.getItem('formMessage')
        if (storedEmail != null) setEmail(storedEmail)
        if (storedMessage != null) setMessage(storedMessage)
    }, [])
    useEffect(() => {
        const timer = setTimeout(() => {
            sessionStorage.setItem('formEmail', email)
        }, 500)
        return () => clearTimeout(timer)
    }, [email])
    useEffect(() => {
        const timer = setTimeout(() => {
            sessionStorage.setItem('formMessage', message)
        }, 500)
        return () => clearTimeout(timer)
    }, [message])

    const handleSubmitForm = async event => {
        event.preventDefault()
        try {
            const validation = await validationSchema.validate({email, message})
            if (validation) {
                setFormError()
                const fd = new FormData()
                fd.append('email', validation.email)
                fd.append('message', validation.message)
                const response = await fetch('/sendEmail', {method: 'POST', body: fd})
                const result = await response.json()
                setFormSuccess(result)
            }
        } catch (error) {
            setFormError(error.errors)
        }
    }

    return (
        <Box id="sectionContact" textAlign="center" padding={window.windowWidth > 600 ? 20 : 2} paddingTop={window.windowWidth > 600 ? 0 : 20}>
            <Typography variant="h4">Contact</Typography>
            {formError !== undefined ? <AlertMessage sx={{marginTop: 5}} type="error" message={formError} /> : null}
            {formSuccess !== undefined ? <AlertMessage sx={{marginTop: 5}} type="success" message={formSuccess} /> : null}
            <Box display="flex" justifyContent="center" alignItems="center" paddingY={5}
                 sx={{'& form': {width: '70%'}}}>
                <form style={window.windowWidth > 600 ? {marginLeft: "50%", transform: "translate(-50%)"} : {}}
                      onSubmit={handleSubmitForm}>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <TextField sx={{borderRadius: '12px', '& div, & input': {borderRadius: '12px'}}}
                                   placeholder="Email"
                                   name="email"
                                   value={email}
                                   onChange={event => setEmail(event.target.value)}
                                   type="email"/>
                        <StyledTextarea placeholder="Message"
                                        name="message"
                                        value={message !== null ? message : ''}
                                        onChange={event => setMessage(event.target.value)}
                                        type="text"/>
                        <IconButton type="submit"
                                    sx={{width: "fit-content", borderRadius: '10px', marginX: 'auto'}}>
                            <SendIcon/>&nbsp;Envoyer
                        </IconButton>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

const validationSchema = object({
    email: yup.string().email().required('Vous devez renseigner vote email'),
    message: yup.string().min(min).required('Vous devez écrire un message')
})

const StyledTextarea = styled(TextareaAutosize)(
    ({theme}) => `
    width: 100%;
    height: 150px!important;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? "#fcfcfc" : "#141b2d"};
    background: ${theme.palette.mode === 'dark' ? "#141b2d" : '#fcfcfc'};
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