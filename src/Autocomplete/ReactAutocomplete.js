import React from 'react'
import Autocomplete from 'react-google-autocomplete';

const ReactAutocomplete = () => {
    return (

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
