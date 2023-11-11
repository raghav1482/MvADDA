import React, { useState } from 'react';
import "./signin_up.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Signup(){
    const url = "https://movieaddabknd.onrender.com";
    const navigate = useNavigate();
    const [Inputs , setInputs] = useState({email:"" , password:""});
    const change =(e)=>{
        const {name , value} = e.target;
        setInputs({...Inputs,[name]:value});
    };

    const submit = async(e)=>{
        e.preventDefault();
        await axios.post(`${url}/api/v1/register`,Inputs).then((response)=>{
            if(response.data.message==="User already exist"){
                alert(response.data.message);
            }
            else{
                alert(response.data.message);
                setInputs({email:"" , password:""});
                navigate("/signin");
            }
        });
    }
    return(<>
    <div className="form-wrapper">
        <h2>Sign UP</h2>
        <form>
            <div className="form-control">
                <input type="email" required name ="email" placeholder="Email" value={Inputs.email} onChange={change}/>
            </div>
            <div className="form-control">
                <input type="password" required name="password" placeholder='password' value={Inputs.password} onChange={change}/>
            </div>
            <button type="submit" onClick={submit}>Register</button>
        </form>
        <p>Already registered ? <Link to="/signin">Sign in</Link></p>
    </div>

    </>);
}