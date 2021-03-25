import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import TopMenu from "../../components/top-menu";
import Footer from "../../components/footer";
import ProfileCard from "../../components/ProfileCard";
import TeamGrid from "../../components/TeamGrid";

import icon from "../../images/icon.png";

const EfeupinhoPage = () => {
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
          Project_Assignment: { eq: "B" }
          Added_Role: { ne: "Team Leader B" }
        }
      ) {
        nodes {
          ...memberFields2
        }
      }
      teamLeader: companyMembersCsv(Added_Role: { eq: "Team Leader B" }) {
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
    <React.Fragment>
      <TopMenu />
      <img className="mx-auto mt-10 w-24" src={icon} alt="Mass company logo" />
      <div className="mt-20 mb-10 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-4xl">eFeupinho</p>
      </div>
      <div className="mb-10 mx-10 sm:mx-20 xl:mx-40 2xl:mx-80">
        <p className="mx-auto font-poppins-bold text-center text-2xl">About</p>
        <p className="mx-auto font-poppins text-center text-gray-800 text-lg mt-2">
          eFeupinho is a platform intended to help students better integrate
          themselves in the FEUP community, by bringing to them all the
          information that they need. The product will assist them in three
          aspects:
          <br />
          <br />
          <span>&#8226;</span> Social and cultural integration - for the student
          to feel welcomed and have knowledge of various activities and news of
          the new environment that they are inserted in
          <br />
          <br />
          <span>&#8226;</span> Geographical integration - for the student to be
          aware of their surroundings, so that a lack of orientation is not an
          obstacle to them
          <br />
          <br />
          <span>&#8226;</span> Academic and pedagogical integration - since the
          academic success of a student depends a lot on his good integration
          with the college and colleagues
        </p>
      </div>

      <div className="mb-10">
        <p className="mx-auto font-poppins-bold text-center text-2xl">Team</p>
        <ProfileCard member={teamLeader} pics={pictures} showRole={true} />
        <TeamGrid team={team.nodes} pics={pictures} showRoles={true} />
      </div>

      <div className="mb-20 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-center text-2xl">Client</p>
        <a href="https://paginas.fe.up.pt/~ipoint/" className="mx-auto">
          <StaticImage
            alt="FEUP-iPoint"
            src="../images/feup-ipoint.png"
            height="96"
            aspectRatio="400/87"
            className="mx-24 sm:mx-6 my-6"
          />
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default EfeupinhoPage;
