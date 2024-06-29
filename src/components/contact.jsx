import { React, useEffect } from "react";
import PageTitles from "./PageTitles";
import styled from "styled-components";
import AOS from "aos";

// CSS for Contact section
const ContactSection = styled.div`
  div.box {
    background-color: #f4f4f4;
  }
`;

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  let title = "Contact";
  let description =
    "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";
  return (
    <ContactSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <PageTitles title={title} description={description}></PageTitles>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-lg-6">
            <div className="row">
              <div className="col col-12 col-md-6 p-3" data-aos="fade-up">
                <div className="box p-3">
                  <div>
                    <i class="fa-solid fa-location-dot fs-1 text-danger m-2 mb-3"></i>
                  </div>
                  <h5 className="fw-bolder">Address</h5>
                  <div>A 108 Adam Street</div>
                  <div>New York, NY 535022</div>
                </div>
              </div>
              <div className="col col-12 col-md-6 p-3" data-aos="fade-up">
                <div className="box p-3">
                  <div>
                    <i class="fa-solid fa-phone fs-1 text-danger m-2 mb-3"></i>
                  </div>
                  <h5 className="fw-bolder">Call Us</h5>
                  <div>+1 5589 55488 55</div>
                  <div>+1 6678 254445 41</div>
                </div>
              </div>
              <div className="col col-12 col-md-6 p-3" data-aos="fade-up">
                <div className="box p-3">
                  <div>
                    <i class="fa-solid fa-envelope fs-1 text-danger m-2 mb-3"></i>
                  </div>
                  <h5 className="fw-bolder">Email Us</h5>
                  <div>info@example.com</div>
                  <div>contact@example.com</div>
                </div>
              </div>
              <div className="col col-12 col-md-6 p-3" data-aos="fade-up">
                <div className="box p-3">
                  <div>
                    <i class="fa-solid fa-clock fs-1 text-danger m-2 mb-3"></i>
                  </div>
                  <h5 className="fw-bolder">Open Hours</h5>
                  <div>Monday - Friday</div>
                  <div>9:00AM - 5:00PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-6 p-3 form-box" data-aos="fade-up">
            <div className="box p-3 h-100">
              <form>
                <div className="row">
                  <div className="col col-12 col-md-6 my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="col col-12 col-md-6 my-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    ></input>
                  </div>
                  <div className="col col-12 my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    ></input>
                  </div>
                  <div className="col col-12 my-2">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col col-12 mt-4 d-flex justify-content-center">
                    <button type="submit" className="btn btn-danger">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};
export default Contact;
