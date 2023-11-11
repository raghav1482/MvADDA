import React, { useState } from 'react';
import "./signin_up.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authActions } from '../../store';
import { useDispatch } from 'react-redux';

export default function Login(){
    const url = "https://movieaddabknd.onrender.com";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Inputs , setInputs] = useState({email : "" , password:""});
    
    const change =(e)=>{
        const {name , value} = e.target;
        setInputs({...Inputs , [name] : value})
    }
    const submit =async(e)=>{
        e.preventDefault();
        await axios.post(`${url}/api/v1/login`,Inputs).then((response)=>{
            if(response.data.message === "Login Successfull"){
                alert(response.data.message);
                setInputs({email : "" , password:""});
                sessionStorage.setItem("id",response.data.id);
                dispatch(authActions.login());
                navigate("/");
            }
            else{
                alert(response.data.message);
            }
        });

    }
    return(<>
    <div className="form-wrapper">
        <h2>Login</h2>
        <form action="#">
            <div className="form-control">
                <input type="text" required name="email" value={Inputs.email}onChange={change}/>
                <label>Email</label>
            </div>
            <div className="form-control">
                <input type="password" required name="password" value={Inputs.password} onChange={change}/>
                <label>Password</label>
            </div>
            <button type="submit" onClick={submit}>Login</button>
        </form>
        <p>Not registered yet? <Link to="/signup">Sign UP</Link></p>
    </div>

    </>);
}