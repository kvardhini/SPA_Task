import React from "react";
import './Dedicate.css'
import Banner from "../../Components/Banner/Banner";
import { useState } from "react";
import blogData from "../../Utiles/Mockdata";

function Dedicate(){
    const [blogId,setBlogId] = useState(1);
    let gotoDisplay = blogData.filter(blog=>blog.id == blogId)[0];
    return(
        <>
            <Banner/>
            <h1>{gotoDisplay.title}</h1>
            <h5>{gotoDisplay.category}</h5>
            <p>{gotoDisplay.content}</p>

        </>
    )
}
export default Dedicate;