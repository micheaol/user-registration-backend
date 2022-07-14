import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', UserSchema);

export default User;