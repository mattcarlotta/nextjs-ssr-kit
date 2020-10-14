/* eslint-disable no-console */
import isEmpty from "lodash.isempty";

/**
 * Helper function to update form fields.
 *
 * @function
 * @param {array} fields - an array containing fields.
 * @param {string} name - name of field to update.
 * @param {string} value - value of field to update.
 * @returns {array} - updated fields.
 * @throws {error}
 */
const fieldUpdater = <T extends any[]>(
  fields: T,
  name: string,
  value?: string
): T => {
  try {
    if (isEmpty(fields) || !name) {
      throw new Error(
        "You must supply a field array with a name of the field to update!"
      );
    }
    const updatedFields = fields.map(field =>
      field.name === name ? { ...field, value, errors: "" } : field
    ) as T;

    return updatedFields;
  } catch (err) {
    throw String(err);
  }
};

export default fieldUpdater;
/* eslint-enable no-console */
