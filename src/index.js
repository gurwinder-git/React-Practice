import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//1

// var variale = "Gurwinder Singh";
// var d = new Date();

// ReactDOM.render(
//   <>
//   <h1>My name is {variale}</h1>
//   <p>page loaded on: <b>{d.toLocaleDateString()}</b></p>
//   <p>page loaded Time: <b>{d.toLocaleTimeString()}</b></p>
//   </>,
//   document.getElementById('root')
// );


//this will overwritte root element
// variale = 'Baljinder Singh';
// ReactDOM.render(
//   <><h1>My name is {variale}</h1>
//   <p>This is reactjs</p></>,
//   document.getElementById('root')
// );


// 2 react Attributes
// const link = "https://type-go-multiplayer.herokuapp.com/";
// ReactDOM.render(
//   <>
//   <h1 className = "head" contentEditable>Welcome to our image Library </h1>
//   <div className = "center">
//     <a href = {link} target = "_blank"><img src = "https://picsum.photos/250/300" alt = "random"/></a>
//     <img src = "https://picsum.photos/240/300" alt = "random"/>
//     <img src = "https://picsum.photos/230/300" alt = "random"/>
//   </div>
//   </>,
//   document.getElementById('root')
//   );


// 3. inline css

// const head = {
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     color: 'rgb(255 107 136)',
//     margin: '3rem'
// }

// const center = {
//   width: 'auto',
//   textAlign: 'center'
// }


// const link = "https://type-go-multiplayer.herokuapp.com/";
// ReactDOM.render(
//   <>
//   <h1 style = {head} contentEditable>Welcome to our image Library </h1>
//   <div style = {center}>
//     <a href = {link} target = "_blank"><img src = "https://picsum.photos/250/300" alt = "random"/></a>
//     <img src = "https://picsum.photos/240/300" alt = "random"/>
//     <img src = "https://picsum.photos/230/300" alt = "random"/>
//   </div>
//   </>,
//   document.getElementById('root')
// );


// 4. challenge

// const styleh1 = {
//   color : "#5959b9",
// }
// ReactDOM.render(
//   <>
//     <div className = "div">
//       <h1 style = {styleh1}>Hello Sir, <span id = "span"></span></h1>
//     </div>
//   </>
//   ,document.getElementById('root')
// );

// var time = new Date().getHours();
// console.log(typeof(time) );
// console.log(time);

// if(time < 12){
//   let span = document.getElementById('span');
//   span.innerText = "Good Morning";
//   span.style.color = 'green';
// }

// else if(time >= 12 && time <= 19){
//   let span = document.getElementById('span');
//   span.innerText = "Good Afternoon";
//   span.style.color = 'orange';
// }

// else{
//   let span = document.getElementById('span');
//   span.innerText = "Good Night";
//   span.style.color = 'Black';
// }


//5 Components in react
// import Navbar from './Navbar';
// ReactDOM.render(<Navbar/>,document.getElementById('root'));

//6 challenge 4 with components
// import ChallengeInCompo from './ChallengeInCompo';
// ReactDOM.render( <ChallengeInCompo/>,document.getElementById('root'));

//7 challenge calculator with component
// import {add, sub, mul, div} from './Calc';
// let a = 10, b= 3;
// ReactDOM.render(
// <>
//     <ul>
//         <li>Sum of two numbers is: {add(a, b)}</li>
//         <li>Subtraction of two no. is : {sub(a, b)} </li>
//         <li>Multiplication of two no. is: {mul(a,b)}</li>
//         <li>Division of two no. is: {div(a, b)}</li>
//     </ul>
// </>,document.getElementById('root'))


// 8 props in react
// import Card from './CardCompo'
// ReactDOM.render(
//     <>
//     <h1>TOP 5 NETFLIX SERIES IN 2020</h1>
//     <div className = "cards">
//         <Card 
//         src = "https://i.pinimg.com/736x/93/56/d8/9356d82490277928bc929a4f2c9a245e.jpg" 
//         title = "DARK" 
//         movielink = "https://www.netflix.com/in/title/80100172"/>

//         <Card 
//         src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gEDFbms6bFS4129XKQwsEK78WkyPswvRdA&usqp=CAU" 
//         title = "Extracurricular" 
//         movielink = "https://www.netflix.com/in/title/80990668"/>

//         <Card 
//         src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEppUAGwl4NN9CsL4wn_O6zLfa8QzeK4-bQ&usqp=CAU" 
//         title = "Stranger Things" 
//         movielink = "https://www.netflix.com/in/title/80057281"/>
//     </div>
//     </>,
//     document.getElementById('root')
// );


// 9 hook useState in react
// import {StateHook} from './HookCompo'
// ReactDOM.render(
// <>
//     <StateHook></StateHook>
// </>,
// document.getElementById('root')
// );


//10 hook useState Challenge
// import {GetTime} from './HookChallenge'
// ReactDOM.render(
// <>
//     <GetTime/>
// </>,
// document.getElementById('root')
// );


//11 Digital practical
// import {DigitalClock} from './DigitalClock';

// ReactDOM.render(
//     <>
//         <DigitalClock/>
//     </>,
//     document.getElementById('root')
// )


// 12 Events in React
// import BtnEvent from "./Events";

// ReactDOM.render(<BtnEvent/>,document.getElementById('root'));


// 13 React forms
// import {Form} from './FormCompo'

// ReactDOM.render(<><Form/></>,document.getElementById('root'))


// 14 Handling Complex Multiple Input Form States in React
// import {HandleComplexForm} from './ComplexForm'

// ReactDOM.render(<><HandleComplexForm/></>,document.getElementById('root'));


// 15 Handling Complex Multiple Input Form with two lines
// import {UseStateEasy} from './UseStateEasy'

// ReactDOM.render(<UseStateEasy/>,document.getElementById('root'));


//16 ToDo list
// import ToDoUI from './ToDoList'

// ReactDOM.render(<ToDoUI/>,document.getElementById('root'));


//17 npm count down
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'

// ReactDOM.render(<CountdownCircleTimer
//     isPlaying
//     duration={10}
//     colors={[
//       ['#004777', 0.33],
//       ['#F7B801', 0.33],
//       ['#A30000', 0.33],
//     ]}
//   >
//     {({ remainingTime }) => remainingTime}
//   </CountdownCircleTimer>,document.getElementById('root'));


// 18 Changing the Title value of Website on Button Click
// import {Changetitle} from './Changetitle';
// ReactDOM.render(<Changetitle/>,document.getElementById('root'));

// //19 pokemon api
// import PokApi from './PokemonApi';
// ReactDOM.render(<PokApi/>,document.getElementById('root'));



// 20 React DOM Router
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(<><BrowserRouter>
                    <Home/> 
                </BrowserRouter></>,document.getElementById('root'))