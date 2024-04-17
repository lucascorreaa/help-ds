import styled from 'styled-components'
import { DividerProps } from './index'


const StyledHR = styled.div<DividerProps>`
  border: none;
  width: ${({ fullWidth, width }) => (fullWidth === true && width !== undefined) ? `${width}px` : (fullWidth === true && width === undefined || fullWidth === false ? `100%` : `${width}`)}; // Verifica se fullWidth é true e width é undefined
  ${({ size, styled, color }) => `
    border-bottom-color: ${color};
    border-bottom-width: ${size}px;
    border-bottom-style: ${styled};
    border-bottom-radius: 5px;
  `}
  ${({ orientation }) => {
    if (orientation === "vertical") {
      return `
        height: 0;
        transform: rotate(-90deg);
      `
    } 
  }}
`


export default StyledHR
