import React from 'react'
import GooglePlaceAutocomplete from 'material-ui-autocomplete-google-places';

class App extends React.Component {
  // Results from clicking on location
  getCoords(lat, lng){
    console.log(lat, lng);
  }

  render() {
    return (
        <div>

        <GooglePlaceAutocomplete
        	// Function to return lat and lng
        	results={this.getCoords}
            componentRestrictions={{country: 'au'}}
            />
            </div>
    );
  }
}

export default App;