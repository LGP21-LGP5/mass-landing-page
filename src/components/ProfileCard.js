import * as React from "react"
import ProfilePic from "./ProfilePic";

const ProfileCard = (props) => {
  return (
    <div class='flex flex-col'>
      <ProfilePic/>
      {props.role && <div class='text-center'>{props.role}</div>}
      <div class='text-center'>{props.name}</div>
      <div class='text-center'>LinkedIn</div>
    </div>
  );
}

export default ProfileCard