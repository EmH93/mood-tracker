import React from "react";
import Jumbotron from "../../components/HomeJumbo/HomeJumbo";
import QuoteAPI from "../../components/QuoteAPI/QuoteAPI";


function Home(){
    return (
        <div>
            <Jumbotron/>
            <QuoteAPI/>
        </div>
    )
}

export default Home;

