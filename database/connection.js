// import mongoose from 'mongoose';

// const connectMongo = async () => {
//     try {
//         const { connection } = await mongoose.connect(process.env.MONGO_URI)
//         if (connection.readyState == 1) {
//             return Promise.resolve(true)
//         }
//     } catch (e) {
//         return Promise.reject(e)
//     }
// }

// export default connectMongo;

import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req, res)
}
export default connectDB