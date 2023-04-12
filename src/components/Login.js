//not working
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
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
      token
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generateOTPMutation] = useMutation(GENERATE_OTP_MUTATION);
  const [loginMutation] = useMutation(LOGIN_MUTATION);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleGenerateOTP = async () => {
    const result = await generateOTPMutation({ variables: { email } });
    if (result.data.generateOTP.success) {
      alert(result.data.generateOTP.message);
    } else {
      alert('Failed to generate OTP');
    }
  };

  const handleSignIn = async () => {
    const result = await loginMutation({ variables: { email, otp } });
    localStorage.setItem('token', result.data.token);
    // redirect to dashboard or home page
  };

  return (
    <div>
      <input type="text" value={email} onChange={handleEmailChange} placeholder="Email" />
      <button onClick={handleGenerateOTP}>Generate OTP</button>
      <input type="text" value={otp} onChange={handleOtpChange} placeholder="OTP" />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default Login;
