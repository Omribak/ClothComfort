import { Login, PersonAdd } from '@mui/icons-material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <div className="AuthMenuWrapper">
      <Link to="/login" className="RedButton IconBtn">
        <Login />
        Login
      </Link>

      <Link to="/register" className="RedButton IconBtn">
        <PersonAdd />
        Register
      </Link>
    </div>
  );
};

export default AuthMenu;
