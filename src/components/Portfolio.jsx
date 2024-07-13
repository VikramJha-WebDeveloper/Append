import React from "react";
import PageTitles from "./PageTitles";

// import images
import Portfolio1 from "../../public/images/masonry-portfolio-1.jpg";
import Portfolio2 from "../../public/images/masonry-portfolio-2.jpg";
import Portfolio3 from "../../public/images/masonry-portfolio-3.jpg";
import Portfolio4 from "../../public/images/masonry-portfolio-4.jpg";
import Portfolio5 from "../../public/images/masonry-portfolio-5.jpg";
import Portfolio6 from "../../public/images/masonry-portfolio-6.jpg";
import Portfolio7 from "../../public/images/masonry-portfolio-7.jpg";
import Portfolio8 from "../../public/images/masonry-portfolio-8.jpg";
import Portfolio9 from "../../public/images/masonry-portfolio-9.jpg";

const Portfolio = () => {
  let title = "Portfolio";
  let description =
    "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <PageTitles title={title} description={description}></PageTitles>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-lg-1 col-md-2 border text-center">
            <button className="btn btn-danger rounded-pill">All</button>
          </div>
          <div className="col col-lg-1 col-md-2 border text-center">
            <button className="btn btn-danger rounded-pill">App</button>
          </div>
          <div className="col col-lg-1 col-md-2 border text-center">
            <button className="btn btn-danger rounded-pill">Card</button>
          </div>
          <div className="col col-lg-1 col-md-2 border text-center">
            <button className="btn btn-danger rounded-pill">Web</button>
          </div>
        </div>
        <div className="row align-content-start border border-5 border-dark">
          <div className="col col-12 col-lg-4 border border-danger">
            <img src={Portfolio1} className="img-fluid"></img>
          </div>
          <div className="col col-12 col-lg-4 border border-danger">
            <img src={Portfolio2} className="img-fluid"></img>
          </div>
          <div className="col col-12 col-lg-4 border border-danger">
            <img src={Portfolio3} className="img-fluid"></img>
          </div>
          <div className="col col-12 col-lg-4 border border-danger">
            <img src={Portfolio4} className="img-fluid"></img>
          </div>
          <div className="col col-12 col-lg-4 border border-danger">
            <img src={Portfolio5} className="img-fluid"></img>
          </div>
          <div className="col col-12 col-lg-4 border border-danger">
            <img src={Portfolio6} className="img-fluid"></img>
          </div>
          <div className="col col-12 col-lg-4 border border-danger">
            <img src={Portfolio7} className="img-fluid"></img>
          </div>
          <div className="col col-12 col-lg-4 border border-danger">
            <img src={Portfolio8} className="img-fluid"></img>
          </div>
          <div className="col col-12 col-lg-4 border border-danger">
            <img src={Portfolio9} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
