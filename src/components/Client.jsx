import React from "react";
import styled from "styled-components";

// import logo images
import Myob from "../../public/images/myob.png";
import Belimo from "../../public/images/Belimo.png";
import LifeGroups from "../../public/images/life-groups.png";
import Grabyo from "../../public/images/grabyo.png";
import Citrus from "../../public/images/citrus.png";
import Trustly from "../../public/images/trustly.png";

// CSS for client section
const ClientSection = styled.div`
  img {
    width: 120px;
  }
`;

const Client = () => {
  return (
    <ClientSection>
      <div className="container py-3">
        <div className="row">
          <div className="col col-xl-2 col-md-3 col-sm-6 col-12 text-center py-4">
            <img src={Belimo} className="img-fluid"></img>
          </div>
          <div className="col col-xl-2 col-md-3 col-sm-6 col-12 text-center py-4">
            <img src={Myob} className="img-fluid"></img>
          </div>
          <div className="col col-xl-2 col-md-3 col-sm-6 col-12 text-center py-4">
            <img src={LifeGroups} className="img-fluid"></img>
          </div>
          <div className="col col-xl-2 col-md-3 col-sm-6 col-12 text-center py-4">
            <img src={Grabyo} className="img-fluid"></img>
          </div>
          <div className="col col-xl-2 col-md-3 col-sm-6 col-12 text-center py-4">
            <img src={Citrus} className="img-fluid"></img>
          </div>
          <div className="col col-xl-2 col-md-3 col-sm-6 col-12 text-center py-4">
            <img src={Trustly} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </ClientSection>
  );
};
export default Client;
