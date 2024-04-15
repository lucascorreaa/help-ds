import { HtmlHTMLAttributes } from "react"

export interface MarkerProps extends HtmlHTMLAttributes<HTMLHRElement> {
  color: string;
  borderColor?: string
  size: number;
  isBorder?: boolean;
  borderSize?: number;
}

export const getBorder = (isBorder?: boolean, borderColor?: string, borderSize?: number) => {
  if (!isBorder) return 'none'
  return `${borderSize}px solid ${borderColor}`
}