import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const StyledImg = styled.img`
  border-radius: 3%;
  width: 80px;
  height: 80px;
  margin-left: 10px;
`;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .profile-pic-div {
    display: flex;
  }
  h5 {
    font-size: 2rem;
    font-weight: bold;
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
        <h5>Profile Picture:</h5>
        <StyledImg
          src={props.auth.photoURL}
          alt="profile pic"
          className="profile-img"
        />
      </div>
      <h5>
        Username: <span>{props.auth.displayName}</span>
      </h5>

      <h5>
        Badges: <span>{props.profile.badges}</span>
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
