import React from "react";
import Input from "~components/Forms/Input";
import TextArea from "~components/Forms/TextArea";
import { ChangeEvent, BaseProps } from "~types";

/**
 * Reusable function that converts an object of properties into a React form components.
 *
 * @param {array} fields - an array of field objects ex:
 * [{ name: "userName",
 *   type: "text",
 *   label: "Username",
 *   value: "",
 *   errors: "",
 *   style: { width: "50%" },
 *   required: true
 *  }]
 * @param {function} onChange - a function to update component state.
 * @returns - a React component
 */

const FieldGenerator = <
  T extends BaseProps[],
  K extends (e: ChangeEvent<HTMLInputElement>) => void
>({
  fields,
  onChange,
}: {
  fields: T;
  onChange: K;
}) =>
  fields.map(props => {
    switch (props.type) {
      case "text":
      case "email":
      case "password": {
        return <Input {...props} key={props.name} onChange={onChange} />;
      }
      case "textarea": {
        return <TextArea {...props} key={props.name} onChange={onChange} />;
      }
    }
  }) as T;

export default FieldGenerator;
