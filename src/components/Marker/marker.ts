import styled from "styled-components"
import { MarkerProps, getBorder } from "./utils"

export const MarkerStyled = styled.hr<MarkerProps>`
  background-color: ${({ color }) => color};
  border-radius: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  border: ${({ isBorder, borderColor, borderSize }) => getBorder(isBorder, borderColor, borderSize)};
`

