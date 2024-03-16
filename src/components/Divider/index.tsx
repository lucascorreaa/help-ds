import React, { HTMLAttributes } from "react";
import StyledHR from './divider'; // Importando o componente StyledHR do arquivo divider.ts

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  fullWidth?: boolean; // Indica se deve tomar a largura total ou não
  size?: number; // Define o tamanho da borda
  styled?: "solid" | "dotted"; // define o estilo da borda permitido, pode ser "solid" ou "dotted"
  color?: string; // Cor da borda
}

export const Divider: React.FC<DividerProps> = ({ fullWidth, size, styled, color }) => {
  return (
    <div>
      {/* Renderiza o componente StyledHR com as propriedades recebidas */}
      <StyledHR fullWidth={fullWidth} size={size} styled={styled} color={color} />
    </div>
  );
};
