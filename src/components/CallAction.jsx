import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import background image
import BgImage from "../../public/images/actionBg.jpg";

// css for Call Action Section
const ActionSection = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  button {
    transition-duration: 0.3s;
    &:hover {
      background-color: #dc3545;
      border: 2px solid #dc3545 !important;
    }
  }
`;

const CallAction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <ActionSection className="py-5">
      <div className="container py-5 text-center text-light">
        <div className="row">
          <div className="col col-12" data-aos="zoom-in">
            <h2 className="fw-bolder">Call To Action</h2>
            <p className="text-light">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Pariatur at eum odit exercitationem fuga. Quis.
            </p>
            <button className="btn border border-light border-2 text-light py-2 px-5">
              Call To Action
            </button>
          </div>
        </div>
      </div>
    </ActionSection>
  );
};

export default CallAction;
