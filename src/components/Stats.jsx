import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import background image
import StatsBg from "../../public/images/statsBg.jpg";

const HeroSection = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${StatsBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <HeroSection className="py-5 text-light">
      <div className="container">
        <div className="row">
          <div
            className="col text-center col-12 col-md-6 col-lg-3 my-3"
            data-aos="fade-up"
          >
            <h3 className="display-6 fw-bolder">232</h3>
            <h6>Clients</h6>
          </div>
          <div
            className="col text-center col-12 col-md-6 col-lg-3 my-3"
            data-aos="fade-up"
          >
            <h3 className="display-6 fw-bolder">521</h3>
            <h6>Projects</h6>
          </div>
          <div
            className="col text-center col-12 col-md-6 col-lg-3 my-3"
            data-aos="fade-up"
          >
            <h3 className="display-6 fw-bolder">1453</h3>
            <h6>Hours Of Support</h6>
          </div>
          <div
            className="col text-center col-12 col-md-6 col-lg-3 my-3"
            data-aos="fade-up"
          >
            <h3 className="display-6 fw-bolder">32</h3>
            <h6>Workers</h6>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};
export default Stats;
