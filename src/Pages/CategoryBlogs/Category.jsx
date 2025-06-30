import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Banner from "../../Components/Banner/Banner"
import All_trending from "../../Components/All_trending/All_trending"
import blogData from "../../Utiles/Mockdata"
import './Category.css'

function Category(){
    const [currentCategory,setCurentCayegory] = useState("Programming")
    
    return(
        <>  
        <Banner/>
        <div className="trenfing-section my-10 px-4">
            <h1 className="text-xl font-bold mb-4">
                {currentCategory}
            </h1>
            <div className="grid grid-cols-4 grid-rows-4 gap-4 w-[500px] h-[50px] d-flex flex-direction-row">
                {
                    blogData.map(blog=> blog.category == currentCategory &&
                      <All_trending blog={blog}/>  
                    )
                }
                

            </div>
        </div>
        
        </>
    )
}
export default Category;