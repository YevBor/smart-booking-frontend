import { IconButton, Menu, MenuItem } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/signin";


export const Profile = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleLogOut = () => {
        localStorage.removeItem('token')
        dispatch(signOut())
      }

    return (
        <>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
        </Menu>
    </>    
    )
}

