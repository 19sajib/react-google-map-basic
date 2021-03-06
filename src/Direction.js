import React from 'react'
import { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} from 'react-google-maps';


class Direction extends React.Component {
    render () {
      const google = window.google
      console.log(google);
      const MapWithADirectionsRenderer = compose(
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDt9br636Un8x819x8DyqF-eIS1pgO-xMs&v=3.exp&libraries=geometry,drawing,places",
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `400px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap,
        lifecycle({
          componentDidMount() {
                const DirectionsService = new google.maps.DirectionsService();
          
                DirectionsService.route({
                  origin: new google.maps.LatLng(41.8507300, -87.6512600),
                  destination: new google.maps.LatLng(41.8525800, -87.6514100),
                  travelMode: google.maps.TravelMode.DRIVING,
                }, (result, status) => {
                  if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                      directions: result,
                    });
                  } else {
                    console.error(`error fetching directions ${result}`);
                  }
                });
              }
            })
          )(props =>
            <GoogleMap
              defaultZoom={2}
              defaultCenter={{lat: 41.8507300, lng: -87.6512600}}
            >
              {props.directions && <DirectionsRenderer directions={props.directions} />}
            </GoogleMap>
          );
          
          return (
              <div>
            <MapWithADirectionsRenderer />
            
        </div>
    )}
}

export default Direction
