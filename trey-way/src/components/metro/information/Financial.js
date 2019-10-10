import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Styledcontainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  .card-text {
    text-align: center;
  }
  div {
    font-size: 1.6rem;
    margin-bottom: 30px;
    span {
      font-weight: bold;
    }
  }
  font-size: 1.3rem;
  text-align: left;
  .no-data-div {
    text-align: center;
  }
  table {
    width: 100%;
    th {
      text-align: center;
    }
    td {
      text-align: center;
    }
  }
`;
//average fuel efficiency = 18.2km/l and petrol price: 72.6rs/lt
// average price of petrol per km = 4rs

const Financial = props => {
  function carFuel() {
    if (props.difference === 0) {
      let cost = 0;
      return Math.round(cost);
    } else {
      let cost = props.distance * 7.5;
      return Math.round(65 + cost);
    }
  }
  function metroCost() {
    if (props.difference === 1) {
      var cost = 10;
    } else if (props.difference === 0) {
      cost = 0;
    } else if (props.difference === 2 || props.difference === 3) {
      cost = 20;
    } else if (
      props.difference === 4 ||
      props.difference === 5 ||
      props.difference === 6 ||
      props.difference === 7 ||
      props.difference === 8 ||
      props.difference === 9 ||
      props.difference === 10
    ) {
      cost = 30;
    } else if (props.difference >= 11) {
      cost = 40;
    }
    return Math.round(cost);
  }
  if (props.start && props.end) {
    return (
      <Styledcontainer className="card-action">
        <div className="card-text">
          Start Station: <span>{props.start}</span> {`&`} End Station:
          <span>{props.end}</span>{" "}
        </div>
        <div> Financial Information:</div>
        <table className=" striped">
          <thead>
            <tr>
              <th>Transport</th>
              <th>Expenses</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Car</td>
              <td>{carFuel()} Rs</td>
            </tr>
            <tr>
              <td>Bus</td>
              <td>{metroCost() / 2} Rs</td>
            </tr>
            <tr>
              <td>Metro</td>
              <td>{metroCost()} Rs</td>
            </tr>
          </tbody>
        </table>
      </Styledcontainer>
    );
  } else {
    return (
      <Styledcontainer>
        <div className="no-data-div">Please Select Stations</div>
      </Styledcontainer>
    );
  }
};
function mapStateToProps(state) {
  return {
    distance: state.reducers.distance,
    start: state.reducers.start,
    end: state.reducers.end,
    difference: Math.abs(state.reducers.startIndex - state.reducers.endIndex)
  };
}

export default connect(
  mapStateToProps,
  null
)(Financial);
