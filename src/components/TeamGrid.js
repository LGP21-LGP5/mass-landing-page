import * as React from "react"
import ProfileCard from "./ProfileCard";

const TeamGrid = (props) => {
    const nCols = props.team.length

    return (
        <div className={`grid grid-cols-5 w-8/12 mx-auto`}>
            {nCols === 3 && <div/>}
            {props.team.map((m, i) => <ProfileCard key={i} member={m} pics={props.pics} showRole={props.showRoles}></ProfileCard>)}
            {nCols === 3 && <div/>}
        </div>
    );
}

export default TeamGrid