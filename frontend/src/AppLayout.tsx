import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const AppLayout = () => {
  const { isCheckAuth } = useSelector((state: RootState) => state.AuthReducer);
  return (
    <>
      {isCheckAuth ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <AppHeader />
          <Outlet />
        </>
      )}
    </>
  );
};

export default AppLayout;
