import logo from './logo.svg';
import './App.css';

//components
import React from "react";

import Home from './IMDb/pages/Home';
import CategoryMovies from './IMDb/pages/CategoryMovies';
import { routhPath } from './IMDb/Constant/Route';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './IMDb/pages/SignUp';
import LoginForm from './IMDb/pages/Login';





function App(){

    return(
      <div className="App">
     
        <Routes>
        <Route path="/"  element={<SignupForm/>}></Route>
        <Route path="/login"  element={<LoginForm/>}></Route>
        

          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/imdb" element={<Home />}></Route>
          <Route path="/Categories" element={<CategoryMovies />}></Route>
          <Route path="/invalid"  element={<Home/>}></Route>
          <Route path="/popular"  element={<Home/>}></Route>
          <Route path="/TopRated"  element={<Home/>}></Route>
          <Route path="/Upcoming"  element={<Home/>}></Route>

        </Routes>

       
      </div>
    );

}
export default App;