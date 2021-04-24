import React, { useState } from 'react';
import {Todoitem} from './Todoitem';
import Tooltip from '@material-ui/core/Tooltip';


function ToDoUI(){
    let [toDo, updateToDo] = useState('');
    let [addedToDo, updateAddToDo] = useState([]);

   function inputToDo(e){
        updateToDo(e.target.value); 
        // console.log(toDo);                                              //not giving true value
    }

    function addBtn(e){
        if(toDo === ''){
            alert('Please enter TODO')
        }
        else{
            updateAddToDo((pre)=>{
                return [...pre, toDo];
            });
            updateToDo("");
        }
        // console.log(addedToDo);                                         //not giving true value
    }


    function deleteItem(e){
       
        // console.log( 'id is ',e.target.id);
        // let temp = addedToDo.splice(e.target.id, 1);
      
        updateAddToDo((pre)=>{
            return pre.filter((element, index) =>{
                return index != e.target.id;
                // console.log(index);
            })
        })
    }

    return(
    <>
        <div className = "todoDiv">
            <h1>ToDo List</h1>
            <div>
                <input id = "autoFocus" type="text" placeholder="Add ToDo" value = {toDo} onChange = {inputToDo}/>
                <Tooltip title="Add" aria-label="add">
                    <input type="button" value = "+" onClick = {addBtn}/>
                </Tooltip>
            </div>
            <ul>
                { addedToDo.map((item, i) => {
                     return <Todoitem 
                     key = {i} 
                     innerhtml = {item} 
                     index = {i}
                     delete = {deleteItem}
                     />
                })
                }
            </ul>
        </div>
    </>);
}

export default ToDoUI;