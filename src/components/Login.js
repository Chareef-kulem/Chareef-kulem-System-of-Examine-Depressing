import React,{useContext} from "react";
import { Redirect } from "react-router";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import Home from "./Home";
import './Login.css'
import { Link } from "react-router-dom";

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email,password} = e.target.elements;
        try{

            firebaseConfig.auth().signInWithEmailAndPassword(email.value,password.value);

        }catch(error){
            alert(error);
        }
    }
    
    const {currentUser} =useContext(AuthContext);
    if(currentUser){
        return <Redirect to="/"/>
    }

    return(
        <>
            <div className="container">
                <h1 >LogIn</h1>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" name="email"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" name="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <p>          
            <button type="submit" class="btn btn-primary">Submit</button>
            </p>
            </form>
            
            </div>
            
        </>
    )
}

export default LogIn;