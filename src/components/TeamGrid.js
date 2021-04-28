import * as React from "react";
import ProfileCard from "./ProfileCard";

const TeamGrid = (props) => {
  const nCols = props.team.length;

  return (
    <div className={`grid grid-cols-3 lg:grid-cols-5 xl:w-8/12 mx-auto`}>
      {nCols === 3 && <div className={`hidden lg:block`} />}
      {props.team.map((m, i) => (
        <ProfileCard
          key={i}
          member={m}
          pics={props.pics}
          showRole={props.showRoles}
        ></ProfileCard>
      ))}
    </div>
  );
};

export default TeamGrid;
