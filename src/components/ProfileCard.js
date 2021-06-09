import * as React from "react";
import ProfilePic from "./ProfilePic";

const ProfileCard = (props) => {
  const member = props.member;
  const picture = props.pics[props.member.up] || props.pics["default"];

  return (
    <div className="flex flex-col mx-5">
      <ProfilePic
        pic={picture}
        alt={`Profile picture of ${member.name}`}
        className="mb-2 md:mb-6 mt-6"
      />
      {props.showRole && (member.role.match(/C.O/) || member.role === 'Head Designer') && (
        <div className="text-center font-poppins-bold text-2xl mb-2">
          {member.role}
        </div>
      )}
      <div className="text-center font-poppins text-xl mb-6">{member.name}</div>
    </div>
  );
};

export default ProfileCard;
