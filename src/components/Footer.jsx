import React from "react";
import styled from "styled-components";

// CSS for footer section
const FooterSection = styled.div`
  /* background-color: #f4f4f4; */
  div.iBox {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;
    i {
      transition-duration: 0.3s;
    }
    &:hover {
      border-color: #dc3545 !important;
      i {
        color: #dc3545 !important;
      }
    }
  }

  li a,
  p {
    list-style: none;
    margin-top: 12px;
    color: rgb(155, 155, 155);
    text-decoration: none;
    display: block;
    transition-duration: 0.3s;
  }
  li a:hover {
    color: #dc3545;
  }

  div.copyRight {
    background-color: #585858 !important;
    p {
      color: rgb(155, 155, 155);
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection className="pb-5 bg-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 col-lg-5">
            <h2 className="fw-bolder">Append</h2>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="row">
              <div className="col col-2 col-sm-1 col-lg-2 col-xxl-1 p-0">
                <a href="#" className="d-block text-decoration-none mx-1">
                  <div className="border iBox rounded rounded-circle p-3 border-secondary">
                    <i className="fa-brands fa-x-twitter fs-5 text-secondary"></i>
                  </div>
                </a>
              </div>
              <div className="col col-2 col-sm-1 col-lg-2 col-xxl-1 p-0">
                <a href="#" className="d-block text-decoration-none mx-1">
                  <div className="border iBox rounded rounded-circle p-3 border-secondary">
                    <i className="fa-brands fa-facebook fs-5 text-secondary"></i>
                  </div>
                </a>
              </div>
              <div className="col col-2 col-sm-1 col-lg-2 col-xxl-1 p-0">
                <a href="#" className="d-block text-decoration-none mx-1">
                  <div className="border iBox rounded rounded-circle p-3 border-secondary">
                    <i className="fa-brands fa-instagram fs-5 text-secondary"></i>
                  </div>
                </a>
              </div>
              <div className="col col-2 col-sm-1 col-lg-2 col-xxl-1 p-0">
                <a href="#" className="d-block text-decoration-none mx-1">
                  <div className="border iBox rounded rounded-circle p-3 border-secondary">
                    <i className="fa-brands fa-linkedin fs-5 text-secondary"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-2">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="p-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col col-12 col-lg-2">
            <h5 className="fw-bold">Our Services</h5>
            <ul className="p-0">
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="col col-12 col-lg-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="m-0">A108 Adam Street</p>
            <p className="m-0">New York, NY 535022</p>
            <p className="m-0">United Setates</p>
            <p className="m-0 mt-3">
              <strong>Phone: </strong>
              <span>+1 65239876547</span>
            </p>
            <p className="m-0">
              <strong>Email: </strong>
              <span>info@example.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="copyRight container p-3 rounded">
        <div className="row">
          <div className="col col-12">
            <p className="text-center m-0 ">
              © Copyright Append All Rights Reserved
            </p>
            <p className="text-center m-0 mt-1" style={{ fontSize: "14px" }}>
              Designed by <span className="text-danger">BootstrapMade</span>
            </p>
          </div>
        </div>
      </div>
    </FooterSection>
  );
};
export default Footer;
