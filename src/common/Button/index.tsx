import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, size = "default" }: ButtonProps) => (
  <StyledButton color={color} size={size} onClick={onClick}>
    {children}
  </StyledButton>
);
