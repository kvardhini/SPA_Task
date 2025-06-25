import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../assets/myimage.jpeg"



function HomePage(){
    const navigate = useNavigate();
    return(
        <>  
        <h2>Welcome to Home page</h2>
        </>
    )
}
export default HomePage;