import User from '../models/User.js';

export const authRoutes = async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)

    } catch (error) {
        res.status(500).send('Server error')
    }
}