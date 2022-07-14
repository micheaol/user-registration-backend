import { check, validationResult } from "express-validator"


export const registerUsers = (req, res) => {
    console.log(req.body)
    res.send("User routes")
}