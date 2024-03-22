import React, { HtmlHTMLAttributes } from "react"
import { MarkerStyled } from "./marker"

export interface MarkerProps extends HtmlHTMLAttributes<HTMLHRElement> {
  color: string;
  borderColor: string
  size: number;
  isBorder: boolean;
}

export const Marker: React.FC<MarkerProps> = ({ isBorder, size, color, borderColor, ...props }) => {
  return (
    <MarkerStyled color={color} borderColor={borderColor} size={size} isBorder={isBorder} {...props} />
  )
}
