import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/AuthPages/LoginPage/LoginPage";
import RegisterPage from "./pages/AuthPages/RegisterPage/RegisterPage";
import AppLayout from "./AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { CheckAuth } from "./redux/Auth/AuthSlice";
import CheckAuthWrapper from "./components/AuthPagesComponents/CheckAuth/CheckAuthWrapper";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(CheckAuth());
  }, [dispatch]);

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.AuthReducer
  );

  return (
    <BrowserRouter>
      <CheckAuthWrapper isAuthenticated={isAuthenticated} user={user}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<h1>Home</h1>} />
          </Route>
        </Routes>
      </CheckAuthWrapper>
    </BrowserRouter>
  );
}

export default App;
