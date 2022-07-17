import { check, validationResult } from 'express-validator';

//User validator:
export const validatePassword = [
    check('password', 'Password should not be empty')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .bail()
    .isLength({ min: 6 })
    .bail(),
    check('confirmPassword', 'Confirm password should not be empty')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .bail()
    .isLength({ min: 6 })
    .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];