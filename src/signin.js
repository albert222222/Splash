import React from "react";

const SignIn = () => {
    return(
        <div className="form-body">
           <input type="text" id="username" placeholder="Name" ></input>
           <br/>
           <input type="text" id="e-mail" placeholder="Email"></input>
           <br/>
           <input type="text" id="password" placeholder="Password"></input>
           <br/>
           <button className="button">Submit</button>
        </div>
    );
}

export default SignIn;