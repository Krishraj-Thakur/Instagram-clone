import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";

const Post = (e) => {
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
                    </DialogContent>
                </Dialog>
            </div>

        </div>
    )
}

export default Post