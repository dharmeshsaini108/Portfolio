import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
const Header = () => {
  return <nav>
    <h1>codesage</h1>
    <main>
      {/* the link tag is good for preventing from page reloding but it does not support scrolling behavoiur,so we have to install one more package in terminal=>`npm i react-router-hash-link` */}
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
    </main>
  </nav>
};    

export default Header ;  //added in App.js before routes