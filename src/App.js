import { formatMs } from "@material-ui/core";
import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import Login from "./Login"
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM everything is wrapped inside the router

    <div className="App">
     
      <Routes>
        {/* //this will always get hit if we write something wrong with the
        homepage/abxxxx */}
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/checkout" element={<><Header/><Checkout /></>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
