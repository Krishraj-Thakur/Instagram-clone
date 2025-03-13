import mongoose from "mongoose";
const conversationSchema = new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId, //we keep it in an array 
        ref:'User'                       //as there can be multiple users
    }],                                    //like 2 or more intead of 1
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }]
});
export const Conversation = mongoose.model('Conversation',conversationSchema);