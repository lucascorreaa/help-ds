import styled from "styled-components"
import { MarkerProps } from "."

export const MarkerStyled = styled.hr<MarkerProps>`
    background-color: ${({color}) => color};
    border-radius: ${({size}) => size};
    height: ${({size}) => size};
    width: ${({size}) => size};
    border: ${({border, borderColor}) => `4px ${border} ${borderColor}`};
`
