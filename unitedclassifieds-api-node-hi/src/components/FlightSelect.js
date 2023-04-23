import React from "react";

function FlightSelect(props) {
  let options;
  let options2;
  if (props?.flightOptions?.length > 0) {
    options = props.flightOptions.map((flight, index) =>
      <div className="flight-content-item flight-content-item-odd-even form-row">
        <label htmlFor={flight.id}>
          Price: <span className="bold">{flight.price.grandTotal}</span> {flight.price.currency}
        </label>
        <div>
          Available Seats: <span className="bold">{flight.numberOfBookableSeats}</span>
        </div>
        <div>
          One Way?: <span className="bold">{flight.oneWay ? "YES" : "NO"}</span>
        </div>
        <br></br>
      </div>
    );
  } else {
    options2 = <div className="app-text">No flight options available.</div>;
  }

  return (
    <div className="flight-content">
      {
        props?.flightOptions?.length > 0 ? (<>
          <div className="header">Number of flights: {props.flightOptions.length}</div>
          <br/>
          <form onChange={(e) => props.setFlight(props.flightOptions[e.target.value])}>
            {options}
          </form>
        </>) : (<div>{options2}</div>)
      }
    </div>
  );
}

export default FlightSelect;