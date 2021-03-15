import * as React from "react"
import defaultPic from "../images/default_pic.png" // Tell webpack this JS file uses this image

const ProfilePic = (props) => {
  return (
    <img src={defaultPic} class='rounded-full h-24 w-24 mx-auto'/>
  );
}

export default ProfilePic