import styled from "@emotion/styled";
import FieldError from "~components/Forms/FieldError";
import Label from "~components/Forms/Label";
import { TextAreaProps } from "~types";

const TextAreaField = styled.textarea<{ errors?: string }>`
  box-sizing: border-box;
  padding: 10px;
  height: 173px;
  overflow-y: auto;
  width: 100%;
  background: #f5f5f5;
  color: #3a3a3a;
  border: 1px solid ${({ errors }) => (errors ? "#d03916" : "#d3d3d3")};
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  transition-property: color, border;
  resize: none;

  ::placeholder {
    color: #919191;
  }

  :focus {
    outline: 0;
    border: 1px solid #028ddf;
    box-shadow: 0 4px 14px 0 rgba(130, 130, 130, 0.19);
  }
`;

const TextAreaComponent = ({
  className,
  errors,
  label,
  name,
  placeholder,
  onChange,
  rows,
  value,
  style
}: TextAreaProps) => (
  <div data-testid="textarea-container" className={className} style={style}>
    <Label htmlFor={name}>{label}</Label>
    <TextAreaField
      aria-label={name}
      data-testid={name}
      errors={errors}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows || 10}
      tabIndex={0}
      value={value}
    />
    <FieldError errors={errors} />
  </div>
);

const TextArea = styled(TextAreaComponent)`
  @media (max-width: 768px) {
    display: block !important;
    width: 100% !important;
  }

  min-height: 230px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export default TextArea;
