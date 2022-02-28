import { ajv } from "../";

const CONTROLLER_NAME = "auth.controller";

const registerUserRequest = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", format: "password", minLength: 8 },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

ajv.addSchema(registerUserRequest, `${CONTROLLER_NAME}.registerUserRequest`);
