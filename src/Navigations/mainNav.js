import Home from "../Screens/Home";
import React from "react";
import {
  BrowserRouter as NavigationProvider,
  Routes,
  Route,
} from "react-router-dom";
import MainWrapper from "../Components/MainWrapper";
import Group from "../Screens/Group";
import Launcher from "../Screens/Launcher";
import Login from "../Screens/Login";
import { useSelector } from "react-redux";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
function MainNav(params) {
  const state = useSelector((state) => state.LauncherReducer);
  const isLoggedIn = state.isLoggedIn;
  return (
    <NavigationProvider>
      {isLoggedIn ? (
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/group" element={<Group />} />
          </Routes>
        </MainWrapper>
      ) : (
        <>
          <MainHeader />
          <Routes>
            <Route path="/" element={<Launcher />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </>
      )}
    </NavigationProvider>
  );
}
export default MainNav;
