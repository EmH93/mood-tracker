import React from 'react';
import { Avatar, Card} from 'antd';
const { Meta } = Card;


function MoodCard(){
  return(
    <>
    <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
       
      >
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  )
};

export default MoodCard;
