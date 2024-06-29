import { React, useEffect } from "react";
import PageTitles from "./PageTitles";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";

// import images
import Light1 from "../../public/images/features-light-1.jpg";
import Light3 from "../../public/images/features-light-3.jpg";

// CSS for Features Section
const FeaturesSection = styled.div`
  img {
    border: 5px solid white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  li::before {
    content: "✓ ";
    font-weight: bolder;
    color: #dc3545;
  }
`;

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  let title = "Features";
  let description =
    "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";
  return (
    <FeaturesSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <PageTitles title={title} description={description}></PageTitles>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-lg-6 d-flex justify-content-center align-items-start flex-column mb-5 mb-lg-0">
            <h3 data-aos="fade-up">Corporis temporibus maiores provident</h3>
            <p data-aos="fade-up">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
            <button className="btn btn-danger" data-aos="fade-up">
              Get Started
            </button>
          </div>
          <div className="col col-12 col-lg-6">
            <img src={Light1} className="w-100" data-aos="zoom-out-up"></img>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-12 col-lg-6">
            <img src={Light3} className="w-100" data-aos="zoom-out-up"></img>
          </div>
          <div className="col col-12 col-lg-6 d-flex justify-content-center align-items-start flex-column mt-5 mt-lg-0">
            <h3 data-aos="fade-up">Sunt consequatur ad ut est nulla</h3>
            <p data-aos="fade-up">
              Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
              quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas
              dolor doloremque.
            </p>
            <ul className="list-group " data-aos="fade-up">
              <li className="list-group-item border-0">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="list-group-item border-0">
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="list-group-item border-0">
                Facilis ut et voluptatem aperiam. Autem soluta ad fugiat .
              </li>
            </ul>
            <button className="btn btn-danger mt-3" data-aos="fade-up">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </FeaturesSection>
  );
};
export default Features;
