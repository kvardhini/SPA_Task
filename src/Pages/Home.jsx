import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../assets/myimage.jpeg"
import Banner from "../Components/Banner/Banner";


function HomePage(){
    const navigate = useNavigate();
    return(
        <>  
        <Banner/>
        <div>
            <h1>Read Blogs from </h1>
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="./All_images/programming.jpg" className="card-img-top" alt="Programming-image" /> 
                    <div className="card-body">
                        <h5 className="card-title">Programming </h5>   
                    </div>
                </div>
                 <div className="card" style={{width: "18rem"}}>
                    <img src="./All_images/cooking.webp" className="card-img-top" alt="Cooking-image" /> 
                    <div className="card-body">
                        <h5 className="card-title">Cooking </h5>   
                    </div>
                </div>
                 <div className="card" style={{width: "18rem"}}>
                    <img src="./All_images/workout.jpg" className="card-img-top" alt="Workout-image" /> 
                    <div className="card-body">
                        <h5 className="card-title">Workout </h5>   
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default HomePage;