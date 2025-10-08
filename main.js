import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./route/mainRoute.js";
import cookieParser from "cookie-parser";
import Error from "./errorhandler/erorMiddleware.js";
const MainEndpoint = route;
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3200",
    credentials: true,
}));
app.use(Error)
app.use(cookieParser())
dotenv.config();
app.use("/jwt/api", MainEndpoint);
const Port = process.env.PORT || 3200;
const start = async () => {
    app.listen(Port, () => {
        console.log("Running server on port", Port);
        console.log("Connecting succes!");
    });
};
start();
