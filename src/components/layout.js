import React from "react";
import TopMenu from "./top-menu";
import Footer from "./footer";
import Helmet from "react-helmet";

function Layout({ children, className }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>MASS</title>
        <meta
          name="description"
          content="Welcome to the homepage of our company, MASS"
        />
        <link
          rel="canonical"
          href="https://mass-software-solutions.netlify.app/"
        />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-57.png" sizes="57x57" />
        <link rel="icon" href="/favicon-76.png" sizes="76x76" />
        <link rel="icon" href="/favicon-96.png" sizes="96x96" />
        <link rel="icon" href="/favicon-128.png" sizes="128x128" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" />
        <link rel="icon" href="/favicon-228.png" sizes="228x228" />

        <link rel="shortcut icon" sizes="196x196" href="/favicon-196.png" />

        <link rel="apple-touch-icon" href="/favicon-120.png" sizes="120x120" />
        <link
          rel="apple-touch-icon"
          href="path/to/favicon-152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="path/to/favicon-180.png"
          sizes="180x180"
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <TopMenu />
        <main className={`flex-grow ${className || ""}`}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
