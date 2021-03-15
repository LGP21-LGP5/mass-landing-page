import * as React from "react"
import ProfileCard from "./ProfileCard";

const TeamGrid = () => {
    return (
        <div class="flex flex-row flex-wrap justify-around">
            {[...Array(1000).keys()].map((id) => <ProfileCard key={id} name='bernardo'></ProfileCard>)}
        </div>
    );
}

export default TeamGrid