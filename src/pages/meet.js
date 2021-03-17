import * as React from "react"
import ProfileCard from "../components/ProfileCard";
import TeamGrid from "../components/TeamGrid";
import TopMenu from "../components/top-menu";
import useOperationsTeam from "../hooks/operations";
import useMultimediaTeam from "../hooks/multimedia";
import useServicesTeam from "../hooks/services";
import logo from "../images/mass_icon.png" // Tell webpack this JS file uses this image


const MeetUsPage = () => {

  const operationsTeam = useOperationsTeam();
  const multimediaTeam = useMultimediaTeam();
  const servicesTeam = useServicesTeam();

  return (
    <React.Fragment>
      <TopMenu />
        <div>
          <img class='mx-auto w-24' src={logo}/>
          <p class='text-center'>Meet the team that makes our company stand out!</p>
          <div>
            <h1 class='text-center'>ADMINISTRATION</h1>
            <ProfileCard name='Alexandre Silva' role='CEO' />
            <div class='flex flex-row justify-center'>
              <ProfileCard name='Inês Ferraz' role='CMO' />
              <ProfileCard name='João Matos' role='CTO' />
              <ProfileCard name='Rafael Nogueira' role='CBO' />
            </div>
          </div>
          <div class="bg-gradient-to-t from-operations-blue-grad-from to-operations-blue-grad-to">
            <h1 class='text-center'>OPERATIONS</h1>
            <ProfileCard name='João Matos' role='CTO' />
            <TeamGrid team={operationsTeam}/>
          </div>
          <div class="bg-gradient-to-b from-operations-blue-grad-from to-operations-blue-grad-to">
            <h1 class='text-center'>MULTIMEDIA</h1>
            <ProfileCard name='Inês Ferraz' role='CMO' />
            <TeamGrid team={multimediaTeam} />
          </div>
          <div class="bg-gradient-to-t from-operations-blue-grad-from to-operations-blue-grad-to">
            <h1 class='text-center'>SERVICES</h1>
            <ProfileCard name='Rafael Nogueira' role='CBO' />
            <TeamGrid team={servicesTeam} />
          </div>
        </div>
    </React.Fragment>
  );
}

export default MeetUsPage
