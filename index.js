import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import roses from "./images/choso.JPG";

const App = function(){
  return(
    <div>
      <h1>Welcome to React JS, Simridhi Sharma</h1>
    <p>Let's get familiar with JXS elements</p>
    <ul>
      <li>This is the first list item.</li>
      <li>This is the second list item.</li>
      <li>This is the third list item.</li>
    </ul>
    <h2 style={{ color: "magenta", textAlign:"center" }}>In-line styling</h2>
    <form>
      <label for="email" style={{color:"olive", padding:"0.5em 1em", fontWeight:"bolder"}}>Enter an e-mail</label>
      <input id="email" type="email" placeholder='Type your email...' style={{backgroundColor:"#AAA", padding:"0.5em", borderRadius:"0.5em"}}/>
      <button style={{marginLeft:"1em", backgroundColor:"darkgray", padding:"0.5em 1em", borderRadius:"10px", color:"whitesmoke"}}>submit</button>
    </form>

    <figure>
      <img src={roses} style={{width:"25%"}}/>
    </figure>


    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
