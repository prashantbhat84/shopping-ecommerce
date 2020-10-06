import Product from '../models/Product.js'
import asyncHandler from 'express-async-handler';
//@desc fetch all products
//@method GET
//@route /api/products
//@access public
export const getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find()

    res.status(200).json(products);
});
//@desc fetch single products
//@method GET
//@route /api/products/id
//@access public
export const getProductById = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        return res.status(200).json(product)
    }
    res.status(404)
    throw new Error("Product not found")
})