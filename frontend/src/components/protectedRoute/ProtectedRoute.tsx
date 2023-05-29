import { Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { signInSuccess } from '../../store/signin';

export const ProtectedRoute = ({ children }: any) => {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  const data = { accessToken: token, refreshToken: refreshToken };
  if (token && refreshToken) {
    dispatch(signInSuccess(data));
  }
  const isAuthenticated = useSelector(
    (state: any) => state.signin.isAuthenticated
  );
  const location = useLocation();
  console.log(isAuthenticated);
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={{ pathname: '/sign-in', state: { from: location } }} />
  );
};
