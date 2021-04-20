import React, { useState } from 'react';

function GetTime(){
    let date = new Date().toLocaleTimeString();
    let [state, setState] = useState(date);

    function btnClick(){
        setState(date = new Date().toLocaleTimeString());
    }
    return(
        <>
            <h1 id = "count">{date}</h1>
            <button onClick = {btnClick}>CLICK ME</button>
         </>
    )
}

export {GetTime};