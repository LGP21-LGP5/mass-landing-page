import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import Layout from "../components/layout";

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
      <div className={styles.brand}>
        <article className="w-full md:w-1/2 px-16">
          <h1 className="text-center text-4xl sm:text-5xl text-operations font-poppins-bold mb-6">
            About Us
          </h1>
          <p className="text-center text-xl font-poppins">
          Mass Solutions was founded in 2021 by a group of enthusiastic FEUP students taking the LGP course (Laboratório de Gestão de Projetos).
          This course congregates students from various fields of knowledge such as Multimedia, Informatics Engineering and Services engineering.
          This mix of different knowledge areas is the perfect fit to create the best attempt possible to respond to our customer’s needs in all
          of the 4 projects Mass is involved in at the moment.
          </p>
        </article>
        <article className="w-full md:w-1/2 px-16 mt-12 md:mt-0">
          <h1 className="text-center text-4xl sm:text-5xl text-operations font-poppins-bold mb-6">
            Our Brand
          </h1>
          <p className="text-center text-xl font-poppins">
            The word mass means in the dictionary having an effect on or involving a large number of people.
            It also means a large amount of something that has no particular shape or arrangement. And that represents 
            three things very important to this company, that we wanted to have reflected both on our brand and our name: 
            Adaptability, diversity and efficiency. Our team is formed by people with various backgrounds, reflecting the world of today, 
            and we are focused on developing projects in multiple different areas, adapting and overcoming all challenges that may rise, 
            to help our clients achieve their goals. And we hope that by consequence we get to impact the world significantly in a positive way.
          </p>
        </article>
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
