import React from 'react';

function ChallengeInCompo(){
  const styleh1 = {
    color : "#5959b9",
  }
  
  let greet = "";
  let style = {};
  var time = new Date().getHours();
  // console.log(typeof(time) );
  // console.log(time);
  const div = {
    padding: '13px 25px 15px 25px',
    borderRadius: '41px',
    backgroundColor: '#86ffff',
    boxShadow: '0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%), 0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%), 0 41.8px 33.4px rgb(0 0 0 / 9%), 0 100px 80px rgb(0 0 0 / 12%)'
  } 

  if(time < 12){
    greet = "Good Morning";
    style.color = 'green';
  }
  
  else if(time >= 12 && time <= 19){
    greet = "Good Afternoon";
    style.color = 'orange';
  }
  
  else{
    greet = "Good Night";
    style.color = 'Black';
    
  }
      return(
        <>
            <div style = {div}>
              <h1 style = {styleh1}>Hello Sir, <span style = {style}>{greet}</span></h1>
            </div>
        </>
      );
};

export default ChallengeInCompo;

// 6 ChallengeInComponents