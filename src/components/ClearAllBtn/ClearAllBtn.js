import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import { Button, Space, Tooltip, Col, Row} from 'antd';
function ClearButton (props){
  
  return (
   <div>

  <Col>
      <Row>
          <Space direction="vertical">
              <Space wrap>
                <Tooltip title="clear everything">
                <Button onClick={props.onClick}  type="primary" icon={<DeleteTwoTone />}>
                  Clear
                </Button>

                </Tooltip>
                
              
              </Space>
          
          
          </Space>
      </Row>
    </Col>
      
   </div>
   
  )
  
};
export default ClearButton;

