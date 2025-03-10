import mongoose from "mongoose";
const conversationSchema = new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId, //we keep it in an array 
        ref:'User'                       //as there can be multiple users
    }],                                    //like 2 or more intead of 1
    message:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }]
});
export default Conversations = mongoose.model('Conversation',conversationSchema);