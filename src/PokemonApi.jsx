import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Options from './OptionComp';

function PokApi(){
    let [val, setVal] = useState(1);
    let [obj, setObj] = useState({
        name: '',
        weight: ''
    });

    var [arr, setArr] = useState([]);
    
    useEffect(()=>{
        async function getRequest(){
            try{
                let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`);
                console.log(res);
                setObj(()=>{
                    return {
                        name : res.data.name,
                        weight: res.data.weight
                    }
                })
            }
            catch(err){
                setObj(()=>{
                    return {
                        name : 'Error Not Found',
                        weight: 'Error Not Found'
                    }
                })
            }
        }
        getRequest();
    }, [val])

    useEffect(()=>{
        async function getTotalPokemon(){
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
            
            let i = 0;
            
            while(i <= res.data.count){
                setArr((pre)=>{
                    return ([...pre, i]);
                })
                i++;
            }
        }
        getTotalPokemon();
    }, [])


    function selectNum(e){
        setVal(e.target.value)
    }

    return (
        <>
            <h1>You Choose: {val}</h1>
            <h1>Pokemon Name : {obj.name} </h1>
            <h1>Pokemon Weight: {obj.weight} </h1>

            <select id = "selectNum" onChange = {selectNum} value = {val}>
                    { arr.map((item)=>{
                    //    console.log(item)
                       return <Options key = {item} innerhtml = {item}/>
                    })}
            </select>
        </>
    )
}

export default PokApi;