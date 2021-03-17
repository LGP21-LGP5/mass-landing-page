import * as React from "react"
import ProfileCard from "./ProfileCard";

const TeamGrid = (props) => {
    return (
        <div class="flex flex-row flex-wrap justify-around">
            {props.team.map((p) => <ProfileCard key={p.Name} name={p.Name}></ProfileCard>)}
        </div>
    );
}

export default TeamGrid