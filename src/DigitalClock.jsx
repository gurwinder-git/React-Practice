import React, { useState } from 'react';

function DigitalClock(){
    let [cTime, updateTime] = useState(new Date().toLocaleTimeString());
    function updateFunc(){
        updateTime(cTime = new Date().toLocaleTimeString());
    }

    setInterval(updateFunc,1000);
    return(
        <>
            <h1>{cTime}</h1>
        </>
    );
}

export {DigitalClock};