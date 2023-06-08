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
                        <Typography
                            variant="h6"
                            component="a"
                            href="/"
                            noWrap
                            sx={{
                                flexGrow: 1,
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SmartBooking
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

