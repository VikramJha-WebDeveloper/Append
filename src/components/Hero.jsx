import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import background image
import HeroBg from "../../public/images/hero-bg.jpeg";

// CSS for Hero section

const HeroSection = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${HeroBg});
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .input-group {
    z-index: 0;
  }
`;

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <HeroSection>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 col-lg-6 text-light mx-auto d-flex justify-content-center align-items-center flex-column">
            <h1
              className="display-5 fw-bolder"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Welcome to Our Website
            </h1>
            <p
              className="fs-5 text-light"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
              quae.
            </p>
            <form
              className="w-100 mt-3"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="input-group bg-light p-1 rounded">
                <input
                  type="text"
                  className="form-control bg-light border-0"
                ></input>
                <button type="submit" className="btn btn-danger rounded">
                  Sign up
                </button>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};
export default Hero;
