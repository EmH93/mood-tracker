import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import { Button, Space, Tooltip} from 'antd';
import './ClearAllBtn.css'
function ClearButton (props){
  
  return (
   <div>

          {Object.keys(props.obj).length <= 0 ?
          <Space direction="vertical">
              <Space wrap>
                
                <Tooltip title="there's nothing to clear!">
                <Button id="clear-btn" onClick={props.onClick}  type="primary" icon={<DeleteTwoTone />} disabled>
                  Clear
                </Button>

                </Tooltip>
                
              
              </Space>
          
          
          </Space>
          : 
          <Space direction="vertical">
              <Space wrap>
                
                <Tooltip title="clear everything">
                <Button id="clear-btn" onClick={props.onClick}  type="primary" icon={<DeleteTwoTone />}>
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

