import * as React from "react"
import ProfilePic from "./ProfilePic";

const ProfileCard = (props) => {
  const member = props.member
  const picture = props.pics[props.member.up] || props.pics['default']

  return (
    <div class='flex flex-col'>
      <ProfilePic pic={picture} alt={`Profile picture of ${member.name}`} />
      {member.role.match(/C.O/) && <div class='text-center'>{member.role}</div>}
      <div class='text-center'>{member.name}</div>
      <div class='text-center'>LinkedIn</div>
    </div>
  );
}

export default ProfileCard