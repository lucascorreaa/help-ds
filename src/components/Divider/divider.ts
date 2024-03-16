import styled from 'styled-components';
import { DividerProps } from './index'; // Importando a interface DividerProps do arquivo index.ts

const StyledHR = styled.hr<DividerProps>`
  border-width: ${({ size }) => size ? size + "px" : "1px"};
  border-style: ${({ styled }) => styled || "solid"};
  border-color: ${({ color }) => color || "black"};
`;

export default StyledHR;
