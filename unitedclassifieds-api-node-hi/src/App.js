import React, { useState } from 'react'
import Locate from './components/Locate';
import Flight from './components/Flight';
import './assets/app.css';

function App() {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [flight, setFlight] = useState();

  return (
    <>
      <div>
        <h1 className="app-header app-header-text">Flight search example</h1>
        <div className="app-search"><Locate handleChoice={setDestination} display={"Origin"}/>
          <Locate handleChoice={setOrigin} display={"Destination"}/></div>
        {origin && destination &&
          <Flight origin={origin} destination={destination} setFlight={setFlight}/>
        }
      </div>
    </>
  )

}

export default App;