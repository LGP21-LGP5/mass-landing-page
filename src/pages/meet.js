import * as React from "react"
import ProfileCard from "../components/ProfileCard";
import TeamGrid from "../components/TeamGrid";

const MeetUsPage = () => {
  return (
    <div class="bg-gradient-to-t from-operations-blue to-operations-blue-grad">
      <h1 class='text-center'>OPERATIONS</h1>
      <ProfileCard name='J. Nuno' role='CTO' />
      <TeamGrid/>
    </div>
  );
}

export default MeetUsPage
