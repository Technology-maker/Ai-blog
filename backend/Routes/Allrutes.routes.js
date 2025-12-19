import express from "express";
import MessageController from "../Components/Message.controller.js"
const Router = express.Router();

Router.post("/contact", MessageController);

export default Router;