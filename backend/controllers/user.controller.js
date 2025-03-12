import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { profile } from "console";
import jwt from "jsonwebtoken";
import cloudinary from "../utils/cloudinary.js";


export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return resizeBy.status(401).json({
                message: "Something is missing,pls check!",
                success: false,
            });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "Try different email",
                success: false
            });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            username,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            message: "Account has been created successfully",
            success: true
        });
    } catch (error) {
        console.log(error)
    }
}
export const login = async (req, res) => {
    try {
        const { email, password, } = req.body;
        if (!email || !password) {    //providing email and password when calling form front end //front end gives to backend and back end requests maybe
            return resizeBy.status(401).json({
                message: "Something is missing,pls check!",
                success: false,
            });
        }
        let user = await User.findOne({ email });
        if (!user) {
            return resizeBy.status(401).json({
                message: "Incorrect mail or password!",
                success: false,
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "Incorrect mail or password!",
                success: false,
            });
        };
        user = {
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            bio: user.bio,
            followers: user.followers,
            following: user.following,
            posts: user.posts
        }
        const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
        return res.cookie('token', token, { httpOnly: true, sameSite: 'strict', maxAge: 1 * 24 * 60 * 60 * 1000 }).json({
            message: `Welcome back ${user.username}`,
            success: true,
            user
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const logout = async (__, res) => {
    try {
        return res.cookie("token", "", { maxAge: 0 }).json({
            message: 'Logged out successfully',
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};
export const getProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        let user = await User.findById(userId).select('-password');
        return res.status(200).json({
            user,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};
export const editProfile = async (req, res) => {
    try {
        const userId = req.id;
        const { bio, gender } = req.body;
        const profilePicture = req.file;
        let cloudResponse;

        if (profilePicture) { //if they have provided a profile pucture to the backend 
            const fileUri = getDataUri(profilePicture); 
            cloudResponse = await cloudinary.uploader.upload(fileUri); 
        }
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(401).json({
                message: 'User not found',
                success: false
            })
        };
        if (bio) user.bio = bio;
        if (gender) user.gender = gender;
        if (profilePicture) user.profilePicture = cloudResponse.secure_url;
        await user.save();

        return res.status(200).json({
            message: 'Profile updated',
            success: true,
            user
        });

    } catch (error) {
        console.log(error)
    }
};
export const getSuggestedUsers = async (req, res) => {
    try {
        const suggestedUsers = await User.find({ _id: { $ne: req.id } }).select("-password");
        if (!suggestedUsers) {
            return res.status(401).json({
                message: 'Currently do not have any users',
            })
        };
        return res.status(200).json({
            success: true,
            users: suggestedUsers
        })
    } catch (error) {
        console.log(error)
    }
};
export const followOrUnfollow = async (req, res) => {
    try {
        const followKerneWala = req.id; //my id
        const jiskoFollowKarunga = req.params.id;//second id
        if(followKerneWala == jiskoFollowKarunga){
            return res.status(401).json({
                message:'You cannot follow/unfollow yourself',
                success:false
            });
        }
        const user = await User.findById(followKerneWala);
        const targetUser = await User.findById(jiskoFollowKarunga);

        if(!user || !targetUser){
            return res.status(401).json({
                message:'User not found',
                status:false
            });
        }
        //i will check wether to follow or not to follow
        const isFollowing = user.following.includes(jiskoFollowKarunga);
        if (isFollowing) { 
            await Promise.all([//unfollow logic
                User.updateOne({_id:followKerneWala},{$pull:{following:jiskoFollowKarunga}}),//removing from following list
                User.updateOne({_id:jiskoFollowKarunga},{$pull:{followers:followKerneWala}}),//removing from followers list
            ])
            return res.status(200).json({
                message:' Unfolllow successfully',
                success:true
            });
        } else {
            await Promise.all([//follow logic
                User.updateOne({_id:followKerneWala},{$push:{following:jiskoFollowKarunga}}),//the one who follows
                User.updateOne({_id:jiskoFollowKarunga},{$push:{followers:followKerneWala}}),//the one we are trying to follow
            ])
            return res.status(200).json({
                message:' Followed successfully',
                success:true
            })
        }
    } catch (error) {
        console.log(error)
    }
}
