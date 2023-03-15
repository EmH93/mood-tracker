import React from 'react';
import React, { useState, useEffect } from 'react';
import api from './apiCall';

function QuoteAPI() {
    let [responseData, setResponseData] = useState({
        "quote": "The present moment is the only time over which we have dominion.",
        "author": "Thích Nhất Hạnh",
        "category": "present moment"
      })
//Makes call to API every 10 seconds to replace quote on home screen    
      useEffect(() => {
        setInterval(() => {
        api.getData()
        .then((response)=>{
            setResponseData(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
      }, 10000);
      }, [])
    
      return (
          <div>
              <h2>{responseData.quote}</h2>
             <h3>{responseData.author}</h3>
          </div>
    );
  }
  
  export default QuoteAPI;