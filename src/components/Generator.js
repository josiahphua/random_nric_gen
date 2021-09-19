import React from 'react';
import { Button } from 'antd';

function Generator({ pushToList }) {
/**
 * TODO: Generation of NRIC starts here. 
 * ? The Function will run and create a new NRIC each time.
 */    
    
    return (
        <div>
            <Button type="primary" onClick={pushToList} style={{ backgroundColor: "#DB5375" }} >Generate NRIC</Button>
        </div>
    )
}

export default Generator
