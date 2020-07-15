const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date().toLocaleString('id-ID', {
            timeZone: 'UTC'
        })
    },
    updatedAt: {
        type: Date,
        default: new Date().toUTCString()
    }
})

const User = mongoose.model('users', UserSchema)

module.exports = User