import * as React from "react";
import TopMenu from "../components/top-menu";
import Footer from "../components/footer";


import logo from "../images/icon.png";
import * as styles from "./contact.module.css";
import { StaticImage } from "gatsby-plugin-image";


const ContactUsPage = () => {


    return (
        <React.Fragment>
            <TopMenu />

            <img src={logo} alt="Mass logo" className="mx-auto w-24 mt-16 mb-20" />

            <h1 className="text-center text-4xl mb-14">Get in touch with us!</h1>

            <div className="flex flex-row px-20 mb-14">

                <form className="form flex flex-col flex-grow">
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
                <div className="w-1/6 flex flex-col justify-end mr-32 ml-5">
                    <div className="flex flex-row justify-between mb-6">
                        <StaticImage 
                            src="../images/facebook.png"
                            alt="Mass' Facebook"
                            height={40}
                            />
                        <StaticImage 
                            src="../images/linkedin.png"
                            alt="Mass' LinkedIn"
                            height={40}
                            />
                        <StaticImage 
                            src="../images/instagram.png"
                            alt="Mass' Instagram"
                            height={40}
                            />
                    </div>
                    <button className="bg-blue-600 text-white h-12  ">Send</button>
                </div>
            </div>



            <Footer />
        </React.Fragment>
    )
}

export default ContactUsPage;