import dbClient from "../../utils/dbClient";
import { User } from ".prisma/client";
import { compare } from "bcrypt";

export const findUserWithValidation = async (userCreds: User) => {
  const foundUser = await dbClient.user.findUnique({
    where: {
      username: userCreds.username,
    },
  });

  if (!foundUser) throw new Error("Username/Password incorrect");

  const isPasswordValid = await compare(userCreds.password, foundUser.password);

  if (!isPasswordValid) throw new Error("username/password incorrect");

  return foundUser;
};
