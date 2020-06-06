/* eslint-disable */
import { JSDOM } from "jsdom";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import "jest-enzyme";
import mockApp from "~utils/__mocks__/mockAxios.js";
import { withRouterContext } from "~utils/testingUtils";

configure({ adapter: new Adapter() });

/*
  THE BELOW ARE ACCESSIBLE AND PREDEFINED FOR ALL *.TEST.JS FILES

  WARNING: Due to the below being accessible to the global DOM,
  all *.test.js files will have custom rules for ESLint.
  Otherwise, ESLint will throw errors that the functions/
  modules are undefined because they are not explictly
  imported! See "overrides" in ".eslintrc" for more
  information.
*/
/* THE BELOW ARE ACCESSIBLE AND PREDEFINED FOR ALL *.TEST.JS FILES */
const exposedProperties = ["window", "navigator", "document"];
const { document } = new JSDOM(
  "<!DOCTYPE html><body><div id='root'></div></body>",
).window;
global.document = document;
global.window = document.defaultView;
global.HTMLElement = window.HTMLElement;
global.HTMLAnchorElement = window.HTMLAnchorElement;
global.mockApp = mockApp;
global.mount = mount;
global.shallow = shallow;
global.React = require("react");
global.withRouterContext = withRouterContext;

Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: "node.js",
};
/* eslint-enable */
