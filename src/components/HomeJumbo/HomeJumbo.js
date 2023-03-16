import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './HomeJumbo.css';

function Jumbotron() {
    return (
    <div className="container-fluid">
        <div className="jumbotron">
        <h1 className="display-4">Track your mood</h1>
        <p className="lead">Reflect, recognise and repair</p>
        <hr className="my-4"/>
        <Link to="/MoodDiary">
        <button className="btn btn-primary btn-lg">Get started</button>
        </Link>
      </div> 
    </div>
    );
};

export default Jumbotron;