/* istanbul ignore file */
import { NextApiRequest, NextApiResponse, NextPage } from "next";
import { AppProps } from "next/app";
import {
  ComponentType,
  ChangeEvent,
  CSSProperties,
  FC,
  FormEvent,
  MouseEvent,
  ReactElement,
  ReactNode
} from "react";
import { AnyAction, Store } from "redux";
import { SagaIterator, Task } from "redux-saga";
import { ConnectedProps } from "react-redux";
import { TRootState } from "~reducers";

/// UTILITIES ///

/**
 * Utility pick properties Redux state.
 *
 * @example PickReduxState<"propertyA" | "propertyB">;
 */
export type PickReduxState<T> = Pick<TRootState, T>;

/**
 * Utility Redux type to return type and payload
 *
 * @example ActionType<typeof actionCreator, string>;
 */
export interface ActionType<T, P = void> {
  type: T;
  payload?: P;
}

/// DATA ///

export type UserData = {
  _id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  backgroundInfo?: string;
  address?: {
    street?: string;
    state?: string;
    suite?: string;
    city?: string;
    zipCode?: string;
  };
};

/// COMPONENTS ///

export type BaseFieldProps = {
  name: string;
  type: string;
  label: string;
  value?: string;
  required: boolean;
  placeholder?: string;
  errors?: string;
  onChange?: (event: ChangeEvent<any>) => void;
  style?: CSSProperties;
};

export type BaseComponentProps = {
  className?: string;
  children?: any;
  errors?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: ChangeEvent<any>) => void;
  type?: string;
  value?: string;
  style?: CSSProperties;
};

/// REDUX + SAGAS ///

export interface SagaStore extends Store {
  sagaTask: Task;
}

/// UTILS ///

export type FieldKeys = "city" | "street" | "state" | "suite" | "zipCode";

export type ParseKeys<T> = {
  [K in keyof T]: T[K] extends { name: string } ? T[K]["name"] : never;
}[Exclude<keyof T, keyof []>];

export type ParseFields<T> = {
  address: {
    [N in Extract<ParseKeys<T>, FieldKeys>]: string;
  };
} & {
  [N in Exclude<ParseKeys<T>, FieldKeys>]: string;
};

export {
  AnyAction,
  AppProps,
  ChangeEvent,
  ComponentType,
  ConnectedProps,
  CSSProperties,
  FC,
  FormEvent,
  MouseEvent,
  NextApiRequest,
  NextApiResponse,
  NextPage,
  ReactElement,
  ReactNode,
  SagaIterator
};
