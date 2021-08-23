import { Request, Response } from "express";
import userClient from "./service";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userClient.findMany();
    res.json({ data: users });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = req.body;

  try {
    const created = await userClient.createWithHash(newUser);
    res.json({ data: created });
  } catch (error) {
    res.json({ error: error.message });
  }
};
