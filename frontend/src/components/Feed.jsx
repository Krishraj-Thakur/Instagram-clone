import React from "react";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="flex justify-center items-start w-full  overflow-y-auto h-screen">
  <Posts />
</div>

  );
};

export default Feed;
