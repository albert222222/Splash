import React from "react";

const LogIn = () => {
    return(
        <div className="form-body">
           <input type="text" id="username"
            placeholder="Username or Email"></input>
           <br/>
           <input type="text" id="password" placeholder="Password"></input>
           <br/>
           <button className="button">Submit</button>
        </div>
    );
}

export default LogIn;