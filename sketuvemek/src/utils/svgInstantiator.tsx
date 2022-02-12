import React from "react";


interface IconProps {
  id: string,
  props?: any;
}

const Icon = ({id, ...props}: IconProps): JSX.Element => {
    return(
      <svg {...props}>
        <use href={`${process.env.PUBLIC_URL}/sprite.svg#${id}`} />
      </svg>
    )
}

export default Icon;