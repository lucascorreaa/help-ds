import styled from "styled-components"
import { MarkerProps } from "."

export const MarkerStyled = styled.hr<MarkerProps>`
    background-color: ${({color}) => color};
    border-radius: ${({size}) => `${size}px`};
    height: ${({size}) => `${size}px`};
    width: ${({size}) => `${size}px`};
    border: ${({isBorder, borderColor}) => isBorder && `4px solid ${borderColor}`};
`
