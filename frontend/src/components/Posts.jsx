import React from "react";
import Post from "./Post";

const Posts = (e) => {
    return (
        <div className="fixed top-10 left-[50%] translate-x-[-50%] z-10">
               {
                   [1,2,3,4].map((item,index) => <Post key={index}/>)
               }
            </div>
    )
}

export default Posts