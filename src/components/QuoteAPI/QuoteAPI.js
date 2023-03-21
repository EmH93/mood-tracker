import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.css';
import './Quote.css';

function QuoteAPI() {
    let [responseData, setResponseData] = useState({
        "quote": "The present moment is the only time over which we have dominion.",
        "author": "Thích Nhất Hạnh",
        "category": "present moment"
      })

//Makes call to API every 12 seconds to replace quote on home screen    
     useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ea79e815demsh39afca19d7b82b7p11e276jsndfd1a142b12b',
                'X-RapidAPI-Host': 'metaapi-mindfulness-quotes.p.rapidapi.com'
            }
        };
        setInterval(() => {
            fetch('https://metaapi-mindfulness-quotes.p.rapidapi.com/v1/mindfulness', options)
            .then(response => response.json())
            .then(function (response) {
                console.log("rendered");
                setResponseData(response)})
            .catch(err => console.error(err));
      }, 12000);
    }, [])
    
      return (
        <div id="quoteWrapper" className='container-fluid'>
        <div id="quoteDiv">
                <motion.h2 initial={{ opacity: 0, y: 50}} animate={{ opacity: 1, y: 0}} key={responseData.quote} id='quoteText'>"{responseData.quote}"</motion.h2>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} key={responseData.author} id='authorText'>{responseData.author}</motion.h3>
            </div>
      </div>
    );
  };
  
  export default QuoteAPI;