import React, { useEffect, useState } from 'react'

function Changetitle(){
    let [num, setnum] = useState(0);

    useEffect(()=>{
        document.title =  `clicked ${num} times`
    }, [num]);

    function increment(){
        setnum((pre)=>{
            return (pre+1);
        })
    }

    return(
        <>
            <button onClick = {increment}>Click me {num}</button>
        </>
    )
}

export {Changetitle};