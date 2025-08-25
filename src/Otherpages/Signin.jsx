import axios from 'axios';
import { useState } from 'react';
import './Signin.css'
import { data } from 'react-router-dom';
function Signin(){
    const[username,setUsername]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const register=(e)=>{
        e.preventDefault();
        console.log(username);
        console.log(email);
        console.log(password);
        axios.post('https://sheetdb.io/api/v1/psj7smrmc1z8h',{
            data:{username:username,email:email,password:password}
        })
    }
    return(
        <>
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card p-5" >
                  <h1 className='text-center'>signup </h1> 
                  <form onSubmit={register}>
                  <input type="text" className="form-control mt-2" placeholder='username' name='username' onChange={(e)=>setUsername(e.target.value)} />
                  <input type="email" className="form-control mt-2" placeholder='email' name='email' onChange={(e)=>setEmail(e.target.value)} />
                  <input type="password" className="form-control mt-2" placeholder='password' name='password'  onChange={(e)=>setPassword(e.target.value)}/>
                  <button className="btn btn-primary mt-2" type='submit'>signup</button>
                  </form>
                </div>
                </div>  
            </div>
        </div>
        </>
    )
}
export default Signin;