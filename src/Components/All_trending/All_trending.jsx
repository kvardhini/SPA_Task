import React from "react";
import './All_trending.css'

function All_trending(){
    return(
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src="/All_images/programming.jpg" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Programming</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
export default All_trending;