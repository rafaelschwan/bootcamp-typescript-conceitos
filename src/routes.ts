import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "rafaelschwan@hotmail.com",
    password: "12345678",
    techs: [
      "Node.js",
      "React.js",
      "React Native",
      {
        title: "Javascript",
        experience: 100,
      },
    ],
  });

  return response.json({ message: "Hello World" });
}
