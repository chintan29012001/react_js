import React from 'react';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// style={{border:"2px red solid"}}
export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown"  >
      <ul className="navbar-nav d-flex flex-grow-1" >
        <li className="nav-item" >
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item d-flex align-items-center flex-row-reverse flex-grow-1" >
            <div className="form-check form-switch d-flex flex-row-reverse" >
              <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          <input className="form-check-input mx-1" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>
        </li>
      </ul>
      </div>
        
    </div>
    
</nav>
    </>
  );
}
Navbar.prototypes={
    title: PropTypes.string
}
Navbar.defaultProps=
{
    title: "Set Title here"
}
