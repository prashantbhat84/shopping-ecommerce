import mongoose from 'mongoose';
global.mongoose = mongoose;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log(`Mongodb connected: ${conn.connection.host} with db ${conn.connection.name} `.cyan.underline);

    } catch (error) {
        console.log(`Error ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};

export default connectDB;