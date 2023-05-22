import React, { ImgHTMLAttributes } from "react";

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} {...props} />
    </div>
  );
};

export default Icon;
