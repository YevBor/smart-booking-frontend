import { TextField, Box, Container, Card } from '@mui/material';
import CommonLink from './modalFormComponents/CommonLink';
import { sxCard } from '../styles/modalStyles';
import Title from './modalFormComponents/Title';
import Subtitle from './modalFormComponents/Subtitle';
import ButtonForm from './modalFormComponents/ButtonForm';

export default function ResetForm() {
  return (
    <Container component="main" maxWidth="xs">
      <Card sx={sxCard}>
        <Title text="Reset password" />
        <Subtitle text="You will receive an e-mail in maximum 60 seconds" />
        <Box component="form">
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            label="Email Adress"
            name="email"
            autoComplete="email"
          />
          <ButtonForm text="send" />
          <CommonLink url="/signin" text="sign in" />
        </Box>
      </Card>
    </Container>
  )
}
