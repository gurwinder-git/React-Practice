import React from 'react';
import axios from 'axios';

function Img(props){
    
    console.log(props);
    return(
        <>
            <div className = "resultDiv">
                <img src={`https://source.unsplash.com/400x300/?${props.searchThis}`} alt="Server Error"/>
            </div>
        </>
    );
};

export default Img;