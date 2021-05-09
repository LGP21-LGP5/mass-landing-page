import * as React from "react";

import Layout from "../components/layout";

import icon from "../images/icon.png";
import download from "../images/download.png";

const File = ({ name, path }) => {
  return (
    <a className="mb-8" href={path} target="_blank">
      <div className="bg-gray-50 shadow-lg rounded-lg flex flex-row items-center p-4 w-64 hover:shadow-xl">
        <img className="w-10 mr-2" src={download} alt="Download file" />
        <p className="font-poppins-bold text-base">
          {name}
        </p>
      </div>
    </a>
  );
};

const MediaPressPage = () => {
  return (
    <Layout>
      <img className="mx-auto mt-10 w-24" src={icon} alt="Mass company logo" />
      <div className="my-20 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-4xl">Media Press</p>
      </div>
      <div className="flex flex-col p-2 mx-20 mb-20">
        <File name="Digital Brand Manual" path="files/Mass_DigitalBrandManual.pdf" />
        <File name="Company Handbook" path="files/CHB_Mass.pdf" />
        <File name="Graphic Resources" path="files/graphic_resources.zip" />
        <File name="Media Press Kit" path="files/CHB_Mass.pdf" />
        <File name="Infographic" path="files/CHB_Mass.pdf" />
      </div>
    </Layout>
  );
};

export default MediaPressPage;
