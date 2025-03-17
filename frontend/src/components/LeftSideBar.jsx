import { Heart, Home, LogOut, MessageCircle, PlusSquare, Search, TrendingUp } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const sidebarItems = [
    { icon: <Home />, text: "Home" },
    { icon: <Search />, text: "Search" },
    { icon: <TrendingUp />, text: "Explore" },
    { icon: <MessageCircle />, text: "Messages" },
    { icon: <Heart />, text: "Notifications" },
    { icon: <PlusSquare />, text: "Create" },
    {
        icon: (
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

        ),
        text: "Profile"
    },
    { icon: <LogOut />, text: "Logout" }
]

const LeftSideBar = (e) => {
    return (
        <div>
            {
                sidebarItems.map((item, index)=>{
                    return (
                        <div key={index}>
                            {item.icon}
                            <span>{item.text}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LeftSideBar