import dayjs, { Dayjs } from 'dayjs';
import { Box, Button, TextField, Typography } from '@mui/material';
import {
  DateField,
  DatePicker,
  LocalizationProvider,
  TimeField,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import 'dayjs/locale/he';
import { Field } from 'formik';

interface HoursForm {
  openingHours: any;
  closingHours: any;
  lunchDuration: string;
  timePerClient: string;
  startDate: Dayjs | null;
}

export const WorkingHours = () => {
  const [hoursForm, setHoursForm] = useState<HoursForm>({
    openingHours: null,
    closingHours: null,
    lunchDuration: '',
    timePerClient: '',
    startDate: null,
  });
  const  handleSubmit = async () => {
    console.log(hoursForm);
    const postHours = {
        openingHours: hoursForm.openingHours?.format('HH:mm'),
        closingHours: hoursForm.closingHours?.format('HH:mm'),
        lunchDuration: hoursForm.lunchDuration,
        timePerClient: hoursForm.timePerClient,
        startDate: hoursForm.startDate?.format('YYYY-MM-DD'),
    }
    console.log(postHours)
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIwLCJlbWFpbCI6InRlc3RCQHRlc3QuY29tIiwicm9sZSI6ImJ1c2luZXNzIiwiaWF0IjoxNjg1MTI2MDYzLCJleHAiOjE2ODg3MjYwNjMsImF1ZCI6ImxvY2FsaG9zdDo0MDAwIiwiaXNzIjoibG9jYWxob3N0OjQwMDAifQ.6AOZUPKpT-WyfnTxeKyaKJ05o97ur4ntya90B_dC4ls'
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
            const data = response.json();
            console.log(data)
        }   
  }



  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="he">
      <Box sx={{display:"flex",flexDirection: 'column', width:300,height: 300}}>
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
          value={hoursForm.startDate}
          onChange={(newValue) =>
            setHoursForm({ ...hoursForm, startDate: newValue })
          }
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </LocalizationProvider>
  );
};
