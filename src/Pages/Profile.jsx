import React from "react";
import { useParams } from "react-router-dom";

function Profile(){
    const {name} = useParams();
    return(
        <h5>{name},Profile</h5>
    )
}
export default Profile;