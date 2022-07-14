import { check, validationResult } from 'express-validator';

//User validator:
export const validatePassword = [
    check("password")
    .notEmpty().withMessage("Password should not be empty"),
    check("confirmPassword")
    .notEmpty().withMessage("Confirm Password should not be empty"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];