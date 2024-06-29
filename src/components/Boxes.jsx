import React from "react";
import styled from "styled-components";

const Box = styled.div`
  i {
    font-size: 50px;
  }
  .card .img,
  .card i {
    transition-duration: 0.5s;
  }
  .card:hover .img {
    background-color: #dc3545 !important;
    i {
      color: white;
    }
  }
`;

const Boxes = ({ title, para, img }) => {
  return (
    <Box>
      <div className="card">
        <div className="card-body">
          <div className="img d-inline-block p-3 bg-danger-subtle rounded text-danger">
            <i className={img}></i>
          </div>
          <h5 className="card-title my-3">{title}</h5>
          <p className="card-text">{para}</p>
        </div>
      </div>
    </Box>
  );
};
export default Boxes;
