import React, { HtmlHTMLAttributes } from "react"
import { MarkerStyled } from "./marker"

export interface MarkerProps extends HtmlHTMLAttributes<HTMLHRElement> {
  color: string;
  borderColor?: string
  size: number;
  isBorder?: boolean;
  borderSize?: number;
}

export const Marker: React.FC<MarkerProps> = ({ borderSize, isBorder, size, color, borderColor, ...props }) => {
  return (
    <MarkerStyled borderSize={borderSize} color={color} borderColor={borderColor} size={size} isBorder={isBorder} {...props} />
  )
}
