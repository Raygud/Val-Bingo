import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Navbar.scss'

const Navbar =() => {
    return (
        <div>
          
          <nav>
                <ol>
                    <li><a href="https://github.com/" rel="noreferrer" target={"_blank"}>Github</a></li>
                    <li><Link to="/leikreglur">Leikreglur</Link></li>
                    <li><a href="https://www.linkedin.com/" rel="noreferrer" target={"_blank"}>Linkedin</a></li>
                </ol>
          </nav>
        
          <Outlet />
        </div>
      );
  }

  export default Navbar;