import React from 'react';
import HC1 from './HC1';
import HC2 from './HC2';
import Error from './Error';
import Navbar from './RouteNav';
import User from './Users';
import {Route, Switch} from 'react-router-dom';
import RandomImg from './RandomSearch';

function Home(){
    return(<>
            <Navbar/>
            <Switch>
                <Route exact path = "/" component = {HC1}/>
                <Route exact path = "/hc2" component = {HC2}/>
                <Route exact path = "/user/:fname/:lname" component = {User}/>
                <Route exact path = "/randomimage" component = {RandomImg}/>
                <Route component = {Error}/>
            </Switch>
        </>
    );
};

export default Home;