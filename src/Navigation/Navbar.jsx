import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar1(){
    return(
        <>
            <nav className="Header">
                <Link to='/Login'>Login</Link> 
                <Link to='/registration'>Registration</Link>   
                <Link to='/home'>Home </Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/user/Asha'>User</Link>
            </nav>
        </>
    )
}
export default Navbar1;