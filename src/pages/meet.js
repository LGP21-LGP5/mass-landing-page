import * as React from "react"
import ProfileCard from "../components/ProfileCard";
import TeamGrid from "../components/TeamGrid";
import logo from "../images/mass_icon.png" // Tell webpack this JS file uses this image


const MeetUsPage = () => {
  return (
    <div>
      <img class='mx-auto w-24' src={logo}/>
      <p class='text-center'>Meet the team that makes our company stand out!</p>
      <div>
        <h1 class='text-center'>ADMINISTRATION</h1>
        <ProfileCard name='David Luís Dias da Silva' role='CEO' />
        <div class='flex flex-row justify-center'>
          <ProfileCard name='Inês Ferraz' role='CMO' />
          <ProfileCard name='J. Nuno' role='CTO' />
          <ProfileCard name='Rafael N.' role='CBO' />
        </div>
      </div>
      <div class="bg-gradient-to-t from-operations-blue to-operations-blue-grad">
        <h1 class='text-center'>OPERATIONS</h1>
        <ProfileCard name='J. Nuno' role='CTO' />
        <TeamGrid/>
      </div>
    </div>
  );
}

export default MeetUsPage
