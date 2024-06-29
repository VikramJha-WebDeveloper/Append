import { React, useEffect } from "react";
import PageTitles from "./PageTitles";
import styled from "styled-components";
import AOS from "aos";

const ServicesSection = styled.div`
  i {
    font-size: 50px;
    color: #dc3545;
  }
  h5 {
    transition-duration: 0.3s;
  }
  div.boxes:hover {
    h5 {
      color: #dc3545;
    }
  }
`;

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  let title = "Services";
  let description =
    "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";
  return (
    <ServicesSection className="container py-5">
      <div className="row">
        <div className="col col-12">
          <PageTitles title={title} description={description}></PageTitles>
        </div>
        <div className="col col-12">
          <div className="row justify-content-center">
            <div
              className="boxes col col-12 col-lg-5 border border-0 mb-3 pt-3 mx-3 border-top"
              data-aos="fade-up"
            >
              <div className="row">
                <div className="col col-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-briefcase"></i>
                </div>
                <div className="col col-9">
                  <h5 className="fw-bolder">Lorem Ipsum</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo amet quidem molestias odio! Tenetur quam natus
                    temporibus aliquid quidem illum!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="boxes col col-12 col-lg-5 border border-0 mb-3 pt-3 mx-3 border-top"
              data-aos="fade-up"
            >
              <div className="row">
                <div className="col col-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-list-check"></i>
                </div>
                <div className="col col-9">
                  <h5 className="fw-bolder">Dolor Sitema</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iste fugit dolores, porro aperiam magnam veritatis.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="boxes col col-12 col-lg-5 border border-0 mb-3 pt-3 mx-3 border-top"
              data-aos="fade-up"
            >
              <div className="row">
                <div className="col col-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-chart-column"></i>
                </div>
                <div className="col col-9">
                  <h5 className="fw-bolder">Sed ut Perspiciatis</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore saepe, ut ipsa aliquam pariatur quam consequuntur
                    architecto voluptate blanditiis, odio praesentium sapiente
                    distinctio eveniet molestias!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="boxes col col-12 col-lg-5 border border-0 mb-3 pt-3 mx-3 border-top"
              data-aos="fade-up"
            >
              <div className="row">
                <div className="col col-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-binoculars"></i>
                </div>
                <div className="col col-9">
                  <h5 className="fw-bolder">Magni Dolors</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus, expedita.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="boxes col col-12 col-lg-5 border border-0 mb-3 pt-3 mx-3 border-top"
              data-aos="fade-up"
            >
              <div className="row">
                <div className="col col-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-sun"></i>
                </div>
                <div className="col col-9">
                  <h5 className="fw-bolder">Nemo Enim</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    sint molestiae voluptatum asperiores obcaecati! Voluptates
                    odio voluptatum ad facere exercitationem?
                  </p>
                </div>
              </div>
            </div>
            <div
              className="boxes col col-12 col-lg-5 border border-0 mb-3 pt-3 mx-3 border-top"
              data-aos="fade-up"
            >
              <div className="row">
                <div className="col col-3 d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-calendar-days"></i>
                </div>
                <div className="col col-9">
                  <h5 className="fw-bolder">Eusmod Tempor</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cupiditate ad minima, possimus soluta inventore molestias
                    officiis repellendus similique! Voluptatem iusto voluptatum
                    culpa, voluptas dolore expedita nihil sint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicesSection>
  );
};

export default Services;
