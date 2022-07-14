import { check, validationResult } from 'express-validator';

//User validator:
export const validateUser = [
    check('firstName', 'First name can not be empty, it must be atleast 5 character!')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .bail()
    .isLength({ min: 5 })
    .bail(),
    check('lastName', 'Last name can not be empty, it must be atleast 5 character!')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .bail()
    .isLength({ min: 5 })
    .bail(),
    check('email', 'Invalid email address!').isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];


//User validator:
export const validateLogin = [
    check('email', 'Invalid email address!').isEmail(),
    check('password', 'Password is required').exists(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];