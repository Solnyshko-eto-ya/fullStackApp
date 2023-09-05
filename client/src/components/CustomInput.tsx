import { Input } from "antd";
import React from "react";
import { styled } from "styled-components";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";

interface FormInputProps {
  value: string;
  placeholder: string;
  prefix?: React.ReactNode;
  type?: string;
  onChange: (value: string) => void;
}

const CustomInput: React.FC<FormInputProps> = ({
  value,
  placeholder,
  prefix,
  type,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      prefix={prefix}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const StyledInput = styled(Input)`
  box-shadow: 0px 5px 20px 3px rgba(219, 219, 219, 0.74);
`;

export default CustomInput;
