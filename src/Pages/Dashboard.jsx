import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard(){
    return(
        <>
        <h3>Dashboard</h3>
        <Outlet/>
        </>

    )
}
export default Dashboard;