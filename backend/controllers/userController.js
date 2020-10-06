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