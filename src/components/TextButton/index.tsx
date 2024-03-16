import React, { HtmlHTMLAttributes } from "react";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const TextButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};
