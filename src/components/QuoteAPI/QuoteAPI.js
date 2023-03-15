import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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