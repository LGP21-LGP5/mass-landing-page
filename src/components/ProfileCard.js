import * as React from "react"
import ProfilePic from "./ProfilePic";

const ProfileCard = (props) => {
  const member = props.member
  const picture = props.pics[props.member.up] || props.pics['default']

  return (
    <div className='flex flex-col'>
      <ProfilePic pic={picture} alt={`Profile picture of ${member.name}`} className='mb-6 mt-6'/>
      {props.showRole && member.role.match(/C.O/) && <div className='text-center font-bold text-2xl mb-2'>{member.role}</div>}
      <div className='text-center text-xl'>{member.name}</div>
      <div className='text-center mt-0'>LinkedIn</div>
    </div>
  );
}

export default ProfileCard