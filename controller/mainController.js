import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import BadRequest from "../errorhandler/BadRequest.js";
export const dashboard = async (req, res) => {
    const authHeader = req.cookies.token;
    try {
        const tokenAuth = jwt.verify(authHeader, process.env.JWT_SECRET);
        const tokenRandom = Math.floor(Math.random() * 100);
        res.status(StatusCodes.OK).json({
            data: `Hello ${tokenAuth.username}, your token is authethincation, ${tokenRandom}`,
            massage: "Validate!",
        });
        console.log(tokenAuth);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            InvalidData: error.message,
        });
    }
};
export const Login = async (req, res) => {
    console.log(req.headers);
    const { username, password } = req.body;
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    if (!username || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            dataInvalid: "username and password must be provided!",
        });
    }
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // true kalau di deploy HTTPS
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(StatusCodes.OK).json({
        data: token,
        msg: "Valid data detected!",
    });
};
