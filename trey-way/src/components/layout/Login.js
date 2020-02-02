import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledLoginDiv = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export function Login(props) {
  if (props.auth.uid) return <Redirect to="/" />;
  if (!props.auth.uid) {
    return (
      <StyledLoginDiv>
        <h3>Hmm... seems like you haven't logged in.</h3>
        <h4>Click the Login Button in the top-right to Login with Google!</h4>
      </StyledLoginDiv>
    );
  } else if (props.status.requesting) {
    return (
      <div className="container center">
        <div class="progress">
          <div class="indeterminate" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authCompleted: state.auth.authCompleted,
    auth: state.firebase.auth,
    status: state.firestore.status
  };
};
export default connect(mapStateToProps)(Login);
