import { React, useEffect } from "react";
import PageTitles from "./PageTitles";
import styled from "styled-components";
import AOS from "aos";

// import images
import Team1 from "../../public/images/team1.jpg";
import Team2 from "../../public/images/team2.jpg";
import Team3 from "../../public/images/team3.jpg";
import Team4 from "../../public/images/team4.jpg";
import Team5 from "../../public/images/team5.jpg";
import Team6 from "../../public/images/team6.jpg";

// CSS for team section
const TeamSection = styled.div`
  background-color: #f4f4f4;
  div.social-medias {
    transition-property: all;
    transition-duration: 0.3s;
    top: -100% !important;
    left: 0;
  }
  div.images:hover div.social-medias {
    top: 0 !important;
  }
  div.social-medias {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    a {
      color: white;
    }
    i {
      transition-duration: 0.3s;
      &:hover {
        color: #dc3545 !important;
      }
    }
  }
`;

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  let title = "Team";
  let description =
    "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";
  return (
    <TeamSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <PageTitles title={title} description={description}></PageTitles>
          </div>
        </div>
        <div className="row">
          <div
            className="col col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center my-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="images rounded border border-light border-5 rounded-circle overflow-hidden position-relative">
              <img src={Team1} className="img-fluid"></img>
              <div className="social-medias position-absolute w-100 h-100 d-flex align-items-center justify-content-evenly fs-4 text-light">
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <h5 className="mt-3 fw-bolder">Walter White</h5>
            <i className="text-secondary">Chief executive officer</i>
            <p className="mt-2 text-center">
              Aliquam iure quaerat voluptatem praesentium possimus unde
              laudantium vel dolorum distinctio dire flow
            </p>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center my-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="images rounded border border-light border-5 rounded-circle overflow-hidden position-relative">
              <img src={Team2} className="img-fluid"></img>
              <div className="social-medias position-absolute w-100 h-100 d-flex align-items-center justify-content-evenly fs-4 text-light">
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <h5 className="mt-3 fw-bolder">Sarah Jhonson</h5>
            <i className="text-secondary">Product Manager</i>
            <p className="mt-2 text-center">
              Labore ipsam sit consequatur exercitationem rerum laboriosam
              laudantium aut quod dolores exercitationem ut
            </p>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center my-3"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="images rounded border border-light border-5 rounded-circle overflow-hidden position-relative">
              <img src={Team3} className="img-fluid"></img>
              <div className="social-medias position-absolute w-100 h-100 d-flex align-items-center justify-content-evenly fs-4 text-light">
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <h5 className="mt-3 fw-bolder">William Anderson</h5>
            <i className="text-secondary">CTO</i>
            <p className="mt-2 text-center">
              Illum minima ea autem doloremque ipsum quidem quas aspernatur modi
              ut praesentium vel tque sed facilis at qui
            </p>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center my-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="images rounded border border-light border-5 rounded-circle overflow-hidden position-relative">
              <img src={Team4} className="img-fluid"></img>
              <div className="social-medias position-absolute w-100 h-100 d-flex align-items-center justify-content-evenly fs-4 text-light">
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <h5 className="mt-3 fw-bolder">Amanda Jepson</h5>
            <i className="text-secondary">Accountant</i>
            <p className="mt-2 text-center">
              Magni voluptatem accusamus assumenda cum nisi aut qui dolorem
              voluptate sed et veniam quasi quam consectetur
            </p>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center my-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="images rounded border border-light border-5 rounded-circle overflow-hidden position-relative">
              <img src={Team5} className="img-fluid"></img>
              <div className="social-medias position-absolute w-100 h-100 d-flex align-items-center justify-content-evenly fs-4 text-light">
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <h5 className="mt-3 fw-bolder">Brian Doe</h5>
            <i className="text-secondary">Marketing</i>
            <p className="mt-2 text-center">
              Qui consequuntur quos accusamus magnam quo est molestiae eius
              laboriosam sunt doloribus quia impedit laborum velit
            </p>
          </div>
          <div
            className="col col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center my-3"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="images rounded border border-light border-5 rounded-circle overflow-hidden position-relative">
              <img src={Team6} className="img-fluid"></img>
              <div className="social-medias position-absolute w-100 h-100 d-flex align-items-center justify-content-evenly fs-4 text-light">
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <h5 className="mt-3 fw-bolder">Josepha Palas</h5>
            <i className="text-secondary">Operation</i>
            <p className="mt-2 text-center">
              Sint sint eveniet explicabo amet consequatur nesciunt error enim
              rerum earum et omnis fugit eligendi cupiditate vel
            </p>
          </div>
        </div>
      </div>
    </TeamSection>
  );
};
export default Team;
