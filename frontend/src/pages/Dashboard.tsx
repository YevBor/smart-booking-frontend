import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigateToAppointment = useNavigate();
  return (
    <div style={{margin: '15px'}}>
      <Button sx={{mx:'2px'}} onClick={()=> navigateToAppointment("/booking") } variant="contained">Appointment</Button>
      <Button onClick={()=> navigateToAppointment("/schedule") } variant="contained">Schedule</Button>
    </div>
  )
}

export default Dashboard