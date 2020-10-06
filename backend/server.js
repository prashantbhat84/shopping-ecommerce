import express from 'express';
const port = process.env.PORT || 5000;
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import colors from 'colors';
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
dotenv.config();
const app = express();
connectDB();
app.use(express.json())

app.get("/", (req, res) => {
    res.send('API is running...')
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use(notFound);
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server listening  in ${process.env.NODE_ENV} mode on port ${port}`.bold.magenta);
})
