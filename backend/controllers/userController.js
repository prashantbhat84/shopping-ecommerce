import User from '../models/User.js'
import asyncHandler from 'express-async-handler';
import { generateToken } from '../utils/generateToken.js'
//@desc Auth user and get token
//@method POST
//@route /api/users/login
//@access public
export const authUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
});
//@desc Get Logged in users profile
//@method GET
//@route /api/users/profile
//@access private
export const authUserProfile = asyncHandler(async (req, res, next) => {

    const user = req.user;
    if (!user) {

        res.status(404)
        throw new Error("Not Found")
    }
    res.json(user)


});
//@desc Register a new user
//@method POST 
//@route /api/users/profile
//@access private
export const registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }
    const user = await User.create({ name, email, password });
    if (user) {
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid User data")
    }

});