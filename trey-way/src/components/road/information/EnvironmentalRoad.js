import React from "react";
import styled from "styled-components";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

const Styledcontainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 93%;
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
  card-text {
    font-size: 2rem;
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
`;
// 2.354 kg CO2 per litre petrol

// Diesel 2.7 kg Co2 per litre
// CNG 3kg CO2 per litre
// Each of the following activities add 1 kg of CO2 to your personal carbon footprint:

// Travel by public transportation (train or bus) a distance of 10 to 12 km (6.5 to 7 miles)
// Drive with your car a distance of 6 km or 3.75 miles (assuming 7.3 litres petrol per 100 km or 39 mpg)

const EnvironmentalRoad = props => {
  function carPrint() {
    const liters = parseFloat(props.distance) / 18.2;
    const footprint = liters * 2.354;
    return Math.round(footprint * 100) / 100;
  }
  function busPrint() {
    return Math.round(parseFloat(props.distance) * 0.027 * 10000) / 10000;
  }
  function cabPrint() {
    return Math.round(parseFloat(props.distance) * 0.072 * 10000) / 10000;
  }
  function autoPrint() {
    return Math.round(parseFloat(props.distance) * 0.035 * 10000) / 10000;
  }
  function bikePrint() {
    return Math.round(parseFloat(props.distance) * 0.028 * 10000) / 10000;
  }
  function metroPrint() {
    return Math.round(parseFloat(props.distance) * 0.02 * 10000) / 10000;
  }
  if (props.distance && props.time) {
    return (
      <Styledcontainer className="card-action">
        <div className="card-text">Environmental Information:</div>
        {/* <table className="striped highlight">
          <thead>
            <tr>
              <th>Transport</th>
              <th>Carbon Emmision</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Car</td>
              <td>{carPrint()} kg of CO2</td>
            </tr>
            <tr>
              <td>Bus</td>
              <td>{busPrint()} kg of CO2</td>
            </tr>
            <tr>
              <td>Cab</td>
              <td>{cabPrint()} kg of CO2</td>
            </tr>
            <tr>
              <td>Auto</td>
              <td>{autoPrint()} kg of CO2</td>
            </tr>
            <tr>
              <td>Bus</td>
              <td>{busPrint()} kg of CO2</td>
            </tr>
            <tr>
              <td>Metro</td>
              <td>{metroPrint()} kg of CO2</td>
            </tr>
          </tbody>
        </table> */}
        <VictoryChart domainPadding={80} height={280} width={500}>
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5, 6]}
            tickFormat={["Metro", "Car", "Bus", "Cab", "Auto", "Bike"]}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={x => `${x}kg`}
          />
          <VictoryBar
            data={[
              { quarter: "Metro", earnings: metroPrint() },
              { quarter: "Car", earnings: carPrint() },
              { quarter: "Bus", earnings: busPrint() },
              { quarter: "Cab", earnings: cabPrint() },
              { quarter: "Auto", earnings: autoPrint() },
              { quarter: "Bike", earnings: bikePrint() }
            ]}
            // data accessor for x values
            x="quarter"
            // data accessor for y values
            y="earnings"
          />
        </VictoryChart>
        <br />
        <br />
      </Styledcontainer>
    );
  } else {
    return (
      <Styledcontainer>
        <div className="no-data-div" />
      </Styledcontainer>
    );
  }
};

export default EnvironmentalRoad;
