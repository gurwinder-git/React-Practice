import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar(){
    return(
        <nav>
            <ul>
            <NavLink exact activeClassName = "active_class" to = "/"> <li>Home</li></NavLink>
            <NavLink exact activeClassName = "active_class" to = "/hc2"> <li>HC2</li></NavLink>
            <NavLink exact activeClassName = "active_class" to = "/user/Gurwinder/Singh"> <li>User</li></NavLink>
            <NavLink exact activeClassName = "active_class" to = "/randomimage"> <li>Search Images</li></NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;