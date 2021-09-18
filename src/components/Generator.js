import React from 'react';
import { Button } from 'antd';
import {startLetters, alphabets} from '../lib/letters';

function Generator({ pushToList }) {
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
            <Button type="primary" onClick={genIC} style={{ backgroundColor: "#DB5375" }} >Generate NRIC</Button>
        </div>
    )
}

export default Generator
