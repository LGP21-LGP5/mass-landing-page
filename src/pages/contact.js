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

            <h1 className="text-center text-4xl mb-14">Get in touch with us!</h1>

            <div className="flex flex-col md:flex-row px-10 mb-14 lg:px-20">

                <form id="contact-form"
                    className="flex flex-col flex-grow mb-5 md:mb-0"
                    method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact"
                >
                    <input type="hidden" name="bot-field" />
                    <input className={styles.formFieldM}
                        type="text"
                        name="name"
                        placeholder="Name*"
                        required />
                    <input className={styles.formFieldM}
                        type="email"
                        name="email"
                        placeholder="Email*"
                        required />
                    <input className={styles.formFieldM}
                        type="text"
                        name="subject"
                        placeholder="Subject*"
                        required />
                    <textarea className={styles.formField}
                        placeholder="Message"
                        name="message"
                        rows="5" />
                </form>
                <div className="flex flex-row justify-between md:justify-end md:flex-col md:ml-5 lg:w-36 lg:mr-32">
                    <div className="flex flex-row justify-between items-center md:mb-6">
                        <a href="#">
                            <StaticImage
                                className="float-left mr-2 md:mr-0"
                                src="../images/facebook.png"
                                alt="Mass' Facebook"
                                height={40}
                            />
                        </a>
                        <a href="#">
                            <StaticImage
                                className="float-left mr-2 md:mr-0"
                                src="../images/linkedin.png"
                                alt="Mass' LinkedIn"
                                height={40}
                            />
                        </a>
                        <a href="#">
                            <StaticImage
                                className="float-left"
                                src="../images/instagram.png"
                                alt="Mass' Instagram"
                                height={40}
                            />
                        </a>
                    </div>
                    <button type="submit"
                        form="contact-form"
                        className="bg-blue-600 text-white h-12 w-36"
                    >
                        Send
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default ContactUsPage;