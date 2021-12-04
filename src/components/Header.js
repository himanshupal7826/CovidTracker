import React from "react";
import "./Header.css";
import header1 from "../components/Logo/header1.jpg";
 
 

function Header() {
  return (
    <div className="header">
    <div className="header-image-menu">
        <img src={header1}  alt="this is image Tag" />
    </div>   
             
    {/* <div className="header-image-menu1">
    <nav >
        <ul className="UL">
            <li><a href="#" >Home</a></li>
            <li><a href="http://crssietjhajjar.ac.in/">About Us</a></li>
             
            <li><a href="https://www.instagram.com/crssietjhajjar2017/">Contact Us</a></li>
        </ul>
    </nav>
    </div> */}
</div>   

 
 
 
  );
}
export default Header;