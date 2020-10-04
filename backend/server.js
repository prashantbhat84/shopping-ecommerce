import express from 'express';
const port = process.env.PORT || 5000;
import products from "./data/data.js"
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import colors from 'colors';
dotenv.config();
const app = express();
connectDB();
app.get("/", (req, res) => {
    res.send('API is running...')
})
app.get("/api/products", (req, res) => {
    res.json(products)
})
app.get("/api/products/:id", (req, res) => {

    const product = products.find(product => product._id === req.params.id);
    res.json(product)
})

app.listen(port, () => {
    console.log(`Server listening  in ${process.env.NODE_ENV} mode on port ${port}`.bold.magenta);
})
