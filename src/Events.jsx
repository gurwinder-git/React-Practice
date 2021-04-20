import React, { useState } from 'react';

function BtnEvent(){
    let [innerTextBtn, updateInnerText] = useState('CLICK ME');
    let [css, updateCss] = useState({});
    
    function singleClick(){
        updateInnerText('Single Clicked!');
        document.querySelector('body').style.backgroundColor = 'green';
        updateCss({backgroundColor:'black', color: 'white'});
    }
    
    function doubleClick(){
        updateInnerText('Double clicked!');
        document.querySelector('body').style.backgroundColor = 'purple';
        updateCss({});
    }
    return(
        <>
        <button style = {css} onClick = {singleClick} onDoubleClick = {doubleClick}>{innerTextBtn}</button>
        </>
    );
}

export default BtnEvent;