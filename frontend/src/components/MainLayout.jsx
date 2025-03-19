import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

const MainLayout = (e) => {
    return (
        <div>
            <LeftSideBar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout