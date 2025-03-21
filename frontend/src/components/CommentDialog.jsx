import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
import { MoreHorizontal, MoreHorizontalIcon } from "lucide-react";
import { Button } from "./ui/button";

const CommentDialog = ({ open, setOpen }) => {
    const [text, setText] = useState("");

    const changeEventHandler = (e) => {
        const inputText = e.target.value;
        if(inputText.trim()){
            setText(inputText);
        }else{
            setText("");
        }
    }

    const sendMessageHandler = async () => {
        alert(text);
    }

    return (
        <Dialog open={open}>
            <DialogContent onInteractOutside={() => setOpen(false)} className="!max-w-5xl p-0 flex flex-col">
                <div className="flex flex-1">
                    <div className="w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1742144897659-8a3e8a0a090c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                            alt="post_img"
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between">
                        <div className="flex items-center justify-between p-4">
                            <div className="flex gap-3 items-center">
                                <Link>
                                    <Avatar>
                                        <AvatarImage src="" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </Link>
                                <div>
                                    <Link className="font-semibold text-xs">username</Link>
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
                        <div className="flex-1 overflow-y-auto max-h p-4 ">
                            comments come here
                        </div>
                        <div className="p-4">
                            <div className="flex items-center gap-2">
                                <input type="text" value={text} onChange={changeEventHandler} placeholder="Add a comment..." className="w-full outline-1 border-grey-300 p-2 rounded" />
                                <Button disabled={!text.trim()} onClick={sendMessageHandler}  variant="outline" className="!bg-white">Send</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CommentDialog