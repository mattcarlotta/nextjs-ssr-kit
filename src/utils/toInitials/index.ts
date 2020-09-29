/**
 * Helper function to strip out first and last name initials.
 *
 * @function
 * @param {string} str - first and last name
 * @returns {string} - first and last initials
 */

const toInitials = (str: string): string =>
  str
    // split string into array of strings (example: "fiRsT lAsT" ==> ["fiRsT", "lAsT"])
    .split(" ")
    // map over words and return a capitalized first letter of each word (example: ["fiRsT", "lAsT"] ==> ["f", "l"])
    .map(c => c.charAt(0).toUpperCase())
    // join letters to single string (example: ["f", "l"] ==> "FL")
    .join("")
    // append second letter of first word to this new string (example: "FL" ==> "FLI")
    .concat(str.charAt(1).toUpperCase())
    // limit this new string to 2 characters (example: "FLI" ==> "FL")
    .substring(0, 2);

export default toInitials;
