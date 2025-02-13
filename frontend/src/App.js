import React, { useState, useCallback, Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Users from "./users/Pages/Users";
import NewPlaces from "./places/Pages/NewPlaces";
import MainNavigation from "./shared/Components/Navigation/MainNavigation";
import UserPlaces from "./places/Pages/UserPlaces";
import UpdatePlace from "./places/Pages/UpdatePlace";
import Auth from "./users/Pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  });
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  });

  let routes;

  if (isLoggedIn) {
    routes = (
      <Fragment>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlaces />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Users />} />
      </Fragment>
    );
  } else {
    routes = (
      <Fragment>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Auth to="/auth" replace />} />
      </Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <MainNavigation />
      <main>
        <Routes>{routes}</Routes>
      </main>
    </AuthContext.Provider>
  );
};

export default App;
