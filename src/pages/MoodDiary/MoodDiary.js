import React, { useState, useEffect } from "react";
import MoodCard from "../../components/Card/Card";
import Form from "../../components/FormFolder/Form";
import {Row} from 'antd';

function MoodDiary(){
    const [mood, setMood] = useState("");
    const [title, setTitle] = useState("");
    const moods = localStorage.getItem("moodDiary")

    useEffect(()=>{
       
        
    })

    return (
        <div>
             <Form />
            <Row gutter={16}>
                <MoodCard/>
                
            </Row>
                
            
        </div>
       

    )
}
export default MoodDiary;
