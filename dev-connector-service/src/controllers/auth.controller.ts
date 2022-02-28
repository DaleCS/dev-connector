import { Request, Response } from "express";
import { getValidator } from "../validation";

const CONTROLLER_NAME = "auth.controller";

interface IRegisterReqBody {
  email: string;
  password: string;
}

export const registerController = async (req: Request, res: Response) => {
  const validate = getValidator<IRegisterReqBody>(`${CONTROLLER_NAME}.registerUserRequest`);
  try {
    if (!validate(req.body)) return res.status(400).json(validate.errors);
    return res.status(200).json({ msg: "/user" });
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
