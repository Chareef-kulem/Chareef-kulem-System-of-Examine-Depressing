import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import firebaseConfig from "../config";
import './Login.css'

const SignUp =()=>{
    const [currentUser,setCurrentUser] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const { email,password} = e.target.elements;

        try{

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value,password.value);
            setCurrentUser(true);

        }catch(error){
            alert(error);
        }
    }

    if(currentUser){
        return <Redirect to="/"/>
    }

    return (
        <>
            <div className="container mt-5">
                <h1 >SignUp</h1>
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

export default SignUp;