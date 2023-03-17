import React from 'react';
import { Avatar, Card, Col} from 'antd';
import './Card.css'
const { Meta } = Card;


function MoodCard(props){
  return(
 

   
     <Col span={4}>
       <Card  className='card' title={props.date} bordered={true}>
       <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
          title={props.title}
          description="This is the description"
        />
       </Card>
     </Col>
    
  
  )
};

export default MoodCard;
