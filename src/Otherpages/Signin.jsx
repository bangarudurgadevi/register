import axios from 'axios';
import { useEffect, useState } from 'react';
import './Signin.css'
const url="https://sheetdb.io/api/v1/psj7smrmc1z8h";
function Signin() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [data,setData] = useState([]);

    const register = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(email);
        console.log(password);
        axios.post(`${url}`, {
            data: { username: username, email: email, password: password }
        })
    }
    useEffect(()=>{
        axios.get(`${url}`)
        .then((response)=>{
           setData(response.data);
        })
        .catch((error)=>{
            alert('something went wrong',error);
        })
    },[])
    const deleteopertion=(id)=>{
        axios.delete(`${url}/id/${id}`)
        .then(()=>{
            alert('successfully delete')
        })
        .catch((error)=>{
            alert('something went wrong',error);
        })

    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card p-5" >
                            <h1 className='text-center'>signup </h1>
                            <form onSubmit={register}>
                                <input type="text" className="form-control mt-2" placeholder='username' name='username' onChange={(e) => setUsername(e.target.value)} />
                                <input type="email" className="form-control mt-2" placeholder='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" className="form-control mt-2" placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                                <button className="btn btn-primary mt-2" type='submit'>signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>username</th>
                        <th>email</th>
                        <th>password</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row,index)=>(
                       <tr key={index}> 
                        <td>{row.username}</td>
                        <td>{row.email}</td>
                        <td>{row.password}</td>
                        <td>
                            <button onClick={()=>deleteopertion(row.id)}>delete</button>
                        </td>
                    </tr>  
                    ))}
                    
                </tbody>

            </table>
        </>
    )
}
export default Signin;