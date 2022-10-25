const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        maxLength: 9,
        minLength: 9
    },
    firstName: String,
    lastName: String,
    email: String,
    encrpytedPassword: String,
    city: String,
    street: String,
    houseNumber: String,
    role: {
        type:String,
        default:'customer'
    },
    token: {
        type: String,
        required: false
    }
})

const User = model('user', userSchema);

module.exports = {
    User,

}