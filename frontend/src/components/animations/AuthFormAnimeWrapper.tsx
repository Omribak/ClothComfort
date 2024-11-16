// MotionWrapper.js
import React from 'react';
import { motion } from 'framer-motion';

interface AuthFormAnimeWrapperProps {
  children: React.ReactNode;
}
const AuthFormAnimeWrapper: React.FC<AuthFormAnimeWrapperProps> = ({
  children
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default AuthFormAnimeWrapper;
