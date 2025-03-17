import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

const MainLayout = (e) => {
    return (
        <div className="fixed top-0 left-0 h-full w-48 bg-gray-100 p-5">
            <LeftSideBar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout