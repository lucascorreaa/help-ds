import React, { HTMLAttributes } from "react"
import StyledHR from './divider' // Importando o componente StyledHR do arquivo divider.ts

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  fullWidth?: boolean;
  width?: number | undefined; // Nova propriedade que define o tamanho do Divider
  size?: number;
  styled?: string;
  color?: string;
  orientation?: "horizontal" | "vertical"; 
}


export const Divider: React.FC<DividerProps> = ({ width, size, styled, color, orientation, fullWidth }) => {
  return (
    <>
      <StyledHR width={width} size={size} styled={styled} color={color} fullWidth={fullWidth} orientation={orientation} />
    </>
  )
}
