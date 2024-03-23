import styled from 'styled-components'
import { DividerProps } from './index'

const StyledHR = styled.hr<DividerProps>`
  border-width: ${({ size }) => size ? size + "px" : "1px"};
  border-style: ${({ styled }) => styled || "solid"};
  border-color: ${({ color }) => color || "black"};
  
  ${({ orientation }) => {
    if (orientation === "vertical") {
      return `
        transform: rotate(-90deg);
      `
    } else {
      return `
        transform: rotate(90deg);;
      `
    }
  }}
`

export default StyledHR
