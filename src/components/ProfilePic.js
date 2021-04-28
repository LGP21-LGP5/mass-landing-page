import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ProfilePic = (props) => {
  return (
    <GatsbyImage
      image={props.pic}
      alt={props.alt}
      className={`align-center rounded-full mx-auto ${props.className}`}
    />
  );
};

export default ProfilePic;
