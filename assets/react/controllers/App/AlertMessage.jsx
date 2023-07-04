import React, {useState} from "react";
import {Alert, Collapse, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function AlertMessage(props) {
    const {message, type} = props
    const [open, setOpen] = useState(true)

    return (
        <Collapse in={open}>
            <Alert sx={{marginTop: 5}} severity={type}
                   action={
                       <IconButton
                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={() => setOpen(false)}>
                           <CloseIcon fontSize="inherit"/>
                       </IconButton>
                   }>
                {message}
            </Alert>
        </Collapse>
    )
}