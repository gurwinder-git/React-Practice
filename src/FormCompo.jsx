import React, { useState } from 'react';

function Form(){

    let [getName, setName] = useState("");
    function getVal(e){
        // console.log(e.target.value);
        setName(e.target.value);
    }

    let [userName, updateUserName] = useState("");
    function clicked(){
        if(getName === ""){
            updateUserName("You Nothing Enter")
        }
        else{
            updateUserName(getName);
            setName("");
        }
    }
    return(
        <>
            <div>
                <h1>Hello, {userName}</h1>
                <input type="text" onChange = {getVal} value = {getName} placeholder = "Enter Your Name"/>
                <button onClick = {clicked}>Submit</button>
            </div>
        </>
    );
}

export {Form};