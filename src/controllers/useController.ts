import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  res.send({ name: "hello" });
};

export const userList = (req: Request, res: Response) => {
  res.send([{ name: "hello" }]);
};
