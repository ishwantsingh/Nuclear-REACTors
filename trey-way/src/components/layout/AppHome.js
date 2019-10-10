import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .containerAll {
    margin: 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .heading {
      font-size: 1.7rem;
      font-weight: bold;
      text-align: center;
    }
    .button {
      text-decoration: none;
      font-size: 1.3em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid #009688;
      border-radius: 3px;
      color: #009688;
    }
    .links {
      display: flex;
      justify-content: center;
    }
  }
`;
export default function AppHome(props) {
  if (!props.auth.uid) return <Redirect to="/login" />;

  return (
    <StyledContainer>
      {/* <div className="containerAll">
        <div className="heading">Travelling Via ?</div>
        <div className="links">
          <Link to="/road" className="button">
            Road
          </Link>
          <Link to="/metro" className="button">
            Metro
          </Link>
        </div>
      </div> */}
    </StyledContainer>
  );
}
