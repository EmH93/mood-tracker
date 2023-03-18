import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import { Button, Space, Tooltip} from 'antd';
function ClearButton (props){
  
  return (
   <div>

  
          <Space direction="vertical">
              <Space wrap>
                <Tooltip title="clear everything">
                <Button id="clear-btn" onClick={props.onClick}  type="primary" icon={<DeleteTwoTone />}>
                  Clear
                </Button>

                </Tooltip>
                
              
              </Space>
          
          
          </Space>
    
      
   </div>
   
  )
  
};
export default ClearButton;

