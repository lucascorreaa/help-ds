import React, { HTMLAttributes } from "react"
import StyledHR from './divider' // Importando o componente StyledHR do arquivo divider.ts

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  fullWidth?: boolean;
  size?: number;
  styled?: "solid" | "dotted";
  color?: string;
  orientation?: "horizontal" | "vertical"; // Nova propriedade de orientação
}


export const Divider: React.FC<DividerProps> = ({ fullWidth, size, styled, color, orientation }) => {
  return (
    <>
      <StyledHR fullWidth={fullWidth} size={size} styled={styled} color={color} orientation={orientation} />
    </>
  )
}
