import React, { useState, useEffect } from "react";
import MoodCard from "../../components/Card/Card";
import Form from "../../components/FormFolder/Form";
import {Row} from 'antd';
import getKeyByValue from "../../utils/getKeyHook";

function MoodDiary(){
    const [diary, setDiary] = useState(JSON.parse(localStorage.getItem("moodDiary")))

 
    

    return (
        <div>
             <Form />
            <Row gutter={3}>
               {Object.values(diary).map((item,index)=>{
                const key = getKeyByValue(diary,item)
                return <MoodCard title={item} date={key}/>

               })
               }
               
                
                
                
            </Row>
                
            
        </div>
       

    )
}
export default MoodDiary;
