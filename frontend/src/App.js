import React, { useState, useCallback } from "react";
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

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlaces />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
    </AuthContext.Provider>
  );
};

export default App;
