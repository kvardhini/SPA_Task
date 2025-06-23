import React from "react";
import img from "../assets/myimage.jpeg"

function AboutPage(){
    return(
        <>
        <div className="Container">
            <img src={img} />
        </div>
        <h2>Welcome to About Page.</h2>
        </>
    )
}
export default AboutPage;