import React from "react";
import { Button, Space } from 'antd';
import './ResourceBtns.css';
import 'bootstrap/dist/css/bootstrap.css';

function ResourceBtns() {

    return(
        <div>
            <Space wrap>
                <Button className="buttonLink" href="https://blog.calm.com/blog/5-benefits-of-tracking-your-mood">Benefits of mood tracking</Button>
                <Button className="buttonLink" href="https://www.nhs.uk/nhs-services/mental-health-services/">NHS mental health services</Button>
                <Button className="buttonLink" href="https://www.headspace.com/science">Headspace mental health</Button>
            </Space>
        </div>
    )
}

export default ResourceBtns;