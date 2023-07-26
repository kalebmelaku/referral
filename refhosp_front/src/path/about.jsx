/* eslint-disable react/no-unescaped-entities */
import  { useEffect } from "react";
import Header from "../components/header";
import MiniHero from "../components/miniHero";
import howtohelp from "../assets/img/howtohelp.jpg";
import Footer from "../components/footer";

import struct from "../assets/img/struct.png";
function About() {
  useEffect(() => {
    document.title = "ABOUT US";
  });
  return (
    <>
      <Header />
      <MiniHero
        text="Rehabilitative and supportive services for all patients on referral basis"
        img={howtohelp}
      />
      <section
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
        className="text-center"
        id="t-large-width"
      >
        <div className="wrapper">
          <div className="container-sm">
            <h2 className="title text-custom py-4">
              At the center of Jigjiga City
            </h2>

            <div className="main-content-text">
              <p className="h5 text-cut mx-auto center">
                JigJiga University, Sheik Hassen Yabare Comprehensive
                Specialized Hospital is the first and largest specialized
                hospital and medical school linked in Somali Regional State of
                Ethiopia. It is at center of Jigjiga city which is located 610
                Km away from Addis Ababa in the Eastern part of Ethiopia
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="priciples py-4 text-center bg-light">
        <div className="container-sm">
          <h4>CORE VALUE AND PRINCIPLES</h4>
        </div>

        <div className="row my-4 gap-4">
          <div className="col-sm py-3">
            <h3>Transparency and accountability</h3>
          </div>
          <div className="col-sm py-3">
            <h3>Effectiveness and efficiency</h3>
          </div>
          <div className="col-sm py-3">
            <h3>Equity and compassion</h3>
          </div>
          <div className="col-sm py-3">
            <h3>Partnership and collaboration</h3>
          </div>
        </div>
        <div className="row my-4 gap-4">
          <div className="col-sm py-3">
            <h3>Quality and excellence</h3>
          </div>
          <div className="col-sm py-3">
            <h3>Participatory and ownership</h3>
          </div>
          <div className="col-sm py-3">
            <h3>Professional ethics and respecting the Law</h3>
          </div>
          <div className="col-sm py-3">
            <h3>Sustainability and self-reliance</h3>
          </div>
        </div>
        <div className="row my-4 gap-4">
          <div className="col-sm py-3">
            <h3>Client centred care and safety</h3>
          </div>
          <div className="col-sm py-3">
            <h3>Confidentiality</h3>
          </div>
        </div>
      </section>

      <section className="how_we_operate py-4 bg-light">
        <div className="container-sm">
          <h4 className="py-4 text-center">THE HOSPITAL'S SERVICES</h4>
          <p className="text-cut mx-auto">
            The Hospital has up to 355 beds capacity (with currently 291
            functional beds), 4 major operation theatres (currently it is under
            renovation and it will be upgraded to 8 major theatres,) and
            Cesarean Section (C/S) rooms with two operational theatres.
          </p>
          <div className="row py-4">
            <div className="col-sm">
              <p>
                The hospital is designed to provide tertiary care services
                related on preventive, diagnostic, curative, therapeutic,
                rehabilitative and support services for all patients on referral
                basis. Currently, it also provides primary and secondary care
                services to all citizens.
              </p>
            </div>
            <div className="col-sm">
              <p>
                It undertakes training, teaching and research activities for
                Jigjiga University, college of medicine and health science which
                include medicine both (undergraduate and post graduate students)
                and other health science students both (undergraduates and post
                graduates) and clinical attachments trainings for students from
                other health science colleges in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="structure">
        <div className="container-sm">
          <h1 className="text-center mt-5">Structure of SHYCRH</h1>
          <div className="row text-center py-2 mt-5 gap-3">
            <div className="col-sm bg-light py-2">
              <p>
                The Hospital is led by the{" "}
                <strong>Chief Executive Director (CED) </strong>, at the rank of
                vice president of Jigjiga University, accountable to the
                university president.
              </p>
            </div>
            <div className="col-sm bg-light py-2">
              <p>
                The directors for chief academic affairs and research{" "}
                <strong>(CARD)</strong>, chief clinical services director{" "}
                <strong>(CCD)</strong>
              </p>
            </div>
            <div className="col-sm bg-light py-2">
              <p>
                Chief administrative and business development director{" "}
                <strong>(CADD) </strong> and Directors of different directorates
                of the hospital & College of MHS support the activities of the{" "}
                <strong>CED</strong>.
              </p>
            </div>
          </div>

          <div className="struct_container mx-auto">
            <img src={struct} alt="structure" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
