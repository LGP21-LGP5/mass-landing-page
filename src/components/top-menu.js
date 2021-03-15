import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function TopMenu() {
  return (
    <nav className="w-screen flex py-6 px-12 items-center justify-between">
      <StaticImage
        src="../images/brand-no-slogan.png"
        alt="MASS's logo"
        loading="eager"
        height={24}
        aspectRatio="2785/537"
        class="inline-block"
      />
      <ul className="inline-flex items-center ml-auto">
        <li>
          <Link to="/about" className="mx-2">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/team" className="mx-2">
            Our Team
          </Link>
        </li>
        <li>
          <Link to="/projects" className="mx-2">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="mx-2">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
