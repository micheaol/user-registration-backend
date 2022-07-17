import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import config from 'config';


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

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecretToken'), { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;

                res.json({ token })
            }

        );


    } catch (error) {
        res.status(500).send("Server error")

    }

}