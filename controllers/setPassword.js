import AuthPassword from "../models/AuthPassword.js";
import bcrypt from "bcryptjs";
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
    let { password, confirmPassword } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id


    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);


    if (password) profileFields.password = password;
    if (confirmPassword) profileFields.confirmPassword = confirmPassword;

    try {

        let profile = await AuthPassword.findOne({ user: req.user.id });

        if (profile) {
            profile = await AuthPassword.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });

            return res.json(profile)
        }

        profile = new AuthPassword(profileFields);

        await profile.save()

        res.json(profile)


    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error')
    }
}