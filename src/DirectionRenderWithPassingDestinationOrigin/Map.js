import React, { Component } from "react";
    import {
      withGoogleMap,
      withScriptjs,
      GoogleMap,
      DirectionsRenderer
    } from "react-google-maps";
    
    const { useEffect, useState } = React;
    
    function Map({ origin, destination }) {
      const [directions, setDirections] = useState(null);
    
      useEffect(() => {
        const google = window.google;
        const directionsService = new google.maps.DirectionsService();
    
        //const origin = { lat: 23.6238, lng: 90.5 };
        //const destination = { lat: 23.8103, lng: 90.4125 };
    
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              console.log(result);
              setDirections(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      }, []);
    
      const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap defaultCenter={{ lat: 23.8103, lng: 90.4125 }} defaultZoom={17}>
          <DirectionsRenderer directions={directions} />
        </GoogleMap>
      ));
    
      return (
        <div>
          <GoogleMapExample
            containerElement={<div style={{ height: `400px`, width: "500px" }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
    }
    
    export default Map;