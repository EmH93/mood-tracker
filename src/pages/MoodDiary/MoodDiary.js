import React, { useState, useEffect } from "react";
import MoodCard from "../../components/Card/Card";
import { Row} from 'antd';

function MoodDiary(){
    // const [mood, ]

    return (
        <Row gutter={16}>
            <MoodCard/>
            <MoodCard/>
            <MoodCard/>

        </Row>

    )
}
export default MoodDiary;
