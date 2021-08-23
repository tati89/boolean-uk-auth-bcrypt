import { Router } from "express";

import { getAllUsers, createUser } from "./controller";

const usersRouter = Router();

usersRouter.get("/", getAllUsers);

usersRouter.post("/", createUser);

export default usersRouter;
