import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import TopMenu from "../components/top-menu";
import Footer from "../components/footer";

import * as styles from "./index.module.css";

// markup
const IndexPage = () => {
  return (
    <div className={styles.topLevel}>
      <TopMenu />
      <div className={styles.hero}>
        <p className="font-medium text-white text-xl ml-1 uppercase">
          Presenting a new look on technology
        </p>
        <p className="text-white text-6xl mt-4">
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
          <h1 className="text-5xl text-blue-600 font-bold mb-6">Our Vision</h1>
          <p className="text-3xl font-semibold">
            Create fresh and innovative solutions and lead European companies to
            become a world reference
          </p>
        </article>
        <article className="text-center">
          <h1 className="text-5xl text-blue-600 font-bold mb-6">Our Mission</h1>
          <p className="text-3xl font-semibold">
            Change how users interact with technology by creating tailor-made
            solutions aligned with our clients' goals
          </p>
        </article>
      </div>
      <article className={styles.clients}>
        <h1 className="text-center text-5xl text-blue-600 font-bold">
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
      <Footer />
    </div>
  );
};

export default IndexPage;
