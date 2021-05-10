/* istanbul ignore file */
/* eslint-disable */
import * as React from "react";

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: any;
      navigator: any;
      React: typeof React;
    }

    interface Document {
      documentMode?: any;
    }
  }
}

export {};
