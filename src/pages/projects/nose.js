import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import ProfileCard from "../../components/ProfileCard";
import TeamGrid from "../../components/TeamGrid";

import icon from "../../images/icon.png";

const NosePage = () => {
  const { team, teamLeader, pictureFiles } = useStaticQuery(graphql`
    fragment memberFields2 on CompanyMembersCsv {
      name: Name
      up: UP_Number
      role: Team_Role
      dept: Department
    }

    query {
      team: allCompanyMembersCsv(
        filter: {
          Project_Assignment: { eq: "A" }
          Added_Role: { ne: "Team Leader A" }
        }
      ) {
        nodes {
          ...memberFields2
        }
      }
      teamLeader: companyMembersCsv(Added_Role: { eq: "Team Leader A" }) {
        ...memberFields2
      }
      pictureFiles: allFile(
        filter: {extension: {regex: "/png|jpg|jpeg/"}, name: {regex: "/((up)?.*)|default/"}}
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

  const pictures = [];
  pictureFiles.nodes.forEach(pic => {
    const name = pic.name.match(/up.*|default/) ? pic.name : `up${pic.name}`;
    pictures[name] = getImage(pic);
  })

  return (
    <Layout>
      <img className="mx-auto mt-10 w-24" src={icon} alt="Mass company logo" />
      <div className="mt-20 mb-10 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-4xl">NOSE</p>
      </div>
      <div className="mb-10 mx-10 sm:mx-20 xl:mx-40 2xl:mx-80">
        <p className="mx-auto font-poppins-bold text-center text-2xl">About</p>
        <p className="mx-auto font-poppins text-center text-gray-800 text-lg mt-2">
          NOSE is an e-commerce platform proposed by XNFY Lab and being
          developed by Mass. It is an online intelligent marketplace looking to
          improve the democratization of the marketplace space and focused on
          providing the utmost realistic experience for those willing to try a
          new way of shopping, while also bringing together the best products
          from different stores. Our platform brings innovation and
          differentiation through artificial intelligent models that determine
          the most relevant product to each consumer.
          <br />
          <br />
          Customers are shown products filtered based on their personal
          preferences and interactions within the platform. NOSE also allows
          small retailers to gain their space in the market and compete on fair
          terms against other well-known companies through filiation programs.
          <br />
          <br />
          Unlike other solutions that only show catalogs for specific items or
          single branded, NOSE creates a unique experience that simulates a
          truly shopping experience that will revolutionize online shopping as
          we know it.
        </p>
      </div>

      <div className="mb-10">
        <p className="mx-auto font-poppins-bold text-center text-2xl">Team</p>
        <ProfileCard member={teamLeader} pics={pictures} showRole={true} />
        <TeamGrid team={team.nodes} pics={pictures} showRoles={true} />
      </div>

      <div className="mb-20 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-center text-2xl">Client</p>
        <a href="http://www.xnfinity.pt/" className="mx-auto">
          <StaticImage
            alt="XNFY Lab"
            src="../../images/xfny.png"
            height="96"
            aspectRatio="224/130"
            className="mx-24 sm:mx-6 my-6"
          />
        </a>
      </div>
    </Layout>
  );
};

export default NosePage;
