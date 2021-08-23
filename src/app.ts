import express from "express";
const cookieParser = require("cookie-parser");
const logger = require("morgan");
import usersRouter from "./resources/users/router";
import authRouter from "./resources/auth/router";

var app = express();

// Middlewares
app.use(logger("dev"));
app.use(express.json());

app.use(cookieParser());

// Routes
app.use(authRouter);
app.use("/users", usersRouter);
app.all("*", (req, res) => {
  res.status(404).json({ msg: "No routes found" });
});

module.exports = app;
