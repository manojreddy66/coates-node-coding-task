import mongoose from "mongoose";
import  config  from "config";

export interface UserDocument extends mongoose.Document{
    email:string,
    name: string,
    dob: string
    
}

const userSchema=new mongoose.Schema({
    email: {type:String,required:true,unique:true},
    name: {type:String,required:true},
    dob: {
        type: String,required:true
    },

},{
    timestamps:true
});

const UserModel=mongoose.model("User",userSchema);
export default UserModel;