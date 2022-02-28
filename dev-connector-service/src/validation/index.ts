import Ajv from "ajv";
import { AnyValidateFunction } from "ajv/dist/core";
import addFormats from "ajv-formats";

export const ajv = new Ajv();
addFormats(ajv);

import "./controllers/auth-controller.validation";

/**
 * Wrapper function for ajv.getSchema that throws an error when a schema key is not found
 * @param {string} schemaKey The key to the ajv schema to be used
 * @returns {AnyValidateFunction<Type>} Validation function returned by ajv
 */
export function getValidator<Type>(schemaKey: string): AnyValidateFunction<Type> {
  const validation = ajv.getSchema(schemaKey) as AnyValidateFunction<Type>;
  if (!validation) throw new Error(`No schema found for key: '${schemaKey}'`);
  return validation;
}
