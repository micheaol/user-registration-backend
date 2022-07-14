import User from '../models/User.js';


export const registerUsers = async(req, res) => {

    const { firstName, lastName, email } = req.body;

    try {

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: [{ message: "User already exist" }] })
        }

        user = new User({
            firstName,
            lastName,
            email,
        });

        await user.save();

        console.log(user);
        res.send("User routes")

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server error")

    }

}