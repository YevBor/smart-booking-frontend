import { Dayjs } from 'dayjs';
import { Box, Button, TextField, Typography } from '@mui/material';
import {
  DateField,
  LocalizationProvider,
  TimeField,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import 'dayjs/locale/he';


interface HoursForm {
  openingHours: any;
  closingHours: any;
  lunchDuration: string;
  timePerClient: string;
  startDate: Dayjs | null;
}

export const WorkingHours = ({selectedDay}:any) => {

  const [hoursForm, setHoursForm] = useState<HoursForm>({
    openingHours: null,
    closingHours: null,
    lunchDuration: '',
    timePerClient: '',
    startDate: null,
  });
  const  handleSubmit = async () => {
    const postHours = {
        openingHours: hoursForm.openingHours?.format('HH:mm'),
        closingHours: hoursForm.closingHours?.format('HH:mm'),
        lunchDuration: hoursForm.lunchDuration,
        timePerClient: hoursForm.timePerClient,
        startDate: selectedDay.format('YYYY-MM-DD'),
    }
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:4000/slots/daily', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postHours),
    })

    if(!response.ok){
        console.log('error')}
    else{
        await response.json();
        }
  }



  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="he">
      <Box sx={{display:"flex",flexDirection: 'column',justifyContent:"space-between" ,width:400,height: 350, m:'auto'}}>
        <Typography variant="h3">Working Hours</Typography>
        <TimeField
            size='small'
          label="Opening Hours"
          value={hoursForm.openingHours}
          format='HH:mm'
          onChange={(newValue) =>
            setHoursForm({ ...hoursForm, openingHours: newValue })
          }
        ></TimeField>
        <TimeField
        size='small'
          label="Closing Hours"
          value={hoursForm.closingHours}
          onChange={(newValue) =>
            setHoursForm({ ...hoursForm, closingHours: newValue })
          }
        ></TimeField>
        <TextField
        size='small'
            label="Lunch Duration"
            value={hoursForm.lunchDuration}
            onChange={(newValue) => setHoursForm({...hoursForm, lunchDuration: newValue.target.value})}
        ></TextField>
        <TextField
        size='small'
            label="Time Per Client"
            value={hoursForm.timePerClient}

            onChange={(newValue) => setHoursForm({...hoursForm, timePerClient: newValue.target.value})}
        ></TextField>
        <DateField
        size='small'
          value={selectedDay}
          onChange={(newValue) =>
            setHoursForm({ ...hoursForm, startDate: newValue })
          }
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </LocalizationProvider>
  );
};
