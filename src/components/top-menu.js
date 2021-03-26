import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./top-menu.module.css";

export default function TopMenu() {
  const [projectsAreHidden, setHidden] = React.useState(true);
  const toggleHidden = (e) => {
    e.preventDefault();
    setHidden((hidden) => !hidden);
  };
  return (
    <nav className={styles.container}>
      <div className="flex flex-col sm:flex-row px-2 pt-8 pb-4 sm:pb-8 sm:px-20 items-center justify-between bg-gray-200">
        <Link to="/">
          <StaticImage
            src="../images/brand-no-slogan.png"
            alt="MASS's logo"
            loading="eager"
            height={24}
            aspectRatio="2785/537"
            class="inline-block mb-3 sm:mb-auto"
          />
        </Link>
        <ul className="inline-flex items-center sm:ml-auto">
          <li>
            <Link
              to="/#about"
              className="mx-2 text-multimedia font-poppins-semibold"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="mx-2 text-multimedia font-poppins-semibold"
            >
              Our Team
            </Link>
          </li>
          <li>
            <button
              className="mx-2 text-multimedia font-poppins-semibold"
              onClick={toggleHidden}
            >
              Projects
            </button>
          </li>
          <li>
            <Link
              to="/contact"
              className="mx-2 text-multimedia font-poppins-semibold"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <ul
        className={
          projectsAreHidden ? styles.projectsSubHidden : styles.projectsSub
        }
      >
        <li>
          <Link
            to="/projects/fashable"
            className="text-sm font-poppins-semibold text-multimedia"
          >
            Fashable
          </Link>
        </li>
        <li>
          <Link
            to="/projects/efeupinho"
            className="text-sm font-poppins-semibold text-multimedia"
          >
            eFEUPinho
          </Link>
        </li>
        <li>
          <Link
            to="/projects/signalcheck"
            className="text-sm font-poppins-semibold text-multimedia"
          >
            SignalCheck
          </Link>
        </li>
        <li>
          <Link
            to="/projects/quizz"
            className="text-sm font-poppins-semibold text-multimedia"
          >
            Quizz
          </Link>
        </li>
      </ul>
    </nav>
  );
}
