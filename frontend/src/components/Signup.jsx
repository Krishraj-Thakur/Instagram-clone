import { Label } from "./ui/label";

import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { Button } from "./ui/button";

const Signup = () => {
    const [input, setInput] = useState({
        username:"",
        email:"",
        password:""
    });
    const changeEventHandler = (e) => {
        setInput({...input,[e.target.name]:e.target.value});
    }

   
    return (
        <div className="flex items-center w-screen h-screen justify-center">
            <form  className='shadow-lg flex flex-col gap-5 p-8 '>
                <div className='my-4'>
                    <h1 className='text-center font-bold text-xl'>LOGO</h1>
                    <p className='text-sm text-center'>Signup to see photos and videos from your friend</p>

                </div>
                <div>
                    <span className=' font-medium'>Username</span>
                    <Input
                     type="text"
                     name="username"
                     value={input.username}
                     onChange={changeEventHandler}
                     className="focus-visible:ring-transparent my-2"
 
                     />
                </div>
                <div>
                    <span className=' font-medium'>E-mail</span>
                    <Input
                     type="email"
                     name="email"
                     value={input.email}
                     onChange={changeEventHandler}
                     className="focus-visible:ring-transparent my-2"
 
                     />
                </div>
                <div>
                    <span className=' font-medium'>Password</span>
                    <Input
                     type="password"
                     name="password"
                     value={input.password}
                     onChange={changeEventHandler}
                     className="focus-visible:ring-transparent my-2"
 
                     />
                </div>
                <Button type=' submit'>Sign Up</Button>
            </form>
        </div>
    )
}
export default Signup