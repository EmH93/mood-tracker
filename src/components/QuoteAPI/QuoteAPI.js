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

//Makes call to API every 8 seconds to replace quote on home screen    
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
                setResponseData(response)})
            .catch(err => console.error(err));
      }, 12000);
    }, [])
    
      return (
        <div className='container-fluid'>
        <div id="quoteDiv">
          <motion.div key={responseData} variants={variants} animate={'show'} initial="hide" >
                <h2>"{responseData.quote}"</h2>
                <h3>{responseData.author}</h3>
            </motion.div>
        </div>
      </div>
    );
  };

  export const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3
      }
    },
    hide: {
      y: -20,
      opacity: 0
    }
  };
  
  export default QuoteAPI;