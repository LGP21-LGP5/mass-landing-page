import * as React from "react";
import TopMenu from "../components/top-menu";

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <TopMenu />
      <h1 className="text-2xl">Hello World</h1>
    </React.Fragment>
  );
};

export default IndexPage;
