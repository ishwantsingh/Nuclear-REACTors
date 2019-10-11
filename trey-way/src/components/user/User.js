import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import gold from "../../images/gold.svg";
import silver from "../../images/silver.svg";

const StyledImg = styled.img`
  border-radius: 3%;
  width: 150px;
  height: 150px;
  margin-left: 10px;
`;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  .profile-pic-div {
    display: flex;
  }
  h5 {
    font-size: 2rem;
    font-weight: bold;
  }
  h4 {
    margin-left: 20px;
    margin-top: 110px;
  }
  span {
    font-size: 1.5rem;
  }
`;

function User(props) {
  if (!props.auth.uid) return <Redirect to="/login" />;
  return (
    <StyledDiv className="card-panel">
      <div className="profile-pic-div">
        <StyledImg
          src={props.auth.photoURL}
          alt="profile pic"
          className="profile-img"
        />{" "}
        <br />
        <br />
        <br />
        <h4> {props.auth.displayName}</h4>
      </div>
      <h3>Account Information</h3>

      <h5>
        Badges: <span>{props.profile.badges}</span>
        {/* <image src={gold} className="image" />
        <image src={silver} className="image" /> */}
        {console.log(props.profile.badges)}
      </h5>
      <h5>
        Carbon Footprint Reduced:{" "}
        <span>{props.profile.envSaved}kg of CO2/month</span>
        {console.log(props.profile.badges)}
      </h5>
      <h5>
        Money Saved: <span>{props.profile.finSaved} Rs/month</span>
        {console.log(props.profile.badges)}
      </h5>
    </StyledDiv>
  );
}

export default User;
