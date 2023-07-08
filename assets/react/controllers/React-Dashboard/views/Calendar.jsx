import React, {useState} from 'react'
import {
    Box,
    Button,
    Dialog,
    FormControl, Popover,
    Stack,
    TextField,
    Typography,
    useTheme
} from "@mui/material";
import Header from "../components/Header";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import {themeColors} from "../theme";
import {StyledTextarea} from "../components/StyledTextarea";
import {CalendarEventList} from "../components/CalendarEventList";

const ACTIONS = {
    create: 'create',
    edit: 'edit'
}

export function Calendar() {
    const initialStateEvent = {id: 0, title: '', description: '', start: null}
    const theme = useTheme()
    const colors = themeColors(theme.palette.mode)
    const [events, setEvents] = useState([{id: 0, title: 'Test', start: new Date()}])
    const [eventFormData, setEventFormData] = useState(initialStateEvent)
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [selectedEventId, setSelectedEventId] = useState(null)
    const [selectedEvent, setSelectedEvent] = useState(initialStateEvent)
    let openPopover = Boolean(anchorEl)
    const handleSelectDate = (event) => {
        setEventFormData(prevState => ({...prevState, start: event.start, id: events.length}))
        setOpen(true)
    }
    const handleSaveEvent = type => {
        if (type === ACTIONS.create) {
            setEvents(prevState => [...prevState, eventFormData])
        }
        if (type === ACTIONS.edit) {
            setEvents(prevState => prevState.filter(el => el.id !== selectedEventId))
            setEvents(prevState => [...prevState, selectedEvent])
            setIsEditing(false)
        }
        setAnchorEl(null)
        setEventFormData(initialStateEvent)
        setOpen(false)
    }
    const handleEdit = () => {
        setIsEditing(true)
        const event = events.find(el => el.id === selectedEventId)
        setSelectedEvent(event)
        setOpen(true)
    }
    const handleDelete = () => {
        setEvents(prevState => prevState.filter(el => el.id !== selectedEventId))
        setSelectedEvent(initialStateEvent)
        setAnchorEl(null)
    }
    const handleClosePopover = () => {
        setAnchorEl(null)
    }
    const handleCloseDialog = () => {
        setEventFormData(initialStateEvent)
        setOpen(false)
    }
    const handleChangeDate = (event) => {
        setEvents(prevState => prevState.map(el => {
            if (el.id == event.oldEvent.id) {
                el.start = event.event.start
            }
            return el
        }))
    }

    return (
        <Box padding={2}>
            <Popover
                open={openPopover}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>
                <Box padding={3} display="flex" gap={2} backgroundColor={colors.palette.sidebar.backgroundColor}>
                    <Button onClick={handleDelete} sx={{width: 120, backgroundColor: "#f3a6a6"}}>Supprimer</Button>
                    <Button onClick={handleEdit} sx={{width: 120, backgroundColor: "#f8d79b"}}>Editer</Button>
                </Box>
            </Popover>
            <Header title="Calendrier"/>
            <Box display="grid" gridTemplateColumns="20% 75%" gap="2%">
                <CalendarEventList events={events} themeColors={colors}/>
                <FullCalendar
                    height="75vh"
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, multiMonthPlugin]}
                    selectable={true}
                    editable={true}
                    select={handleSelectDate}
                    events={events || []}
                    eventClick={infos => {
                        setSelectedEventId(Number(infos.event.id))
                        setAnchorEl(infos.el)
                    }}
                    eventChange={event => handleChangeDate(event)}
                    headerToolbar={{
                        left: 'dayGridMonth dayGridWeek dayGridDay',
                        center: 'title',
                        right: 'prev,next today'
                    }}>
                </FullCalendar>
            </Box>
            <Dialog open={open} onClose={handleCloseDialog} sx={{'& .MuiPaper-root':{maxWidth:'100%'}}}>
                <Box width="50vw" height="75hv" padding={5} backgroundColor={colors.palette.background.default}>
                    <Typography variant="h6" textAlign="center">{isEditing ? 'Edit' : 'Create new event'}</Typography>
                    <Stack spacing={2}>
                        <FormControl>
                            <Typography sx={{
                                width: 'fit-content',
                                background: 'transparent',
                                color: '#fff',
                                '&:hover': {background: 'transparent'}
                            }}>
                                {
                                    isEditing && selectedEvent.start != null
                                        ? selectedEvent.start.toLocaleDateString(['fr-FR'], {dateStyle: 'full'})
                                        : !isEditing && eventFormData.start != null
                                            ? eventFormData.start.toLocaleDateString(['fr-FR'], {dateStyle: 'full'})
                                            : null
                                }
                            </Typography>
                        </FormControl>
                        <FormControl>
                            <TextField autoFocus
                                       required
                                       placeholder="Title"
                                       value={isEditing ? selectedEvent.title : eventFormData.title}
                                       onChange={event => {
                                           if (isEditing) {
                                               setSelectedEvent(prevState => (
                                                   {...prevState, title: event.target.value}
                                               ))
                                           } else {
                                               setEventFormData(prevState => (
                                                   {...prevState, title: event.target.value}
                                               ))
                                           }
                                       }}/>
                        </FormControl>
                        <FormControl>
                            <StyledTextarea minRows={5}
                                            required={true}
                                            placeholder="Description"
                                            value={isEditing ? selectedEvent.description : eventFormData.description}
                                            onChange={event => {
                                                if (isEditing) {
                                                    setSelectedEvent(prevState => (
                                                        {...prevState, description: event.target.value}
                                                    ))
                                                } else {
                                                    setEventFormData(prevState => (
                                                        {...prevState, description: event.target.value}
                                                    ))
                                                }
                                            }}/>
                        </FormControl>
                        <Button
                            onClick={() => isEditing ? handleSaveEvent(ACTIONS.edit) : handleSaveEvent(ACTIONS.create)}>Save</Button>
                    </Stack>
                </Box>
            </Dialog>
        </Box>
    )
}