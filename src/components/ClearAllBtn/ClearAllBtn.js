import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip,Col, Row} from 'antd';
import './ClearAllBtn.css'
function ClearButton (props){
  
  return (
   <div>

          {Object.keys(props.obj).length <= 0 ?
           <Row justify="center">
           <Col className="gutter-row" xs={14} xl={24} > 
           <p className="form-label" >No entries yet</p>
           </Col> 
         </Row> 
          : 
          <Space direction="vertical">
              <Space wrap>
                
                <Tooltip title="clear everything">
                <Button id="clear-btn" onClick={props.onClick}  type="primary" icon={<DeleteOutlined/>}>
                  Clear
                </Button>

                </Tooltip>
                
              
              </Space>
          
          
          </Space>
}
    
      
   </div>
   
  )
  
};
export default ClearButton;

