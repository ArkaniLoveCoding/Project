import CustomApiError from "./CustomApiError.js"
import { StatusCodes } from "http-status-codes"
const Error = (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: "error",
            err: err.statusCode,
            massage: err.message
        })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something went wrong!")
    next()
}
export default Error