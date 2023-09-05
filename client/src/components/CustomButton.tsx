import { Button } from "antd";
import React from "react";
import { css, styled } from "styled-components";
import { CustomButtonStyle } from "../types";

interface CustomButtonProps {
  onClick: () => void;
  buttonText: string;
  disabled?: boolean;
  styleType: CustomButtonStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText,
  onClick,
  disabled,
  styleType = CustomButtonStyle.BLUE,
}) => {
  return (
    <StyledButton
      type="primary"
      htmlType="submit"
      onClick={onClick}
      disabled={disabled}
      $styleType={styleType}
    >
      {buttonText}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<{
  $styleType: CustomButtonStyle;
}>`
  width: 100%;

  ${({ $styleType }) => {
    switch ($styleType) {
      case CustomButtonStyle.BLUE:
        return css`
          box-shadow: 0px 5px 20px 3px rgba(219, 219, 219, 0.74);
        `;
      case CustomButtonStyle.GREEN:
        return css`
          background-color: #4bb34b;
          box-shadow: 0px 5px 20px 3px rgba(219, 219, 219, 0.74);
          &:hover {
            background-color: #62bc60 !important;
          }
        `;
    }
  }}
`;

export default CustomButton;
