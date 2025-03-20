import React from "react";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";
import RightSidebar from "./RightSideBar";

const Home = () => {
    return (
        <div className="flex h-screen w-full">
            <div className="flex-1 overflow-y-auto flex flex-col items-center gap-4  ">
                <Feed />
                <Outlet />
            </div>
            <RightSidebar />
        </div>
    );
};

export default Home;

// className="fixed top-0 z-10 left-[50%]" this works to put home in the middle