import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../assets/myimage.jpeg"


function HomePage(){
    const navigate = useNavigate();
    const [name,setName] = useState();
    function GotoUserPage(){
        navigate(`/user/ ${name}`)
    }
    return(
        <>  
        <img src={img}/>
        <h2>Welcome to Home Page.</h2>
        <input type="text" placeholder="Enter your required name"
        onChange={(e) => {
            setName(e.target.value)
        }} value={name}/>
        <button onClick={() => { GotoUserPage()} }>Proceed</button>
        </>
    )
}
export default HomePage;