import React, { useState } from 'react';
import "./signin_up.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Signup(){
    const url = "https://mv-adda-api.vercel.app";
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [Inputs , setInputs] = useState({email:"" , password:""});
    const change =(e)=>{
        const {name , value} = e.target;
        setInputs({...Inputs,[name]:value});
    };

    const submit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
        await axios.post(`${url}/api/v1/register`,Inputs).then((response)=>{
            if(response.data.message==="User already exist"){
                alert(response.data.message);
                setLoading(false);
            }
            else{
                alert(response.data.message);
                setInputs({email:"" , password:""});
                navigate("/signin");
                setLoading(false);
            }
        });
    }catch(e){alert("ERROR :(");setLoading(false)}
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
            <button type="submit" onClick={submit}>{loading?<div class="spinner-border mx-auto" role="status">
  <span class="sr-only">Loading...</span>
</div>:'Register'}</button>
        </form>
        <p>Already registered ? <Link to="/signin">Sign in</Link></p>
    </div>

    </>);
}