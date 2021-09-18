import React from 'react';
import { Button } from 'antd';
import {startLetters, alphabets} from '../lib/letters';

function Generator({ nricList, pushToList }) {
/**
 * TODO: Generation of NRIC starts here. 
 * ? The Function will run and create a new NRIC each time.
 */    


    const genIC = () => {
        let newIC = [`${startLetters[Math.floor(Math.random()*4)]}`, `${alphabets[Math.floor(Math.random()*4)]}`]
        for (let i = 0; i < 7; i++) {
            newIC.splice(1,0,Math.floor(Math.random()*10))
        }
        console.log(newIC)
        let stringIC = newIC.join("")
        console.log(stringIC)

        stringIC.length === 9 
        ? 
        pushToList(stringIC) 
        : 
        alert("Something went wrong please generate IC again.")
    }
    
    return (
        <div>
            The generator button will be here.
            <Button type="primary" onClick={genIC} >Generate NRIC</Button>
        </div>
    )
}

export default Generator
