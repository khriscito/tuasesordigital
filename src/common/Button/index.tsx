import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, variant, onClick, size = "default" }: ButtonProps) => (
  <StyledButton color={color} size={size} variant={variant}onClick={onClick}>
    {children}
  </StyledButton>
);
