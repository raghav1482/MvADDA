import React, { useState } from 'react';
import "./signin_up.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authActions } from '../../store';
import { useDispatch } from 'react-redux';

export default function Login(){
    const [loading, setLoading] = useState(false);
    const url = "https://mv-adda-api.vercel.app";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Inputs , setInputs] = useState({email : "" , password:""});
    
    const change =(e)=>{
        const {name , value} = e.target;
        setInputs({...Inputs , [name] : value})
    }
    const submit =async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
        await axios.post(`${url}/api/v1/login`,Inputs).then((response)=>{
            setLoading(false);
            if(response.data.message === "Login Successful"){
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
    }catch(e){alert("ERROR :(");setLoading(false)}

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
            <button type="submit" onClick={submit}>{loading?<div class="spinner-border mx-auto" role="status">
  <span class="sr-only">Loading...</span>
</div>:'Login'}</button>
        </form>
        <p>Not registered yet? <Link to="/signup">Sign UP</Link></p>
    </div>

    </>);
}