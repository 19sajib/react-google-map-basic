import React from 'react'
import { LoadScript } from "@react-google-maps/api";
import Map from "./Map";

const lib = ["places"];
const key = ""; // PUT GMAP API KEY HERE
class App extends React.Component {
  render() {
    return (
      <LoadScript googleMapsApiKey={key} libraries={lib}>
        <Map />
      </LoadScript>
    );
  }
}


export default App
