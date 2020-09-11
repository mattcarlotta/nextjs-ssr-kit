import { NextApiRequest, NextApiResponse, NextPage } from "next";
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

export type ActionButtonProps = {
  className: string;
  dataTestId?: string;
  style: CSSProperties;
};

export type BaseFieldProps = {
  name: string;
  type: string;
  label: string;
  value?: string;
  required: boolean;
  onChange?: (event: ChangeEvent<any>) => void;
  style?: CSSProperties;
};

type ComponentProps = {
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

export type ContainerProps = {
  children: ReactNode;
  dataTestId?: string;
  innerStyle: CSSProperties;
  style: CSSProperties;
};

export interface ButtonProps extends ComponentProps {
  dataTestId?: string;
  disabled?: boolean;
  danger?: boolean;
  primary?: boolean;
  onClick?: (event: any) => void;
  type: "button" | "submit" | "reset" | undefined;
}

export interface DeleteButtonProps extends ActionButtonProps {
  onClick: () => ReturnType<typeof actions.deleteUser>;
}

export interface EditButtonProps extends ActionButtonProps {
  onClick: (event: any) => void;
}

export type FieldErrorProps = {
  className?: string;
  errors?: string;
};

export type InputProps = ComponentProps;

export type LinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export type LoadingUsers = {
  className?: string;
  duration?: string;
  height?: number;
  opacity?: number;
  width?: number;
};

export type ModalProps = {
  children: ReactNode;
  maxWidth?: string;
  onClick: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title?: string;
};

export interface TextAreaProps extends ComponentProps {
  rows?: number;
}

export type ToastProps = {
  type: "success" | "info" | "error" | "warning";
  message: string;
};

interface UserFormFields extends BaseFieldProps {
  disabled?: boolean;
  readOnly?: boolean;
}

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
  resetMessage: (event: any) => void;
  serverError?: string;
  serverMessage?: string;
  resetForm: (event: any) => void;
  cancelForm?: (event: any) => void;
  submitAction: ({
    props: { [keys in BaseProps]: string },
    id: string,
  }) => ReturnType<typeof actions.createUser | typeof actions.updateUser>;
}

export interface UserFormState {
  fields: UserFormFields[];
  isSubmitting: boolean;
}

export type UserListNavigationProps = {
  className?: string;
  openModal: (event: any) => void;
  seedDB: (type: string) => ReturnType<typeof actions.seedDB>;
};

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
  CSSProperties,
  FC,
  FormEvent,
  ReactNode,
  NextApiRequest,
  NextApiResponse,
  NextPage,
};
