import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import FinancialRoad from "./information/FinancialRoad";
import EnvironmentalRoad from "./information/EnvironmentalRoad";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .info {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
  }

  .container {
    height: 90vh;
    width: 45vw;
    margin: 0 2%;
  }
  .heading {
    font-size: 1.6rem;
    margin-top: -185px;
    span {
      font-weight: bold;
    }
  }
  span {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .unselected {
    width: 50%;
    font-size: 1.5rem;
  }
  .infoContainer {
    width: 83%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    .container {
      height: 60vh;
      width: 95vw;
      margin: 0 2%;
    }
    .unselected {
      order: -1;
      width: 90%;
      font-size: 1.5rem;
      margin: 1rem 2% 2rem 2%;
      margin-top: 1rem;
    }
    .info {
      width: 100%;
    }
    .infoContainer {
      width: 98%;
      margin: 0 auto;
      padding-left: 0px;
    }
  }
`;

class RoadHome extends React.Component {
  state = {
    start: "",
    end: "",
    distance: null,
    time: null,
    myInterval: null
  };
  mapboxgl = window.mapboxgl;
  MapboxDirections = window.MapboxDirections;

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });

    //console.log(this.state.distance);
  };

  componentDidMount() {
    this.mapboxgl.accessToken =
      "pk.eyJ1IjoiaXNod2FudHNpbmdoIiwiYSI6ImNqdWUzZ2NjbjBndjA0ZW9od2t1aGpvNDIifQ.w1yxRYhbHY2Xw9aQ11R7zA";

    let map = new this.mapboxgl.Map({
      container: "mb",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.041, 28.5917], // starting position
      zoom: 16 // starting zoom
    });
    map.addControl(
      new this.MapboxDirections({
        accessToken: this.mapboxgl.accessToken
      }),
      "top-left"
    );
    map.addControl(new this.mapboxgl.NavigationControl());

    // INPUT REFRENCES
    const startInput = document.querySelector(".mapboxgl-ctrl-geocoder")
      .childNodes[1];
    startInput.id = "start";
    startInput.className = "browser-default";
    startInput.addEventListener("change", e => {
      this.handleChange(e);
    });

    const endInput = document.querySelectorAll(".mapboxgl-ctrl-geocoder")[1]
      .childNodes[1];
    endInput.id = "end";
    endInput.className = "browser-default";

    endInput.addEventListener("change", e => {
      this.handleChange(e);
    });
    // SOMETHING ELSE
    var that = this; //SO THAT I CAN ACCESS THIS.SETSTATE IN FUNCTION
    var checkExist = setInterval(function() {
      if (document.querySelector(".mapbox-directions-route-summary") != null) {
        const distance = document.querySelector(
          ".mapbox-directions-route-summary"
        ).childNodes[1].innerHTML;
        const time = document.querySelector(".mapbox-directions-route-summary")
          .childNodes[3].innerHTML;

        clearInterval(checkExist);
        that.setState({ distance: distance, time: time });
      }
    }, 200);

    // HHHHHHHHHHHHHHHHHHHHHHHHHH
    this.checkChange();
  }
  getCheck() {
    var that = this;
    if (
      document.querySelector(".mapbox-directions-route-summary") &&
      document.querySelector(".mapbox-directions-route-summary").childNodes[1]
        .innerHTML != this.state.distance
    )
      var check = setInterval(function() {
        const distance = document.querySelector(
          ".mapbox-directions-route-summary"
        ).childNodes[1].innerHTML;
        const time = document.querySelector(".mapbox-directions-route-summary")
          .childNodes[3].innerHTML;
        clearInterval(check);

        return that.setState({ distance: distance, time: time });
      }, 200);
  }
  checkChange = () => {
    var that = this;
    this.setState({
      myInterval: setInterval(function() {
        console.log("that");
        that.getCheck();
      }, 1000)
    });
  };

  componentWillUnmount() {
    clearInterval(this.state.myInterval);
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    if (this.state.start && this.state.end) {
      return (
        <StyledContainer>
          <div className="container" id="mb" />
          <div className="info">
            <div className="heading">
              Start Point:{" "}
              <span>
                {this.state.start.substring(0, this.state.start.indexOf(","))}
              </span>{" "}
              {`&`} End Point:{" "}
              <span>
                {this.state.end.substring(0, this.state.end.indexOf(","))}
              </span>
            </div>
            <br />
            <br />
            <br />
            <div className="infoContainer">
              <br />
              <br />
              <br />
              <FinancialRoad
                start={this.state.start}
                end={this.state.end}
                distance={this.state.distance}
                time={this.state.time}
              />

              <EnvironmentalRoad
                start={this.state.start}
                end={this.state.end}
                distance={this.state.distance}
                time={this.state.time}
              />
            </div>
          </div>
        </StyledContainer>
      );
    }
    return (
      <StyledContainer>
        <div className="container" id="mb" />
        <div className="unselected">Select Starting and Ending Location</div>
      </StyledContainer>
    );
  }
}

export default RoadHome;
