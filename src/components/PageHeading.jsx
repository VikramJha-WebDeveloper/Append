import { React, useEffect } from "react";
import AOS from "aos";

const PageHeading = ({ heading, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="bg-danger py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col col-12" data-aos="zoom-in">
            <h2 className="display-4 fw-bolder text-center text-light">
              {heading}
            </h2>
            <p className="text-center text-light">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageHeading;
