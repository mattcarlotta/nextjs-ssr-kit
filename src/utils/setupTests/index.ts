/* eslint-disable */
import * as React from "react";
import { JSDOM } from "jsdom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import { matchers } from "jest-emotion";

expect.extend(matchers);

configure({ adapter: new Adapter() });

/* THE BELOW ARE ACCESSIBLE AND PREDEFINED FOR ALL *.TEST.JS FILES */

const { document } = new JSDOM(
  "<!DOCTYPE html><body><div id='__next'></div></body>",
).window;
global.document = document;
global.window = document.defaultView;
global.HTMLElement = window.HTMLElement;
global.HTMLAnchorElement = window.HTMLAnchorElement;
global.React = React;

global.navigator = {
  userAgent: "node.js",
};
/* eslint-enable */
