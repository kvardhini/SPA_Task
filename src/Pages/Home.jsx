import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import All_trending from "../Components/All_trending/All_trending";
import blogData from "../Utiles/Mockdata";

function HomePage(){
    const navigate = useNavigate();
    return(
        <>  
        <Banner/>
        <div className="my-2">
            <h1>Read Blogs from </h1>
            <div className="d-flex justify-content-between">
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

       <div >
            <h1>Trending Blogs</h1>
            <div className="row">
                {
                    blogData.slice(0, 16).map((blog, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
                    <All_trending blog={blog} />
            </div>
      ))
    }
        </div>
    </div>  

        </>
    )
}
export default HomePage;