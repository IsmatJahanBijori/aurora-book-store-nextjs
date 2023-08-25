// import { Schema, model, models, mongoose } from 'mongoose'

// const userSchema = new Schema({
//     name: String,
//     email: String,
//     password: String
// })
// const Users = models.user || model('user', userSchema)
// mongoose.models={}
// export default Users;


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema)