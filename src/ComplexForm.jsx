import React, { useState } from 'react';

function HandleComplexForm(){

    let [obj, updateObj] = useState({fname: "", lname: ""}); 

    function submitForm(e){
        e.preventDefault();
    }
    
    function getFName(e){
        console.log(e.target.name);
        console.log(e.target.value);
        
        updateObj((lastValue)=>{
            console.log(lastValue);
            return({
                fname: e.target.value,
                lname: lastValue.lname
            })
        });
    }
    
    function getLName(e){
        console.log(e.target.name);
        console.log(e.target.value);

        updateObj((lastValue)=>{
            console.log(lastValue);
            return({
                fname: lastValue.fname,
                lname: e.target.value
            })
        });
    }

    return(
        <>
            <form onSubmit = {submitForm}>
                <h1>Hello, {obj.fname} {obj.lname} </h1>
                <input type="text" onChange = {getFName} name = "fName"  placeholder = "Enter First Name"/>
                <input type="text" onChange = {getLName} name = "lName"  placeholder = "Enter Last Name"/>
                <input type="submit" value = "Submit"/>
            </form>
        </>
    );
}

export {HandleComplexForm};