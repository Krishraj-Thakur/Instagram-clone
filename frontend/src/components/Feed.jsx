import React from "react";
import Posts from "./Posts";

const Feed = (e) => {
    return (
        <div className="flex-1 my-8 flex flex-col items-center gap-4">
            <Posts/>
        </div>
    )
}

export default Feed