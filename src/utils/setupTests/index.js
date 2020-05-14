/* eslint-disable */
import { render, fireEvent, screen } from "@testing-library/react";
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  waitFor,
} from "@testing-library/dom";
import "@testing-library/jest-dom";
import mockApp from "~utils/__mocks__/mockAxios.js";
import { mount, withRouterContext } from "~utils/testingUtils";

/*
  THE BELOW ARE ACCESSIBLE AND PREDEFINED FOR ALL *.TEST.JS FILES

  WARNING: Due to the below being accessible to the global DOM,
  all *.test.js files will have custom rules for ESLint.
  Otherwise, ESLint will throw errors that the functions/
  modules are undefined because they are not explictly
  imported! See "overrides" in ".eslintrc" for more
  information.
*/
global.fireEvent = fireEvent;
global.getByLabelText = getByLabelText;
global.getByText = getByText;
global.getByTestId = getByTestId;
global.mockApp = mockApp;
global.mount = mount;
global.Provider = require("react-redux").Provider;
global.queryByTestId = queryByTestId;
global.React = require("react");
global.render = render;
global.screen = screen;
global.waitFor = waitFor;
global.withRouterContext = withRouterContext;
/* eslint-enable */
