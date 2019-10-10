import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .containerAll {
    margin: 0 2%;
    .heading {
      font-size: 1.7rem;
    }
  }
`;

export default function About(props) {
  if (!props.auth.uid) return <Redirect to="/login" />;
  if (props.auth.uid) return <Redirect to="/" />;

  return (
    <StyledContainer>
      <div className="containerAll">
        <div className="heading">Direct carbon emissions</div>
        <div>
          Direct carbon emissions come from sources that are directly from the
          site that is producing a product.These emissions can also be referred
          to as scope 1 and scope 2 emissions. Scope 1 emissions are emissions
          that are directly emitted from the site of the process or service. An
          example for industry would be the emissions related to burning a fuel
          on site. On the individual level, emissions from personal vehicles or
          gas burning stoves would fall under scope 1. Scope 2 emissions are the
          other emissions related to purchased electricity, heat, and/or steam
          used on site .In the US, the EPA has broken down electricity emission
          factors by state.
        </div>
        <div className="heading">Indirect carbon emissions</div>
        <div>
          Indirect carbon emissions are emissions from sources upstream or
          downstream from the process being studied, also known as scope 3
          emissions. Examples of upstream, indirect carbon emissions may
          include: Transportation of materials/fuels Any energy used outside of
          the production facility Wastes produced outside of the production
          facility Examples of downstream, indirect carbon emissions may
          include: Any end-of-life process or treatments Product and waste
          transportation Emissions associated with selling the product
        </div>

        <div className="heading">Method for vehicles</div>
        <div>
          Use of Vehicles When it comes to the vehicles you drive, your carbon
          footprint depends on the miles per gallon or the mileage offered by
          your vehicle, and on the total number of miles that you drive per
          year. Now, if you are wondering how driving a vehicle can contribute
          towards your carbon footprint, it is due to the burning of fossil
          fuels such as petrol or diesel. You can calculate the gas emissions
          from vehicles in the following two ways. Collect all your gas receipts
          for the entire year and add them up. This will give you the gas
          consumed throughout the year, in gallons. Now, multiply this value
          with the standard rate of CO2 emissions for the fuel. It is 19.56 lbs
          for unleaded petrol and 22.48 lbs for diesel. Another way to calculate
          is to divide the number of miles traveled in the given year by the
          vehicle's mileage. This way you'll again obtain the number of gallons
          used. Multiply this with the standard CO2 emission rate for your fuel.
        </div>
      </div>
    </StyledContainer>
  );
}
