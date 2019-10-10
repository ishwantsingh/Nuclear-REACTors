import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { logout } from "../../state/actions/authAction";
import { login } from "../../state/actions/authAction";

import SignedInHeadbarLinks from "./SignedInHeadbarLinks";
import SignedOutLinks from "./SignedOutLinks";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  margin-bottom: 15px;
  height: 53px;
  background-color: #009688;
  a {
    margin-right: 3%;
    margin-left: 5.8%;
    text-decoration: none;
  }
  .logo {
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .links {
    color: white;
    font-size: 1.04rem;
    font-weight: bold;
    margin-left: 2.5%;
  }
  .link-container {
    display: flex;
    flex-direction: row-reverse;
    width: 30%;
    flex-grow: 1;
    margin-right: 0;
  }
`;

const Headbar = props => {
  const { auth } = props;
  const links = auth.uid ? (
    <SignedInHeadbarLinks auth={props.auth} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <StyledDiv>
      <Link to="/" className="logo">
        Tre-way
      </Link>

      <div className="link-container">{links}</div>
    </StyledDiv>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: () => dispatch(login())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Headbar);
