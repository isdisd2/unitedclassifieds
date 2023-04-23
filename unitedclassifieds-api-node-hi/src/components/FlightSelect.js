import React from "react";

function FlightSelect(props) {
  let options;
  let options2;
  if (props?.flightOptions?.length > 0) {
    options = props.flightOptions.map((flight, index) =>
      <>
        <input type="radio" id={flight.id} name="select" value={index}/>
        <label htmlFor={flight.id}>
          {"Price: " + flight.price.grandTotal + " " + flight.price.currency}
        </label>
        <div>
          Available Seats: {flight.numberOfBookableSeats}
        </div>
        <div>
          One Way?: {flight.oneWay ? "YES" : "NO"}
        </div>
        <br></br>
      </>
    );
  } else {
    options2 = <div>No flight options available.</div>;
  }

  return (
    <div>
      {
        props?.flightOptions?.length > 0 ? (<>
          <div>Number of {props.flightOptions.length}</div>
          <form onChange={(e) => props.setFlight(props.flightOptions[e.target.value])}>
            {options}
          </form>
        </>) : (<div>{options2}</div>)
      }
    </div>
  );
}

export default FlightSelect;