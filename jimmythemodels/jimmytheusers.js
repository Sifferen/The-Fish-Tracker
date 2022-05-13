const mongoose=require('mongoose')
const Schema= mongoose.Schema
const userSchema = new Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
}, {collection: 'users'})

const user= mongoose.model('Users',userSchema)

module.exports=user





