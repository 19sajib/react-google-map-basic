import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Direction from './Direction'
import Directions from './test/Directions'
import PlaceAutocomplete from './Autocomplete/PlaceAutocomplete'
import LocationSearchInput from './Autocomplete/LocationSearchInput'
import ReactAutocomplete from './Autocomplete/ReactAutocomplete'
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <ReactAutocomplete
     />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
