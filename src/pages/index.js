import * as React from "react";
import Footer from "../components/footer";
import TopMenu from "../components/top-menu";

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <TopMenu />
      <h1 className="text-2xl h-screen">Hello World</h1>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
