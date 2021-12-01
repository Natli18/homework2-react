import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Clock(props){
  return(
    <div><h2>Now: {props.date}</h2></div>
  );
}


 ReactDOM.render(
  
    <App />
 ,
  document.getElementById('root')
); 


reportWebVitals();
