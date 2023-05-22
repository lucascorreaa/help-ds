import React, { ImgHTMLAttributes } from "react";

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Icon: React.FC<IconProps> = (props) => {
  return <img src={props.src} alt={props.alt} {...props} />;
};

export default Icon;
