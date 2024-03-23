import React, { ImgHTMLAttributes } from "react"

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Icon: React.FC<IconProps> = ({ src, ...props }) => {
  return (
    <div>
      <img src={src} {...props} />
    </div>
  )
}