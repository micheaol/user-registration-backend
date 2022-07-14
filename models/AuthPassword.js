import mongoose from "mongoose";

const AuthPasswordSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId
    },

    password: {
        type: String,
        require: true
    },

    passwordConfirmation: {
        type: String,
        require: true
    }
});


const AuthPassword = mongoose.model('password', AuthPasswordSchema);

export default AuthPassword;