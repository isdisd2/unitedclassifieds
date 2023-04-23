import React from "react";

function LocationSelect(props) {
  // console.log("props.data...");
  // console.log(props.data);
  let options;
  if (props?.data?.length > 0) {
    options = props.data.map((location) =>
      <div key={location.iataCode}>
        <input type="radio" id={location.iataCode} name="select" value={location.iataCode}/>
        <label className="radio-search" htmlFor={location.iataCode}>
          {location.name + ": " + location.iataCode}
        </label><br></br>
      </div>
    );
  }
  return (
    <div>
      {
        props?.data?.length &&
        <form onChange={(e) => props.handleChoice(e.target.value)}>
          {options}
        </form>
      }
    </div>
  );
}

export default LocationSelect;