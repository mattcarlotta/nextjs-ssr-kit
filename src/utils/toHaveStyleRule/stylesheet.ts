//@ts-nocheck
import { ServerStyleSheet, __PRIVATE__ } from "styled-components";

export const { masterSheet } = __PRIVATE__;

export const resetStyleSheet = () => {
  masterSheet.names = new Map();
  masterSheet.clearTag();
};

const getServerStyleSheet = () =>
  typeof document === "undefined"
    ? new ServerStyleSheet().getStyleTags()
    : masterSheet.toString();

export default getServerStyleSheet;
