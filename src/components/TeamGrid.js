import * as React from "react"
import ProfileCard from "./ProfileCard";




const TeamGrid = () => {
    //const team = [{ name: 'bernas670' }, { name: 'luispcunha' }]

    return (
        <div class="flex flex-row flex-wrap justify-around">
            {[...Array(100).keys()].map((id) => <ProfileCard key={id} name='bernardo'></ProfileCard>)}
        </div>
    );
}

export default TeamGrid