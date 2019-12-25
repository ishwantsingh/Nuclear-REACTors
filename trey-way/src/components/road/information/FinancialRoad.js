import React from "react";
import styled from "styled-components";

const Styledcontainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 0px;
  margin-right: 7%;
  margin-left: 6.1%;
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
    margin-right: 36%;
  }
  table {
    width: 100%;
    th {
      text-align: center;
    }
    td {
      width: 50%;
      text-align: center;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
    table {
      height: 70%;
    }
  }
`;
//average fuel efficiency = 18.2km/l and petrol price: 72.6rs/lt
// average price of petrol per km = 4rs

const FinancialRoad = props => {
  function cabFuel() {
    if (parseFloat(props.distance) === 0) {
      var price = 0;
      return Math.round(price);
    } else {
      price = parseFloat(props.distance) * 1.6093 * 7.5;
      //console.log(props.distance);
      return Math.round(65 + price);
    }
  }
  function autoFuel() {
    if (parseFloat(props.distance) === 0) {
      var price = 0;
      return Math.round(price);
    } else if (parseFloat(props.distance) <= 1.5) {
      var price = 25;
      return Math.round(price);
    } else {
      price = (parseFloat(props.distance) * 1.6093 - 1.5) * 9.5;
      //console.log(props.distance);
      return Math.round(25 + price);
    }
  }
  function bikeFuel() {
    if (parseFloat(props.distance) === 0) {
      var price = 0;
      return Math.round(price);
    } else {
      price = parseFloat(props.distance) * 1.6093 * 0.9125;
      //console.log(props.distance);
      return Math.round(price);
    }
  }
  function carFuel() {
    if (parseFloat(props.distance) === 0) {
      var price = 0;
      return Math.round(price);
    } else {
      price = parseFloat(props.distance) * 1.6093 * 7.3;
      //console.log(props.distance);
      return Math.round(price);
    }
  }
  function busCost() {
    if (parseFloat(props.distance) === 0) {
      var cost = 0 + " Rs";
    } else if (
      0 < parseFloat(props.distance) &&
      parseFloat(props.distance) < 1
    ) {
      cost = 5 + " Rs";
    } else if (
      1 < parseFloat(props.distance) &&
      parseFloat(props.distance) < 3
    ) {
      cost = 10 + " Rs";
    } else if (
      3 < parseFloat(props.distance) &&
      parseFloat(props.distance) < 10
    ) {
      cost = 15 + " Rs";
    } else if (
      10 < parseFloat(props.distance) &&
      parseFloat(props.distance) < 20
    ) {
      cost = 20 + " Rs";
    } else if (
      20 < parseFloat(props.distance) &&
      parseFloat(props.distance) < 30
    ) {
      cost = 30 + " Rs";
    } else if (
      30 < parseFloat(props.distance) &&
      parseFloat(props.distance) < 70
    ) {
      cost = 65 + " Rs";
    } else if (70 < parseFloat(props.distance)) {
      cost = "No Bus Found";
    }
    return cost;
  }
  if (props.distance && props.time) {
    return (
      <Styledcontainer className="card-action">
        <div className="card-text">Financial Information: </div>
        <table className="striped highlight">
          <thead>
            <tr>
              <th>Transport</th>
              <th>Expenses</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Cab</td>
              <td>{cabFuel()} Rs</td>
            </tr>

            <tr>
              <td>Bus</td>
              <td>{busCost()}</td>
            </tr>
            <tr>
              <td>Car</td>
              <td>{carFuel()} Rs</td>
            </tr>
            <tr>
              <td>Auto</td>
              <td>{autoFuel()}</td>
            </tr>
            <tr>
              <td>Bike</td>
              <td>{bikeFuel()}</td>
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

export default FinancialRoad;
