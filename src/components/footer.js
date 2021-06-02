import { Link } from "gatsby";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row p-5 sm:py-3 bg-operations sm:px-20">
      <Link
        to="/faqs"
        className="sm:flex-grow text-xl text-white font-poppins-light"
      >
        FAQ's
      </Link>
      <a
        className="text-xl text-white font-poppins-light sm:mx-8"
        href="https://www.instagram.com/Mass_SolutionsthatMatter/"
      >
        Instagram
      </a>
      <a
        className="text-xl text-white font-poppins-light sm:mx-8"
        href="https://www.facebook.com/Mass-Solutions-that-matter-102042335354068"
      >
        Facebook
      </a>
      <a
        className="text-xl text-white font-poppins-light sm:mx-8"
        href="https://www.linkedin.com/company/mass-solutions-that-matter/"
      >
        LinkedIn
      </a>
      <a
        className="text-xl text-white font-poppins-light sm:mx-8"
        href="https://twitter.com/MassThecompany"
      >
        Twitter
      </a>
      <a
        className="text-xl text-white font-poppins-light sm:mx-8"
        href="https://www.youtube.com/channel/UCdtxKXHwpK3pBrQQe4auxXw"
      >
        Youtube
      </a>
    </footer>
  );
}
