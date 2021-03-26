import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import ProfileCard from "../../components/ProfileCard";
import TeamGrid from "../../components/TeamGrid";

import icon from "../../images/icon.png";

const SignalCheckPage = () => {
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
          Project_Assignment: { eq: "C" }
          Added_Role: { ne: "Team Leader C" }
        }
      ) {
        nodes {
          ...memberFields2
        }
      }
      teamLeader: companyMembersCsv(Added_Role: { eq: "Team Leader C" }) {
        ...memberFields2
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

  const pictures = [];
  pictureFiles.nodes.forEach((pic) => {
    const name = pic.name.match(/up.*|default/) ? pic.name : `up${pic.name}`;
    pictures[name] = getImage(pic);
  });

  return (
    <Layout>
      <img className="mx-auto mt-10 w-24" src={icon} alt="Mass company logo" />
      <div className="mt-20 mb-10 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-4xl">SignalCheck</p>
      </div>
      <div className="mb-10 mx-10 sm:mx-20 xl:mx-40 2xl:mx-80">
        <p className="mx-auto font-poppins-bold text-center text-2xl">About</p>
        <p className="mx-auto font-poppins text-center text-gray-800 text-lg mt-2">
          This project is being developed to achieve the goal of optimizing and
          automating the process of creating systems for command and control of
          smart grids (SCADA) for EFACEC’s engineers, who have been spending a
          considerable amount of time performing validations of their work, some
          of which could be automated.
          <br />
          <br />
          Mass is specifying and developing a specific set of tools that must be
          integrated in EFACEC’s Engineering Process and support their teams
          with automatic validations, quality assurance, process flow control
          and documentation/control checks records.
        </p>
      </div>

      <div className="mb-10">
        <p className="mx-auto font-poppins-bold text-center text-2xl">Team</p>
        <ProfileCard member={teamLeader} pics={pictures} showRole={true} />
        <TeamGrid team={team.nodes} pics={pictures} showRoles={true} />
      </div>

      <div className="mb-20 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-center text-2xl">Client</p>
        <a href="https://www.efacec.pt/" className="mx-auto">
          <StaticImage
            alt="Efacec Energia"
            src="../../images/efacec.png"
            height="96"
            aspectRatio="4012/1460"
            className="mx-24 sm:mx-6 my-6"
          />
        </a>
      </div>
    </Layout>
  );
};

export default SignalCheckPage;
