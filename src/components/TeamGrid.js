import * as React from "react"
import ProfileCard from "./ProfileCard";

const TeamGrid = (props) => {
    const nCols = props.team.length >= 5 ? 5 : props.team.length

    return (
        <div className={`grid grid-cols-${nCols}`}>
            {props.team.map((m, i) => <ProfileCard key={i} member={m} pics={props.pics}></ProfileCard>)}
        </div>
    );
}

export default TeamGrid