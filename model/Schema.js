import { Schema, model, models, mongoose } from 'mongoose'

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})
const Users = models.user || model('user', userSchema)

export default Users