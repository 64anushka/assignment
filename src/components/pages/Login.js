import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import '../css/Login.css'
import gql from 'graphql-tag';

const GENERATE_OTP_MUTATION = gql`
  mutation GenerateOTP($email: String!) {
    generateOTP(email: $email) {
      success
      message
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $otp: String!) {
    login(email: $email, otp: $otp) {
      accessToken
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [generateOtp] = useMutation(GENERATE_OTP_MUTATION);
  const [login] = useMutation(LOGIN_MUTATION);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleGenerateOtp = async () => {
    try {
      await generateOtp({ variables: { email } });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await login({ variables: { email, otp } });
      localStorage.setItem('accessToken', result.data.login.accessToken);
      window.location.href = '/users';
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <center>
    <div className='top'>
      <h4>Login Page</h4>
      
        <input type="email" value={email} onChange={handleEmailChange} className='textfield' placeholder='Email'/>
     <br/>
      <button onClick={handleGenerateOtp} disabled={!email} className='button1'>Generate OTP</button><br/>
      {errorMessage && <p style={{color:"white"}}>Error: {errorMessage}</p>}
      
        <input type="text" value={otp} onChange={handleOtpChange} className='textfield' placeholder='OTP'/>
      <br/>
      <button onClick={handleLogin} disabled={!otp} className='button1'>Login</button><br/>
    </div>
    </center>
  );
}

export default Login;
