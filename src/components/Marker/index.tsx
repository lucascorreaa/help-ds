import React from "react"
import { MarkerStyled } from "./marker"
import { MarkerProps } from './utils'

export const Marker: React.FC<MarkerProps> = ({ borderSize, isBorder, size, color, borderColor, ...props }) => {
  return (
    <MarkerStyled borderSize={borderSize} color={color} borderColor={borderColor} size={size} isBorder={isBorder} {...props} />
  )
}
