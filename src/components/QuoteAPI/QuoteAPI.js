import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

function QuoteAPI() {
    const options = {
      method: 'GET',
      url: 'https://metaapi-mindfulness-quotes.p.rapidapi.com/v1/mindfulness',
      headers: {
        'X-RapidAPI-Key': '78e5609727msh1ba34c0ebc625dcp184ea7jsn9d56a3cb8dc5',
        'X-RapidAPI-Host': 'metaapi-mindfulness-quotes.p.rapidapi.com'
      }
    };
    
    useEffect(() => {
        setInterval(() => {
        axios.request(options).then(function (response) {
          console.log(response.data.quote);
        }).catch(function (error) {
          console.error(error);
        });
      }, 10000);
      }, []);
  
    return (
      <div className="App">
        <h1>Text test</h1>
      </div>
    );
  }
  
  export default QuoteAPI;