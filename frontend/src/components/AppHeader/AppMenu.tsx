import { SearchRounded, ShoppingCartCheckout } from "@mui/icons-material";
import "./AppMenu.css";
import { Search, ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { LogoutUser } from "../../redux/Auth/AuthSlice";

const AppMenu = () => {
  const dispatch = useDispatch<AppDispatch>();

  const HandleLogout = () => {
    console.log("logout");
    dispatch(LogoutUser());
  };

  return (
    <div className="AppHeaderMenuWrapper">
      <SearchRounded />
      <ShoppingCartCheckout />
      <button className="RedButton" onClick={HandleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AppMenu;
