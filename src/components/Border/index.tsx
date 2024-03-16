import React, { HTMLAttributes } from "react";

interface BorderProps extends HTMLAttributes<HTMLDivElement> {
  borderRadius?: string; 
  borderStyle?: string; 
  borderWidth?: number; 
  borderColor?: string;
  hrWidth?: string;
}

export const Border: React.FC<BorderProps> = ({ borderRadius, borderStyle, borderWidth, borderColor, hrWidth }) => {
  return (
    <div >
      <hr style={{ borderRadius, borderStyle, borderWidth, borderColor, width: hrWidth }}/>
    </div>
  );
};
