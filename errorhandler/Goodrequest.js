import CustomApiError from "./CustomApiError.js"
import { StatusCodes } from "http-status-codes"
class GoodRequest extends CustomApiError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.OK
    }
}

export default GoodRequest