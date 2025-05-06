import styled from "styled-components";

interface ButtonProps {
  color?: string;
  size?: "large" | "default";
  variant?: "default" | "highlight";
}

export const StyledButton = styled("button")<ButtonProps>`
  display: flex;
  align-items: center;   /* ✅ centra verticalmente */
  justify-content: center; /* ✅ centra horizontalmente */

  background: ${(p) =>
    p.variant === "highlight"
      ? "linear-gradient(90deg, #007bff, #00c6ff)"
      : p.color || "#2e186a"};

  color: ${(p) =>
    p.variant === "highlight" ? "#fff" : p.color ? "#2E186A" : "#fff"};

  font-size: ${(p) => (p.size === "large" ? "1.5rem" : "1rem")};
  font-weight: 700;
  width: 100%;
  border: none;
  border-radius: ${(p) => (p.variant === "highlight" ? "50px" : "15px")};
  padding: ${(p) => (p.size === "large" ? "1rem 2rem" : "0.8rem 1.5rem")};
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: ${(p) => (p.size === "large" ? "300px" : "180px")};
  transition: all 0.3s ease-in-out;

  box-shadow: ${(p) =>
    p.variant === "highlight"
      ? "0 8px 20px rgba(0, 128, 255, 0.4)"
      : "0 16px 30px rgb(23 31 114 / 20%)"};

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: none;
    background-color: ${(p) =>
      p.variant === "highlight" ? "#007bff" : "rgb(255, 130, 92)"};
    transform: scale(1.03);
  }
`;
