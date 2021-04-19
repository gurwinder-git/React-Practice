import React, { useState } from 'react';

function StateHook(){
      //current updated    initial value
    let [state, setState] = useState(0);
    // console.log(state)
    function btnClick(){
        setState(state = state+1);
    }
    return(
        <>
            <h1 id = "count">{state}</h1>
            <button onClick = {btnClick}>CLICK ME</button>
         </>
    )
}


export {StateHook};