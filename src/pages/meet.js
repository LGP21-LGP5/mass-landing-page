import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProfileCard from "../components/ProfileCard";
import TeamGrid from "../components/TeamGrid";
import TopMenu from "../components/top-menu";
import logo from "../images/mass_icon.png" // Tell webpack this JS file uses this image


const MeetUsPage = () => {

  const { operations, multimedia, services, ceo, cto, cbo, cmo } = useStaticQuery(graphql`
    {
      services: allCompanyMembersCsv(
        filter: {Department: {eq: "Services"}, Added_Role: {ne: "CBO"}}
      ) {
        nodes {
          Name
        }
      }
      operations: allCompanyMembersCsv(
        filter: {Department: {eq: "Operations"}, Added_Role: {ne: "CTO"}}
      ) {
        nodes {
          Name
          UP_Number
        }
      }
      multimedia: allCompanyMembersCsv(
        filter: {Department: {eq: "Multimedia"}, Added_Role: {ne: "CMO"}}
      ) {
        nodes {
          Name
          UP_Number
        }
      }
      cto: companyMembersCsv(Added_Role: {eq: "CTO"}) {
        UP_Number
        Name
      }
      ceo: companyMembersCsv(Added_Role: {eq: "CEO"}) {
        UP_Number
        Name
      }
      cmo: companyMembersCsv(Added_Role: {eq: "CMO"}) {
        UP_Number
        Name
      }
      cbo: companyMembersCsv(Added_Role: {eq: "CBO"}) {
        UP_Number
        Name
      }
    }
  `)

  return (
    <React.Fragment>
      <TopMenu />
        <div>
          <img class='mx-auto w-24' src={logo}/>
          <p class='text-center'>Meet the team that makes our company stand out!</p>
          <div>
            <h1 class='text-center'>ADMINISTRATION</h1>
            <ProfileCard name={ceo.Name} role='CEO' />
            <div class='flex flex-row justify-center'>
              <ProfileCard name={cmo.Name} role='CMO' />
              <ProfileCard name={cto.name} role='CTO' />
              <ProfileCard name={cbo.Name} role='CBO' />
            </div>
          </div>
          <div class="bg-gradient-to-t from-operations-blue-grad-from to-operations-blue-grad-to">
            <h1 class='text-center'>OPERATIONS</h1>
            <ProfileCard name={cto.name} role='CTO' />
            <TeamGrid team={operations.nodes}/>
          </div>
          <div class="bg-gradient-to-b from-operations-blue-grad-from to-operations-blue-grad-to">
            <h1 class='text-center'>MULTIMEDIA</h1>
            <ProfileCard name={cmo.Name} role='CMO' />
            <TeamGrid team={multimedia.nodes} />
          </div>
          <div class="bg-gradient-to-t from-operations-blue-grad-from to-operations-blue-grad-to">
            <h1 class='text-center'>SERVICES</h1>
            <ProfileCard name={cbo.Name} role='CBO' />
            <TeamGrid team={services.nodes} />
          </div>
        </div>
    </React.Fragment>
  );
}

export default MeetUsPage
