import React from "react"
import { Link } from 'react-router-dom'
import Wrapper from '../wrappers/Navbar.js'

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand nav-name" href="#">&lt; Shun /&gt;</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link path="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link path="/" className="nav-link">Skills</Link>
            </li>
            <li className="nav-item">
              <Link path="/" className="nav-link">Experiences</Link>
            </li>
            <li className="nav-item">
              <Link path="/" className="nav-link">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  )
}
export default Navbar