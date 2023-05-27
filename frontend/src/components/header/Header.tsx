import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Profile } from '../profile/Profile';


export const Header = ()=> {
    const navigate = useNavigate()
    const isLogin = useSelector((state:any) => state.signin.isAuthenticated)
    console.log(isLogin)
    return (
        <>
               <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Smart Booking
                    </Typography>
                    {isLogin ? <Profile/> : <>
                    <Button color="inherit" onClick={()=> navigate("/sign-in")}>Login</Button>
                    
                    <Button color="inherit" onClick={()=> navigate("/sign-up")}>Registrate</Button></>}
                    </Toolbar>
                </AppBar>
                </Box>

        </>
    )
} 

