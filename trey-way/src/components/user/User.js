import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import gold from "../../images/gold.svg";
import silver from "../../images/silver.svg";

const StyledImg = styled.img`
  border-radius: 50%;
  width: 200px !important;
  height: 200px;
  margin: 0 auto;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
`;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  .badges {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile-pic-div {
    display: flex;
    justify-items: space-around;
    flex-direction: flex-start;
  }
  h5 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h4 {
    margin: 0;
  }
  span {
    font-size: 2.5rem;
    font-weight: normal;
  }
`;

function User(props) {
  if (!props.auth.uid) return <Redirect to="/login" />;
  return (
    <StyledDiv>
      <div className="profile-pic-div">
        <StyledImg
          src={props.auth.photoURL}
          alt="profile pic"
          className="profile-img"
        />
      </div>
      <span> {props.auth.displayName}</span>
      {/* <h3>Account Information</h3> */}

      <h5 className="badges">
        Badges {/* Badges: <span>{props.profile.badges}</span> */}
        <Image src={gold} className="image" alt="gold" />
        <Image src={silver} className="image" alt="gold" />
        {console.log(props.profile.badges)}
      </h5>
      <h5>
        Carbon Footprint Reduced:{" "}
        <span> {props.profile.envSaved}kg of CO2/month</span>
        {console.log(props.profile.badges)}
      </h5>
      <h5>
        Money Saved: <span> {props.profile.finSaved} Rs/month</span>
        {console.log(props.profile.badges)}
      </h5>
    </StyledDiv>
  );
}

export default User;
