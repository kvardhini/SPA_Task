import React from "react";
import './All_trending.css'

function All_trending({blog}){
    let image="";
    switch (blog.category){
        case "Programming":
            image = "programming.jpg"
            break;
        case "Cooking":
            image = "cooking.webp"
            break;
        case "Workout":
            image ="workout.jpg"
            break;
        default :
            image = "banner.jpeg"
            break;

    }
    console.log("line category:14",blog.category,"->",image)
    return(
        <>
            
            <div className="card h-100"  >
                <img src={`/All_images/${image}`} className="card-img-top" alt="blog"/>
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-category text-muted">{blog.category}</p>
                    <p className="card-text">{blog.preview_description}</p>
                    
                </div>
            </div>
        </>
    )
}
export default All_trending;