import React from 'react';
import './AppHeader.css';
import AuthMenu from './AuthMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const AppHeader = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.AuthReducer
  );

  return (
    <div className="AppHeaderWrapper">
      <h1 className="AppHeaderLogo">ClothComfort</h1>
      {isAuthenticated ? <p>TEST</p> : <AuthMenu />}
    </div>
  );
};

export default AppHeader;
