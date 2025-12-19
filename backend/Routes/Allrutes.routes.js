import express from "express";
import MessageController from "../Components/Message.controller.js"
const Router = express.Router();

Router.get("/", (req, res) => {
    res.send("Backend is running Properly !");
})
Router.post("/contact", MessageController);

export default Router;