import React, { useState } from "react";
import TextInput from './TextInput';
import LocationSelect from './LocationSelect'

function Locate(props) {
  const [value, setValue] = useState('');
  const [locations, setLocations] = useState([]);
  const submit = async (e) => {
    e.preventDefault();
    await fetch(
      "http://localhost:8081/locations?keyword=" + value
    )
      .then((response) => response.json())
      .then((json) => {
        setLocations(json);
      });
  }
  return (
    <div>
      <span className="app-text">{props.display}</span>
      <TextInput onSubmit={submit} display={props.display} onChange={(e) => setValue(e.target.value)} value={value}/>
      <LocationSelect data={locations.data} handleChoice={props.handleChoice}/>
    </div>
  );
};
export default Locate;