import React from "react";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";
import RightSidebar from "./RightSideBar";

const Home = (e) => {
    return (
        <div className="flex">
            <div className="flex-grow"> 
                <Feed/>
                <Outlet/>
            </div>
            <RightSidebar/>
        </div>
    )
}

export default Home
// className="fixed top-0 z-10 left-[50%]" this works to put home in the middle