import React, { useState } from 'react';
import Generator from './Generator';
import DisplayTable from './DisplayTable';

function Parent() {
    /**
     * TODO: Create states for NRIC storage
     * TODO: Pass said states to displayTable
     */

    const [nricList, setNricList] = useState([])

    const pushToList = async (nric) =>{
        // test in function to see if IC repeated itself.
        (nricList.indexOf(nric) > -1) 
        ? 
        alert("IC has already been generated before, Please generate IC again.") 
        : 
        await setNricList(prevState => {
            return [...prevState, nric]
        })
        
        console.log("i'm here",nricList)
    }

    return (
        <div>
            <h3>Click on button below to generate NRIC</h3>
            <Generator nricList={nricList} pushToList={pushToList} />
        </div>
    )
}

export default Parent
