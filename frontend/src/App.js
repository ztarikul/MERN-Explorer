import React from "react";
import './App.css';

import Users from "./users/Pages/Users";
import NewPlaces from "./places/Pages/NewPlaces";


const App = () => {
  return (
    <div>
      <h1>Main Works!</h1>
      <Users />
      <NewPlaces />
    </div>
  )
}


export default App;
