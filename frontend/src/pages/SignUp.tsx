import { TextField, Box, Container, Card } from '@mui/material'
import ButtonForm from '../components/modalFormComponents/ButtonForm'
import Title from '../components/modalFormComponents/Title'
import { sxCard } from '../styles/modalStyles'
import { useFormik } from 'formik'
import { registerUser } from '../services/auth/authService'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

export default function SignUp() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        const response = await registerUser(values)
        navigate('/sign-in')
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <Container component='main' maxWidth='xs'>
      <Card sx={sxCard}>
        <Title text='Registrate Form' />
        <Box component='form' noValidate onSubmit={formik.handleSubmit}>
          <TextField
            size='small'
            margin='normal'
            required
            fullWidth
            label='Email Address'
            name='email'
            autoComplete='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            size='small'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <ButtonForm text='Registrate' />
        </Box>
      </Card>
    </Container>
  )
}
