import { React, useEffect } from "react";
import AOS from "aos";

// import images
import PoliticsImg from "../../public/images/postImg1.jpg";
import SportsImg from "../../public/images/postImg2.jpg";
import EntertainmentImg from "../../public/images/postImg3.jpg";
import MarkDower from "../../public/images/postImg4.jpg";
import John from "../../public/images/postImg5.jpg";
import MariaDoe from "../../public/images/postImg6.jpg";
import PoliticsImg2 from "../../public/images/postImg7.jpg";
import SportsImg2 from "../../public/images/postImg8.jpg";
import EntertainmentImg2 from "../../public/images/postImg9.jpg";
import Lisa from "../../public/images/postImg10.jpg";
import Mika from "../../public/images/postImg11.jpg";
import Denis from "../../public/images/postImg12.jpg";

const Posts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className="col col-12">
        <div className="row">
          <div
            className="col col-12 col-lg-6 col-xl-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card h-100 position-relative overflow-hidden">
              <img src={PoliticsImg} />
              <div className="card-body">
                <div className="text-secondary">Politics</div>
                <h5 className="fw-bold my-2">
                  Dolorum optio tempore voluptas dignissimos
                </h5>
                <div className="start-0 d-flex align-items-center mt-3">
                  <img
                    src={MarkDower}
                    className="rounded rounded-circle me-3"
                  />
                  <div>
                    <h6>Mark Dower</h6>
                    <div className="text-secondary">Jan 1, 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6 col-xl-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card h-100 position-relative overflow-hidden">
              <img src={SportsImg} />
              <div className="card-body">
                <div className="text-secondary">Sports</div>
                <h5 className="fw-bold my-2">
                  Nisi magni odit consequatur autem nulla dolorem
                </h5>
                <div className="start-0 d-flex align-items-center mt-3">
                  <img src={John} className="rounded rounded-circle me-3" />
                  <div>
                    <h6>Mr. John</h6>
                    <div className="text-secondary">Jun 5, 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6 col-xl-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="card h-100 position-relative overflow-hidden">
              <img src={EntertainmentImg} />
              <div className="card-body overflow-hidden">
                <div className="text-secondary">Entertainment</div>
                <h5 className="fw-bold my-2">
                  Possimus soluta ut id suscipit ea ut in quoquia et soluta
                </h5>
                <div className="start-0 d-flex align-items-center mt-3">
                  <img src={MariaDoe} className="rounded rounded-circle me-3" />
                  <div>
                    <h6>Maaria Doe</h6>
                    <div className="text-secondary">Jun 22, 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6 col-xl-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card h-100 position-relative overflow-hidden">
              <img src={EntertainmentImg2} />
              <div className="card-body">
                <div className="text-secondary">Entertainment</div>
                <h5 className="fw-bold my-2">
                  Non rem rerum nam cum quo minus olor distincti
                </h5>
                <div className="start-0 d-flex align-items-center mt-3">
                  <img src={Lisa} className="rounded rounded-circle me-3" />
                  <div>
                    <h6>Lisa Neymar</h6>
                    <div className="text-secondary">Jun 30, 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6 col-xl-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card h-100 position-relative overflow-hidden">
              <img src={PoliticsImg2} />
              <div className="card-body">
                <div className="text-secondary">Politics</div>
                <h5 className="fw-bold my-2">
                  Accusamus quaerat aliquam qui debitis facilis consequatur
                </h5>
                <div className="start-0 d-flex align-items-center mt-3">
                  <img src={Denis} className="rounded rounded-circle me-3" />
                  <div>
                    <h6>Denis Peterson</h6>
                    <div className="text-secondary">Jan 30, 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6 col-xl-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="card h-100 position-relative overflow-hidden">
              <img src={SportsImg2} />
              <div className="card-body">
                <div className="text-secondary">Sports</div>
                <h5 className="fw-bold my-2">
                  Distinctio provident quibusdam numquam aperiam aut
                </h5>
                <div className="start-0 d-flex align-items-center mt-3">
                  <img src={Mika} className="rounded rounded-circle me-3" />
                  <div>
                    <h6>Mika Lendon</h6>
                    <div className="text-secondary">Feb 14, 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Posts;
