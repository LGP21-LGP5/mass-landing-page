import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProfileCard from "../components/ProfileCard";
import TeamGrid from "../components/TeamGrid";
import Layout from "../components/layout";
import logo from "../images/mass_icon.png";
import { getImage } from "gatsby-plugin-image";

const MeetUsPage = () => {
  const {
    operations,
    multimedia,
    services,
    ceo,
    cto,
    cbo,
    cmo,
    pictureFiles,
  } = useStaticQuery(graphql`
    fragment memberFields on CompanyMembersCsv {
      name: Name
      up: UP_Number
      role: Added_Role
      dept: Department
    }

    query {
      services: allCompanyMembersCsv(
        filter: { Department: { eq: "Services" }, Added_Role: { ne: "CBO" } }
      ) {
        nodes {
          ...memberFields
        }
      }
      operations: allCompanyMembersCsv(
        filter: { Department: { eq: "Operations" }, Added_Role: { ne: "CTO" } }
      ) {
        nodes {
          ...memberFields
        }
      }
      multimedia: allCompanyMembersCsv(
        filter: { Department: { eq: "Multimedia" }, Added_Role: { ne: "CMO" } }
      ) {
        nodes {
          ...memberFields
        }
      }
      cto: companyMembersCsv(Added_Role: { eq: "CTO" }) {
        ...memberFields
      }
      ceo: companyMembersCsv(Added_Role: { eq: "CEO" }) {
        ...memberFields
      }
      cmo: companyMembersCsv(Added_Role: { eq: "CMO" }) {
        ...memberFields
      }
      cbo: companyMembersCsv(Added_Role: { eq: "CBO" }) {
        ...memberFields
      }
      pictureFiles: allFile(
        filter: {
          extension: { regex: "/png|jpg|jpeg/" }
          name: { regex: "/((up)?.*)|default/" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(height: 140, width: 140, quality: 100)
          }
        }
      }
    }
  `);

  const designer = {
    name: 'Francisca Marques',
    up: 'FranciscaMarques',
    role: 'Head Designer',
  }

  const pictures = [];
  pictureFiles.nodes.forEach((pic) => {
    const name = pic.name.match(/up.*|default|FranciscaMarques/) ? pic.name : `up${pic.name}`;
    pictures[name] = getImage(pic);
  });

  return (
    <Layout>
      <img className="mx-auto mt-10 w-24" src={logo} alt="Mass company logo" />
      <p className="text-center font-poppins mx-10 mt-10 mb-16 text-2xl">
        Meet the team that makes our company stand out!
      </p>
      <div className="mb-24">
        <h1 className="text-center font-poppins-bold text-3xl mb-16">
          ADMINISTRATION
        </h1>
        <ProfileCard member={ceo} pics={pictures} showRole={true} />
        <TeamGrid team={[cbo, cto, cmo, designer]} pics={pictures} showRoles={true} />
      </div>
      <div className="bg-gradient-to-t from-operations-grad-from to-operations-grad-to pb-24">
        <h1 className="text-center font-poppins-bold text-3xl mb-16 pt-24 text-operations">
          OPERATIONS
        </h1>
        <ProfileCard member={cto} pics={pictures} showRole={true} />
        <TeamGrid team={operations.nodes} pics={pictures} showRoles={false} />
      </div>
      <div className="bg-gradient-to-b from-multimedia-grad-from to-multimedia-grad-to pb-24">
        <h1 className="text-center font-poppins-bold text-3xl mb-16 pt-24 text-multimedia">
          MULTIMEDIA
        </h1>
        <ProfileCard member={cmo} pics={pictures} showRole={true} />
        <TeamGrid team={multimedia.nodes} pics={pictures} showRoles={false} />
      </div>
      <div className="bg-gradient-to-t from-operations-grad-from to-operations-grad-to pb-24">
        <h1 className="text-center font-poppins-bold text-3xl mb-16 pt-24 text-operations">
          SERVICES
        </h1>
        <ProfileCard member={cbo} pics={pictures} showRole={true} />
        <TeamGrid team={services.nodes} pics={pictures} showRoles={false} />
      </div>
    </Layout>
  );
};

export default MeetUsPage;
