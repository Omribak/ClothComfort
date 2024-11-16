import React from 'react';
import './LoginPage.css';
import LoginForm from '../../../components/AuthPagesComponents/LoginPage/LoginForm';
import { motion } from 'framer-motion';
import AuthFormAnimeWrapper from '../../../components/animations/AuthFormAnimeWrapper';

const LoginPage = () => {
  return (
    <AuthFormAnimeWrapper>
      <div className="LoginPageWrapper">
        <h1>Login to your account</h1>
        <LoginForm />
      </div>
    </AuthFormAnimeWrapper>
  );
};

export default LoginPage;
