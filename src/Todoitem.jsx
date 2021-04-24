import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

function Todoitem(props){
    // console.log(props)
    return(
        <>
            <li> 
                <Tooltip title="Delete" aria-label="delete">
                    <i id = {props.index} className="fa fa-close" style={{color: 'red'}} onClick = {props.delete}/> 
                </Tooltip> {props.innerhtml}
            </li> 
        </>
    );
}

export {Todoitem};