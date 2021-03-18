import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const ProfilePic = (props) => {
  return (
    <GatsbyImage image={props.pic} alt={props.alt} />
  );
}

export default ProfilePic