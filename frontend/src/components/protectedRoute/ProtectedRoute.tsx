import {Navigate, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { refreshToken } from '../../auth/authService';
import { signInSuccess } from '../../store/signin';



export const ProtectedRoute = ({children}:any) => {
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     const refresh = localStorage.getItem('refreshToken');
    //     console.log(refresh)
    //     if(token && refreshToken){
    //         const data = refreshToken(refresh);
    //         if(data){
    //             dispatch(signInSuccess(data))
    //         }
    //     }
    // },[])


    const location = useLocation();
    const isAuthenticated = useSelector((state:any) => state.signin.isAuthenticated);
    return isAuthenticated ? children : <Navigate to={{pathname:'/sign-in', state:{from:location}  }}/>

}

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
