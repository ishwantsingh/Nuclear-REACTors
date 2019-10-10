import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Financial from "./information/Financial";
import Environmental from "./information/Environmental";
import Dropdown from "./Dropdown";

import getInfo from "../../state/actions/actionCreators";

import metro from "../../images/metro.jpg";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  .containerAll {
    margin: 0 2%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .infoComponent {
      width: 68%;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .input-sect {
      margin: 0 5%;
    }
  }
`;
class MetroHome extends React.Component {
  state = {
    start: "",
    end: ""
  };

  startRef = React.createRef();
  endRef = React.createRef();

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log("boo");
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getInfo(this.state.start, this.state.end);
    this.setState({
      start: "",
      end: ""
    });
    this.startRef.current.value = "";
    this.endRef.current.value = "";
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <StyledContainer>
        <div className="containerAll">
          <Form onSubmit={this.handleSubmit}>
            <div className="form-section">
              <div className="input-sect">
                <h5>Select Starting Point</h5>
                <div className="input-field">
                  <label htmlFor="type">
                    <input
                      ref={this.startRef}
                      list="types"
                      name="myType"
                      type="text"
                      id="start"
                      placeholder="Select Station:"
                      onChange={this.handleChange}
                    />
                  </label>
                  <Dropdown />
                </div>
              </div>
              <div className="input-sect">
                <h5>Select Destination</h5>
                <div className="input-field">
                  <label htmlFor="type">
                    <input
                      ref={this.endRef}
                      list="types"
                      name="myType"
                      type="text"
                      id="end"
                      placeholder="Select Station:"
                      onChange={this.handleChange}
                    />
                  </label>
                  <Dropdown />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="input-field">
              <button className="waves-effect btn">Show Info</button>
            </div>
          </Form>
          <br />
          <br />
          <div className="infoComponent">
            {" "}
            <Financial />
            <br />
            <br />
            <Environmental />
          </div>
        </div>
      </StyledContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInfo: (start, end) => dispatch(getInfo(start, end))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MetroHome);
