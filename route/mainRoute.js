import express from "express"
import { dashboard, Login } from "../controller/mainController.js"
const route = express.Router()
route.route('/dashboard').get(dashboard)
route.route('/login').post(Login)

export default route