import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode==='light'? props.greenMode==='light'? 'white': 'greenyellow' : 'dark'} bg-${props.mode==='light'? props.greenMode==='light'? 'white': 'greenyellow' : 'dark'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode1}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
      </div>
      <div className={`form-check form-switch text-${props.greenMode ==='light'? 'dark':'dark'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode2}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Green Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {name: PropTypes.string.isRequired}
Navbar.defaultProps = {name: 'Set title here'}