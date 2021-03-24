import { Link } from "gatsby";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row p-5 sm:py-3 bg-blue-600 sm:px-20">
      <Link to="/faq" className="sm:flex-grow text-xl text-white font-light">
        FAQ's
      </Link>
      <a className="text-xl text-white font-poppins-light sm:mx-8" href="#">
        Instagram
      </a>
      <a className="text-xl text-white font-poppins-light sm:mx-8" href="#">
        Facebook{" "}
      </a>
      <a className="text-xl text-white font-poppins-light sm:mx-8" href="#">
        LinkedIn
      </a>
    </footer>
  );
}
