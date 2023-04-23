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
      <div className="app app-item">
        <div className="app-header app-item app-header-text ">Flight search example</div>
        <div className="app-search app-item search-item">
          <Locate handleChoice={setDestination} display={"Origin"}/>
          <Locate handleChoice={setOrigin} display={"Destination"}/>
        </div>
        <div className="app-search  app-item search-item">
          {origin && destination && <Flight origin={origin} destination={destination} setFlight={setFlight}/>
          }
        </div>
      </div>
    </>
  )

}

export default App;