import React from 'react'
import Autocomplete, { usePlacesWidget }  from 'react-google-autocomplete';

const ReactAutocomplete = () => {
        const { ref: materialRef } = usePlacesWidget({
        apiKey: "API_Key",
        onPlaceSelected: (place) => console.log(place),
        inputAutocompleteValue: "country",
        options: {
          componentRestrictions: { country: "bd" }
        },
      });
    return (
    
    <TextField
    fullWidth  
    label="enter your location"
    color="secondary"
    variant="outlined"
    inputRef={materialRef}
    />
    <Autocomplete
    style={{width: '90%'}}
    onPlaceSelected={(place) => {
      console.log(place);
    }}
    types={['(regions)']}
    componentRestrictions={{country: "bd"}}
    />
    )
}

export default ReactAutocomplete
