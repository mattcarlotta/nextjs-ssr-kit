import "react-redux";
import { TRootState } from "../reducers";

declare module "react-redux" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  interface DefaultRootState extends TRootState {}
}
