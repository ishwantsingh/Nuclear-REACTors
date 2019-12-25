import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { logout } from "../../state/actions/authAction.js";

const StyledHeadDiv = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  justify-content: center;
  margin: 0 3% 3px 0;
  .links {
    width: 25%;
  }
  .link-container {
    display: flex;
    justify-content: space-around;
    width: 60%;
    flex-grow: 1;
    margin-right: 0;
    align-items: center;
  }
  .link-user {
    border-radius: 50%;
    height: 3.1rem;
    width: 3.1rem;
    margin-right: 2rem;
  }
`;

const StyledUserImg = styled.img`
  border-radius: 50%;
  height: 3.1rem;
  width: 3.1rem;
`;

const StyledLogoutBut = styled.button`
  width: 8rem;
  background-color: white;
  color: #009688;
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.92rem;
`;
// const StyledBut = styled.button`
//   width: 100%;
//   background-color: white;
//   color: #009688;
//   border-radius: 3px;
//   font-weight: bold;
//   font-size: 0.92rem;
//   padding: 0 1px;
// `;

function SignedInHeadbarLinks(props) {
  return (
    <StyledHeadDiv>
      <NavLink to="/user" className="link-user">
        <StyledUserImg
          src={props.auth.photoURL}
          alt="profile pic"
          className="profile-img"
        />
      </NavLink>
      {/* <div className="link-container"> */}
      <StyledLogoutBut onClick={props.logout} className="waves-effect btn">
        Log Out
      </StyledLogoutBut>
      {/* <Link to="/metro" className="links">
          <StyledBut className="waves-effect btn"> Calculate </StyledBut>
        </Link> */}
      {/* <Link to="/about" className="links">
          <StyledBut className="waves-effect btn"> About </StyledBut>
        </Link> */}
      {/* </div> */}
    </StyledHeadDiv>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(null, mapDispatchToProps)(SignedInHeadbarLinks);
