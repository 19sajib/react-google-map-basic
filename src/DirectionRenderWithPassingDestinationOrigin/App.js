import React, { Component } from "react";
import { render } from "react-dom";
import { withScriptjs } from "react-google-maps";
import Map from "./Map";
import "./style.css";

const { useState } = React;
const App = () => {
  const MapLoader = withScriptjs(Map);
  const [origin, setOrigin] = useState({ lat: 23.6238, lng: 90.5 });
  const [destination, setDestination] = useState({
    lat: 23.8103,
    lng: 90.4125
  });

  return (
    <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
      loadingElement={<div style={{ height: `100%` }} />}
      origin={origin}
      destination={destination}
    />
  );
};

render(<App />, document.getElementById("root"));