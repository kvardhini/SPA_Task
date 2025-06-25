import React from "react";
import './Banner.css'

function Banner(){
    return(
        <>
        <div className="banner-div">
            <div className="overlay">
                <h1 id='banner-title'>Welcome to our Blogs Website.</h1>
            </div>
            <img src='./public/All_images/banner.jpeg' width={'100%'} height={'650px'} style={{objectFit:'cover'}} /> 

        </div>
        
        </>
    )
}
export default Banner;