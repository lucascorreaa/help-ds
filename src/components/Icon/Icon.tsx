import React, { ImgHTMLAttributes } from "react";

export interface OwnProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Icon = (props: OwnProps) => {
  return <img src={props.src} alt={props.alt} {...props} />;
};

export default Icon;
