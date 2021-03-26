import React from 'react'
import { withScriptjs } from "react-google-maps";
import Map from './Map'

const Directions = () => {
    const MapLoader = withScriptjs(Map);
    const API = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API}`

  return (

<div className="App">
  <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDt9br636Un8x819x8DyqF-eIS1pgO-xMs"
      loadingElement={<div style={{ height: `100%` }} />}
  />
</div>
  );
}

export default Directions
