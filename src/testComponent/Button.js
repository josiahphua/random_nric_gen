import React from 'react';

function Button({handleClick}) {

    return (
        <div>
            <button onClick={handleClick} >Click Me for pokemon name</button>
        </div>
    )
}

export default Button
