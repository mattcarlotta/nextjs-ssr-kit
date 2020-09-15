/* eslint-disable no-console */
import isEmpty from "lodash.isempty";
import { BaseFieldProps } from "~types";

/**
 * Helper function to validate form fields.
 *
 * @function
 * @param {array} fields - an array containing fields.
 * @returns {object} validated fields and number of errors.
 * @throws {error}
 */

const fieldValidator = <T extends any[]>(
  fields: T,
): { validatedFields: T; errors: number } => {
  try {
    if (isEmpty(fields)) throw new Error("You must supply an array of fields!");
    let errorCount = 0;

    const validatedFields = fields.map(field => {
      let errors = "";
      const {
        type,
        value,
        required,
      }: Pick<BaseFieldProps, "type" | "value" | "required"> = field;
      if ((!value && required) || (isEmpty(value) && required)) {
        errors = "Required.";
      } else if (
        type === "email" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(field.value)
      ) {
        errors = "Invalid email.";
      }

      if (errors) errorCount += 1;

      return { ...field, errors };
    }) as T;

    return { validatedFields, errors: errorCount };
  } catch (err) {
    throw String(err);
  }
};

export default fieldValidator;
