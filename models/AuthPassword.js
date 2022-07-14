import mongoose from "mongoose";

const AuthPasswordSchema = new mongoose.Schema({
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