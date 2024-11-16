import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/AuthPages/LoginPage/LoginPage';
import RegisterPage from './pages/AuthPages/RegisterPage/RegisterPage';
import AppLayout from './AppLayout';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { CheckAuth } from './redux/Auth/AuthSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(CheckAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
