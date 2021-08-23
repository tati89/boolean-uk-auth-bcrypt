"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const usersRouter = express_1.Router();
usersRouter.get("/", controller_1.getAllUsers);
usersRouter.post("/", controller_1.createUser);
exports.default = usersRouter;
