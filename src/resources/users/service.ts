import dbClient from "../../utils/dbClient";
import { User } from "@prisma/client";

import { hash } from "bcrypt";

const createWithHash = async (newUser: User) => {
  const typedPassword = newUser.password;

  //hash password, recieve promise
  const hashedPassword = await hash(typedPassword, 10);

  //saved hashed password
  const savedUser = await dbClient.user.create({
    data: {
      ...newUser,
      password: hashedPassword,
    },
  });
  return savedUser;
};

const userClient = {
  ...dbClient.user,
  createWithHash,
};

export default userClient;
