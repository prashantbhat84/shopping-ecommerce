import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'
import User from '../models/User.js';

export const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {

            token = req.headers.authorization.split(' ')[1]

            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decodedToken.id).select('-password')

            next()

        } catch (error) {
            console.error(error);
            res.status(401)
            throw new Error("Not Authorised")
        }

    }
    if (!token) {
        res.status(403)
        throw new Error("Not authorised to access resource")
    }


})