import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.css';
import './HomeJumbo.css';

function Jumbotron() {
    return (
    <div className="container-fluid" id="jumboWrapper">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <div className="jumbotron">
        <h1 className="display-4" id='homeTitle'>Track your mood</h1>
        <p className="lead" id='subHeadingHome'>Reflect, recognise and repair</p>
        <Link to="/MoodDiary">
        <button className="btn btn-dark btn-lg" id='getStartedBtn'>Get started</button>
        </Link>
      </div> 
      </motion.div>
    </div>
    );
};

export default Jumbotron;