import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import nature from "../../images/nature.svg";
import nature2 from "../../images/nature2.svg";
import bike from "../../images/road.svg";
import map from "../../images/map.svg";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px auto;
  .containerAll {
    margin: 0 2%;
    text-align: center;
    .heading {
      font-size: 1.7rem;
    }
    .info-div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      font-size: 2.8rem;
      .sub-info {
        width: 25%;
        height: 25%;
        p {
          font-size: 2rem;
        }
      }
    }
    .links {
      display: flex;
      justify-content: center;
    }
    .sub-heading {
      font-size: 1.2rem;
    }
    .transport-method {
      font-size: 1.4rem;
      font-weight: bold;
      margin: 20px auto;
      text-align: center;
    }
    .button {
      text-decoration: none;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid #009688;
      border-radius: 3px;
      color: #009688;
    }
  }
`;

const Image = styled.img`
  width: 30%;
  height: 30%;
`;

function Dashboard(props) {
  if (!props.auth.uid) return <Redirect to="/login" />;

  return (
    <StyledContainer>
      <div className="containerAll">
        <div className="info-div">
          <div className="sub-info">
            <div>Wanna know the best way to Travel?</div>
            <p>
              Select the mode of travel below to know the cleanest and the most
              cost-efficient mode of travel
            </p>
          </div>
          <Image src={nature2} alt="nature" />
        </div>
        <br />
        <br />
        <div className="transport-method ">
          <div className="links">
            <Link to="/road" className="button">
              Road
            </Link>
            <Link to="/metro" className="button">
              Metro
            </Link>
          </div>
          {/* <Link className="button" to="/apphome">
            {" "}
            Know your Carbon footprint
          </Link> */}
        </div>
      </div>
    </StyledContainer>
  );
}

export default Dashboard;
