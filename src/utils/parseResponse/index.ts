import get from "lodash.get";
import { NextApiResponse } from "~types";

/**
 * Helper function to parse a message from an API response.
 *
 * @param {array} res - an API response.
 * @returns {string | undefined} a parsed message string from res.data.message.
 */
export function parseMessage(res: NextApiResponse): string | undefined {
  return get(res, ["data", "message"]);
}

/**
 * Helper function to parse data from an API response.
 *
 * @param {array} res - an API response.
 * @returns {object} a parsed data object from res.data.
 */
export function parseData(res: NextApiResponse): object {
  return get(res, ["data"]);
}
