import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import Layout from "../components/layout";
import Countdown from "../components/countdown";

import * as styles from "./index.module.css";

// markup
export default function IndexPage() {
  return (
    <Layout className={styles.topLevel}>
      <div className={styles.hero}>
        <p className="font-poppins-medium text-white text-xl ml-1 uppercase">
          Presenting a new look on technology
        </p>
        <p className="font-poppins-medium text-white text-6xl mt-4">
          Fresh and innovative
          <br />
          solutions for you
        </p>
      </div>
      <div className="flex justify-center items-center px-6">
        <StaticImage
          src="../images/brand-slogan.png"
          alt="MASS's logo and slogan 'Solutions that matter'"
          height="160"
          aspectRatio="3038/723"
        />
      </div>
      <div className={styles.about} id="about">
        <article className="text-center">
          <h1 className="text-4xl sm:text-5xl text-operations font-poppins-bold mb-6">
            Our Vision
          </h1>
          <p className="text-xl font-poppins-semibold">
            To create fresh and innovative solutions for our customers, helping
            them excel within their industries
          </p>
        </article>
        <article className="text-center">
          <h1 className="text-4xl text-operations font-poppins-bold mb-6">
            Our Mission
          </h1>
          <p className="text-xl font-poppins-semibold">
            Change how users interact with technology by creating tailor-made
            solutions aligned with our clients' goals
          </p>
        </article>
      </div>
      <div className={styles.countdown}>
        <h1 className="text-4xl font-poppins-bold mb-6">Almost there!</h1>
        <Countdown></Countdown>
        <p className="text-xl font-poppins-medium my-5 text-center max-w-3xl">
          The <span className="text-2xl font-poppins-semibold">LGP Challenge</span> is coming soon! Get notified when the big day comes - Subscribe and don't miss a thing.
        </p>
        <form>
          <input type="email" placeholder="Your email here..." className="p-1 mr-3 text-right text-black"></input>
          <button type="submit" className="bg-white text-operations p-1 px-2 font-poppins-semibold">Subscribe</button>
        </form>
        
      </div>
      <article className={styles.clients}>
        <h1 className="text-center text-5xl text-operations font-poppins-bold">
          Our Clients
        </h1>
        <ul className="flex flex-col sm:flex-row justify-between items-center my-8">
          <li>
            <a href="https://www.efacec.pt/">
              <StaticImage
                alt="Efacec Energia"
                src="../images/efacec.png"
                height="96"
                aspectRatio="4012/1460"
                className="mx-24 sm:mx-6 my-6"
              />
            </a>
          </li>
          <li>
            <a href="https://www.zerozero.pt/">
              <StaticImage
                alt="ZeroZero"
                src="../images/zerozero.png"
                height="96"
                aspectRatio="1200/937"
                className="mx-24 sm:mx-6 my-6"
              />
            </a>
          </li>
          <li>
            <a href="http://www.xnfinity.pt/">
              <StaticImage
                alt="XNFY Lab"
                src="../images/xfny.png"
                height="96"
                aspectRatio="224/130"
                className="mx-24 sm:mx-6 my-6"
              />
            </a>
          </li>
          <li>
            <a href="https://paginas.fe.up.pt/~ipoint/">
              <StaticImage
                alt="FEUP-iPoint"
                src="../images/feup-ipoint.png"
                height="96"
                aspectRatio="400/87"
                className="mx-24 sm:mx-6 my-6"
              />
            </a>
          </li>
        </ul>
      </article>
    </Layout>
  );
}
