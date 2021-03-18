import * as React from "react"
import ProfileCard from "./ProfileCard";

const TeamGrid = (props) => {
    return (
        <div class="flex flex-row flex-wrap justify-around">
            {props.team.map((m, i) => <ProfileCard key={i} member={m} pics={props.pics}></ProfileCard>)}
        </div>
    );
}

export default TeamGrid