/* istanbul ignore file */
export {};

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: any;
      navigator: any;
      React: any;
    }
  }
}
