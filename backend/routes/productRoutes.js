import express from 'express';
import Product from '../models/Product.js'
const router = express.Router();
import asyncHandler from 'express-async-handler';
//@desc fetch all products
//@route /api/products
//@access public
router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find()

    res.status(200).json(products);
}))
//@desc fetch single products
//@route /api/products/id
//@access public
router.get("/:id", asyncHandler(async (req, res) => {


    const product = await Product.findById(req.params.id);
    if (product) {
        return res.status(200).json(product)
    }
    res.status(404)
    throw new Error("Product not found")

}))


export default router;
