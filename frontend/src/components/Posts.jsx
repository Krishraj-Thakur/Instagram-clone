import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="w-full max-w-[470px] flex flex-col items-center gap-4">
      {[1, 2, 3, 4].map((item, index) => (
        <Post key={index} />
      ))}
    </div>
  );
};

export default Posts;
