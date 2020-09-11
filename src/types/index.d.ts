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
    suite: string;
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

export type BaseFieldProps = {
  name: string;
  type: string;
  label: string;
  value?: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<any>) => void;
  style?: CSSProperties;
};

type ComponentProps = {
  className?: string;
  children?: any;
  errors?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (e: ChangeEvent<any>) => void;
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
  type: "button" | "submit" | "reset" | undefined;
}

export type FieldErrorProps = {
  className?: string;
  errors?: string;
};

interface UserFormFields extends BaseFieldProps {
  disabled?: boolean;
  readOnly?: boolean;
}

export type InputProps = ComponentProps;

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
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  address: {
    street?: string;
    suite?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };
  backgroundInfo?: string;
  resetMessage: () => void;
  serverError?: string;
  serverMessage?: string;
  resetForm: () => void;
  cancelForm?: () => void;
  submitAction: ({
    props: { [keys in BaseProps]: string },
    id: string,
  }) => ReturnType<typeof actions.createUser | typeof actions.updateUser>;
}

export interface UserFormState {
  fields: UserFormFields[];
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
