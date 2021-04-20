import React, { useState } from 'react';

function UseStateEasy(){
    let [obj, updateObj] = useState(()=>{
        return({
            firstName: '',
            lastName: '',
            email: ''
        });
    })

    function handleInput(e){
        console.log(e.target);

        // let {name,value} = e.target;
        // console.log(name);

        let name = e.target.name;

        updateObj((lastValuesOfObj)=>{
            console.log(lastValuesOfObj);
            return({
                ...lastValuesOfObj,
                // [name]: e.target.value               //[name] represent the dynamic key value
                [e.target.name]: e.target.value         //both ways are correct
            });
        });
    }

    function handelSubmit(e){
        e.preventDefault();
        alert('Form Submitted')
    }

    return(
        <>
            <form onSubmit = {handelSubmit}>
                <h1>Hello, {obj.firstName} {obj.lastName}</h1>
                <p style = {{fontWeight: 'bold'}}>Email: {obj.email}</p>
                <input type="text" onChange = {handleInput} name = "firstName" placeholder = "Enter Name"/>
                <input type="text" onChange = {handleInput} name = "lastName" placeholder = "Enter LastName" />
                <input type="text" onChange = {handleInput} name = "email" placeholder = "Enter Email"/>
                <input type="submit"/>
            </form>
        </>
    );
}

export {UseStateEasy};