import React from "react";
import Pexels from "../../components/PexelsAPI/Pexels";
import ResourceText from '../../components/ResourceText/ResourceText';
import ResourceBtns from "../../components/ResourceBtns/ResourceBtns";


function Resources (){
    return (
        <div>
            <Pexels />
        <div>
            <ResourceText/>
            <ResourceBtns/>
        </div>
        </div>
    )
}

export default Resources;