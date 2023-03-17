import React from "react";
import { motion } from 'framer-motion';
import { Button, Space } from 'antd';
import './ResourceBtns.css';
import 'bootstrap/dist/css/bootstrap.css';

function ResourceBtns() {

    return(
        <motion.div>
            <Space wrap>
                <Button href="https://blog.calm.com/blog/5-benefits-of-tracking-your-mood">Benefits of mood tracking</Button>
                <Button href="https://www.nhs.uk/nhs-services/mental-health-services/">NHS mental health services</Button>
                <Button href="https://www.headspace.com/science">Headspace mental health</Button>
            </Space>
        </motion.div>
    )
}

export default ResourceBtns;