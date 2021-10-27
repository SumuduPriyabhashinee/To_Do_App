import React from 'react';
import { Navbar} from 'react-bootstrap';
import logo from "../../assests/logo.png"

import './Navibar.css';

const Navibar = () => {
  const clickHome = (event) => {
    window.location.href = `/`;
}

const clickList = (event) => {
    window.location.href = `/todolist`;
}

const clickAddnew = (event) => {
  window.location.href = `/addtask`;
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
    <button type="button" class="btn btn-outline-warning " onClick={clickHome}>Home</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-warning " onClick={clickList}>To Do List</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-warning "onClick={clickAddnew}>Add New Task</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </Navbar>
  );
}

export default Navibar;
