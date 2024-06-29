import { React, useEffect } from "react";
import PageTitles from "./PageTitles";
import styled from "styled-components";
import AOS from "aos";

const PricingSection = styled.div`
  div.card {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: 0;
    .btn {
      width: 50%;
      transition-duration: 0.3s;
    }
    .btn:hover {
      background-color: #dc3545;
      color: white;
    }
    li::before {
      content: "✓ ";
      font-weight: bolder;
      color: #dc3545;
    }

    li.del::before {
      content: "× ";
      color: gray;
    }
  }
  /* .row:nth-child(2) .col:nth-child(2) .card:nth-child(1) {
    transform: scale(1.1);
    z-index: 1;
  } */
`;

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duratiom: 1000,
    });
  });
  let title = "Pricing";
  let description =
    "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";
  return (
    <PricingSection>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <PageTitles title={title} description={description}></PageTitles>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 my-3 my-lg-0 col-lg-4" data-aos="zoom-in">
            <div className="card">
              <div className="card-body d-flex flex-column align-items-center">
                <h3>Free Plan</h3>
                <div className="icon bg-danger p-3 rounded-circle">
                  <i class="fa-solid fa-box fs-1 text-light"></i>
                </div>
                <h3 className="fw-bolder text-danger">
                  $<span className="display-3 fw-bolder">0</span>
                  <span className="text-secondary fw-normal">/month</span>
                </h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Quam adipiscing vitae proin</li>
                <li className="list-group-item">Nec feugiat nisl pretium</li>
                <li className="list-group-item">
                  Nulla at volutpat diam uteera
                </li>
                <li className="del list-group-item">
                  <del className="text-secondary">
                    Pharetra massa massa ultricies
                  </del>
                </li>
                <li className="del list-group-item">
                  <del className="text-secondary">
                    Massa ultricies mi quis hendrerit
                  </del>
                </li>
              </ul>
              <div className="text-center py-3">
                <button className="btn border rounded-pill">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col col-12 my-3 my-lg-0 col-lg-4" data-aos="zoom-in">
            <div className="card border border-danger border-3">
              <div className="card-body d-flex flex-column align-items-center">
                <h3>Business Plan</h3>
                <div className="icon bg-danger p-3 rounded-circle">
                  <i class="fa-solid fa-rocket fs-1 text-light"></i>
                </div>
                <h3 className="fw-bolder text-danger">
                  $<span className="display-3 fw-bolder">29</span>
                  <span className="text-secondary fw-normal">/month</span>
                </h3>
              </div>
              <ul className="list-group list-group-flush border-0">
                <li className="list-group-item">Quam adipiscing vitae proin</li>
                <li className="list-group-item">Nec feugiat nisl pretium</li>
                <li className="list-group-item">
                  Nulla at volutpat diam uteera
                </li>
                <li className="list-group-item">
                  Pharetra massa massa ultricies
                </li>
                <li className="list-group-item">
                  Massa ultricies mi quis hendrerit
                </li>
              </ul>
              <div className="text-center py-3">
                <button className="btn border rounded-pill">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col col-12 my-3 my-lg-0 col-lg-4" data-aos="zoom-in">
            <div className="card">
              <div className="card-body d-flex flex-column align-items-center">
                <h3>Developer Plan</h3>
                <div className="icon bg-danger p-3 rounded-circle">
                  <i class="fa-solid fa-paper-plane fs-1 text-light"></i>
                </div>
                <h3 className="fw-bolder text-danger">
                  $<span className="display-3 fw-bolder">49</span>
                  <span className="text-secondary fw-normal">/month</span>
                </h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Quam adipiscing vitae proin</li>
                <li className="list-group-item">Nec feugiat nisl pretium</li>
                <li className="list-group-item">
                  Nulla at volutpat diam uteera
                </li>
                <li className="list-group-item">
                  Pharetra massa massa ultricies
                </li>
                <li className="list-group-item">
                  Massa ultricies mi quis hendrerit
                </li>
              </ul>
              <div className="text-center py-3">
                <button className="btn border rounded-pill">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-12 col-lg-4">
            <h2 className="display-6" data-aos="fade-up">
              Frequently asked
              <span className="d-block fw-bold">Questions</span>
            </h2>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
          </div>
          <div className="col col-12 col-lg-8">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    1. Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    2. Feugiat scelerisque various morbi enim nunc faucibus a
                    pallentesque
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    3. Dolor sit amet consectetur adipiscing elit pallentesque ?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                  >
                    4. Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla
                    ?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                  >
                    5. Tempus quam pallentesque nec nam aliquam sern et tortor
                    consequat ?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PricingSection>
  );
};
export default Pricing;
