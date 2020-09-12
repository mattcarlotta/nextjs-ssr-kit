/* istanbul ignore file */
import * as React from "react";
import { mount } from "enzyme";
export {};

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: any;
      navigator: any;
      mount: typeof mount;
      React: React;
    }
  }
}
