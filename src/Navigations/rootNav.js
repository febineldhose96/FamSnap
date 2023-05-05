import React from "react";
import {
  BrowserRouter as NavigationProvider,
  Routes,
  Route,
} from "react-router-dom";
import Launcher from "../Screens/Launcher";
import MainWrapper from "../Components/MainWrapper";
import MainHeader from "../Components/MainHeader";
import Footer from "../Components/Footer";
import Login from "../Screens/Login";
function RootApp(params) {
  return (
    <NavigationProvider>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Launcher />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </NavigationProvider>
  );
}
export default RootApp;
