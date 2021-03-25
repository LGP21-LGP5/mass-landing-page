import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProfileCard from "../components/ProfileCard";
import TeamGrid from "../components/TeamGrid";
import logo from "../images/mass_icon.png"
import { getImage } from "gatsby-plugin-image"

const MeetUsPage = () => {

  const { operations, multimedia, services, ceo, cto, cbo, cmo, pictureFiles } = useStaticQuery(graphql`
    fragment memberFields on CompanyMembersCsv {
      name: Name
      up: UP_Number
      role: Added_Role
      dept: Department
    }

    query {
      services: allCompanyMembersCsv(
        filter: {Department: {eq: "Services"}, Added_Role: {ne: "CBO"}}
      ) {
        nodes {
          ...memberFields
        }
      }
      operations: allCompanyMembersCsv(
        filter: {Department: {eq: "Operations"}, Added_Role: {ne: "CTO"}}
      ) {
        nodes {
          ...memberFields
        }
      }
      multimedia: allCompanyMembersCsv(
        filter: {Department: {eq: "Multimedia"}, Added_Role: {ne: "CMO"}}
      ) {
        nodes {
          ...memberFields
        }
      }
      cto: companyMembersCsv(Added_Role: {eq: "CTO"}) {
        ...memberFields
      }
      ceo: companyMembersCsv(Added_Role: {eq: "CEO"}) {
        ...memberFields
      }
      cmo: companyMembersCsv(Added_Role: {eq: "CMO"}) {
        ...memberFields
      }
      cbo: companyMembersCsv(Added_Role: {eq: "CBO"}) {
        ...memberFields
      }
      pictureFiles: allFile(
        filter: {extension: {regex: "/png|jpg|jpeg/"}, name: {regex: "/(up.*)|default/"}}
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(height: 140, width: 140, quality: 100)
          }
        }
      }
    }
  `)

  const pictures = []
  pictureFiles.nodes.forEach(pic => pictures[pic.name] = getImage(pic))

  return (
    <React.Fragment>
      <img className='mx-auto mt-10 w-24' src={logo} alt='Mass company logo' />
      <p className='text-center mx-10 mt-10 mb-16 text-2xl'>Meet the team that makes our company stand out!</p>
      <div className='mb-24'>
        <h1 className='text-center font-bold text-3xl mb-16'>ADMINISTRATION</h1>
        <ProfileCard member={ceo} pics={pictures} showRole={true} />
        <TeamGrid team={[cbo, cto, cmo]} pics={pictures} showRoles={true} />
      </div>
      <div className="bg-gradient-to-t from-operations-grad-from to-operations-grad-to pb-24">
        <h1 className='text-center font-bold text-3xl mb-16 pt-24 text-operations'>OPERATIONS</h1>
        <ProfileCard member={cto} pics={pictures} showRole={true} />
        <TeamGrid team={operations.nodes} pics={pictures} showRoles={false} />
      </div>
      <div className="bg-gradient-to-b from-multimedia-grad-from to-multimedia-grad-to pb-24">
        <h1 className='text-center font-bold text-3xl mb-16 pt-24 text-multimedia'>MULTIMEDIA</h1>
        <ProfileCard member={cmo} pics={pictures} showRole={true}/>
        <TeamGrid team={multimedia.nodes} pics={pictures} showRoles={false} />
      </div>
      <div className="bg-gradient-to-t from-operations-grad-from to-operations-grad-to pb-24">
        <h1 className='text-center font-bold text-3xl mb-16 pt-24 text-operations'>SERVICES</h1>
        <ProfileCard member={cbo} pics={pictures} showRole={true}/>
        <TeamGrid team={services.nodes} pics={pictures} showRoles={false} />
      </div>
    </React.Fragment>
  );
}

export default MeetUsPage
