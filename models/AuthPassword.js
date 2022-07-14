import mongoose from "mongoose";

const AuthPasswordSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    password: {
        type: String,
        require: true
    },

    passwordConfirmation: {
        type: String,
        require: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});


const AuthPassword = mongoose.model('password', AuthPasswordSchema);

export default AuthPassword;