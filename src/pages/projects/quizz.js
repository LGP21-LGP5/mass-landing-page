import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import TopMenu from "../../components/top-menu";
import Footer from "../../components/footer";
import ProfileCard from "../../components/ProfileCard";
import TeamGrid from "../../components/TeamGrid";

import icon from "../../images/icon.png";

const QuizzPage = () => {
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
          Project_Assignment: { eq: "D" }
          Added_Role: { ne: "Team Leader D" }
        }
      ) {
        nodes {
          ...memberFields2
        }
      }
      teamLeader: companyMembersCsv(Added_Role: { eq: "Team Leader D" }) {
        ...memberFields2
      }
      pictureFiles: allFile(
        filter: {
          extension: { regex: "/png|jpg|jpeg/" }
          name: { regex: "/(up.*)|default/" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(height: 125, width: 125)
          }
        }
      }
    }
  `);

  const pictures = [];
  pictureFiles.nodes.forEach((pic) => (pictures[pic.name] = getImage(pic)));

  return (
    <React.Fragment>
      <TopMenu />
      <img className="mx-auto mt-10 w-24" src={icon} alt="Mass company logo" />
      <div className="mt-20 mb-10 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-4xl">QUIZZ</p>
      </div>
      <div className="mb-10 mx-10 sm:mx-20 xl:mx-40 2xl:mx-80">
        <p className="mx-auto font-poppins-bold text-center text-2xl">About</p>
        <p className="mx-auto font-poppins text-center text-gray-800 text-lg mt-2">
          QUIZZ is an application for users to have fun by challenging each
          other with quizzes about various sports. The questions are answered in
          realtime and they get points based on how fast they give correct
          answers in each round.
        </p>
      </div>

      <div className="mb-10">
        <p className="mx-auto font-poppins-bold text-center text-2xl">Team</p>
        <ProfileCard member={teamLeader} pics={pictures} showRole={true} />
        <TeamGrid team={team.nodes} pics={pictures} showRoles={true} />
      </div>

      <div className="mb-20 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-center text-2xl">Client</p>
        <a href="https://www.zerozero.pt/" className="mx-auto">
          <StaticImage
            alt="ZeroZero"
            src="../images/zerozero.png"
            height="96"
            aspectRatio="1200/937"
            className="mx-24 sm:mx-6 my-6"
          />
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default QuizzPage;
