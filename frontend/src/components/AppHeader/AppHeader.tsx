import React from "react";
import "./AppHeader.css";
import AuthMenu from "./AuthMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useResponsiveType from "../../custom-hooks/useResponsiveType";
import AppMenu from "./AppMenu";

const AppHeader = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.AuthReducer
  );

  const { isMobile } = useResponsiveType();

  return (
    <div className="AppHeaderWrapper">
      <h1 className="AppHeaderLogo">{isMobile ? "C." : "ClothComfort"}</h1>
      {isAuthenticated ? <AppMenu /> : <AuthMenu />}
    </div>
  );
};

export default AppHeader;
