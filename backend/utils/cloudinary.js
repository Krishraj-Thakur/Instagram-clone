import {V1 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
export default cloudinary;

//cloudinary basic setup