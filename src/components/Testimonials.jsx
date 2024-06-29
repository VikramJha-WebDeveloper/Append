import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import images
import TestimonialImg1 from "../../public/images/testimonial_img1.jpg";
import TestimonialImg2 from "../../public/images/testimonial_img2.jpg";
import TestimonialImg3 from "../../public/images/testimonial_img3.jpg";
import TestimonialImg4 from "../../public/images/testimonial_img4.jpg";
import TestimonialImg5 from "../../public/images/testimonial_img5.jpg";

// css for Testimonial Section
const TestimonialSection = styled.div`
  background-color: #f4f4f4;
  div.slideSection {
    background-color: white;
  }
  div.carousel {
    /* min-height: 300px !important; */
    p {
      min-height: 100px;
    }
  }
`;

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <TestimonialSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h2 data-aos="fade-up">Testimonials</h2>
            <p data-aos="fade-up">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
          </div>

          <div
            className="slideSection col col-12 col-lg-6 bg-ligh mt-3 mt-lg-0 d-flex justify-content-center flex-column p-4"
            data-aos="fade-up"
          >
            <div
              id="carouselExample"
              className="carousel slide d-flex align-items-center"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex">
                    <img
                      src={TestimonialImg1}
                      className="d-block rounded rounded-circle me-3"
                      alt="image1"
                    />
                    <div>
                      <h5>Saul Goodman</h5>
                      <h6 className="text-secondary">CEO & Founder</h6>
                      <div>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, accusantium architecto. Voluptate, officia quas
                    blanditiis praesentium dolore excepturi. Nostrum dolore modi
                    veniam suscipit nulla explicabo accusamus itaque, maxime
                    exercitationem quod.
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="d-flex">
                    <img
                      src={TestimonialImg2}
                      className="d-block rounded rounded-circle me-3"
                      alt="image2"
                    />
                    <div>
                      <h5>Matt Brandon</h5>
                      <h6 className="text-secondary">Freelancer</h6>
                      <div>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi cupiditate qui repellendus obcaecati amet tenetur
                    suscipit neque maxime.
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="d-flex">
                    <img
                      src={TestimonialImg3}
                      className="d-block rounded rounded-circle me-3"
                      alt="image3"
                    />
                    <div>
                      <h5>Sara Wilsson</h5>
                      <h6 className="text-secondary">Designer</h6>
                      <div>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto corporis voluptatem deserunt nostrum dignissimos,
                    aliquid eius voluptate omnis. Praesentium adipisci sapiente
                    temporibus dolore, a maiores?
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="d-flex">
                    <img
                      src={TestimonialImg4}
                      className="d-block rounded rounded-circle me-3"
                      alt="image4"
                    />
                    <div>
                      <h5>John Larson</h5>
                      <h6 className="text-secondary">Entrepreneur</h6>
                      <div>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quas dolorem sed ut numquam, facilis blanditiis obcaecati
                    incidunt dignissimos tempora quo, laboriosam esse!
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="d-flex">
                    <img
                      src={TestimonialImg5}
                      className="d-block rounded rounded-circle me-3"
                      alt="image5"
                    />
                    <div>
                      <h5>Jena Karlis</h5>
                      <h6 className="text-secondary">Store Owner</h6>
                      <div>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam distinctio nisi similique aspernatur repellendus
                    iure nemo labore suscipit laborum? Laborum aliquam similique
                    temporibus!
                  </p>
                </div>
              </div>
              {/* <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </TestimonialSection>
  );
};
export default Testimonials;
