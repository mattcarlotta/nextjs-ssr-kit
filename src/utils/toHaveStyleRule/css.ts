import css from "css";
import getServerStyleSheet from "./stylesheet";

const dataStyledRegex = /^(?!data-styled\.g\d+.*?\n)(.*)?\n/gm;

const extractFromStylesheet = () => {
  let style = "";
  let matches;

  while ((matches = dataStyledRegex.exec(getServerStyleSheet())) !== null) {
    style += `${matches[1]} `;
  }

  return style.trim();
};

const getCSS = () => css.parse(extractFromStylesheet());

export default getCSS;
