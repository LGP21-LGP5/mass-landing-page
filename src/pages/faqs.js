import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import icon from "../images/icon.png";

const FaqsPage = () => {
  return (
    <Layout>
      <img className="mx-auto mt-10 w-24" src={icon} alt="Mass company logo" />
      <div className="my-20 flex flex-col justify-center">
        <p className="mx-auto font-poppins-bold text-4xl">FAQ's</p>
        <p className="mx-auto font-poppins text-gray-500 text-xl mt-4">
          Frequently Asked Questions
        </p>
      </div>
      <div className="mb-20 mx-20 xl:mx-40 2xl:mx-80">
        <div className="mb-10">
          <p className="mx-auto font-poppins-bold text-lg italic">
            How can I contact you?
          </p>
          <p className="mx-auto font-poppins text-gray-800 text-lg mt-2">
            You can get in touch with us through our message box available in{" "}
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>{" "}
            or our email address{" "}
            <a
              href="mailto:mass.isacompany@gmail.com"
              className="hover:text-blue-600"
            >
              mass.isacompany@gmail.com
            </a>
            , in our menu links, and also through our social media channels that
            you can find in the bottom of the page.
          </p>
        </div>

        <div className="mb-10">
          <p className="mx-auto font-poppins-bold text-lg italic">
            Where can I find Mass’s portfolio?
          </p>
          <p className="mx-auto font-poppins text-gray-800 text-lg mt-2">
            You can find our product portfolio in our navigation menu under
            Projects.
          </p>
        </div>

        <div className="mb-10">
          <p className="mx-auto font-poppins-bold text-lg italic">
            What is the company's area of expertise?
          </p>
          <p className="mx-auto font-poppins text-gray-800 text-lg mt-2">
            We create fresh, innovative, tailor-made solutions aligned with our
            client’s goals to change how users interact with technology.
          </p>
        </div>

        <div className="mb-10">
          <p className="mx-auto font-poppins-bold text-lg italic">
            What kind of services does Mass provide?
          </p>
          <p className="mx-auto font-poppins text-gray-800 text-lg mt-2">
            We offer software services, such as websites, mobile apps, or other
            applications, and develop everything they entail: interfaces,
            back-end and databases.
          </p>
        </div>

        <div className="mb-10">
          <p className="mx-auto font-poppins-bold text-lg italic">
            What is the LGP Challenge?
          </p>
          <p className="mx-auto font-poppins text-gray-800 text-lg mt-2">
            A Living Lab for Professional Skills Development that brings
            together industry and academia.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FaqsPage;
