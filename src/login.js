import React from 'react';
import loginCss from './login.css'
import Register from './register';
import App from './App';
import { register } from './serviceWorker';

function login (props){
        return(

            <div className="col-md-4  loginPage" >
                <h1> { props.data.registerStatus } </h1>
                <p className="heading">Hello there, Welcome back</p>
                <form>
                    <div className="form-group">
                        <input type="email" placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text">Don't Worry. Your confidentiality is our asset.</small>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <p className="forgotPassword">Forgot Your Password ?</p>
                    <button type="submit" className="btn btn-primary submitBtn">Sign in</button>

                    <p className="signUp" onClick={() => props.data.updateStatus(!props.data.registerStatus)} >New here ? <span style={{text_decoration:"underline"}}> Sign Up instead </span> </p>
                </form>
                <hr className="divider"></hr>
            </div>
        )};


export default login;