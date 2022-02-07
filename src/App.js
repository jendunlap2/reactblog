import React from "react";
import Register from "./views/Register";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import { render } from "@testing-library/react";
import { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./views/Home";

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            {/* <Route path="posts" element={<PostList /> } /> */}
          </Routes>
        </div>
      </>
    );
  }
}

