import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <header className="header">

    <div className="container nav-wrapper">
      <span className="brand">
        <h3>Learning Analytics Example</h3>
      </span>
      
      <span className="nav-link">
        <Link to='/'>
          <h4>Home</h4>
        </Link>
        <Link to='/about-dataset'>
          <h4>About Dataset</h4>
        </Link>
        <Link to='/students'>
          <h4>Students</h4>
        </Link>
        <Link to='/analysis'>
          <h4>Analysis</h4>
        </Link>
      </span>
    </div>
    
  </header>
);

export default Header;