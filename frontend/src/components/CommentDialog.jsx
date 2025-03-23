import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
import { MoreHorizontal, MoreHorizontalIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import axios from "axios";
import { toast } from "sonner";
import { setPosts } from "@/redux/postSlice";


const CommentDialog = ({ open, setOpen }) => {
    const [text, setText] = useState("");
    const { selectedPost, posts } = useSelector(store => store.post);
    const [comment, setComment] = useState(selectedPost?.comments);
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        const inputText = e.target.value;
        if (inputText.trim()) {
            setText(inputText);
        } else {
            setText("");
        }
    }



    const sendMessageHandler = async () => {
        try {
            const res = await axios.post(`http://localhost:8000/api/v1/post/${selectedPost?._id}/comment`, { text }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

 

            if (res.data.success) {
                const updatedCommentData = [...comment, res.data.comment];
                setComment(updatedCommentData);

                const updatedPostData = posts.map(p =>
                    p._id == selectedPost._id ? { ...p, comments: updatedCommentData } : p
                );


                dispatch(setPosts(updatedPostData));
                toast.success(res.data.message);
                setText("");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Dialog open={open}>
            <DialogContent onInteractOutside={() => setOpen(false)} className="!max-w-5xl p-0 flex flex-col">
                <div className="flex flex-1">
                    <div className="w-1/2">
                        <img
                            src={selectedPost?.image}
                            alt="post_img"
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between">
                        <div className="flex items-center justify-between p-4">
                            <div className="flex gap-3 items-center">
                                <Link>
                                    <Avatar>
                                        <AvatarImage src={selectedPost?.author?.profilePicture} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </Link>
                                <div>
                                    <Link className="font-semibold text-xs">{selectedPost?.author?.username}</Link>
                                    {/*<span className="text-gray-400 txt-sm">Bio here...</span>*/}
                                </div>
                            </div>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="p-2 !bg-white rounded-full hover:bg-gray-200 transition">
                                        <MoreHorizontal className="cursor-pointer text-black" />
                                    </button>
                                </DialogTrigger>

                                <DialogContent className="p-4 flex flex-col items-center gap-2 !bg-white rounded-md shadow-lg">
                                    <button className="cursor-pointer !bg-white text-red-500 font-semibold w-full py-2 hover:bg-gray-100 rounded-md transition">
                                        Unfollow
                                    </button>
                                    <button className="cursor-pointer !bg-white font-semibold w-full py-2 hover:bg-gray-100 rounded-md transition">
                                        Add to Favourites
                                    </button>
                                </DialogContent>

                            </Dialog>
                        </div>
                        <hr />
                        <div className="flex-1 overflow-y-auto max-h-96 p-4 ">
                            {
                                comment.map((comment) => <Comment key={comment._id} comment={comment} />)
                            }

                        </div>
                        <div className="p-4">
                            <div className="flex items-center gap-2">
                                <input type="text" value={text} onChange={changeEventHandler} placeholder="Add a comment..." className="w-full outline-1 border-grey-300 p-2 rounded" />
                                <Button disabled={!text.trim()} onClick={sendMessageHandler} variant="outline" className="!bg-white">Send</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CommentDialog