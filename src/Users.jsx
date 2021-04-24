import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';
function User(){
    let {fname, lname} = useParams();
    let location = useLocation();
    let history = useHistory();
    console.log(location);
    console.log(history);

    return(<>
            <h1>User Name : {fname} {lname} </h1>
            <p>Your Location : {location.pathname}</p>
            {location.pathname === "/user/Gurwinder/Singh"? (<button onClick = {()=> alert('nice')}>You got me</button>): null}

            {location.pathname === "/user/Gurwinder/Singh"? (<button onClick = {()=> history.goBack()}>Back</button>): null}
            
            {location.pathname === "/user/Gurwinder/Singh"? (<button onClick = {()=> history.push("/")}>Home</button>): null}

            {location.pathname !== "/user/Gurwinder/Singh"? (<button onClick = {()=> history.push("/")}>Home</button>): null}

            
        </>
    );
};

export default User;