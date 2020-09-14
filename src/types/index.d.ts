/* istanbul ignore file */
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

export type UserProps = {
  props: UserData;
};

export interface UpdatedUserProps extends UserProps {
  id: string;
}

/// COMPONENTS ///

export type ActionButtonProps = {
  className?: string;
  dataTestId?: string;
  style?: CSSProperties;
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

export interface CardProps {
  _id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  backgroundInfo?: string;
  address: {
    street: string;
    state: string;
    suite: string;
    city: string;
    zipCode: string;
  };
  key: any;
  className?: string;
  idx: number;
  handleEditClick: (id: string) => void;
  deleteUser: (id: string) => ReturnType<typeof actions.deleteUser>;
}

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
  innerStyle?: CSSProperties;
  style?: CSSProperties;
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
export interface DisplayUserListProps {
  data: any[];
  isEditingID?: string;
  deleteUser: (id: string) => ReturnType<typeof actions.deleteUser>;
  handleCloseModal: (event: any) => void;
  handleEditClick: (id: string) => void;
  handleResetEditClick: (event: any) => void;
  resetMessage: () => void;
  updateUser: ({
    props: UserData,
    id: string,
  }) => ReturnType<typeof actions.updateUser>;
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

export type LoadingUsersProps = {
  className?: string;
  duration?: string;
  height?: number;
  opacity?: string;
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

export interface UserFormFields extends BaseFieldProps {
  disabled?: boolean;
  readOnly?: boolean;
}

export interface UserFormProps extends UserData {
  _id?: string;
  resetMessage: () => void;
  serverError?: string;
  serverMessage?: string;
  resetForm: (event?: any) => void;
  cancelForm?: (event: any) => void;
  submitAction: ({
    props: UserData,
    id: string,
  }) => ReturnType<typeof actions.createUser | typeof actions.updateUser>;
}

export interface UserFormState {
  fields: UserFormFields[];
  errors: number;
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
