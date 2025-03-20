import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Bookmark, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import { Button } from "./ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CommentDialog from "./CommentDialog";

const Post = () => {
    const [text, setText] = useState("");

    const changeEventHandler = (e) => {
        const inputText = e.target.value;
        if (inputText.trim()) {
            setText(inputText);
        } else {
            setText("");
        }
    }
    return (
        <div className="my-8 w-full max-w-sm mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="" alt="post_image" />
                        <AvatarFallback>CN </AvatarFallback>

                    </Avatar>
                    <h1 className="!text-[20px]">username</h1>

                </div>
                <Dialog >
                    <DialogTrigger asChild>
                        <MoreHorizontal className="cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="flex flex-col items-center text-sm text-center">
                        <Button variant="ghost" className="cursor-pointer w-fit text-[#ED4956] font-bold !bg-white ">Unfollow</Button>
                        <Button variant="ghost" className="cursor-pointer w-fit  !bg-white ">Add to Favourites</Button>
                        <Button variant="ghost" className="cursor-pointer w-fit  !bg-white ">Delete</Button>
                    </DialogContent>
                </Dialog>
            </div>
            <img
                className="rounded-xl my-2 w-full aspect-square object-cover"
                src="https://images.unsplash.com/photo-1742144897659-8a3e8a0a090c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                alt="post_img"
            />

            <div className="flex items-center justify-between my-2">
                <div className="flex items-center gap-3">
                    <FaRegHeart size={"22px"} className="cursor-pointer hover:text-gray-600" />
                    <MessageCircle className="cursor-pointer hover:text-gray-600" />
                    <Send className="cursor-pointer hover:text-gray-600" />
                </div>
                <Bookmark className="cursor-pointer hover:text-gray-600" />
            </div>
            <span className="font-medium block mb-2">1k likes</span>
            <p>
                <span className="font-bold inline mr-2">Username</span>
                caption
            </p>
            <span>View all x comments</span>
            <CommentDialog />
            <div className="flex items-center justify-between">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={text}
                    onChange={changeEventHandler}
                    className="outline-none text-sm w-full"
                />
                {
                    text && <span className="text-[#3BADF8]">Post</span>
                }

            </div>
        </div>

    )
}

export default Post