import React from 'react';

function Card(props){
    console.log(props);
    return(
        <div className = "card">
            <img className = "display-img" src = {props.src}/>
            <div className = "card-details">
                <span>A NETFLIX ORIGINAL SERIES</span>
                <h3>{props.title}</h3>
               <a href = {props.movielink} target = "_blank"> <button>WATCH NOW</button> </a>
            </div>
        </div>
    );
}

export default Card;