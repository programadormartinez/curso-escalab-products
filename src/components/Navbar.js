import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  

  return (
    <div>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          <Link to='/'>
              <img
                src="https://www.u-payments.com/assets/logo/logo-upayments.svg"
                alt=""
                width="100"
                height="60"
                className="d-inline-block align-text-top"
              />
            </Link>
            
          </div>
        </nav>
      </header>
    </div>
  );
}

