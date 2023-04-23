import React, { useState } from "react";
import FlightSelect from "./FlightSelect";
import '../assets/app.css';

function Flight(props) {
  const [passengers, setPassengers] = useState(1);
  const [departureDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flightOptions, setFlightOptions] = useState([]);

  async function submit(event, props) {
    event.preventDefault();
    let returnDateParam = (returnDate ? "&returnDate=" + returnDate : "");
    await fetch(
      "http://localhost:8081/flightOffers?originLocationCode=" + props.origin +
      "&destinationLocationCode=" + props.destination +
      "&departureDate=" + departureDate +
      "&adults=" + passengers +
      returnDateParam
    )
      .then((response) => response.json())
      .then((json) => {
        setFlightOptions(json);
      });
  }

  return (
    <div>
      <div>
        <form className="search-detail" onSubmit={(e) => submit(e, props)}>
          <label className="app-text" htmlFor="passengers">Passengers:</label>
          <input onChange={(e) => setPassengers(e.target.value)}
                 type="number"
                 name="passengers"
                 min="1"
                 max="5"
                 required/><br></br>
          <label className="app-text" htmlFor="departure">Depart Date:</label>
          <input type="date"
                 onChange={(e) => setDepartDate(e.target.value)}
                 id="departure"
                 name="departure"
                 required/><br></br>
          <label className="app-text" htmlFor="return">Return Date:</label>
          <input type="date"
                 onChange={(e) => setReturnDate(e.target.value)}
                 id="return"
                 name="return"/><br></br>
          <input className="button" type="submit"/>
        </form>
      </div>
      <div>
        <FlightSelect flightOptions={flightOptions.data} setFlight={props.setFlight}/>
      </div>
    </div>
  );
};
export default Flight;