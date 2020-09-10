import { NextApiRequest, NextApiResponse } from "next";
import { AppProps } from "next/app";
import {
  ComponentType,
  ChangeEvent,
  CSSProperties,
  FC,
  FormEvent,
  ReactNode,
} from "react";
import { Store } from "redux";
import * as actions from "../actions/Users";

/// ACTIONS ///

export type UserData = {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  backgroundInfo: string;
  address: {
    street: string;
    state: string;
    suite: string | undefined;
    city: string;
    zipCode: string;
  };
};

export type UserProps = {
  props: UserData;
};

export interface UpdatedUserProps extends UserProps {
  id: string;
}

/// COMPONENTS ///

type ComponentProps = {
  className?: string;
  children?: string | ReactNode;
  errors?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  style?: CSSProperties;
};

export interface APIProps {
  req: NextApiRequest;
  res: NextApiResponse;
}

export interface ButtonProps extends ComponentProps {
  dataTestId?: string;
  disabled?: boolean;
  danger?: boolean;
  primary?: boolean;
  onClick?: () => void;
  type: string;
}

export type FieldErrorProps = {
  className?: string;
  errors?: string;
};

export interface FieldProps extends ComponentProps {
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
}

type InputProps = ComponentProps;

export type LinkProps = {
  children: ReactNode;
  href: string;
};

export interface TextAreaProps extends ComponentProps {
  rows?: number;
}

export type ToastProps = {
  type: "success" | "info" | "error" | "warning";
  message: string;
};

export interface UserFormProps extends UserData {
  _id: string;
  resetMessage: () => void;
  serverError?: string;
  serverMessage?: string;
  resetForm: () => void;
  cancelForm?: () => void;
  submitAction: ({
    props: object,
    id: string,
  }) => ReturnType<typeof actions.createUser | typeof actions.updateUser>;
}

export interface UserFormState {
  fields: FieldProps[];
  isSubmitting: boolean;
}

/// REDUX + SAGAS ///

export interface SagaStore extends Store {
  sagaTask: Task;
}

export type ServerReducerState = {
  error: string;
  message: string;
};

export type UserReducerState = {
  data: [];
  isLoading: boolean;
};

export type ReducerState = {
  server: ServerReducerState;
  users: UserReducerState;
};

export {
  AppProps,
  ChangeEvent,
  ComponentType,
  FC,
  FormEvent,
  ReactNode,
  NextApiRequest,
  NextApiResponse,
};
