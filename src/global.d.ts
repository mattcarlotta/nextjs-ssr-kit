/* istanbul ignore file */
import * as React from "react";
export {};

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: any;
      navigator: any;
      React: React;
    }
  }
}
