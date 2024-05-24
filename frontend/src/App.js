import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Users from "./users/Pages/Users";
import NewPlaces from "./places/Pages/NewPlaces";
import MainNavigation from "./shared/Components/Navigation/MainNavigation";
import UserPlaces from "./places/Pages/UserPlaces";

const App = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/:userId/places" element={<UserPlaces />} />
          <Route exact path="/places/new" element={<NewPlaces />} />
        </Routes>
      </main>

    </Fragment>
  );
};

export default App;
