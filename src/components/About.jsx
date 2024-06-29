import { React, useEffect } from "react";
import styled from "styled-components";
import Boxes from "./Boxes";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = styled.div`
  background-color: #f4f4f4;
  button::after {
    content: " →";
    font-weight: bold;
  }
`;

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AboutSection className="py-5">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-lg-6 mb-3 mb-lg-0 d-flex flex-column justify-content-center align-items-start">
            <span
              className="bg-danger-subtle text-danger rounded d-inline-block py-2 px-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              About Us
            </span>
            <h2 className="my-3" data-aos="fade-up" data-aos-duration="1000">
              Ducimus rerum libero reprehenderit cumque
            </h2>
            <p data-aos="fade-up">
              Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor
              cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta
              quas cum quia maiores iure. Quidem nulla qui assumenda incidunt
              voluptatem tempora deleniti soluta.
            </p>
            <button
              className="btn btn-danger"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Read More
            </button>
          </div>
          <div className="col col-12 col-lg-6">
            <div className="row">
              <div
                className="col col-12 col-md-6 p-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Boxes
                  title="Eius provident"
                  para="Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem"
                  img="fa-regular fa-building"
                ></Boxes>
              </div>
              <div
                className="col col-12 col-md-6 p-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Boxes
                  title="Rerum aperiam"
                  para="Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia"
                  img="fa-regular fa-clipboard"
                ></Boxes>
              </div>
              <div
                className="col col-12 col-md-6 p-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Boxes
                  title="Veniam omnis"
                  para="Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti"
                  img="fa-brands fa-slack"
                ></Boxes>
              </div>
              <div
                className="col col-12 col-md-6 p-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Boxes
                  title="Delares sapiente"
                  para="Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda"
                  img="fa-solid fa-chart-simple"
                ></Boxes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};
export default About;
