import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

const Title = styled.div`
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2::before {
    content: "";
    border: 2px solid #dc3545;
    width: 50px;
    margin-right: 10px;
  }
  h2::after {
    content: "";
    border: 2px solid #dc3545;
    width: 50px;
    margin-left: 10px;
  }
  p {
    font-size: 18px;
  }
`;

const PageTitles = ({ title, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <Title className="pb-5" data-aos="zoom-in">
      <h2 className="text-center fw-bolder">{title}</h2>
      <p className="text-center">{description}</p>
    </Title>
  );
};
export default PageTitles;
