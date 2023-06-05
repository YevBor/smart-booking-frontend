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

export const weekly = async () =>{
  const token = localStorage.getItem('token')
  try{
    const response = await fetch("http://localhost:4000/slots",{
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`}
    });
    if(!response.ok){
      throw new Error('Something went wrong')
    }
    return await response.json()
  }
    catch(error){
      console.log(error)
    }

  
}


