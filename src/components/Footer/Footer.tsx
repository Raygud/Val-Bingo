import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './Navbar.scss'

const Navbar = () => {

  const iconStyle = { color: 'black', fontSize: '10vw', margin: '1vw' }
  return (
    <div>

      <nav>
        <ol>
          <li><a href="https://github.com/Raygud" rel="noreferrer" target={"_blank"}><BsGithub style={iconStyle} /></a></li>
          <li><Link to="/leikreglur">Leikreglur</Link></li>
          <li><a href="https://www.linkedin.com/in/r%C3%BAni-gudmundarson-b33559176/" rel="noreferrer" target={"_blank"}><BsLinkedin style={iconStyle} /></a></li>
        </ol>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;