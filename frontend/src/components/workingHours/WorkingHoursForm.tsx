// import { Box, Button, TextField } from '@mui/material'
// import { TimeField } from '@mui/x-date-pickers';
// import { Field, Form, Formik } from 'formik'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import 'dayjs/locale/he';
// import React, { useState } from 'react'

import { Title } from "@mui/icons-material";
import { Box, Card, Container, TextField } from "@mui/material";
import { DatePicker, TimeField,LocalizationProvider } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ButtonForm from "../modalFormComponents/ButtonForm";
import { useFormik } from "formik";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { sxCard } from "../../styles/modalStyles";
import { useState } from "react";
import 'dayjs/locale/he';
import { Dayjs } from "dayjs";

// const WorkingHoursForm = () => {

//     const formValues = {
//         openingHours:'',
//         closingHours:'',
//         lunchDuration:'',
//         timePerClient:'',
//         startDate:''
//     }

//     const handleSubmit = (values:any) => {
//         console.log(values)
//     }

//   return (
//     <Formik initialValues={formValues} onSubmit={handleSubmit}>
//         {()=>
//         <Form>
//             <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="he">
//                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

//                     <Field  as={TimeField} name="openingHours" type="text" label="Open from:" />
//                     <Field as={TimeField} name="closingHours" type="text"  label="Open from:"/>
//                     <TextField name="lunchDuration" type="text" />
//                     <TextField name="timePerClient" type="text" />
//                     <Field name="startDate" type="text" />
//                     <Button type="submit">Submit</Button>
//                 </Box>
//             </LocalizationProvider>
//         </Form>}
//     </Formik>

//   )
// }

// export default WorkingHoursForm

// import {
//   TextField,
//   Box,
//   Container,
//   Card,
//   Button,
//   CircularProgress,
// } from '@mui/material';
// import ButtonForm from '../modalFormComponents/ButtonForm'
// import Title from '../modalFormComponents/Title';
// import { sxCard } from '../../styles/modalStyles';
// import { useFormik } from 'formik';

// import { TimeField } from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import 'dayjs/locale/he';
// import React, { useState } from 'react';

// export default function WorkingHoursForm() {
//   const formik = useFormik({
//     initialValues: {
//       openingHours: '',
//       closingHours: '',
//       lunchDuration: '',
//       timePerClient: '',
//       startDate: '',
//       password: '',
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <Container component="main" maxWidth="xs">
//       <Card sx={sxCard}>
//         <Title text="Working Hours" />
//         <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="he"> 
//             <Box component="form" noValidate onSubmit={formik.handleSubmit}>
//             <TimeField
//                 size="small"
//                 margin="normal"
//                 label="Opening Hours"
//                 name='openingHours'
//                 required
//                 fullWidth

//                 value={formik.values.openingHours}
//                 onChange={formik.handleChange}
//                 helperText={formik.touched.openingHours && formik.errors.openingHours}

//             />
//                       <TextField
//             size="small"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//           />


//             <ButtonForm text="Submit" />
//             </Box>
//         </LocalizationProvider>
//       </Card>
//     </Container>
//   );
// }



// import all other necessary components and libraries

export default function WorkingHoursForm() {
  const [formValues, setFormValues] = useState<Dayjs | null>({
    openingHours:'2022-04-17T15:30',
    closingHours: '',
    lunchDuration: '',
    timePerClient: '',
    startDate: '',
  });

  const handleChange = (e:any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert(JSON.stringify(formValues, null, 2));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card sx={sxCard}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="he"> 
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <TimeField
                    size="small"
                    margin="normal"
                    label="Opening Hours"
                    name='openingHours'
                    required
                    fullWidth
                    value={formValues.openingHours}
                    onChange={handleChange}
                    format="hh:mm"
                    

                />

                <TimeField
                    size="small"
                    margin="normal"
                    label="Closing Hours"
                    name='closingHours'
                    required
                    fullWidth
                    value={formValues.closingHours}
                    onChange={handleChange}
                />

                <TextField
                    size="small"
                    margin="normal"
                    label="Lunch Duration"
                    name='lunchDuration'
                    required
                    fullWidth
                    value={formValues.lunchDuration}
                    onChange={handleChange}
                />

                <TextField
                    size="small"
                    margin="normal"
                    label="Time per Client"
                    name='timePerClient'
                    required
                    fullWidth
                    value={formValues.timePerClient}
                    onChange={handleChange}
                />

                {/* <DatePicker
                    size="small"
                    margin="normal"
                    label="Start Date"
                    name='startDate'
                    required
                    fullWidth
                    value={formValues.startDate}
                    onChange={handleChange}
                /> */}

                <ButtonForm text="Submit" />
            </Box>
        </LocalizationProvider>
      </Card>
    </Container>
  );
}
