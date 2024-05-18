import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Users from "./users/Pages/Users";
import NewPlaces from "./places/Pages/NewPlaces";


const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="" element={<Users />} />
      </Routes>
      <Routes>
        <Route exact path="places/new" element={<NewPlaces />} />
      </Routes>
    </Fragment>



  );
}


export default App;
