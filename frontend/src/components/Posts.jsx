import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const {posts} = useSelector(store=>store.post);
  console.log("Posts from Redux:", posts);
  return (
    <div className="w-full max-w-[470px] flex flex-col items-center gap-4">
      {posts.map((post) => (
        <Post key={post._id} post={post}/>
      ))}
    </div>
  );
};

export default Posts;
