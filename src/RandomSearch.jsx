import React, { useState } from 'react';
import Img from './ImgCompo';

function RandomImg(){
    let [inputVal ,setInputVal]  = useState("");

    function inputEvent(e){
        inputVal = e.target.value;
        setInputVal(inputVal);
    }
    return(
        <>
        <div className = "main">
            <input type="text" placeholder = "Search AnyThing" onChange = {inputEvent} autoFocus = {true}/>
            <h2>You Result</h2>
            {inputVal !== ""? <Img searchThis = {inputVal}/>: <p>Type To Search :)</p> }
        </div>
        </>
    );
};

export default RandomImg;