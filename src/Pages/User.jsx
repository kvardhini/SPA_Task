import React from "react";
import { useParams } from "react-router-dom";

function UserPage(){
    const {name} = useParams();
    return(
        <>
            <h3>Welcome,{name} it's Nice to see you.</h3>

        </>
    )
}
export default UserPage;