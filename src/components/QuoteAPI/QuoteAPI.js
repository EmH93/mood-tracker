import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function QuoteAPI() {
    let [responseData, setResponseData] = useState({
        "quote": "The present moment is the only time over which we have dominion.",
        "author": "Thích Nhất Hạnh",
        "category": "present moment"
      })

//Makes call to API every 10 seconds to replace quote on home screen    
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
            .then(response => console.log(response))
            .catch(err => console.error(err));
      }, 8000);
    }, [])
    
      return (
        <motion.div key={responseData} animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} >
              <h2>{responseData.quote}</h2>
             <h3>{responseData.author}</h3>
          </motion.div>
    );
  }
  
  export default QuoteAPI;