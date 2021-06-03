import * as React from "react";

import Layout from "../components/layout";

const File = ({ name, path }) => {
  return (
    <div className="sm:w-64 flex flex-col justify-center items-center mb-12">
      <div className="sm:w-64 flex justify-center mb-6">
        <p className="font-poppins-medium text-lg text-white">{name}</p>
      </div>
      <a
        className="bg-white p-4 sm:w-48 flex justify-center"
        href={path}
        target="_blank"
      >
        <p className="font-poppins-medium text-lg text-operations">Download</p>
      </a>
    </div>
  );
};

const Questions = () => {
  return (
    <div className="sm:w-64 flex flex-col justify-center items-center mb-12">
      <div className="sm:w-64 flex justify-center mb-6">
        <p className="font-poppins-medium text-lg text-white">Questions?</p>
      </div>
      <a className="bg-white p-4 sm:w-48 flex justify-center" href="/contact">
        <p className="font-poppins-medium text-lg text-operations">Email Us</p>
      </a>
    </div>
  );
};

const MediaPressPage = () => {
  return (
    <div className="bg-operations m-0 p-0">
      <Layout>
        <div className="my-20 flex flex-col justify-center">
          <p className="mx-auto font-poppins-bold text-4xl text-white">
            Press Kit
          </p>
          <p className="mx-auto font-poppins text-white text-xl mt-4 text-center">
            Our Company at the tip of your fingers!
          </p>
        </div>
        <div className="flex flex-wrap p-2 mx-20 sm:mx-64 mb-20 justify-center">
          <File name="Media Press Kit" path="/files/Media_Press_Kit.pdf" />
          <File name="Brand Manual" path="/files/Mass_DigitalBrandManual.pdf" />
          <File name="Company Handbook" path="/files/CHB_Mass.pdf" />
          <File name="Graphic Resources" path="/files/graphic_resources.zip" />
          <File name="Flyers" path="/files/flyers.zip" />
          <Questions />
        </div>
      </Layout>
    </div>
  );
};

export default MediaPressPage;
