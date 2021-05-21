import * as React from "react";
import Layout from "../components/layout";

// import logo from "../images/icon.png";
import * as styles from "./contact.module.css";
import { StaticImage } from "gatsby-plugin-image";

const ContactUsPage = () => {
  return (
    <Layout>
      <div className="mt-16 mb-20 flex justify-center">
        <StaticImage
          className="w-24"
          src="../images/icon.png"
          alt="Mass Logo"
        />
      </div>

      <h1 className="text-center font-poppins text-4xl mb-14">
        Get in touch with us!
      </h1>

      <form
        className="flex flex-col px-10 mb-14 lg:px-20 xl:px-64"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        id="contact-form"
      >
        <div className="flex flex-col flex-grow mb-5">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input
            className={styles.formFieldM}
            type="text"
            name="name"
            placeholder="Name*"
            required
          />
          <input
            className={styles.formFieldM}
            type="email"
            name="email"
            placeholder="Email*"
            required
          />
          <input
            className={styles.formFieldM}
            type="text"
            name="subject"
            placeholder="Subject*"
            required
          />
          <textarea
            className={styles.formField}
            placeholder="Message"
            name="message"
            rows="5"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between items-center">
            <a href="https://www.facebook.com/Mass-Solutions-that-matter-102042335354068">
              <StaticImage
                className="float-left"
                src="../images/socials/facebook.png"
                alt="Mass' Facebook"
                height={40}
              />
            </a>
            <a href="https://www.linkedin.com/company/mass-solutions-that-matter/">
              <StaticImage
                className="float-left"
                src="../images/socials/linkedin.png"
                alt="Mass' LinkedIn"
                height={40}
              />
            </a>
            <a href="https://www.instagram.com/Mass_SolutionsthatMatter/">
              <StaticImage
                className="float-left"
                src="../images/socials/instagram.png"
                alt="Mass' Instagram"
                height={40}
              />
            </a>
            <a href="https://twitter.com/MassThecompany">
              <StaticImage
                className="float-left"
                src="../images/socials/twitter.png"
                alt="Mass' Twitter"
                height={40}
              />
            </a>
            <a href="https://www.youtube.com/channel/UCdtxKXHwpK3pBrQQe4auxXw">
              <StaticImage
                className="float-left"
                src="../images/socials/youtube.png"
                alt="Mass' Youtube"
                height={40}
              />
            </a>
          </div>
          <input
            type="submit"
            form="contact-form"
            className="bg-operations font-poppins text-white h-12 w-36"
            value="Send"
          />
        </div>
      </form>
    </Layout>
  );
};

export default ContactUsPage;
