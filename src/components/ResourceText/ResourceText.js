import React from "react";
import { motion } from 'framer-motion';
import './ResourceText.css';

function ResourceText(){

    return(
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} id='resourceTextDiv'>
            <h1 id='resourceTitle'>So, why is tracking your mood so important?</h1>
            <p id='resourceText'>Tracking your mood can help you to recognise patterns and changes in your moods, allowing you to better understand how you work and what you need to do to take better care of yourself.  For example, are you experiencing an extended period of stress? If so, it might be time to find some more support, or are you noticing a string of happy days? Perfect! Reflect on them, what is it that’s putting you in such a good state of mind?
                <br/>
                <br/>
                Check out the resources below for more information on mood tracking and further resources for support.
            </p>
        </motion.div>
    )
}

export default ResourceText;