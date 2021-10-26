import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../assests/logo.png"

import './Navibar.css';

const Navibar = () => {
  const clickRegister = (event) => {
    window.location.href = `/users/register`;
}

const clickAdmin = (event) => {
    window.location.href = `/admin`;
}

const clickAbout = (event) => {
  window.location.href = `/about`;
}

const clickNews = (event) => {
    window.location.href = `/news`;
}
  return (
    <Navbar bg="dark" variant="dark">
      <div class="col-2">
      <img className="headerlogo" src={logo} alt="" />
        </div>
        <div class="col-3">
        <div class="t1">To Do App</div>
        </div>
        <div class="col-1">
        </div>
        <div class="col-6">
    <button type="button" class="btn btn-outline-warning " onClick={clickRegister}>Home</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-warning " onClick={clickNews}>To Do List</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-warning "onClick={clickAbout}>Add New</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-warning "onClick={clickAdmin}>Admin</button>
    </div>
    </Navbar>
  );
}

export default Navibar;
