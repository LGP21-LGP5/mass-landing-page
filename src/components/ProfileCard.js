import * as React from "react"
import ProfilePic from "./ProfilePic";

const ProfileCard = (props) => {
  const member = props.member
  const picture = props.pics[props.member.up] || props.pics['default']

  return (
    <div className='flex flex-col'>
      <ProfilePic pic={picture} alt={`Profile picture of ${member.name}`} className='mb-4'/>
      {member.role.match(/C.O/) && <div className='text-center font-bold text-2xl'>{member.role}</div>}
      <div className='text-center'>{member.name}</div>
      <div className='text-center'>LinkedIn</div>
    </div>
  );
}

export default ProfileCard