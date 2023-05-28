import axios from 'axios';

export const registerUser = async (userDetails: any) => {
  const response = await axios.post(
    'http://localhost:4000/authentication/sign-up',
    userDetails
  );
  return response.data;
};

export const signInUser = async (userDetails: any) => {
  const response = await axios.post(
    'http://localhost:4000/authentication/sign-in',
    userDetails
  );
  localStorage.setItem('token', response.data.accessToken);
  localStorage.setItem('refreshToken', response.data.refreshToken);
  return response.data;
};

export const refreshToken = async (userDetails: any) => {
  try {
    const response = await axios.post(
      'http://localhost:4000/authentication/refresh-token',
      { refreshToken: userDetails }
    );
    if (response.status === 200) {
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log('error verifying token', error);
    return false;
  }
};
