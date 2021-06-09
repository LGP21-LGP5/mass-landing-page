import * as React from "react";
import ProfileCard from "./ProfileCard";

const TeamGrid = (props) => {
  const nCols = props.team.length;
  const colsClass = nCols === 4 ? 'grid-cols-6' : 'grid-cols-3 lg:grid-cols-5';
  return (
    <div className={`grid ${colsClass} xl:w-8/12 mx-auto`}>
      {(nCols === 3 || nCols === 4) && <div className={`hidden lg:block`} />}
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
