import AuthPassword from "../models/AuthPassword.js";
import User from "../models/User.js";


export const getPasswordRoutes = async(req, res) => {
    try {
        const setPassword = await AuthPassword.findOne({ user: req.user.id }).populate('user', ['firstName', 'lastName', 'email']);

        if (!setPassword) {
            return res.status(400).json({ msg: "There is NO password set for this user" })
        }

        res.json(setPassword)

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error')
    }
}

export const setPasswordRoutes = async(req, res) => {
    const { password, confirmPassword } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id

    if (password) profileFields.password = password;
    if (confirmPassword) profileFields.confirmPassword = confirmPassword;

    console.log(password)
    console.log(confirmPassword)

    res.send("Hello")
}