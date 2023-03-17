import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import { Button, Space, Tooltip, Col, Row} from 'antd';
function ClearButton (){
  return (
   <div>

  <Col>
      <Row>
          <Space direction="vertical">
              <Space wrap>
                <Tooltip title="clear everything">
                <Button type="primary" icon={<DeleteTwoTone />}>
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

