import styled from "styled-components";
import FieldError from "~components/Forms/FieldError";
import { InputProps } from "~types";

const InputComponent = ({
  className,
  onChange,
  errors,
  label,
  name,
  placeholder,
  type,
  value,
  style,
}: InputProps) => (
  <div data-testid="input-container" style={style} className={className}>
    <label css="margin: 0;display: block;" htmlFor={name}>
      {label}
    </label>
    <input
      aria-label={name}
      data-testid={name}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      type={type}
      tabIndex={0}
      value={value}
    />
    <FieldError errors={errors} />
  </div>
);

const Input = styled(InputComponent)`
  @media (max-width: 768px) {
    display: block !important;
    width: 100% !important;
  }

  height: 105px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  label {
    width: 100%;
  }

  input {
    text-indent: 10px;
    height: 40px;
    width: 100%;
    background: #fff;
    color: #3a3a3a;
    border: 1px solid ${({ errors }) => (errors ? "#d03916" : "#d3d3d3")};
    border-radius: 4px;
    transition: 0.2s ease-in-out;
    transition-property: color, border;

    &::placeholder {
      color: #bbb;
    }

    &:focus {
      outline: 0;
      border: 1px solid #1890ff;
    }
  }
`;

export default Input;
